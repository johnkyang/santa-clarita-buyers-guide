import type { Neighborhood } from './neighborhood'

export interface NeighborhoodComparison {
  slug: string // e.g., "valencia-vs-newhall"
  neighborhood1Slug: string
  neighborhood2Slug: string
  title: string // e.g., "Valencia vs Newhall: Which Santa Clarita Neighborhood Is Right for You?"
  metaDescription: string
  introduction: string
  keyDifferences: {
    category: string
    neighborhood1Point: string
    neighborhood2Point: string
  }[]
  bestFor: {
    neighborhood1: string[]
    neighborhood2: string[]
  }
}

export interface ComparisonData {
  neighborhood1: Neighborhood
  neighborhood2: Neighborhood
  comparison: NeighborhoodComparison
}
