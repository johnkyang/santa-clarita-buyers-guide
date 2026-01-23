'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Constants
const PROPERTY_TAX_RATE = 0.0125 // 1.25% annually
const PMI_RATE = 0.005 // 0.5% annually
const HOME_INSURANCE_RATE = 0.0035 // 0.35% annually
const HOA_FEES = 400 // $400/month estimate
const LOAN_TERM_MONTHS = 360 // 30 years

// Format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

// Calculate monthly principal and interest payment
function calculatePrincipalInterest(loanAmount: number, annualRate: number): number {
  const monthlyRate = annualRate / 100 / 12
  if (monthlyRate === 0) return loanAmount / LOAN_TERM_MONTHS
  return loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, LOAN_TERM_MONTHS)) /
         (Math.pow(1 + monthlyRate, LOAN_TERM_MONTHS) - 1)
}

// Calculate max home price based on income and debts
function calculateMaxHomePrice(
  annualIncome: number,
  monthlyDebts: number,
  downPaymentPercent: number,
  interestRate: number
): number {
  const monthlyIncome = annualIncome / 12
  const maxDTI = 0.43
  const maxTotalPayment = (monthlyIncome * maxDTI) - monthlyDebts

  let homePrice = 100000
  let step = 50000
  let iterations = 0

  while (step > 100 && iterations < 100) {
    const downPayment = homePrice * (downPaymentPercent / 100)
    const loanAmount = homePrice - downPayment
    const pi = calculatePrincipalInterest(loanAmount, interestRate)
    const tax = (homePrice * PROPERTY_TAX_RATE) / 12
    const insurance = (homePrice * HOME_INSURANCE_RATE) / 12
    const pmi = downPaymentPercent < 20 ? (loanAmount * PMI_RATE) / 12 : 0
    const total = pi + tax + insurance + HOA_FEES + pmi

    if (total < maxTotalPayment) {
      homePrice += step
    } else {
      homePrice -= step
      step /= 2
    }
    iterations++
  }

  return Math.min(Math.max(homePrice, 100000), 2000000)
}

