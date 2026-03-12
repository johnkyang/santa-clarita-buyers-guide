'use client'

import { useState, useEffect } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AlertCircle, Calculator, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import {
  calculateMaxPurchasePrice,
  formatCurrency,
  formatPercentage,
  type CalculatorInputs,
  type CalculationResult,
} from '@/lib/buyingPowerCalculations'

// ── Credit score tiers ─────────────────────────────────────
const SCORE_TIERS = [
  { grade: 'D',  label: 'Poor',      range: '<580',    score: 560, rateDelta: '+1.75%' },
  { grade: 'C',  label: 'Fair',      range: '580–619', score: 600, rateDelta: '+1.25%' },
  { grade: 'B',  label: 'Good',      range: '620–659', score: 640, rateDelta: '+0.75%' },
  { grade: 'A',  label: 'Great',     range: '660–719', score: 680, rateDelta: '+0.25%' },
  { grade: 'A+', label: 'Excellent', range: '720+',    score: 740, rateDelta: 'Base'   },
] as const

// ── Gauge zone colours ─────────────────────────────────────
const ZONES = [
  { color: '#2ecc71', label: 'Comfortable' },
  { color: '#c9a227', label: 'Moderate'    },
  { color: '#e67e22', label: 'Stretching'  },
  { color: '#e74c3c', label: 'Aggressive'  },
]

// Half-circle arc geometry (viewBox 0 0 200 100, centre=100,100, radius=80)
function polarToXY(angleDeg: number, r = 80) {
  const a = (angleDeg * Math.PI) / 180
  return { x: 100 + r * Math.cos(a), y: 100 - r * Math.sin(a) }
}

function arcPath(startDeg: number, endDeg: number, r = 80) {
  const s = polarToXY(startDeg, r)
  const e = polarToXY(endDeg, r)
  const large = Math.abs(startDeg - endDeg) > 180 ? 1 : 0
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`
}

// Zone arc paths: 180°=left (safe) → 0°=right (aggressive), going through top
const ZONE_ARCS = [
  arcPath(180, 135), // safe (green)
  arcPath(135, 90),  // moderate (gold)
  arcPath(90, 45),   // stretching (orange)
  arcPath(45, 0),    // aggressive (red)
]

// ── Animated number counter ────────────────────────────────
function AnimatedNumber({ value, prefix = '' }: { value: number; prefix?: string }) {
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 80, damping: 20 })
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString()}`)
  useEffect(() => { mv.set(value) }, [mv, value])
  return <motion.span>{display}</motion.span>
}

