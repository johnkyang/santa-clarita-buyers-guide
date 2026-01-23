'use client'

import { useState } from 'react'
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
import { AlertCircle, Calculator, Home, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import {
  calculateMaxPurchasePrice,
  formatCurrency,
  formatPercentage,
  type CalculatorInputs,
  type CalculationResult,
} from '@/lib/buyingPowerCalculations'

export function BuyingPowerCalculator() {
  // Income input state
  const [incomeType, setIncomeType] = useState<'monthly' | 'annual'>('monthly')
  const [incomeInput, setIncomeInput] = useState<string>('')

  // Other inputs
  const [creditScore, setCreditScore] = useState<number>(720)
  const [downPaymentPercent, setDownPaymentPercent] = useState<string>('5')
  const [interestRate, setInterestRate] = useState<string>('6.5')
  const [monthlyDebts, setMonthlyDebts] = useState<string>('0')
  const [hoaMonthly, setHoaMonthly] = useState<string>('0')

  // Calculation result
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Handle income input conversion
  const getGrossMonthlyIncome = (): number => {
    const income = parseFloat(incomeInput) || 0
    return incomeType === 'annual' ? income / 12 : income
  }

  // Calculate buying power
  const handleCalculate = () => {
    const inputs: CalculatorInputs = {
      grossMonthlyIncome: getGrossMonthlyIncome(),
      creditScore: creditScore,
      downPaymentPercent: parseFloat(downPaymentPercent) || 5,
      interestRate: parseFloat(interestRate) || 6.5,
      monthlyDebts: parseFloat(monthlyDebts) || 0,
      hoaMonthly: parseFloat(hoaMonthly) || 0,
    }

    const calculationResult = calculateMaxPurchasePrice(inputs)
    setResult(calculationResult)
    setShowResults(true)

    // Scroll to results on mobile
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  // Reset calculator
  const handleReset = () => {
    setShowResults(false)
    setResult(null)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      {!showResults ? (
        // INPUT FORM
        <Card className="border-2 border-gray-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-premium-blue to-premium-blue-dark text-white">
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
            {/* Income Input */}
            <div className="space-y-3">
              <Label htmlFor="income" className="text-base font-semibold text-gray-900">
                Your Gross Income <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Select value={incomeType} onValueChange={(v) => setIncomeType(v as 'monthly' | 'annual')}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
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

            {/* Credit Score */}
            <div className="space-y-3">
              <Label htmlFor="credit" className="text-base font-semibold text-gray-900">
                Estimated Credit Score <span className="text-red-500">*</span>
              </Label>
              <Select value={creditScore.toString()} onValueChange={(v) => setCreditScore(parseInt(v))}>
                <SelectTrigger id="credit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="780">Excellent (780+)</SelectItem>
                  <SelectItem value="740">Very Good (740-779)</SelectItem>
                  <SelectItem value="720">Good (720-739)</SelectItem>
                  <SelectItem value="700">Fair (700-719)</SelectItem>
                  <SelectItem value="680">Fair (680-699)</SelectItem>
                  <SelectItem value="660">Fair (660-679)</SelectItem>
                  <SelectItem value="640">Poor (640-659)</SelectItem>
                  <SelectItem value="620">Poor (620-639)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-600">Used to estimate mortgage insurance rates</p>
            </div>

            {/* Down Payment */}
            <div className="space-y-3">
              <Label htmlFor="downpayment" className="text-base font-semibold text-gray-900">
                Down Payment <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center gap-3">
                <Input
                  id="downpayment"
                  type="number"
                  min="3"
                  max="50"
                  step="0.5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(e.target.value)}
                  className="text-lg"
                />
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
                <Input
                  id="rate"
                  type="number"
                  min="3"
                  max="12"
                  step="0.125"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="text-lg"
                />
                <span className="text-xl font-semibold text-gray-700">%</span>
              </div>
              <p className="text-sm text-gray-600">Current estimate - actual rate determined at approval</p>
            </div>

            {/* Monthly Debts */}
            <div className="space-y-3">
              <Label htmlFor="debts" className="text-base font-semibold text-gray-900">
                Monthly Debt Payments
              </Label>
              <Input
                id="debts"
                type="number"
                min="0"
                placeholder="0"
                value={monthlyDebts}
                onChange={(e) => setMonthlyDebts(e.target.value)}
                className="text-lg"
              />
              <p className="text-sm text-gray-600">
                Car payments, student loans, credit cards, etc. (monthly minimums)
              </p>
            </div>

            {/* HOA */}
            <div className="space-y-3">
              <Label htmlFor="hoa" className="text-base font-semibold text-gray-900">
                HOA Fees (Monthly)
              </Label>
              <Input
                id="hoa"
                type="number"
                min="0"
                placeholder="0"
                value={hoaMonthly}
                onChange={(e) => setHoaMonthly(e.target.value)}
                className="text-lg"
              />
              <p className="text-sm text-gray-600">Estimated HOA dues (if applicable)</p>
            </div>

            {/* Calculate Button */}
            <Button
              onClick={handleCalculate}
              size="lg"
              className="w-full bg-gradient-to-r from-premium-blue to-premium-blue-dark hover:opacity-90 text-lg py-6"
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
        // RESULTS DISPLAY
        <div id="results" className="space-y-6">
          {/* Max Purchase Price Card */}
          <Card className="border-2 border-premium-blue shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-premium-blue to-premium-blue-dark text-white p-6 sm:p-8">
              <div className="max-w-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-bold">Your Estimated Buying Power</h2>
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{formatCurrency(result!.maxPurchasePrice)}</div>
                <p className="text-blue-100 text-base sm:text-lg">
                  Maximum home price based on {result!.recommendedProgram.toUpperCase()} loan
                </p>
              </div>
            </div>

            <CardContent className="p-5 sm:p-6">
              <div className="max-w-xl">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-0.5">Down Payment ({downPaymentPercent}%)</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">{formatCurrency(result!.downPayment)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-0.5">Loan Amount</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">{formatCurrency(result!.loanAmount)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-0.5">DTI Ratio</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">{formatPercentage(result!.dtiRatio)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-0.5">Loan-to-Value (LTV)</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">{formatPercentage(result!.ltv / 100)}</p>
                  </div>
                </div>

                {result!.recommendedProgram === 'fha' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-900">
                      <strong>FHA Loan Recommended:</strong> Based on your down payment and credit profile, an
                      FHA loan is recommended. This program offers competitive rates and lower down payment
                      requirements.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Payment Breakdown - Apple Style */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-6 pb-4">
              <p className="text-sm font-medium text-gray-500 tracking-wide">Estimated Monthly Payment</p>
              <div className="mt-1">
                <span className="text-4xl sm:text-[42px] font-bold text-gray-900 tracking-tight">
                  {formatCurrency(result!.estimatedPayment.totalMonthly)}
                </span>
                <span className="text-base text-gray-500 font-normal ml-1">/month</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 mx-6" />

            {/* Payment Breakdown Items */}
            <div className="px-6 py-2">
              {/* Principal & Interest */}
              <div className="flex justify-between items-center py-4 hover:bg-gray-50/50 -mx-6 px-6 transition-colors">
                <span className="text-[15px] text-gray-600">Principal & Interest</span>
                <span className="text-base font-semibold text-gray-800">
                  {formatCurrency(result!.estimatedPayment.principalAndInterest)}
                </span>
              </div>
              <div className="h-px bg-gray-100" />

              {/* Property Tax */}
              <div className="flex justify-between items-center py-4 hover:bg-gray-50/50 -mx-6 px-6 transition-colors">
                <span className="text-[15px] text-gray-600">Property Tax (est.)</span>
                <span className="text-base font-semibold text-gray-800">
                  {formatCurrency(result!.estimatedPayment.propertyTax)}
                </span>
              </div>
              <div className="h-px bg-gray-100" />

              {/* Home Insurance */}
              <div className="flex justify-between items-center py-4 hover:bg-gray-50/50 -mx-6 px-6 transition-colors">
                <span className="text-[15px] text-gray-600">Home Insurance (est.)</span>
                <span className="text-base font-semibold text-gray-800">
                  {formatCurrency(result!.estimatedPayment.homeInsurance)}
                </span>
              </div>

              {/* PMI - Conditional */}
              {result!.estimatedPayment.pmi > 0 && (
                <>
                  <div className="h-px bg-gray-100" />
                  <div className="flex justify-between items-center py-4 hover:bg-gray-50/50 -mx-6 px-6 transition-colors">
                    <span className="text-[15px] text-gray-600">
                      {result!.recommendedProgram === 'fha' ? 'FHA Mortgage Insurance' : 'PMI'}
                    </span>
                    <span className="text-base font-semibold text-gray-800">
                      {formatCurrency(result!.estimatedPayment.pmi)}
                    </span>
                  </div>
                </>
              )}

              {/* HOA - Conditional */}
              {result!.estimatedPayment.hoa > 0 && (
                <>
                  <div className="h-px bg-gray-100" />
                  <div className="flex justify-between items-center py-4 hover:bg-gray-50/50 -mx-6 px-6 transition-colors">
                    <span className="text-[15px] text-gray-600">HOA Fees</span>
                    <span className="text-base font-semibold text-gray-800">
                      {formatCurrency(result!.estimatedPayment.hoa)}
                    </span>
                  </div>
                </>
              )}

              {/* Divider before total */}
              <div className="h-px bg-gray-200 mt-2" />

              {/* Total */}
              <div className="flex justify-between items-center py-5 -mx-6 px-6">
                <span className="text-[15px] font-semibold text-gray-900">Total Monthly Payment</span>
                <span className="text-lg font-bold text-blue-600">
                  {formatCurrency(result!.estimatedPayment.totalMonthly)}
                </span>
              </div>
            </div>

            {/* Note Footer */}
            <div className="bg-gray-50/70 px-6 py-4">
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Property tax estimate is 1.25% annually and excludes Mello-Roos. Insurance is estimated.
                Actual payment determined at loan approval.
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="border-2 border-premium-orange shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-premium-orange to-premium-rust text-white p-8 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Ready to Get Pre-Approved?</h3>
              <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
                This is a conservative estimate — many buyers qualify for more. Get a full pre-approval to
                know exactly how much you can borrow and lock in your rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-pre-approved">
                  <Button
                    size="lg"
                    className="bg-white text-premium-orange hover:bg-gray-100 font-semibold text-lg px-8 py-6"
                  >
                    Get Pre-Approved Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleReset}
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
                >
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
                <li>
                  <strong>Estimates Only:</strong> This calculator provides estimates based on conservative
                  underwriting guidelines. Results are not a loan approval or commitment.
                </li>
                <li>
                  <strong>Subject to Underwriting:</strong> Actual loan approval, rates, terms, and maximum
                  purchase price are subject to full underwriting review and property appraisal.
                </li>
                <li>
                  <strong>Rate Assumptions:</strong> Interest rates are estimates and change daily based on
                  market conditions and your credit profile.
                </li>
                <li>
                  <strong>Tax & Insurance:</strong> Property tax estimate is 1.25% annually for Santa Clarita
                  and excludes Mello-Roos special assessments. Insurance estimates may vary based on property
                  characteristics.
                </li>
                <li>
                  <strong>Mortgage Insurance:</strong> PMI/MIP calculations use standard rate tables and may
                  vary by lender and specific loan characteristics.
                </li>
                <li>
                  <strong>AI Calculations:</strong> This calculator uses automated calculations. Errors are
                  possible. Always verify with a licensed mortgage professional.
                </li>
                <li>
                  <strong>VA Loans:</strong> This calculator does not support VA loan calculations. If you are
                  a veteran or active military, contact us for specialized VA loan analysis.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
