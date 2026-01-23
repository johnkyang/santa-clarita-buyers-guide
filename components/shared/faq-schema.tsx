/**
 * FAQ Schema Component
 *
 * Uses the centralized schema generator from lib/schema.ts
 * Re-exports FAQItem type for backward compatibility
 */

import { generateFAQSchema, type FAQItem } from '@/lib/schema'
import { JsonLd } from './json-ld'

// Re-export for backward compatibility
export type { FAQItem }

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  return <JsonLd schema={generateFAQSchema({ faqs })} />
}
