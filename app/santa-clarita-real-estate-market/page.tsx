import type { Metadata } from 'next'
import { MarketHubClient } from './market-hub-client'

export const metadata: Metadata = {
  title: 'Santa Clarita Real Estate Market 2026 | Prices, Trends & Data',
  description:
    'Live market intelligence for the Santa Clarita Valley housing market. Monthly price data by neighborhood, inventory trends, mortgage rate updates, and buyer strategy guides.',
  keywords: [
    'santa clarita real estate market 2026',
    'santa clarita home prices 2026',
    'santa clarita housing market trends',
    'santa clarita median home price',
    'santa clarita real estate market update',
    'santa clarita market report 2026',
  ],
  openGraph: {
    title: 'Santa Clarita Real Estate Market 2026 | Prices, Trends & Data',
    description:
      'Monthly market intelligence for the Santa Clarita Valley. Neighborhood price breakdowns, inventory data, mortgage rates, and buyer strategy — updated every month.',
  },
}

export default function MarketHubPage() {
  return <MarketHubClient />
}
