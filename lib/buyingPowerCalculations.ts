/**
 * Buying Power Calculator - Core Calculation Logic
 *
 * Conservative underwriting calculations for Santa Clarita home buyers
 * Includes Conventional and FHA loan programs
 *
 * Updated: January 2025
 */

import { calculateMonthlyPMI } from './pmiTables'
import {
  calculateFHALoanWithUFMIP,
  calculateMonthlyFHAMIP,
  calculateUpfrontMIP,
} from './fhaMIP'

// ============================================
// CONSTANTS & ASSUMPTIONS
// ============================================

/**
 * Santa Clarita Property Tax Rate
 * Conservative estimate: 1.25% annually
 * Note: Does not include Mello-Roos (varies by neighborhood)
 */
export const PROPERTY_TAX_RATE = 0.0125 // 1.25%

/**
 * Homeowner's Insurance Estimates (Annual)
 * Tiered by purchase price
 */
export const HOMEOWNERS_INSURANCE_TIERS = [
  { maxPrice: 700000, annualPremium: 3000 },
  { maxPrice: 1500000, annualPremium: 4500 },
  { maxPrice: Infinity, annualPremium: 6000 },
]

/**
 * DTI (Debt-to-Income) Limits
 * Conservative underwriting standards
 */
export const DTI_LIMITS = {
  conventional: 0.43, // 43% max (some lenders allow up to 50%)
  fha: 0.4699, // 46.99% max
}

/**
 * Minimum Down Payment Requirements
 */
export const MIN_DOWN_PAYMENT = {
  conventional: 3, // 3% minimum
  fha: 3.5, // 3.5% minimum
}

// ============================================
// TYPES & INTERFACES
// ============================================

export type LoanProgram = 'conventional' | 'fha' | 'va-not-supported'

export interface CalculatorInputs {
  grossMonthlyIncome: number
  creditScore: number
  downPaymentPercent: number
  interestRate: number // Annual rate as percentage (e.g., 6.5)
  monthlyDebts: number // Existing monthly debt obligations
  hoaMonthly: number // HOA fees
}

export interface PaymentBreakdown {
  principalAndInterest: number
  propertyTax: number
  homeInsurance: number
  pmi: number
  hoa: number
  totalMonthly: number
}

