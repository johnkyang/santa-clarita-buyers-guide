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
    <section className="container py-16 sm:py-24">
      <AnimatedSection className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Explore Santa Clarita Neighborhoods
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover the unique character and amenities of each community
        </p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredNeighborhoods.map((neighborhood, index) => (
          <AnimatedSection key={neighborhood.slug} delay={index * 0.1}>
            <NeighborhoodCard neighborhood={neighborhood} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-12 text-center" delay={0.3}>
        <Link href="/neighborhoods">
          <Button size="lg" variant="outline">
            View All Neighborhoods
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </AnimatedSection>
    </section>
  )
}
