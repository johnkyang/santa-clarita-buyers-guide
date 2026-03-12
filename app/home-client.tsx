'use client'

import { Hero } from '@/components/home/hero'
import { FeaturedNeighborhoods } from '@/components/home/featured-neighborhoods'
import { GuidePreview } from '@/components/home/guide-preview'
import { Features } from '@/components/home/features'
import { CalculatorCTA } from '@/components/home/calculator-cta'
import { CTASection } from '@/components/home/cta-section'
import { QuizCTAStrip } from '@/components/home/quiz-cta-strip'
import { TrustSignals } from '@/components/home/trust-signals'
import { GlassTools } from '@/components/home/glass-tools'

export function HomeClient() {
  return (
    <div>
      <Hero />
      <GlassTools />
      <CalculatorCTA />
      <QuizCTAStrip />
      <Features />
      <TrustSignals />
      <FeaturedNeighborhoods />
      <GuidePreview />
      <CTASection />
    </div>
  )
}
