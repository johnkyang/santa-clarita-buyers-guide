import type { Subdivision } from '@/types/subdivision'
import { valenciaWestridge } from './valencia-westridge'
import { valenciaBridgeport } from './valencia-bridgeport'
import { newhallOldTown } from './newhall-old-town'
import { saugusGoldenValley } from './saugus-golden-valley'
import { stevensonRanchSouthernOaks } from './stevenson-ranch-southern-oaks'
import { stevensonRanchWestridge } from './stevenson-ranch-westridge'
import { canyonCountryFairOaksRanch } from './canyon-country-fair-oaks-ranch'
import { canyonCountryStetsonRanch } from './canyon-country-stetson-ranch'
import { canyonCountrySandCanyon } from './canyon-country-sand-canyon'
import { castaicWilliamsRanch } from './castaic-williams-ranch'
import { castaicNorthLake } from './castaic-north-lake'
import { castaicEastCastaic } from './castaic-east-castaic'

export const subdivisions: Subdivision[] = [
  valenciaWestridge,
  valenciaBridgeport,
  newhallOldTown,
  saugusGoldenValley,
  stevensonRanchSouthernOaks,
  stevensonRanchWestridge,
  canyonCountryFairOaksRanch,
  canyonCountryStetsonRanch,
  canyonCountrySandCanyon,
  castaicWilliamsRanch,
  castaicNorthLake,
  castaicEastCastaic,
]

export function getAllSubdivisions(): Subdivision[] {
  return subdivisions
}

export function getSubdivisionBySlug(
  parentNeighborhood: string,
  slug: string
): Subdivision | undefined {
  return subdivisions.find(
    (sub) => sub.parentNeighborhood === parentNeighborhood && sub.slug === slug
  )
}

export function getSubdivisionsByNeighborhood(
  parentNeighborhood: string
): Subdivision[] {
  return subdivisions.filter(
    (sub) => sub.parentNeighborhood === parentNeighborhood
  )
}

export function getSubdivisionSlugs(): { parentNeighborhood: string; slug: string }[] {
  return subdivisions.map((sub) => ({
    parentNeighborhood: sub.parentNeighborhood,
    slug: sub.slug,
  }))
}

// Helper to check if a subdivision exists for a given neighborhood
export function hasSubdivisions(parentNeighborhood: string): boolean {
  return subdivisions.some((sub) => sub.parentNeighborhood === parentNeighborhood)
}
