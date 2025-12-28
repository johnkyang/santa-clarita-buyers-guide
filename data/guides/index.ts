import { newConstructionGuide } from './new-construction'
import { resaleGuide } from './resale'
import { fiftyFivePlusGuide } from './55-plus'
import { reverseMortgageGuide } from './reverse-mortgage'
import type { Guide } from '@/types/guide'

export const guides: Guide[] = [
  newConstructionGuide,
  resaleGuide,
  fiftyFivePlusGuide,
  reverseMortgageGuide,
]

export { newConstructionGuide, resaleGuide, fiftyFivePlusGuide, reverseMortgageGuide }

// Helper function to get guide by slug
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

// Get all guide slugs (useful for generateStaticParams)
export function getGuideSlugs(): string[] {
  return guides.map((g) => g.slug)
}
