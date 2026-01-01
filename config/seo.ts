import { Metadata } from 'next'
import { siteConfig } from './site'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Santa Clarita real estate',
    'Valencia homes',
    'Newhall properties',
    'Saugus real estate',
    'Canyon Country homes',
    'Stevenson Ranch',
    'Castaic properties',
    'Santa Clarita neighborhoods',
    'new construction Santa Clarita',
    'Santa Clarita buyer guide',
    'Santa Clarita home buying',
    '55+ communities Santa Clarita',
    'reverse mortgage Santa Clarita',
    'CalHFA Dream For All',
    'down payment assistance California',
    'first-time home buyer Santa Clarita',
    'Santa Clarita real estate agent',
    'homes for sale Santa Clarita',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: 'Kailei Media',
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  category: 'Real Estate',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Your Guide to Santa Clarita Real Estate`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@SantaClaritaRE',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'verification_token_here',
    // Add your actual verification tokens when ready
  },
}
