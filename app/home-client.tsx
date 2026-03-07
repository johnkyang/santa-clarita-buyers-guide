'use client'

import { Hero } from '@/components/home/hero'
import { FeaturedNeighborhoods } from '@/components/home/featured-neighborhoods'
import { GuidePreview } from '@/components/home/guide-preview'
import { Features } from '@/components/home/features'
import { CalculatorCTA } from '@/components/home/calculator-cta'
import { CTASection } from '@/components/home/cta-section'
import { QuizCTAStrip } from '@/components/home/quiz-cta-strip'

export function HomeClient() {
  return (
    <div>
      <Hero />
      <CalculatorCTA />
      <QuizCTAStrip />
      <Features />
      <FeaturedNeighborhoods />
      <GuidePreview />
      <CTASection />
    </div>
  )
}
