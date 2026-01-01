import { siteConfig } from '@/config/site'

export function LocalBusinessStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://santaclaritabuyersguide.com/#organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.ogImage,
      width: '1200',
      height: '630',
    },
    image: siteConfig.ogImage,
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
      { '@type': 'Place', name: 'Valencia, Santa Clarita, CA', geo: { '@type': 'GeoCoordinates', latitude: '34.4437', longitude: '-118.6092' } },
      { '@type': 'Place', name: 'Newhall, Santa Clarita, CA', geo: { '@type': 'GeoCoordinates', latitude: '34.3797', longitude: '-118.5306' } },
      { '@type': 'Place', name: 'Saugus, Santa Clarita, CA', geo: { '@type': 'GeoCoordinates', latitude: '34.4225', longitude: '-118.5481' } },
      { '@type': 'Place', name: 'Canyon Country, Santa Clarita, CA', geo: { '@type': 'GeoCoordinates', latitude: '34.4273', longitude: '-118.4721' } },
      { '@type': 'Place', name: 'Stevenson Ranch, CA', geo: { '@type': 'GeoCoordinates', latitude: '34.3889', longitude: '-118.5748' } },
      { '@type': 'Place', name: 'Castaic, CA', geo: { '@type': 'GeoCoordinates', latitude: '34.4886', longitude: '-118.6226' } },
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
