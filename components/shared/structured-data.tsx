import { siteConfig } from '@/config/site'

export function LocalBusinessStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Clarita',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Santa Clarita',
      '@id': 'https://en.wikipedia.org/wiki/Santa_Clarita,_California',
    },
    serviceArea: [
      { '@type': 'Place', name: 'Valencia, CA' },
      { '@type': 'Place', name: 'Newhall, CA' },
      { '@type': 'Place', name: 'Saugus, CA' },
      { '@type': 'Place', name: 'Canyon Country, CA' },
      { '@type': 'Place', name: 'Stevenson Ranch, CA' },
      { '@type': 'Place', name: 'Castaic, CA' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
