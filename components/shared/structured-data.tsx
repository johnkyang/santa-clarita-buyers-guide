/**
 * LocalBusiness Structured Data Component
 *
 * Uses the centralized schema generator from lib/schema.ts
 * This component is typically included in the root layout for site-wide coverage
 */

import { generateLocalBusinessSchema } from '@/lib/schema'
import { JsonLd } from './json-ld'

export function LocalBusinessStructuredData() {
  return <JsonLd schema={generateLocalBusinessSchema()} />
}
