export const siteConfig = {
  name: 'Santa Clarita Buyers Guide',
  description:
    'Your comprehensive guide to buying homes in Santa Clarita, CA. Explore neighborhoods, find new construction, and learn about the local real estate market.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://santaclaritabuyersguide.com',
  ogImage: '/images/og-image.jpg',
  links: {
    github: 'https://github.com/johnkyang/santa-clarita-buyers-guide',
  },
  contact: {
    email: 'info@santaclaritabuyersguide.com',
    phone: '(661) 555-0100', // Update with actual phone
  },
}

export type SiteConfig = typeof siteConfig
