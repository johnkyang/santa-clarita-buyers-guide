import type { Metadata } from 'next'
import { FirstTimeBuyerGuideClient } from './first-time-buyer-guide-client'

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Guide — Santa Clarita 2026 | Step-by-Step',
  description:
    'The complete first-time buyer guide for Santa Clarita. From pre-approval to closing day: how mortgages work, what things cost, and how to avoid the mistakes most buyers make.',
  keywords: [
    'first time home buyer guide santa clarita',
    'first time buyer santa clarita 2026',
    'how to buy a home santa clarita',
    'first time buyer checklist california',
    'santa clarita home buying guide',
    'buying a home santa clarita step by step',
  ],
  openGraph: {
    title: 'First-Time Home Buyer Guide — Santa Clarita 2026',
    description:
      'The complete step-by-step guide to buying your first home in Santa Clarita. Pre-approval, escrow, inspections, taxes, and more — all in one place.',
  },
}

export default function FirstTimeBuyerGuidePage() {
  return <FirstTimeBuyerGuideClient />
}
