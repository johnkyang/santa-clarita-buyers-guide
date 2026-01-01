import type { School } from '@/types/neighborhood'

interface SchoolSchemaProps {
  schools: School[]
  neighborhoodName: string
}

export function SchoolSchema({ schools, neighborhoodName }: SchoolSchemaProps) {
  const schoolSchemas = schools.map((school) => ({
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: school.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: neighborhoodName,
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    // Rating out of 10
    aggregateRating: school.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: school.rating.toString(),
          bestRating: '10',
          worstRating: '1',
        }
      : undefined,
  }))

  return (
    <>
      {schoolSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
