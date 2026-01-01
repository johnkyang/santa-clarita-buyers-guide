/**
 * CalHFA Government & Conventional Income Limits
 * Effective Date: 06/09/2025
 * Source: CalHFA 2025 Income Limits PDF (Official)
 */

export interface CountyIncomeLimit {
  county: string
  limit: number
}

export const calhfaIncomeLimits: CountyIncomeLimit[] = [
  { county: 'Alameda', limit: 316000 },
  { county: 'Alpine', limit: 256000 },
  { county: 'Amador', limit: 217000 },
  { county: 'Butte', limit: 191000 },
  { county: 'Calaveras', limit: 201000 },
  { county: 'Colusa', limit: 190000 },
  { county: 'Contra Costa', limit: 316000 },
  { county: 'Del Norte', limit: 185000 },
  { county: 'El Dorado', limit: 239000 },
  { county: 'Fresno', limit: 185000 },
  { county: 'Glenn', limit: 185000 },
  { county: 'Humboldt', limit: 185000 },
  { county: 'Imperial', limit: 185000 },
  { county: 'Inyo', limit: 192000 },
  { county: 'Kern', limit: 185000 },
  { county: 'Kings', limit: 185000 },
  { county: 'Lake', limit: 185000 },
  { county: 'Lassen', limit: 185000 },
  { county: 'Los Angeles', limit: 211000 },
  { county: 'Madera', limit: 185000 },
  { county: 'Marin', limit: 325000 },
  { county: 'Mariposa', limit: 185000 },
  { county: 'Mendocino', limit: 185000 },
  { county: 'Merced', limit: 185000 },
  { county: 'Modoc', limit: 185000 },
  { county: 'Mono', limit: 234000 },
  { county: 'Monterey', limit: 206000 },
  { county: 'Napa', limit: 290000 },
  { county: 'Nevada', limit: 246000 },
  { county: 'Orange', limit: 270000 },
  { county: 'Placer', limit: 239000 },
  { county: 'Plumas', limit: 188000 },
  { county: 'Riverside', limit: 205000 },
  { county: 'Sacramento', limit: 239000 },
  { county: 'San Benito', limit: 277000 },
  { county: 'San Bernardino', limit: 205000 },
  { county: 'San Diego', limit: 258000 },
  { county: 'San Francisco', limit: 325000 },
  { county: 'San Joaquin', limit: 207000 },
  { county: 'San Luis Obispo', limit: 248000 },
  { county: 'San Mateo', limit: 325000 },
  { county: 'Santa Barbara', limit: 235000 },
  { county: 'Santa Clara', limit: 325000 },
  { county: 'Santa Cruz', limit: 262000 },
  { county: 'Shasta', limit: 201000 },
  { county: 'Sierra', limit: 185000 },
  { county: 'Siskiyou', limit: 185000 },
  { county: 'Solano', limit: 246000 },
  { county: 'Sonoma', limit: 261000 },
  { county: 'Stanislaus', limit: 195000 },
  { county: 'Sutter', limit: 195000 },
  { county: 'Tehama', limit: 185000 },
  { county: 'Trinity', limit: 185000 },
  { county: 'Tulare', limit: 185000 },
  { county: 'Tuolumne', limit: 201000 },
  { county: 'Ventura', limit: 259000 },
  { county: 'Yolo', limit: 269000 },
  { county: 'Yuba', limit: 195000 },
]

export function getIncomeLimitByCounty(countyName: string): number | null {
  const county = calhfaIncomeLimits.find(
    (c) => c.county.toLowerCase() === countyName.toLowerCase()
  )
  return county ? county.limit : null
}

export function formatIncome(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
