/**
 * Schema Analytics - Data Layer Integration
 *
 * Tracks schema.org structured data rendering for Google Analytics 4
 * This allows you to monitor which schemas are being served and on which pages.
 *
 * Usage:
 * - Automatically integrated with JsonLd component
 * - Events are pushed to window.dataLayer for GA4
 * - Can be viewed in GA4 under Events > schema_rendered
 */

// Extend Window interface for dataLayer
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[]
  }
}

export interface SchemaTrackingEvent {
  event: 'schema_rendered'
  schema_type: string
  schema_count: number
  page_path: string
  page_title: string
  timestamp: string
}

/**
 * Initialize the data layer if it doesn't exist
 */
export function initDataLayer(): void {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
  }
}

/**
 * Track when a schema is rendered on the page
 * Pushes event to dataLayer for GA4 pickup
 */
export function trackSchemaRendered(schemaType: string, count: number = 1): void {
  if (typeof window === 'undefined') return

  initDataLayer()

  const event: SchemaTrackingEvent = {
    event: 'schema_rendered',
    schema_type: schemaType,
    schema_count: count,
    page_path: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString(),
  }

  window.dataLayer.push(event)

  // Debug logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Schema Analytics]', event)
  }
}

/**
 * Extract schema type from a schema object
 */
export function getSchemaType(schema: Record<string, unknown>): string {
  return (schema['@type'] as string) || 'Unknown'
}

/**
 * Track multiple schemas at once
 */
export function trackMultipleSchemas(schemas: Record<string, unknown>[]): void {
  if (typeof window === 'undefined') return

  initDataLayer()

  // Group schemas by type and count
  const schemaCounts: Record<string, number> = {}

  schemas.forEach((schema) => {
    const type = getSchemaType(schema)
    schemaCounts[type] = (schemaCounts[type] || 0) + 1
  })

  // Push an event for each schema type
  Object.entries(schemaCounts).forEach(([type, count]) => {
    trackSchemaRendered(type, count)
  })
}

/**
 * Schema types for reference
 */
export const SCHEMA_TYPES = {
  LOCAL_BUSINESS: 'RealEstateAgent',
  BREADCRUMB: 'BreadcrumbList',
  FAQ: 'FAQPage',
  ARTICLE: 'Article',
  WEB_PAGE: 'WebPage',
  PLACE: 'Place',
  HOW_TO: 'HowTo',
  SERVICE: 'Service',
  EDUCATIONAL_ORG: 'EducationalOrganization',
  REAL_ESTATE_LISTING: 'RealEstateListing',
} as const