// ── DTI Affordability Gauge ────────────────────────────────
function DTIGauge({ dtiRatio }: { dtiRatio: number }) {
  // Map DTI 0→0.50 to gauge angle: -90° (left) to +90° (right)
  // Needle drawn pointing UP (100,30), rotated from that base
  const targetRotate = -90 + Math.min(180, Math.max(0, (dtiRatio / 0.50) * 180))

  const mv = useMotionValue(-90)
  const spring = useSpring(mv, { stiffness: 60, damping: 15 })

  useEffect(() => { mv.set(targetRotate) }, [mv, targetRotate])

  let zoneColor = ZONES[0].color
  let zoneLabel = ZONES[0].label
  if (dtiRatio > 0.43)      { zoneColor = ZONES[3].color; zoneLabel = ZONES[3].label }
  else if (dtiRatio > 0.36) { zoneColor = ZONES[2].color; zoneLabel = ZONES[2].label }
  else if (dtiRatio > 0.28) { zoneColor = ZONES[1].color; zoneLabel = ZONES[1].label }

  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/35">Affordability Zone</span>
        <span className="font-display text-base font-medium" style={{ color: zoneColor }}>{zoneLabel}</span>
      </div>

      <div style={{ position: 'relative', width: '100%', aspectRatio: '2 / 1', maxHeight: 120 }}>
        <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible" aria-hidden="true">
          {/* Background track */}
          <path d={arcPath(180, 0)} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={10} strokeLinecap="butt" />
          {/* Zone arcs */}
          {ZONE_ARCS.map((d, i) => (
            <path key={i} d={d} fill="none" stroke={ZONES[i].color} strokeWidth={10} strokeLinecap="butt" opacity={0.85} />
          ))}
          {/* Needle — drawn pointing up from centre, rotated by spring value */}
          <motion.g style={{ rotateZ: spring, transformOrigin: '100px 100px' }}>
            <line x1={100} y1={100} x2={100} y2={30} stroke="white" strokeWidth={2} strokeLinecap="round" />
            <circle cx={100} cy={100} r={3.5} fill="white" />
          </motion.g>
          {/* Centre cap */}
          <circle cx={100} cy={100} r={6} fill="#0c1a32" stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
        </svg>
      </div>

      <div className="flex justify-between mt-1">
        {ZONES.map((z) => (
          <span key={z.label} className="text-[8px] tracking-[0.1em] uppercase opacity-55" style={{ color: z.color }}>
            {z.label}
          </span>
        ))}
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════════
export function BuyingPowerCalculator() {
  const [incomeType, setIncomeType] = useState<'monthly' | 'annual'>('monthly')
  const [incomeInput, setIncomeInput] = useState<string>('')
  const [creditScore, setCreditScore] = useState<number>(740)
  const [downPaymentPercent, setDownPaymentPercent] = useState<string>('5')
  const [interestRate, setInterestRate] = useState<string>('6.5')
  const [monthlyDebts, setMonthlyDebts] = useState<string>('0')
  const [hoaMonthly, setHoaMonthly] = useState<string>('0')
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  const getGrossMonthlyIncome = (): number => {
    const income = parseFloat(incomeInput) || 0
    return incomeType === 'annual' ? income / 12 : income
  }

  const handleCalculate = () => {
    const inputs: CalculatorInputs = {
      grossMonthlyIncome: getGrossMonthlyIncome(),
      creditScore,
      downPaymentPercent: parseFloat(downPaymentPercent) || 5,
      interestRate: parseFloat(interestRate) || 6.5,
      monthlyDebts: parseFloat(monthlyDebts) || 0,
      hoaMonthly: parseFloat(hoaMonthly) || 0,
    }
    const calculationResult = calculateMaxPurchasePrice(inputs)
    setResult(calculationResult)
    setShowResults(true)
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleReset = () => {
    setShowResults(false)
    setResult(null)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      {!showResults ? (
        // ── INPUT FORM ──────────────────────────────────────────
        <Card className="border-2 border-gray-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-navy-700 to-navy-800 text-white">
            <div className="flex items-center gap-3">
              <Calculator className="h-8 w-8" />
              <div>
                <CardTitle className="text-2xl">Santa Clarita Buying Power Calculator</CardTitle>
                <CardDescription className="text-blue-100 mt-1">
                  Discover how much home you can afford in Santa Clarita
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-6">

            {/* Income */}
            <div className="space-y-3">
              <Label htmlFor="income" className="text-base font-semibold text-gray-900">
                Your Gross Income <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Select value={incomeType} onValueChange={(v) => setIncomeType(v as 'monthly' | 'annual')}>
                  <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="income"
                  type="number"
                  placeholder={incomeType === 'monthly' ? '8,000' : '96,000'}
                  value={incomeInput}
                  onChange={(e) => setIncomeInput(e.target.value)}
                  className="text-lg"
                />
              </div>
              <p className="text-sm text-gray-600">Before taxes (gross income)</p>
            </div>

            {/* Credit Score — 5-button grid */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-gray-900">
                Credit Score <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-5 gap-1.5" role="group" aria-label="Credit score tier">
                {SCORE_TIERS.map((tier) => {
                  const active = creditScore === tier.score
                  return (
                    <button
                      key={tier.grade}
                      type="button"
                      onClick={() => setCreditScore(tier.score)}
                      className={`flex flex-col items-center py-2.5 px-1 rounded border text-center transition-all duration-150 ${
                        active
                          ? 'border-gold-700 bg-navy-900 ring-2 ring-gold-700'
                          : 'border-warm-300 text-warm-600 hover:border-gold-700/50 hover:bg-gold-700/5'
                      }`}
                      aria-pressed={active}
                    >
                      <span className={`font-display font-medium text-xl leading-none mb-0.5 ${active ? 'text-gold-700' : 'text-gray-500'}`}>
                        {tier.grade}
                      </span>
                      <span className={`text-[9px] uppercase tracking-wider leading-tight ${active ? 'text-white/60' : 'text-gray-400'}`}>
                        {tier.range}
                      </span>
                      <span className={`text-[9px] mt-0.5 ${active ? 'text-gold-700' : 'text-gray-400'}`}>
                        {tier.rateDelta}
                      </span>
                    </button>
                  )
                })}
              </div>
              <p className="text-sm text-gray-600">Tier sets rate estimate; actual rate determined at approval</p>
            </div>

            {/* Down Payment */}
            <div className="space-y-3">
              <Label htmlFor="downpayment" className="text-base font-semibold text-gray-900">
                Down Payment <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center gap-3">
                <Input id="downpayment" type="number" min="3" max="50" step="0.5"
                  value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(e.target.value)} className="text-lg" />
                <span className="text-xl font-semibold text-gray-700">%</span>
              </div>
              <p className="text-sm text-gray-600">Minimum 3% (Conventional) or 3.5% (FHA)</p>
            </div>

            {/* Interest Rate */}
            <div className="space-y-3">
              <Label htmlFor="rate" className="text-base font-semibold text-gray-900">
                Interest Rate <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center gap-3">
                <Input id="rate" type="number" min="3" max="12" step="0.125"
                  value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="text-lg" />
                <span className="text-xl font-semibold text-gray-700">%</span>
              </div>
              <p className="text-sm text-gray-600">Current estimate — actual rate determined at approval</p>
            </div>

            {/* Monthly Debts */}
            <div className="space-y-3">
              <Label htmlFor="debts" className="text-base font-semibold text-gray-900">Monthly Debt Payments</Label>
              <Input id="debts" type="number" min="0" placeholder="0"
                value={monthlyDebts} onChange={(e) => setMonthlyDebts(e.target.value)} className="text-lg" />
              <p className="text-sm text-gray-600">Car payments, student loans, credit cards (monthly minimums)</p>
            </div>

            {/* HOA */}
            <div className="space-y-3">
              <Label htmlFor="hoa" className="text-base font-semibold text-gray-900">HOA Fees (Monthly)</Label>
              <Input id="hoa" type="number" min="0" placeholder="0"
                value={hoaMonthly} onChange={(e) => setHoaMonthly(e.target.value)} className="text-lg" />
              <p className="text-sm text-gray-600">Estimated HOA dues (if applicable)</p>
            </div>

            {/* Calculate */}
            <Button onClick={handleCalculate} size="lg"
              className="w-full bg-gradient-to-r from-navy-700 to-navy-800 hover:opacity-90 text-lg py-6"
              disabled={!incomeInput || parseFloat(incomeInput) <= 0}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calculate My Buying Power
            </Button>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <strong>Estimate Only:</strong> This calculator provides conservative estimates based on
                  typical underwriting guidelines. Actual loan approval, rates, and terms are subject to full
                  underwriting review. Property taxes exclude Mello-Roos. AI calculation errors are possible.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        // ── RESULTS DISPLAY ─────────────────────────────────────
        <div id="results" className="space-y-6">

          {/* Dark navy results card with gauge */}
          <div className="rounded-2xl overflow-hidden"
            style={{ background: '#0f1f3d', boxShadow: '0 2px 4px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.28)' }}>
            <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--color-gold-700), transparent)', opacity: 0.6 }} />
            <div className="grid lg:grid-cols-[1fr_1px_1fr]">

              {/* Left: price output */}
              <div className="p-8 flex flex-col justify-center">
                <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/35 mb-3 flex items-center gap-2">
                  <span className="block w-5 h-px bg-gold-700 shrink-0" aria-hidden="true" />
                  Buying Power Calculator
                </p>
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/35 mb-1">Estimated Purchase Price</p>
                <div className="font-display text-white font-normal leading-none tracking-tight mb-1"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
                  <AnimatedNumber value={result!.maxPurchasePrice} prefix="$" />
                </div>
                <p className="text-[10px] text-white/35 tracking-[0.04em] mb-6">
                  Based on {result!.recommendedProgram.toUpperCase()} loan — conservative estimate
                </p>

                {/* Monthly payment row */}
                <div className="flex items-center justify-between py-4 border-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <span className="text-[11px] text-white/60 tracking-[0.06em]">Est. Monthly Payment</span>
                  <div className="text-right">
                    <span className="font-display text-gold-700 font-normal" style={{ fontSize: '1.625rem', letterSpacing: '-0.01em' }}>
                      <AnimatedNumber value={result!.estimatedPayment.totalMonthly} prefix="$" />
                    </span>
                    <span className="text-[9px] text-white/35 block text-right">/month</span>
                  </div>
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-5">
                  {[
                    { label: `Down Payment (${downPaymentPercent}%)`, value: result!.downPayment },
                    { label: 'Loan Amount', value: result!.loanAmount },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[9px] uppercase tracking-[0.12em] text-white/35 mb-0.5">{label}</p>
                      <p className="font-display text-xl font-normal text-white/90" style={{ letterSpacing: '-0.01em' }}>
                        <AnimatedNumber value={value} prefix="$" />
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 15%, rgba(255,255,255,0.15) 85%, transparent 100%)' }} />

              {/* Right: gauge + stats */}
              <div className="p-8" style={{ background: '#0c1a32' }}>
                <DTIGauge dtiRatio={result!.dtiRatio} />

                <div className="grid grid-cols-2 gap-3 mt-5">
                  {[
                    { label: 'DTI Ratio', value: formatPercentage(result!.dtiRatio) },
                    { label: 'Loan-to-Value', value: formatPercentage(result!.ltv / 100) },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded p-3"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <p className="text-[9px] uppercase tracking-[0.14em] text-white/35 mb-0.5">{label}</p>
                      <p className="font-display text-white/90 font-normal text-xl" style={{ letterSpacing: '-0.01em' }}>{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 rounded flex items-center gap-2"
                  style={{ background: 'rgba(201,162,39,0.07)', border: '1px solid rgba(201,162,39,0.18)' }}>
                  <span className="material-symbols-outlined text-gold-700" style={{ fontSize: 16 }}>percent</span>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.12em] text-white/35">Interest Rate Used</p>
                    <p className="text-sm font-semibold text-gold-700">{interestRate}% — {result!.recommendedProgram.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Payment Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-6 pt-6 pb-4">
              <p className="text-sm font-medium text-gray-500 tracking-wide">Estimated Monthly Payment</p>
              <div className="mt-1">
                <span className="text-4xl sm:text-[42px] font-bold text-gray-900 tracking-tight">
                  {formatCurrency(result!.estimatedPayment.totalMonthly)}
                </span>
                <span className="text-base text-gray-500 font-normal ml-1">/month</span>
              </div>
            </div>
            <div className="h-px bg-gray-100 mx-6" />
            <div className="px-6 py-2">
              {[
                { label: 'Principal & Interest', value: result!.estimatedPayment.principalAndInterest },
                { label: 'Property Tax (est.)', value: result!.estimatedPayment.propertyTax },
                { label: 'Home Insurance (est.)', value: result!.estimatedPayment.homeInsurance },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="flex justify-between items-center py-4 hover:bg-gray-50/50 -mx-6 px-6 transition-colors">
                    <span className="text-[15px] text-gray-600">{label}</span>
                    <span className="text-base font-semibold text-gray-800">{formatCurrency(value)}</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                </div>
              ))}
              {result!.estimatedPayment.pmi > 0 && (
                <>
                  <div className="flex justify-between items-center py-4 hover:bg-gray-50/50 -mx-6 px-6 transition-colors">
                    <span className="text-[15px] text-gray-600">
                      {result!.recommendedProgram === 'fha' ? 'FHA Mortgage Insurance' : 'PMI'}
                    </span>
                    <span className="text-base font-semibold text-gray-800">{formatCurrency(result!.estimatedPayment.pmi)}</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                </>
              )}
              {result!.estimatedPayment.hoa > 0 && (
                <>
                  <div className="flex justify-between items-center py-4 hover:bg-gray-50/50 -mx-6 px-6 transition-colors">
                    <span className="text-[15px] text-gray-600">HOA Fees</span>
                    <span className="text-base font-semibold text-gray-800">{formatCurrency(result!.estimatedPayment.hoa)}</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                </>
              )}
              <div className="h-px bg-gray-200 mt-2" />
              <div className="flex justify-between items-center py-5 -mx-6 px-6">
                <span className="text-[15px] font-semibold text-gray-900">Total Monthly Payment</span>
                <span className="text-lg font-bold text-blue-600">{formatCurrency(result!.estimatedPayment.totalMonthly)}</span>
              </div>
            </div>
            <div className="bg-gray-50/70 px-6 py-4">
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Property tax estimate is 1.25% annually and excludes Mello-Roos. Insurance is estimated. Actual payment determined at loan approval.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Card className="border-2 border-gold-600 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gold-600 to-gold-800 text-white p-8 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Ready to Get Pre-Approved?</h3>
              <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
                This is a conservative estimate — many buyers qualify for more. Get a full pre-approval to know exactly how much you can borrow and lock in your rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-pre-approved">
                  <Button size="lg" className="bg-white text-gold-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6">
                    Get Pre-Approved Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={handleReset}
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                  Calculate Again
                </Button>
              </div>
            </div>
          </Card>

          {/* Disclaimers */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5 text-gray-600" />
                Important Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Estimates Only:</strong> This calculator provides estimates based on conservative underwriting guidelines. Results are not a loan approval or commitment.</li>
                <li><strong>Subject to Underwriting:</strong> Actual loan approval, rates, terms, and maximum purchase price are subject to full underwriting review and property appraisal.</li>
                <li><strong>Rate Assumptions:</strong> Interest rates are estimates and change daily based on market conditions and your credit profile.</li>
                <li><strong>Tax & Insurance:</strong> Property tax estimate is 1.25% annually for Santa Clarita and excludes Mello-Roos special assessments.</li>
                <li><strong>Mortgage Insurance:</strong> PMI/MIP calculations use standard rate tables and may vary by lender and specific loan characteristics.</li>
                <li><strong>AI Calculations:</strong> This calculator uses automated calculations. Errors are possible. Always verify with a licensed mortgage professional.</li>
                <li><strong>VA Loans:</strong> This calculator does not support VA loan calculations. Contact us for specialized VA loan analysis.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