export interface CalculationResult {
  maxPurchasePrice: number
  loanAmount: number
  downPayment: number
  recommendedProgram: LoanProgram
  estimatedPayment: PaymentBreakdown
  dtiRatio: number
  ltv: number
  canQualify: boolean
  limitingFactor: 'dti' | 'down-payment' | 'credit' | null
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Calculate monthly property tax
 * @param purchasePrice - Home purchase price
 * @returns Monthly property tax
 */
export function calculateMonthlyPropertyTax(purchasePrice: number): number {
  const annualTax = purchasePrice * PROPERTY_TAX_RATE
  return annualTax / 12
}

/**
 * Get estimated annual homeowner's insurance
 * @param purchasePrice - Home purchase price
 * @returns Annual insurance premium
 */
export function getHomeownersInsurance(purchasePrice: number): number {
  const tier = HOMEOWNERS_INSURANCE_TIERS.find((t) => purchasePrice <= t.maxPrice)
  return tier ? tier.annualPremium : HOMEOWNERS_INSURANCE_TIERS[HOMEOWNERS_INSURANCE_TIERS.length - 1].annualPremium
}

/**
 * Calculate monthly homeowner's insurance
 * @param purchasePrice - Home purchase price
 * @returns Monthly insurance payment
 */
export function calculateMonthlyInsurance(purchasePrice: number): number {
  const annualInsurance = getHomeownersInsurance(purchasePrice)
  return annualInsurance / 12
}

/**
 * Calculate monthly principal and interest payment
 * @param loanAmount - Principal loan amount
 * @param annualRate - Annual interest rate as percentage (e.g., 6.5)
 * @param loanTermYears - Loan term in years (default 30)
 * @returns Monthly P&I payment
 */
export function calculateMonthlyPI(
  loanAmount: number,
  annualRate: number,
  loanTermYears: number = 30
): number {
  const monthlyRate = annualRate / 100 / 12
  const numberOfPayments = loanTermYears * 12

  // Handle 0% interest rate edge case
  if (monthlyRate === 0) {
    return loanAmount / numberOfPayments
  }

  // Standard mortgage payment formula: P&I = L[c(1 + c)^n]/[(1 + c)^n - 1]
  const payment =
    loanAmount *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  return payment
}

/**
 * Calculate LTV (Loan-to-Value) ratio
 * @param loanAmount - Loan amount
 * @param purchasePrice - Purchase price
 * @returns LTV as percentage
 */
export function calculateLTV(loanAmount: number, purchasePrice: number): number {
  return (loanAmount / purchasePrice) * 100
}

/**
 * Determine recommended loan program
 * @param downPaymentPercent - Down payment percentage
 * @param creditScore - Credit score
 * @returns Recommended loan program
 */
export function recommendLoanProgram(
  downPaymentPercent: number,
  creditScore: number
): LoanProgram {
  // FHA is often better for:
  // - Lower down payments (3.5-10%)
  // - Lower credit scores (<680)
  // - Higher DTI situations

  const isFHAMinMet = downPaymentPercent >= MIN_DOWN_PAYMENT.fha
  const isConventionalMinMet = downPaymentPercent >= MIN_DOWN_PAYMENT.conventional

  // If down payment is very low (3.5-5%), FHA is typically better
  if (downPaymentPercent < 5 && isFHAMinMet) {
    return 'fha'
  }

  // If credit score is lower (<680), FHA is typically better
  if (creditScore < 680 && isFHAMinMet) {
    return 'fha'
  }

  // If down payment is 10%+, Conventional is typically better
  if (downPaymentPercent >= 10 && isConventionalMinMet) {
    return 'conventional'
  }

  // Default to Conventional if requirements are met
  if (isConventionalMinMet) {
    return 'conventional'
  }

  // Default to FHA if eligible
  if (isFHAMinMet) {
    return 'fha'
  }

  // Fallback (shouldn't typically reach here with valid inputs)
  return 'conventional'
}

// ============================================
// MAIN CALCULATION FUNCTIONS
// ============================================

/**
 * Calculate complete payment breakdown for a given purchase price
 * @param purchasePrice - Home purchase price
 * @param inputs - Calculator inputs
 * @param loanProgram - Loan program to use
 * @returns Payment breakdown
 */
export function calculatePaymentBreakdown(
  purchasePrice: number,
  inputs: CalculatorInputs,
  loanProgram: LoanProgram
): PaymentBreakdown {
  const downPayment = purchasePrice * (inputs.downPaymentPercent / 100)
  const baseLoanAmount = purchasePrice - downPayment

  let loanAmount = baseLoanAmount
  let pmi = 0

  // Calculate loan amount and PMI/MIP based on program
  if (loanProgram === 'fha') {
    // FHA: Add upfront MIP to loan amount
    const ufmip = calculateUpfrontMIP(baseLoanAmount)
    loanAmount = baseLoanAmount + ufmip

    // Calculate monthly MIP
    const ltv = calculateLTV(baseLoanAmount, purchasePrice)
    pmi = calculateMonthlyFHAMIP(loanAmount, ltv)
  } else {
    // Conventional: Calculate PMI if LTV > 80%
    const ltv = calculateLTV(loanAmount, purchasePrice)
    if (ltv > 80) {
      pmi = calculateMonthlyPMI(loanAmount, ltv, inputs.creditScore)
    }
  }

  // Calculate monthly components
  const principalAndInterest = calculateMonthlyPI(loanAmount, inputs.interestRate)
  const propertyTax = calculateMonthlyPropertyTax(purchasePrice)
  const homeInsurance = calculateMonthlyInsurance(purchasePrice)
  const hoa = inputs.hoaMonthly

  const totalMonthly = principalAndInterest + propertyTax + homeInsurance + pmi + hoa

  return {
    principalAndInterest,
    propertyTax,
    homeInsurance,
    pmi,
    hoa,
    totalMonthly,
  }
}

/**
 * Calculate maximum purchase price based on income and DTI limits
 * Uses iterative approach to find max price that meets DTI requirements
 *
 * @param inputs - Calculator inputs
 * @returns Calculation result with max purchase price and payment breakdown
 */
export function calculateMaxPurchasePrice(inputs: CalculatorInputs): CalculationResult {
  // Determine loan program
  const recommendedProgram = recommendLoanProgram(inputs.downPaymentPercent, inputs.creditScore)

  // Get DTI limit for program
  const dtiLimit = recommendedProgram === 'fha' ? DTI_LIMITS.fha : DTI_LIMITS.conventional

  // Calculate max monthly housing payment allowed by DTI
  const maxTotalMonthlyPayment = inputs.grossMonthlyIncome * dtiLimit
  const maxHousingPayment = maxTotalMonthlyPayment - inputs.monthlyDebts

  // Iteratively find max purchase price
  // Start with rough estimate and refine
  let lowPrice = 100000
  let highPrice = 5000000
  let targetPrice = 0
  let iterations = 0
  const maxIterations = 50

  while (iterations < maxIterations && highPrice - lowPrice > 100) {
    const midPrice = (lowPrice + highPrice) / 2
    const payment = calculatePaymentBreakdown(midPrice, inputs, recommendedProgram)

    if (payment.totalMonthly <= maxHousingPayment) {
      // Can afford this price, try higher
      lowPrice = midPrice
      targetPrice = midPrice
    } else {
      // Can't afford this price, try lower
      highPrice = midPrice
    }

    iterations++
  }

  // Calculate final values
  const maxPurchasePrice = Math.floor(targetPrice / 1000) * 1000 // Round down to nearest $1,000
  const downPayment = maxPurchasePrice * (inputs.downPaymentPercent / 100)
  const baseLoanAmount = maxPurchasePrice - downPayment

  let loanAmount = baseLoanAmount
  if (recommendedProgram === 'fha') {
    loanAmount = calculateFHALoanWithUFMIP(baseLoanAmount)
  }

  const estimatedPayment = calculatePaymentBreakdown(maxPurchasePrice, inputs, recommendedProgram)
  const dtiRatio = (estimatedPayment.totalMonthly + inputs.monthlyDebts) / inputs.grossMonthlyIncome
  const ltv = calculateLTV(baseLoanAmount, maxPurchasePrice)

  // Determine if buyer qualifies and what's limiting
  let canQualify = true
  let limitingFactor: 'dti' | 'down-payment' | 'credit' | null = null

  if (dtiRatio > dtiLimit) {
    canQualify = false
    limitingFactor = 'dti'
  }

  if (inputs.creditScore < 620) {
    canQualify = false
    limitingFactor = 'credit'
  }

  // Check minimum down payment requirement
  const minDownRequired =
    recommendedProgram === 'fha' ? MIN_DOWN_PAYMENT.fha : MIN_DOWN_PAYMENT.conventional
  if (inputs.downPaymentPercent < minDownRequired) {
    canQualify = false
    limitingFactor = 'down-payment'
  }

  return {
    maxPurchasePrice,
    loanAmount,
    downPayment,
    recommendedProgram,
    estimatedPayment,
    dtiRatio,
    ltv,
    canQualify,
    limitingFactor,
  }
}

/**
 * Format currency for display
 * @param amount - Dollar amount
 * @returns Formatted string (e.g., "$450,000")
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format percentage for display
 * @param decimal - Decimal value (e.g., 0.43)
 * @param decimals - Number of decimal places
 * @returns Formatted string (e.g., "43.0%")
 */
export function formatPercentage(decimal: number, decimals: number = 1): string {
  return `${(decimal * 100).toFixed(decimals)}%`
}
