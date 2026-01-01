import type { BlogPost } from '@/types/blog'
import { post as januaryMarketReport } from './posts/santa-clarita-market-report-january-2025'
import { post as dreamForAll2026 } from './posts/calhfa-dream-for-all-2026-what-to-know'
import { post as valenciaWestridge } from './posts/valencia-westridge-neighborhood-guide'

export const blogPosts: BlogPost[] = [
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
