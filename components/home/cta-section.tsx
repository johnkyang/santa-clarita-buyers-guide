'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageSquare, Phone } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

export function CTASection() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/50 py-16 sm:py-24">
      <div className="container">
        <AnimatedSection className="mx-auto max-w-3xl rounded-lg border bg-card p-8 text-center shadow-sm sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let us help you navigate the Santa Clarita housing market. Whether you&apos;re interested in
            new construction, resale homes, or 55+ communities, we&apos;re here to guide you every step
            of the way.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No obligation. Free consultation. Local expertise.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
