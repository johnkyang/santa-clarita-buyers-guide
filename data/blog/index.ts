import type { BlogPost } from '@/types/blog'
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

export const blogPosts: BlogPost[] = [
  // Part 1 SEO cluster (newest)
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
