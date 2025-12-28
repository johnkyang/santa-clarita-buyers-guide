import { valencia } from './valencia'
import { newhall } from './newhall'
import { saugus } from './saugus'
import { canyonCountry } from './canyon-country'
import { stevensonRanch } from './stevenson-ranch'
import { castaic } from './castaic'
import type { Neighborhood } from '@/types/neighborhood'

export const neighborhoods: Neighborhood[] = [
  valencia,
  newhall,
  saugus,
  canyonCountry,
  stevensonRanch,
  castaic,
]

export { valencia, newhall, saugus, canyonCountry, stevensonRanch, castaic }

// Helper function to get neighborhood by slug
export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug)
}

// Get all neighborhood slugs (useful for generateStaticParams)
export function getNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug)
}
