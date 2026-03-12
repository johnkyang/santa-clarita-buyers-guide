import type { Metadata } from 'next'
import { GuidesClient } from './guides-client'

export const metadata: Metadata = {
  title: 'Free Home Buyer Guides | Santa Clarita Buyers Guide',
  description: 'Expert-written guides for every type of buyer in Santa Clarita — first-time buyers, financing, 55+ communities, and more. Free, no obligation.',
}

export default function GuidesPage() {
  return <GuidesClient />
}
