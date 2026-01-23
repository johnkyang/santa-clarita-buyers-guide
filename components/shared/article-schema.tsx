/**
 * Article Schema Component
 *
 * Uses the centralized schema generator from lib/schema.ts
 */

import { generateArticleSchema } from '@/lib/schema'
import { JsonLd } from './json-ld'

interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
  keywords?: string[]
  url?: string
}

export function ArticleSchema(props: ArticleSchemaProps) {
  return <JsonLd schema={generateArticleSchema(props)} />
}