export function MortgageQualifier() {
  // Slider values
  const [annualIncome, setAnnualIncome] = useState(120000)
  const [monthlyDebts, setMonthlyDebts] = useState(500)
  const [homePrice, setHomePrice] = useState(485000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(10)
  const [interestRate, setInterestRate] = useState(6.5)

  // Calculated values
  const [calculations, setCalculations] = useState({
    maxPrice: 0,
    totalPayment: 0,
    dti: 0,
    principalInterest: 0,
    propertyTax: 0,
    pmi: 0,
    homeInsurance: 0
  })

  // UI state
  const [breakdownExpanded, setBreakdownExpanded] = useState(true)

  // Calculate all values
  const calculate = useCallback(() => {
    const monthlyIncome = annualIncome / 12
    const downPayment = homePrice * (downPaymentPercent / 100)
    const loanAmount = homePrice - downPayment

    const pi = calculatePrincipalInterest(loanAmount, interestRate)
    const tax = (homePrice * PROPERTY_TAX_RATE) / 12
    const insurance = (homePrice * HOME_INSURANCE_RATE) / 12
    const pmi = downPaymentPercent < 20 ? (loanAmount * PMI_RATE) / 12 : 0
    const total = pi + tax + insurance + HOA_FEES + pmi

    const totalDebtPayments = total + monthlyDebts
    const dti = (totalDebtPayments / monthlyIncome) * 100

    const maxPrice = calculateMaxHomePrice(annualIncome, monthlyDebts, downPaymentPercent, interestRate)

    setCalculations({
      maxPrice,
      totalPayment: total,
      dti,
      principalInterest: pi,
      propertyTax: tax,
      pmi,
      homeInsurance: insurance
    })
  }, [annualIncome, monthlyDebts, homePrice, downPaymentPercent, interestRate])

  useEffect(() => {
    calculate()
  }, [calculate])

  // Get qualification status
  const getQualificationStatus = () => {
    if (calculations.dti < 36) {
      return { status: 'qualified', text: 'Qualified', color: 'text-green-500', icon: 'check_circle' }
    } else if (calculations.dti < 43) {
      return { status: 'edge', text: 'Edge Case', color: 'text-amber-500', icon: 'warning' }
    } else {
      return { status: 'high-risk', text: 'High Risk', color: 'text-red-500', icon: 'cancel' }
    }
  }

  const qualStatus = getQualificationStatus()
  const downPaymentAmount = homePrice * (downPaymentPercent / 100)

  return (
    <div className="w-full max-w-md mx-auto font-sans">
      {/* Instructions */}
      <div className="bg-slate-100 rounded-xl p-4 mb-6 flex items-start gap-3">
        <span className="material-symbols-outlined text-slate-600 mt-0.5">touch_app</span>
        <div>
          <p className="text-sm font-bold text-slate-900">How to Use This Calculator</p>
          <p className="text-xs text-slate-600 mt-1">
            Drag the slider bars below to input your information and see real-time qualification results.
          </p>
        </div>
      </div>

      {/* Results Card */}
      <section className="mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Max Home Price</p>
              <p className="text-2xl font-extrabold text-slate-900">{formatCurrency(calculations.maxPrice)}</p>
            </div>
            <div className="text-center border-l border-slate-100">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Monthly Payment</p>
              <p className="text-2xl font-extrabold text-[#1e3a5f]">{formatCurrency(Math.round(calculations.totalPayment))}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Qualification Status</p>
                <h3 className={`text-lg font-bold ${qualStatus.color} flex items-center gap-1`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{qualStatus.icon}</span>
                  {qualStatus.text}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">DTI Ratio</p>
                <p className="text-lg font-extrabold text-slate-900">{Math.min(Math.round(calculations.dti), 99)}%</p>
              </div>
            </div>

            {/* DTI Progress Bar */}
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex relative">
              <div className="h-full bg-green-500 w-[36%] border-r-2 border-white"></div>
              <div className="h-full bg-amber-500 w-[14%] border-r-2 border-white"></div>
              <div className="h-full bg-red-500 w-[50%]"></div>
              <div
                className="absolute -top-1 -bottom-1 w-1.5 bg-[#1e3a5f] rounded-full shadow-lg ring-4 ring-white z-10 transition-all duration-300"
                style={{ left: `${Math.min(calculations.dti, 50)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
              <span>Qualified (&lt;36%)</span>
              <span className="text-center">Edge</span>
              <span>High Risk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sliders */}
      <div className="space-y-10 px-1">
        {/* Your Finances Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#1e3a5f]">payments</span>
            <h3 className="text-base font-bold text-slate-900">Your Finances</h3>
          </div>

          {/* Annual Income */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block">
                <span className="text-sm font-bold text-slate-900">Annual Gross Income</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Before taxes</p>
              </label>
              <div className="bg-[#1e3a5f]/5 px-4 py-2 rounded-xl border border-[#1e3a5f]/10">
                <span className="text-lg font-extrabold text-[#1e3a5f]">{formatCurrency(annualIncome)}</span>
              </div>
            </div>
            <div className="relative h-6 flex items-center">
              <input
                type="range"
                min="50000"
                max="1000000"
                step="5000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(parseInt(e.target.value))}
                className="w-full slider-thumb"
              />
            </div>
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase">
              <span>$50K</span>
              <span>$500K</span>
              <span>$1M</span>
            </div>
          </div>

          {/* Monthly Debts */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block">
                <span className="text-sm font-bold text-slate-900">Total Monthly Debts</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Car, credit cards, student loans, etc.</p>
              </label>
              <div className="bg-[#1e3a5f]/5 px-4 py-2 rounded-xl border border-[#1e3a5f]/10">
                <span className="text-lg font-extrabold text-[#1e3a5f]">{formatCurrency(monthlyDebts)}</span>
              </div>
            </div>
            <div className="relative h-6 flex items-center">
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={monthlyDebts}
                onChange={(e) => setMonthlyDebts(parseInt(e.target.value))}
                className="w-full slider-thumb"
              />
            </div>
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase">
              <span>$0</span>
              <span>$2,500</span>
              <span>$5,000</span>
            </div>
          </div>
        </section>

        {/* Loan Details Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#1e3a5f]">account_balance_wallet</span>
            <h3 className="text-base font-bold text-slate-900">Loan Details</h3>
          </div>

          {/* Home Price */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block">
                <span className="text-sm font-bold text-slate-900">Home Price</span>
              </label>
              <div className="bg-[#1e3a5f]/5 px-4 py-2 rounded-xl border border-[#1e3a5f]/10">
                <span className="text-lg font-extrabold text-[#1e3a5f]">{formatCurrency(homePrice)}</span>
              </div>
            </div>
            <div className="relative h-6 flex items-center">
              <input
                type="range"
                min="100000"
                max="1000000"
                step="5000"
                value={homePrice}
                onChange={(e) => setHomePrice(parseInt(e.target.value))}
                className="w-full slider-thumb"
              />
            </div>
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase">
              <span>$100K</span>
              <span>$550K</span>
              <span>$1M</span>
            </div>
          </div>

          {/* Down Payment */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <label className="block">
                <span className="text-sm font-bold text-slate-900">Down Payment</span>
                {downPaymentPercent < 20 && (
                  <div className="flex items-center gap-1.5 mt-0.5 text-amber-500 font-semibold">
                    <span className="material-symbols-outlined text-xs">warning</span>
                    <span className="text-[10px]">PMI required for down payments under 20%</span>
                  </div>
                )}
              </label>
              <div className="flex flex-col items-end">
                <div className="bg-[#1e3a5f]/5 px-4 py-2 rounded-xl border border-[#1e3a5f]/10">
                  <span className="text-lg font-extrabold text-[#1e3a5f]">{downPaymentPercent}%</span>
                </div>
                <span className="text-[10px] text-slate-500 mt-1">({formatCurrency(downPaymentAmount)})</span>
              </div>
            </div>
            <div className="relative h-6 flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
                className="w-full slider-thumb"
              />
            </div>
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase">
              <span>0%</span>
              <span>20% (No PMI)</span>
              <span>100%</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block">
                <span className="text-sm font-bold text-slate-900">Interest Rate</span>
                <p className="text-[10px] text-slate-500 mt-0.5">30-year fixed</p>
              </label>
              <div className="bg-[#1e3a5f]/5 px-4 py-2 rounded-xl border border-[#1e3a5f]/10">
                <span className="text-lg font-extrabold text-[#1e3a5f]">{interestRate}%</span>
              </div>
            </div>
            <div className="relative h-6 flex items-center">
              <input
                type="range"
                min="3"
                max="10"
                step="0.125"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full slider-thumb"
              />
            </div>
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase">
              <span>3%</span>
              <span>6.5%</span>
              <span>10%</span>
            </div>
          </div>
        </section>

        {/* Payment Breakdown */}
        <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <button
            onClick={() => setBreakdownExpanded(!breakdownExpanded)}
            className="w-full p-5 flex justify-between items-center hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[#1e3a5f]/5 flex items-center justify-center text-[#1e3a5f]">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-slate-900">Monthly Payment Breakdown</h4>
                <p className="text-xs text-slate-500">Estimated taxes & insurance included</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400">
              {breakdownExpanded ? 'expand_less' : 'expand_more'}
            </span>
          </button>

          {breakdownExpanded && (
            <div className="px-5 pb-6 space-y-4 border-t border-slate-100 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Principal & Interest</span>
                <span className="text-sm font-bold text-slate-900">{formatCurrency(Math.round(calculations.principalInterest))}</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm text-slate-600">Property Tax (Est.)</span>
                    <span className="material-symbols-outlined text-xs text-slate-400 cursor-help" title="Calculated at 1.25% of home price">info</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Calculated at 1.25% of home price</p>
                </div>
                <span className="text-sm font-bold text-slate-900">{formatCurrency(Math.round(calculations.propertyTax))}</span>
              </div>

              {downPaymentPercent < 20 && (
                <div className="flex justify-between items-start bg-amber-50/50 p-2 -mx-2 rounded-lg">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-medium text-amber-700">PMI (Insurance)</span>
                      <span className="material-symbols-outlined text-xs text-amber-500 cursor-help" title="Private Mortgage Insurance is required for down payments under 20%. Estimated at 0.5% of loan amount/year.">info</span>
                    </div>
                    <p className="text-[10px] text-amber-600 mt-0.5">0.5% factor applied</p>
                  </div>
                  <span className="text-sm font-bold text-amber-700">{formatCurrency(Math.round(calculations.pmi))}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Homeowners Insurance</span>
                <span className="text-sm font-bold text-slate-900">{formatCurrency(Math.round(calculations.homeInsurance))}</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm text-slate-600">HOA Fees (Est.)</span>
                    <span className="material-symbols-outlined text-xs text-slate-400 cursor-help" title="HOA fees vary by community. This is an estimate.">info</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Varies by community</p>
                </div>
                <span className="text-sm font-bold text-slate-900">{formatCurrency(HOA_FEES)}</span>
              </div>

              <div className="pt-4 mt-2 border-t border-dashed border-slate-200 flex justify-between items-center">
                <span className="text-sm font-extrabold text-slate-900">Total Estimated Payment</span>
                <span className="text-lg font-extrabold text-[#1e3a5f]">{formatCurrency(Math.round(calculations.totalPayment))}</span>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* CTA Button */}
      <div className="mt-10 px-1">
        <Link href="/get-pre-approved" className="block">
          <Button className="w-full bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white font-extrabold py-6 rounded-2xl shadow-xl shadow-[#1e3a5f]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 h-auto">
            <span className="text-lg uppercase tracking-wide">Get Pre-Approved Now</span>
            <ArrowRight className="h-6 w-6" />
          </Button>
        </Link>
        <p className="text-[11px] text-center text-slate-500 mt-4 leading-relaxed px-4">
          PMI estimation based on 0.5% annual rate on loan amount. Property tax estimated at 1.25% of home price. HOA fees are estimates and vary by community. Actual rates vary based on credit score. Not an offer of credit.
        </p>
      </div>
    </div>
  )
}
