'use client'

/**
 * Reusable JSON-LD Component for Schema.org structured data
 * With integrated analytics tracking for GA4
 *
 * Usage:
 * import { JsonLd } from '@/components/shared/json-ld'
 * import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
 *
 * // Single schema
 * <JsonLd schema={generateBreadcrumbSchema({ items: [...] })} />
 *
 * // Multiple schemas
 * <JsonLd schema={[
 *   generateBreadcrumbSchema({ items: [...] }),
 *   generateFAQSchema({ faqs: [...] })
 * ]} />
 *
 * // Disable tracking (e.g., for layout schemas that render on every page)
 * <JsonLd schema={schema} trackImpression={false} />
 */

import { useEffect } from 'react'
import {
  trackSchemaRendered,
  trackMultipleSchemas,
  getSchemaType,
} from '@/lib/schema-analytics'

interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
  trackImpression?: boolean
}

export function JsonLd({ schema, trackImpression = true }: JsonLdProps) {
  // Track schema impression on mount
  useEffect(() => {
    if (!trackImpression) return

    if (Array.isArray(schema)) {
      trackMultipleSchemas(schema)
    } else {
      const schemaType = getSchemaType(schema)
      trackSchemaRendered(schemaType)
    }
  }, [schema, trackImpression])

  // Handle array of schemas - render each separately for better parsing
  if (Array.isArray(schema)) {
    return (
      <>
        {schema.map((s, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </>
    )
  }

  // Single schema
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Pre-built schema components for common use cases
 * These use the centralized generators from lib/schema.ts
 */

import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateWebPageSchema,
  generateNeighborhoodSchema,
  generateHowToSchema,
  generateServiceSchema,
  type BreadcrumbItem,
  type FAQItem,
  type ArticleSchemaProps,
  type WebPageSchemaProps,
  type NeighborhoodSchemaProps,
  type HowToSchemaProps,
  type ServiceSchemaProps,
} from '@/lib/schema'

// LocalBusiness Schema - typically used in layout or homepage
// trackImpression=false since it renders on every page
export function LocalBusinessJsonLd() {
  return <JsonLd schema={generateLocalBusinessSchema()} trackImpression={false} />
}

// Breadcrumb Schema
interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return <JsonLd schema={generateBreadcrumbSchema({ items })} />
}

// FAQ Schema
interface FAQJsonLdProps {
  faqs: FAQItem[]
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  return <JsonLd schema={generateFAQSchema({ faqs })} />
}

// Article Schema
export function ArticleJsonLd(props: ArticleSchemaProps) {
  return <JsonLd schema={generateArticleSchema(props)} />
}

// WebPage Schema
export function WebPageJsonLd(props: WebPageSchemaProps) {
  return <JsonLd schema={generateWebPageSchema(props)} />
}

// Neighborhood/Place Schema
export function NeighborhoodJsonLd(props: NeighborhoodSchemaProps) {
  return <JsonLd schema={generateNeighborhoodSchema(props)} />
}

// HowTo Schema (for guides)
export function HowToJsonLd(props: HowToSchemaProps) {
  return <JsonLd schema={generateHowToSchema(props)} />
}

// Service Schema
export function ServiceJsonLd(props: ServiceSchemaProps) {
  return <JsonLd schema={generateServiceSchema(props)} />
}
