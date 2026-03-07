import type { Metadata } from 'next'
import { DPACheckerClient } from './dpa-checker-client'

export const metadata: Metadata = {
  title: 'Down Payment Assistance Eligibility Checker | Santa Clarita 2026',
  description:
    'Answer 4 quick questions to see which California down payment assistance programs you may qualify for — CalHFA Dream For All, MyHome, GSFA Platinum, and more.',
  keywords: [
    'down payment assistance eligibility checker',
    'CalHFA eligibility santa clarita',
    'down payment assistance santa clarita',
    'first time buyer programs california',
    'GSFA platinum eligibility',
  ],
  openGraph: {
    title: 'Down Payment Assistance Eligibility Checker | Santa Clarita',
    description:
      'Find out in 4 questions which DPA programs you qualify for. Up to $150,000 in assistance may be available.',
  },
}

export default function DPACheckerPage() {
  return <DPACheckerClient />
}
