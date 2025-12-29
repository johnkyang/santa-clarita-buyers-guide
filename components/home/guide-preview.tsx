'use client'

import Link from 'next/link'
import { guides } from '@/data/guides'
import { GuideCard } from '@/components/guides/guide-card'
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

export function GuidePreview() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-premium-cream/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Essential{' '}
            <span className="text-gradient-warm">Home Buying</span> Guides
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 leading-relaxed">
            Everything you need to know about buying a home in Santa Clarita
          </p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {guides.map((guide, index) => (
            <AnimatedSection key={guide.slug} delay={index * 0.1} className="w-full">
              <GuideCard guide={guide} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={0.4}>
          <Link href="/guides">
            <Button
              size="lg"
              className="group h-14 px-8 text-lg font-semibold bg-premium-orange hover:bg-premium-rust shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Explore All Guides
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
