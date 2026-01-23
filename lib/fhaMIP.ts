/**
 * FHA Mortgage Insurance Premium (MIP) Calculations
 *
 * FHA loans require two types of mortgage insurance:
 * 1. Upfront MIP (UFMIP) - 1.75% of base loan amount (can be financed)
 * 2. Annual MIP - Paid monthly, rate depends on loan term and LTV
 *
 * Source: HUD/FHA guidelines
 * Updated: January 2025
 */

export interface FHAMIPRates {
  upfrontRate: number // UFMIP as decimal (1.75% = 0.0175)
  annualRate: number // Annual MIP as decimal
}

/**
 * FHA Annual MIP Rates
 * Based on loan term (≤15 years vs >15 years) and LTV
 *
 * For loans ≤$726,200 (2024 conforming limit for LA County):
 * - ≤15 years, ≤90% LTV: 0.45%
 * - ≤15 years, >90% LTV: 0.70%
 * - >15 years, ≤90% LTV: 0.50%
 * - >15 years, >90% LTV: 0.55%
 *
 * Note: Using conservative >15 year rates since most buyers choose 30-year
 */

export const FHA_UPFRONT_MIP_RATE = 0.0175 // 1.75%

/**
 * Get FHA MIP rates based on loan characteristics
 * @param loanAmount - Base loan amount (before UFMIP)
 * @param ltv - Loan-to-Value ratio
 * @param loanTermYears - Loan term in years (typically 30)
 * @returns FHA MIP rates (upfront and annual)
 */
export function getFHAMIPRates(
  loanAmount: number,
  ltv: number,
  loanTermYears: number = 30
): FHAMIPRates {
  const upfrontRate = FHA_UPFRONT_MIP_RATE

  // Determine annual MIP rate based on LTV and loan term
  let annualRate: number

  if (loanTermYears <= 15) {
    // 15-year or less
    if (ltv <= 90) {
      annualRate = 0.0045 // 0.45%
    } else {
      annualRate = 0.0070 // 0.70%
    }
  } else {
    // More than 15 years (typical 30-year)
    if (ltv <= 90) {
      annualRate = 0.0050 // 0.50%
    } else {
      annualRate = 0.0055 // 0.55%
    }
  }

  return {
    upfrontRate,
    annualRate,
  }
}

/**
 * Calculate FHA upfront MIP
 * This is typically financed into the loan
 * @param baseLoanAmount - Loan amount before UFMIP
 * @returns Upfront MIP amount
 */
export function calculateUpfrontMIP(baseLoanAmount: number): number {
  return baseLoanAmount * FHA_UPFRONT_MIP_RATE
}

/**
 * Calculate total FHA loan amount including UFMIP
 * @param baseLoanAmount - Initial loan amount
 * @returns Total loan amount with UFMIP financed
 */
export function calculateFHALoanWithUFMIP(baseLoanAmount: number): number {
  const ufmip = calculateUpfrontMIP(baseLoanAmount)
  return baseLoanAmount + ufmip
}

/**
 * Calculate monthly FHA MIP payment
 * @param totalLoanAmount - Loan amount INCLUDING financed UFMIP
 * @param ltv - Loan-to-Value ratio (based on original loan, not including UFMIP)
 * @param loanTermYears - Loan term in years
 * @returns Monthly MIP payment
 */
export function calculateMonthlyFHAMIP(
  totalLoanAmount: number,
  ltv: number,
  loanTermYears: number = 30
): number {
  const { annualRate } = getFHAMIPRates(totalLoanAmount, ltv, loanTermYears)
  const annualMIP = totalLoanAmount * annualRate
  const monthlyMIP = annualMIP / 12

  return monthlyMIP
}

/**
 * Check if FHA loan is eligible based on down payment
 * FHA requires minimum 3.5% down payment
 * @param downPaymentPercent - Down payment as percentage (e.g., 3.5)
 * @returns True if eligible for FHA
 */
export function isFHAEligible(downPaymentPercent: number): boolean {
  return downPaymentPercent >= 3.5
}

/**
 * Get FHA minimum down payment percentage
 * @returns Minimum down payment (3.5%)
 */
export function getFHAMinDownPayment(): number {
  return 3.5
}

/**
 * Calculate FHA LTV including UFMIP
 * Used for understanding total financing
 * @param purchasePrice - Home purchase price
 * @param downPayment - Down payment amount
 * @returns LTV including financed UFMIP
 */
export function calculateFHALTVWithUFMIP(
  purchasePrice: number,
  downPayment: number
): number {
  const baseLoanAmount = purchasePrice - downPayment
  const totalLoanWithUFMIP = calculateFHALoanWithUFMIP(baseLoanAmount)
  const ltvWithUFMIP = (totalLoanWithUFMIP / purchasePrice) * 100

  return ltvWithUFMIP
}
