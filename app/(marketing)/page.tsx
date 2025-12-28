import { Metadata } from 'next'
import { HomeClient } from './home-client'

export const metadata: Metadata = {
  title: 'Santa Clarita Home Buyers Guide | Neighborhoods, New Construction & More',
  description:
    'Your comprehensive guide to buying a home in Santa Clarita. Explore 6 neighborhoods, learn about new construction vs resale, 55+ communities, and reverse mortgages.',
  keywords: [
    'Santa Clarita homes',
    'Santa Clarita real estate',
    'Valencia homes',
    'Newhall real estate',
    'Saugus homes for sale',
    'Canyon Country real estate',
    'Stevenson Ranch homes',
    'Castaic real estate',
    'new construction Santa Clarita',
    'resale homes Santa Clarita',
    '55+ communities Santa Clarita',
    'Santa Clarita buyer guide',
  ],
}

export default function HomePage() {
  return <HomeClient />
}
