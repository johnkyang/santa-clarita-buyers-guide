'use client'

import Link from 'next/link'
import { guides } from '@/data/guides'
import { GuideCard } from '@/components/guides/guide-card'
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

export function GuidePreview() {
  return (
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="container">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Essential Home Buying Guides
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about buying a home in Santa Clarita
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, index) => (
            <AnimatedSection key={guide.slug} delay={index * 0.1}>
              <GuideCard guide={guide} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.4}>
          <Link href="/guides">
            <Button size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore All Guides
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
