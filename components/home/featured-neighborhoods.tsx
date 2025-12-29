'use client'

import Link from 'next/link'
import { neighborhoods } from '@/data/neighborhoods'
import { NeighborhoodCard } from '@/components/neighborhoods/neighborhood-card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

export function FeaturedNeighborhoods() {
  // Feature the first 3 neighborhoods
  const featuredNeighborhoods = neighborhoods.slice(0, 3)

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-premium-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Explore Santa Clarita{' '}
            <span className="text-gradient-premium">Neighborhoods</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 leading-relaxed">
            Discover the unique character and amenities of each community
          </p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {featuredNeighborhoods.map((neighborhood, index) => (
            <AnimatedSection key={neighborhood.slug} delay={index * 0.1} className="w-full">
              <NeighborhoodCard neighborhood={neighborhood} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={0.3}>
          <Link href="/neighborhoods">
            <Button
              size="lg"
              variant="outline"
              className="group h-14 px-8 text-lg font-semibold border-2 border-premium-blue text-premium-blue hover:bg-premium-blue hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-premium"
            >
              View All Neighborhoods
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
