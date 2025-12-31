'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calculator, Home, DollarSign, TrendingUp, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CalculatorResults {
  maxPurchasePrice: number
  monthlyPayment: number
  downPayment: number
  loanAmount: number
  monthlyPrincipalInterest: number
  monthlyPropertyTax: number
  monthlyInsurance: number
  monthlyHOA: number
  monthlyMelloRoos: number
  totalMonthlyPayment: number
  frontEndRatio: number
  backEndRatio: number
  recommendedNeighborhoods: string[]
}

export function AffordabilityCalculator() {
  // Input states
  const [annualIncome, setAnnualIncome] = useState<string>('100000')
  const [monthlyDebts, setMonthlyDebts] = useState<string>('500')
  const [downPaymentPercent, setDownPaymentPercent] = useState<string>('10')
  const [interestRate, setInterestRate] = useState<string>('7.0')
  const [creditScore, setCreditScore] = useState<string>('720')

  // Results state
  const [results, setResults] = useState<CalculatorResults | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Calculate affordability
  const calculateAffordability = () => {
    const income = parseFloat(annualIncome) || 0
    const debts = parseFloat(monthlyDebts) || 0
    const downPct = parseFloat(downPaymentPercent) || 10
    const rate = parseFloat(interestRate) || 7.0

    const monthlyIncome = income / 12

    // 28% front-end ratio for housing
    const maxHousingPayment = monthlyIncome * 0.28

    // 36% back-end ratio for total debt
    const maxTotalDebt = monthlyIncome * 0.36
    const availableForHousing = maxTotalDebt - debts

    // Use the lower of the two
    const maxMonthlyPayment = Math.min(maxHousingPayment, availableForHousing)

    // Estimate property tax (1.25% annually in LA County)
    // Estimate insurance ($100-150/month average)
    // Estimate HOA ($200-400 average in Santa Clarita)
    // Estimate Mello-Roos ($100-300 average)
    const estimatedTaxRate = 0.0125 / 12 // monthly
    const estimatedInsurance = 125
    const estimatedHOA = 250
    const estimatedMelloRoos = 150

    // Back out the principal + interest payment
    const availableForPI = maxMonthlyPayment - estimatedInsurance - estimatedHOA - estimatedMelloRoos

    // Calculate max loan amount using mortgage formula
    // M = P * [r(1+r)^n] / [(1+r)^n - 1]
    // Solving for P: P = M * [(1+r)^n - 1] / [r(1+r)^n]
    const monthlyRate = (rate / 100) / 12
    const numPayments = 30 * 12 // 30 year loan
    const denominator = monthlyRate * Math.pow(1 + monthlyRate, numPayments)
    const numerator = Math.pow(1 + monthlyRate, numPayments) - 1
    const maxLoanAmount = availableForPI * (numerator / denominator)

    // Calculate max purchase price
    const downPaymentDecimal = downPct / 100
    const maxPrice = maxLoanAmount / (1 - downPaymentDecimal)

    // Round to nearest $5,000
    const roundedMaxPrice = Math.round(maxPrice / 5000) * 5000

    // Calculate actual values based on max price
    const actualDownPayment = roundedMaxPrice * downPaymentDecimal
    const actualLoanAmount = roundedMaxPrice - actualDownPayment

    // Calculate actual monthly PI
    const actualPI = actualLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)

    // Calculate actual property tax based on purchase price
    const actualPropertyTax = roundedMaxPrice * estimatedTaxRate

    // Total monthly payment
    const totalPayment = actualPI + actualPropertyTax + estimatedInsurance + estimatedHOA + estimatedMelloRoos

    // Calculate ratios
    const frontEnd = (totalPayment / monthlyIncome) * 100
    const backEnd = ((totalPayment + debts) / monthlyIncome) * 100

    // Recommend neighborhoods based on price
    let neighborhoods: string[] = []
    if (roundedMaxPrice < 450000) {
      neighborhoods = ['Newhall condos', 'Canyon Country townhomes', 'Saugus condos']
    } else if (roundedMaxPrice < 550000) {
      neighborhoods = ['Canyon Country homes', 'Saugus condos/townhomes', 'Castaic townhomes', 'Newhall homes']
    } else if (roundedMaxPrice < 700000) {
      neighborhoods = ['Saugus single-family', 'Canyon Country larger homes', 'Castaic homes', 'Valencia townhomes']
    } else if (roundedMaxPrice < 900000) {
      neighborhoods = ['Valencia homes', 'Saugus premium homes', 'Stevenson Ranch entry-level', 'All communities']
    } else {
      neighborhoods = ['Valencia premium', 'Stevenson Ranch', 'Premium communities', 'All neighborhoods available']
    }

    setResults({
      maxPurchasePrice: roundedMaxPrice,
      monthlyPayment: actualPI,
      downPayment: actualDownPayment,
      loanAmount: actualLoanAmount,
      monthlyPrincipalInterest: actualPI,
      monthlyPropertyTax: actualPropertyTax,
      monthlyInsurance: estimatedInsurance,
      monthlyHOA: estimatedHOA,
      monthlyMelloRoos: estimatedMelloRoos,
      totalMonthlyPayment: totalPayment,
      frontEndRatio: frontEnd,
      backEndRatio: backEnd,
      recommendedNeighborhoods: neighborhoods
    })

    setShowResults(true)
  }

  // Auto-calculate on input change
  useEffect(() => {
    if (annualIncome && parseFloat(annualIncome) > 0) {
      calculateAffordability()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [annualIncome, monthlyDebts, downPaymentPercent, interestRate, creditScore])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatPercent = (value: number) => {
    return value.toFixed(1) + '%'
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8" />
        <h4 className="text-2xl font-bold">Interactive Affordability Calculator</h4>
      </div>

      <p className="text-blue-100 mb-8">
        Calculate exactly how much home you can afford based on your income, debts, and down payment.
        Get personalized recommendations for Santa Clarita neighborhoods that fit your budget.
      </p>

      {/* Input Form */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <Label htmlFor="income" className="text-white font-semibold">
            Annual Gross Income
          </Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="income"
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              placeholder="100000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="debts" className="text-white font-semibold">
            Monthly Debt Payments
          </Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="debts"
              type="number"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              placeholder="500"
            />
          </div>
          <p className="text-xs text-blue-200">Car loans, credit cards, student loans, etc.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="downPayment" className="text-white font-semibold">
            Down Payment %
          </Label>
          <div className="relative">
            <Input
              id="downPayment"
              type="number"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              placeholder="10"
              min="3"
              max="50"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70">%</span>
          </div>
          <p className="text-xs text-blue-200">Minimum 3% (Conventional) or 3.5% (FHA)</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rate" className="text-white font-semibold">
            Interest Rate
          </Label>
          <div className="relative">
            <Input
              id="rate"
              type="number"
              step="0.125"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              placeholder="7.0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70">%</span>
          </div>
          <p className="text-xs text-blue-200">Current market rates: 6.5% - 7.5%</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="creditScore" className="text-white font-semibold">
            Credit Score
          </Label>
          <Input
            id="creditScore"
            type="number"
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
            placeholder="720"
            min="500"
            max="850"
          />
          <p className="text-xs text-blue-200">Affects your interest rate qualification</p>
        </div>
      </div>

      {/* Results */}
      {showResults && results && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Main Result */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6">
            <div className="text-center">
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-2">
                Maximum Home Price You Can Afford
              </p>
              <p className="text-5xl md:text-6xl font-bold text-white mb-4">
                {formatCurrency(results.maxPurchasePrice)}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-xs text-blue-200 mb-1">Down Payment</p>
                  <p className="text-lg font-bold">{formatCurrency(results.downPayment)}</p>
                  <p className="text-xs text-blue-300">({downPaymentPercent}%)</p>
                </div>
                <div className="text-center border-x border-white/20">
                  <p className="text-xs text-blue-200 mb-1">Loan Amount</p>
                  <p className="text-lg font-bold">{formatCurrency(results.loanAmount)}</p>
                  <p className="text-xs text-blue-300">30-year fixed</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-blue-200 mb-1">Monthly Payment</p>
                  <p className="text-lg font-bold">{formatCurrency(results.totalMonthlyPayment)}</p>
                  <p className="text-xs text-blue-300">PITI + HOA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Payment Breakdown */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h5 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Monthly Payment Breakdown
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-blue-200">Principal & Interest</span>
                <span className="font-semibold">{formatCurrency(results.monthlyPrincipalInterest)}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-blue-200">Property Tax (1.25%)</span>
                <span className="font-semibold">{formatCurrency(results.monthlyPropertyTax)}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-blue-200">Homeowners Insurance</span>
                <span className="font-semibold">{formatCurrency(results.monthlyInsurance)}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-blue-200">HOA Fees (avg)</span>
                <span className="font-semibold">{formatCurrency(results.monthlyHOA)}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-blue-200">Mello-Roos (avg)</span>
                <span className="font-semibold">{formatCurrency(results.monthlyMelloRoos)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-lg">
                <span className="font-bold">Total Monthly Payment</span>
                <span className="font-bold text-green-300">{formatCurrency(results.totalMonthlyPayment)}</span>
              </div>
            </div>
          </div>

          {/* Debt Ratios */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-200">Front-End Ratio (Housing)</span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-3xl font-bold">{formatPercent(results.frontEndRatio)}</p>
              <p className="text-xs text-blue-200 mt-1">
                {results.frontEndRatio <= 28 ? '✓ Within guideline (28%)' : '⚠ Above guideline (28%)'}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-200">Back-End Ratio (Total Debt)</span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-3xl font-bold">{formatPercent(results.backEndRatio)}</p>
              <p className="text-xs text-blue-200 mt-1">
                {results.backEndRatio <= 36 ? '✓ Within guideline (36%)' : '⚠ Above guideline (36%)'}
              </p>
            </div>
          </div>

          {/* Neighborhood Recommendations */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h5 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Recommended Santa Clarita Neighborhoods
            </h5>
            <div className="grid md:grid-cols-2 gap-3">
              {results.recommendedNeighborhoods.map((neighborhood, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                  <Home className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <span className="text-sm">{neighborhood}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <Link href="/neighborhoods">
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 h-auto py-3">
                  Explore All Neighborhoods
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center">
            <h5 className="text-xl font-bold text-white mb-2">Ready to Get Pre-Approved?</h5>
            <p className="text-white/90 mb-4">
              Talk to a lender about your specific situation and access down payment assistance programs
            </p>
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold h-auto py-3 px-6">
                Get Connected with Lenders
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <p className="text-xs text-blue-200">
          <strong>Disclaimer:</strong> This calculator provides estimates only. Actual loan approval, interest rates, and terms depend on your full financial profile, credit history, property appraisal, and lender underwriting. HOA fees, Mello-Roos, and property taxes vary by specific property and neighborhood. Consult with a licensed mortgage professional for accurate pre-approval.
        </p>
      </div>
    </div>
  )
}
