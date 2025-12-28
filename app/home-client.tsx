'use client'

import { Hero } from '@/components/home/hero'
import { FeaturedNeighborhoods } from '@/components/home/featured-neighborhoods'
import { GuidePreview } from '@/components/home/guide-preview'
import { Features } from '@/components/home/features'
import { CTASection } from '@/components/home/cta-section'

export function HomeClient() {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedNeighborhoods />
      <GuidePreview />
      <CTASection />
    </div>
  )
}
