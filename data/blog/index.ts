import type { BlogPost } from '@/types/blog'
// March 2026 authority posts
import { post as waitingForRates } from './posts/waiting-for-interest-rates-santa-clarita'
import { post as preQualVsPreApproval } from './posts/pre-qualification-vs-pre-approval-santa-clarita'
import { post as inspectionIssues } from './posts/home-inspection-issues-santa-clarita'
import { post as under50kOutOfPocket } from './posts/buy-santa-clarita-home-under-50k-out-of-pocket'
// Market Pulse series
import { post as marketPulseMarch2026 } from './posts/santa-clarita-market-pulse-march-2026'
import { post as januaryMarketReport } from './posts/santa-clarita-market-report-january-2025'
import { post as dreamForAll2026 } from './posts/calhfa-dream-for-all-2026-what-to-know'
import { post as valenciaWestridge } from './posts/valencia-westridge-neighborhood-guide'
import { post as bestNeighborhoodsFamilies } from './posts/best-neighborhoods-santa-clarita-families-2026'
import { post as valenciaVsStevensonRanch } from './posts/valencia-vs-stevenson-ranch-comparison'
import { post as dpaPrograms2026 } from './posts/down-payment-assistance-programs-santa-clarita-2026'
import { post as biddingWar2026 } from './posts/how-to-win-bidding-war-santa-clarita-2026'
import { post as movingFromLA } from './posts/moving-from-los-angeles-to-santa-clarita'
import { post as affordability2026 } from './posts/how-much-house-can-i-afford-santa-clarita-2026'
// Part 1 SEO cluster — Neighborhoods & Subdivisions
import { post as youngProfessionals } from './posts/best-neighborhoods-santa-clarita-young-professionals'
import { post as schoolRatings } from './posts/santa-clarita-neighborhoods-school-ratings'
import { post as gatedCommunities } from './posts/gated-communities-santa-clarita'
import { post as newConstruction } from './posts/new-construction-santa-clarita-2026'
import { post as vsSimiValley } from './posts/santa-clarita-vs-simi-valley'
import { post as vsThousandOaks } from './posts/santa-clarita-vs-thousand-oaks'
import { post as floodZoneRisk } from './posts/flood-zone-risk-santa-clarita'
import { post as fireRisk } from './posts/fire-risk-santa-clarita-neighborhoods'
// Part 4 SEO cluster — First-Time Buyer Process
import { post as preApprovedSantaClarita } from './posts/how-to-get-pre-approved-santa-clarita'
import { post as whatIsEscrow } from './posts/what-is-escrow-buyers-guide'
import { post as hoaFeesSantaClarita } from './posts/hoa-fees-santa-clarita'
import { post as propertyTaxesSantaClarita } from './posts/property-taxes-santa-clarita-explained'
import { post as melloRoosSantaClarita } from './posts/mello-roos-santa-clarita'
import { post as homeInspectionChecklist } from './posts/home-inspection-checklist-santa-clarita'
// Part 2 SEO cluster — Mortgage & Buying Costs
import { post as fhaVsConventional } from './posts/fha-vs-conventional-loan-santa-clarita'
import { post as downPaymentGuide } from './posts/how-much-down-payment-santa-clarita'
import { post as vaLoanBenefits } from './posts/va-loan-benefits-santa-clarita'
import { post as closingCosts2026 } from './posts/closing-costs-santa-clarita-2026'
// Part 3 SEO cluster — Advanced Mortgage Topics
import { post as pmiCalifornia } from './posts/pmi-california-how-to-minimize'
import { post as selfEmployedSantaClarita } from './posts/buying-while-self-employed-santa-clarita'
import { post as usdaLoansSantaClarita } from './posts/usda-loans-santa-clarita'
import { post as jumboLoansSantaClarita } from './posts/jumbo-loans-santa-clarita'

export const blogPosts: BlogPost[] = [
  // March 2026 authority posts (newest)
  waitingForRates,
  preQualVsPreApproval,
  inspectionIssues,
  under50kOutOfPocket,
  // Market Pulse series
  marketPulseMarch2026,
  // Part 4 SEO cluster — First-Time Buyer Process
  preApprovedSantaClarita,
  whatIsEscrow,
  hoaFeesSantaClarita,
  propertyTaxesSantaClarita,
  melloRoosSantaClarita,
  homeInspectionChecklist,
  // Part 3 SEO cluster — Advanced Mortgage Topics
  pmiCalifornia,
  selfEmployedSantaClarita,
  usdaLoansSantaClarita,
  jumboLoansSantaClarita,
  // Part 2 SEO cluster — Mortgage & Buying Costs
  fhaVsConventional,
  downPaymentGuide,
  vaLoanBenefits,
  closingCosts2026,
  // Part 1 SEO cluster
  youngProfessionals,
  schoolRatings,
  gatedCommunities,
  newConstruction,
  vsSimiValley,
  vsThousandOaks,
  floodZoneRisk,
  fireRisk,
  // Original posts
  affordability2026,
  movingFromLA,
  biddingWar2026,
  bestNeighborhoodsFamilies,
  valenciaVsStevensonRanch,
  dpaPrograms2026,
  valenciaWestridge,
  dreamForAll2026,
  januaryMarketReport,
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  })
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    })
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit)
}

export function getPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
