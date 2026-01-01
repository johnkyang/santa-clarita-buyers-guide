interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
  keywords?: string[]
}

export function ArticleSchema({
  headline,
  description,
  image = 'https://santaclaritabuyersguide.com/og-image.png',
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  authorName = 'Santa Clarita Buyers Guide',
  keywords = [],
}: ArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://santaclaritabuyersguide.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kailei Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://santaclaritabuyersguide.com/og-image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://santaclaritabuyersguide.com',
    },
    keywords: keywords.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
