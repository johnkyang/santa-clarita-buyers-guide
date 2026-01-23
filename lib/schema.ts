import { siteConfig } from '@/config/site'

/**
 * Centralized Schema.org structured data utilities
 * All functions return JSON-LD formatted objects for SEO rich snippets
 */

// ============================================
// 1. LocalBusiness / RealEstateAgent Schema
// ============================================
export interface LocalBusinessSchemaProps {
  url?: string
  name?: string
  description?: string
}

export function generateLocalBusinessSchema(props?: LocalBusinessSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${props?.url || siteConfig.url}/#organization`,
    name: props?.name || siteConfig.name,
    description: props?.description || siteConfig.description,
    url: props?.url || siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}${siteConfig.ogImage}`,
      width: '1200',
      height: '630',
    },
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Clarita',
      addressRegion: 'CA',
      postalCode: '91350',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '34.3917',
      longitude: '-118.5426',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Santa Clarita',
        '@id': 'https://en.wikipedia.org/wiki/Santa_Clarita,_California',
      },
      {
        '@type': 'City',
        name: 'Los Angeles County',
      },
    ],
    serviceArea: [
      {
        '@type': 'Place',
        name: 'Valencia, Santa Clarita, CA',
        geo: { '@type': 'GeoCoordinates', latitude: '34.4437', longitude: '-118.6092' },
      },
      {
        '@type': 'Place',
        name: 'Newhall, Santa Clarita, CA',
        geo: { '@type': 'GeoCoordinates', latitude: '34.3797', longitude: '-118.5306' },
      },
      {
        '@type': 'Place',
        name: 'Saugus, Santa Clarita, CA',
        geo: { '@type': 'GeoCoordinates', latitude: '34.4225', longitude: '-118.5481' },
      },
      {
        '@type': 'Place',
        name: 'Canyon Country, Santa Clarita, CA',
        geo: { '@type': 'GeoCoordinates', latitude: '34.4273', longitude: '-118.4721' },
      },
      {
        '@type': 'Place',
        name: 'Stevenson Ranch, CA',
        geo: { '@type': 'GeoCoordinates', latitude: '34.3889', longitude: '-118.5748' },
      },
      {
        '@type': 'Place',
        name: 'Castaic, CA',
        geo: { '@type': 'GeoCoordinates', latitude: '34.4886', longitude: '-118.6226' },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'First-Time Home Buyer Assistance',
            description: 'Comprehensive guidance for first-time home buyers in Santa Clarita',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Down Payment Assistance Programs',
            description: 'CalHFA Dream For All, CalHFA MyHome, GSFA programs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'New Construction Homes',
            description: 'Find and purchase brand-new homes in Santa Clarita',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Resale Homes',
            description: 'Navigate the existing home market in Santa Clarita',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '55+ Senior Communities',
            description: 'Active adult and retirement living communities',
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/santaclaritabuyersguide',
      'https://www.instagram.com/santaclaritabuyersguide',
      'https://www.linkedin.com/company/santaclaritabuyersguide',
    ],
    knowsAbout: [
      'Real Estate',
      'Home Buying',
      'First-Time Home Buyers',
      'Down Payment Assistance',
      'CalHFA Programs',
      'Santa Clarita Real Estate',
      'Valencia Homes',
      'Newhall Properties',
      'New Construction',
      'Senior Living Communities',
    ],
  }
}

// ============================================
// 2. BreadcrumbList Schema
// ============================================
export interface BreadcrumbItem {
  label: string
  href: string
}

export interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
  baseUrl?: string
}

export function generateBreadcrumbSchema(props: BreadcrumbSchemaProps) {
  const baseUrl = props.baseUrl || siteConfig.url

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...props.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  }
}

// ============================================
// 3. FAQ Schema
// ============================================
export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function generateFAQSchema(props: FAQSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ============================================
// 4. Article Schema
// ============================================
export interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
  keywords?: string[]
  url?: string
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  const baseUrl = siteConfig.url

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    image: props.image || `${baseUrl}${siteConfig.ogImage}`,
    datePublished: props.datePublished || new Date().toISOString(),
    dateModified: props.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: props.authorName || siteConfig.name,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kailei Media',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}${siteConfig.ogImage}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url || baseUrl,
    },
    keywords: props.keywords?.join(', ') || '',
  }
}

// ============================================
// 5. School / EducationalOrganization Schema
// ============================================
export interface SchoolItem {
  name: string
  rating?: number
  district?: string
}

export interface SchoolSchemaProps {
  schools: SchoolItem[]
  neighborhoodName: string
}

export function generateSchoolSchema(props: SchoolSchemaProps) {
  return props.schools.map((school) => ({
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: school.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: props.neighborhoodName,
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    ...(school.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: school.rating.toString(),
        bestRating: '10',
        worstRating: '1',
      },
    }),
  }))
}

// ============================================
// 6. WebPage Schema
// ============================================
export interface WebPageSchemaProps {
  name: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}

export function generateWebPageSchema(props: WebPageSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: props.name,
    description: props.description,
    url: props.url,
    datePublished: props.datePublished || new Date().toISOString(),
    dateModified: props.dateModified || new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

// ============================================
// 7. Place / Neighborhood Schema
// ============================================
export interface NeighborhoodSchemaProps {
  name: string
  description: string
  slug: string
  geo?: {
    latitude: string
    longitude: string
  }
  image?: string
}

export function generateNeighborhoodSchema(props: NeighborhoodSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${props.name}, Santa Clarita, CA`,
    description: props.description,
    url: `${siteConfig.url}/neighborhoods/${props.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: props.name,
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    ...(props.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: props.geo.latitude,
        longitude: props.geo.longitude,
      },
    }),
    ...(props.image && { image: props.image }),
    containedInPlace: {
      '@type': 'City',
      name: 'Santa Clarita',
      '@id': 'https://en.wikipedia.org/wiki/Santa_Clarita,_California',
    },
  }
}

// ============================================
// 8. HowTo Schema (for guides)
// ============================================
export interface HowToStep {
  name: string
  text: string
  url?: string
}

export interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string // ISO 8601 duration format, e.g., "PT30M"
}

export function generateHowToSchema(props: HowToSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: props.name,
    description: props.description,
    ...(props.totalTime && { totalTime: props.totalTime }),
    step: props.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  }
}

// ============================================
// 9. Product Schema (for real estate listings)
// ============================================
export interface RealEstateListingSchemaProps {
  name: string
  description: string
  url: string
  image?: string
  price?: string
  priceCurrency?: string
  address: {
    streetAddress?: string
    locality: string
    region: string
    postalCode?: string
  }
}

export function generateRealEstateListingSchema(props: RealEstateListingSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: props.name,
    description: props.description,
    url: props.url,
    ...(props.image && { image: props.image }),
    ...(props.price && {
      offers: {
        '@type': 'Offer',
        price: props.price,
        priceCurrency: props.priceCurrency || 'USD',
      },
    }),
    address: {
      '@type': 'PostalAddress',
      ...(props.address.streetAddress && { streetAddress: props.address.streetAddress }),
      addressLocality: props.address.locality,
      addressRegion: props.address.region,
      ...(props.address.postalCode && { postalCode: props.address.postalCode }),
      addressCountry: 'US',
    },
  }
}

// ============================================
// 10. Service Schema
// ============================================
export interface ServiceSchemaProps {
  name: string
  description: string
  url?: string
  areaServed?: string[]
  serviceType?: string
}

export function generateServiceSchema(props: ServiceSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: props.name,
    description: props.description,
    provider: {
      '@type': 'RealEstateAgent',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(props.url && { url: props.url }),
    ...(props.serviceType && { serviceType: props.serviceType }),
    ...(props.areaServed && {
      areaServed: props.areaServed.map((area) => ({
        '@type': 'Place',
        name: area,
      })),
    }),
  }
}

// ============================================
// Helper: Render JSON-LD Script Tag
// ============================================
export function renderJsonLd(schema: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(schema)
}

// ============================================
// Helper: Combine Multiple Schemas
// ============================================
export function combineSchemas(...schemas: Record<string, unknown>[]) {
  return schemas
}
