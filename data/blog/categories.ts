import type { BlogCategoryInfo } from '@/types/blog'

export const blogCategories: BlogCategoryInfo[] = [
  {
    slug: 'market-updates',
    name: 'Market Updates',
    description: 'Latest Santa Clarita housing market trends, prices, and forecasts',
    color: 'from-blue-500 to-blue-600',
  },
  {
    slug: 'buying-tips',
    name: 'Buying Tips',
    description: 'Expert advice for home buyers in Santa Clarita',
    color: 'from-green-500 to-green-600',
  },
  {
    slug: 'neighborhood-spotlights',
    name: 'Neighborhood Spotlights',
    description: 'Deep dives into Santa Clarita communities and subdivisions',
    color: 'from-orange-500 to-orange-600',
  },
  {
    slug: 'community-events',
    name: 'Community Events',
    description: 'Local events, festivals, and happenings in Santa Clarita',
    color: 'from-purple-500 to-purple-600',
  },
  {
    slug: 'school-news',
    name: 'School News',
    description: 'Updates about Santa Clarita schools and education',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    slug: 'new-developments',
    name: 'New Developments',
    description: 'New construction projects and master-planned communities',
    color: 'from-red-500 to-red-600',
  },
  {
    slug: 'first-time-buyers',
    name: 'First-Time Buyers',
    description: 'Guidance for first-time home buyers in Santa Clarita',
    color: 'from-teal-500 to-teal-600',
  },
  {
    slug: 'down-payment-assistance',
    name: 'Down Payment Assistance',
    description: 'CalHFA, GSFA, and other assistance program updates',
    color: 'from-indigo-500 to-indigo-600',
  },
]

export function getCategoryBySlug(slug: string): BlogCategoryInfo | undefined {
  return blogCategories.find((cat) => cat.slug === slug)
}
