/**
 * PMI Rate Tables - Radian Borrower-Paid PMI
 * Annual Base Rates for Fixed Level Payments (First 5 Years)
 *
 * Rates are annual percentages applied to loan amount
 * Monthly PMI = (Loan Amount * Annual Rate) / 12
 *
 * Source: Conservative underwriting estimates
 * Updated: January 2025
 */

export interface PMIRate {
  minCredit: number
  maxCredit: number
  rate: number // Annual rate as decimal (e.g., 0.68% = 0.0068)
}

/**
 * LTV 97% - 95.01%
 * Highest risk tier - borrower putting down 3-5%
 */
export const PMI_97_95: PMIRate[] = [
  { minCredit: 760, maxCredit: 850, rate: 0.0068 },
  { minCredit: 740, maxCredit: 759, rate: 0.0068 },
  { minCredit: 720, maxCredit: 739, rate: 0.0068 },
  { minCredit: 700, maxCredit: 719, rate: 0.0080 },
  { minCredit: 680, maxCredit: 699, rate: 0.0101 },
  { minCredit: 660, maxCredit: 679, rate: 0.0134 },
  { minCredit: 640, maxCredit: 659, rate: 0.0151 },
  { minCredit: 620, maxCredit: 639, rate: 0.0172 },
]

/**
 * LTV 95% - 90.01%
 * Mid-high risk - borrower putting down 5-10%
 */
export const PMI_95_90: PMIRate[] = [
  { minCredit: 760, maxCredit: 850, rate: 0.0035 },
  { minCredit: 740, maxCredit: 759, rate: 0.0045 },
  { minCredit: 720, maxCredit: 739, rate: 0.0052 },
  { minCredit: 700, maxCredit: 719, rate: 0.0063 },
  { minCredit: 680, maxCredit: 699, rate: 0.0078 },
  { minCredit: 660, maxCredit: 679, rate: 0.0101 },
  { minCredit: 640, maxCredit: 659, rate: 0.0116 },
  { minCredit: 620, maxCredit: 639, rate: 0.0132 },
]

/**
 * LTV 90% - 85.01%
 * Mid risk - borrower putting down 10-15%
 */
export const PMI_90_85: PMIRate[] = [
  { minCredit: 760, maxCredit: 850, rate: 0.0019 },
  { minCredit: 740, maxCredit: 759, rate: 0.0021 },
  { minCredit: 720, maxCredit: 739, rate: 0.0025 },
  { minCredit: 700, maxCredit: 719, rate: 0.0028 },
  { minCredit: 680, maxCredit: 699, rate: 0.0033 },
  { minCredit: 660, maxCredit: 679, rate: 0.0042 },
  { minCredit: 640, maxCredit: 659, rate: 0.0048 },
  { minCredit: 620, maxCredit: 639, rate: 0.0056 },
]

/**
 * LTV ≤85% (including ≤80%)
 * Low risk - borrower putting down 15-20%+
 * Note: No PMI required at ≤80% LTV, but included for calculation purposes
 */
export const PMI_85_80: PMIRate[] = [
  { minCredit: 760, maxCredit: 850, rate: 0.0014 },
  { minCredit: 740, maxCredit: 759, rate: 0.0016 },
  { minCredit: 720, maxCredit: 739, rate: 0.0020 },
  { minCredit: 700, maxCredit: 719, rate: 0.0021 },
  { minCredit: 680, maxCredit: 699, rate: 0.0021 },
  { minCredit: 660, maxCredit: 679, rate: 0.0023 },
  { minCredit: 640, maxCredit: 659, rate: 0.0025 },
  { minCredit: 620, maxCredit: 639, rate: 0.0028 },
]

/**
 * Get PMI rate based on LTV and credit score
 * @param ltv - Loan-to-Value ratio (e.g., 95 for 95%)
 * @param creditScore - Borrower's credit score (620-850)
 * @returns Annual PMI rate as decimal (e.g., 0.0068 for 0.68%)
 */
export function getPMIRate(ltv: number, creditScore: number): number {
  // No PMI required if LTV ≤ 80%
  if (ltv <= 80) {
    return 0
  }

  // Select appropriate rate table based on LTV
  let rateTable: PMIRate[]

  if (ltv > 95) {
    rateTable = PMI_97_95
  } else if (ltv > 90) {
    rateTable = PMI_95_90
  } else if (ltv > 85) {
    rateTable = PMI_90_85
  } else {
    rateTable = PMI_85_80
  }

  // Find matching rate tier for credit score
  const rateTier = rateTable.find(
    (tier) => creditScore >= tier.minCredit && creditScore <= tier.maxCredit
  )

  // Return rate or highest tier rate if credit too low
  if (rateTier) {
    return rateTier.rate
  }

  // If credit score below 620, use highest rate from table
  return rateTable[rateTable.length - 1].rate
}

/**
 * Calculate monthly PMI payment
 * @param loanAmount - Principal loan amount
 * @param ltv - Loan-to-Value ratio
 * @param creditScore - Borrower's credit score
 * @returns Monthly PMI payment
 */
export function calculateMonthlyPMI(
  loanAmount: number,
  ltv: number,
  creditScore: number
): number {
  const annualRate = getPMIRate(ltv, creditScore)
  const annualPMI = loanAmount * annualRate
  const monthlyPMI = annualPMI / 12

  return monthlyPMI
}
