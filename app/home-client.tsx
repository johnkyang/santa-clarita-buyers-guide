'use client'

import { Hero } from '@/components/home/hero'
import { FeaturedNeighborhoods } from '@/components/home/featured-neighborhoods'
import { GuidePreview } from '@/components/home/guide-preview'
import { Features } from '@/components/home/features'
import { CalculatorCTA } from '@/components/home/calculator-cta'
import { CTASection } from '@/components/home/cta-section'

export function HomeClient() {
  return (
    <div>
      <Hero />
      <Features />
      <CalculatorCTA />
      <FeaturedNeighborhoods />
      <GuidePreview />
      <CTASection />
    </div>
  )
}
