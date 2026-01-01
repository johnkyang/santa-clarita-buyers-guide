export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: BlogCategory
  author: string
  authorRole: string
  publishedDate: string
  updatedDate?: string
  featuredImage?: string
  tags: string[]
  metaDescription: string
  keywords: string[]
  readTime: number // in minutes
}

export type BlogCategory =
  | 'market-updates'
  | 'buying-tips'
  | 'neighborhood-spotlights'
  | 'community-events'
  | 'school-news'
  | 'new-developments'
  | 'first-time-buyers'
  | 'down-payment-assistance'

export interface BlogCategoryInfo {
  slug: BlogCategory
  name: string
  description: string
  color: string
}
