'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageSquare, Phone, Shield, Users, Award } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-premium-blue-dark/95 via-premium-blue/90 to-premium-blue-dark/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Ready to Find Your{' '}
            <span className="text-gradient-warm inline-block">Dream Home</span>?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-white/90 leading-relaxed mb-12">
            Let us help you navigate the Santa Clarita housing market with confidence. Whether you&apos;re interested in new construction, resale homes, or 55+ communities, we&apos;re here to guide you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 mb-16">
            <Link href="/contact">
              <Button
                size="lg"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white text-premium-blue hover:bg-premium-cream shadow-premium-lg hover:shadow-premium transition-all duration-300 hover:scale-110"
              >
                <MessageSquare className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
                Get Started Today
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue transition-all duration-300 hover:scale-110"
              >
                <Phone className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
                Call Us Now
              </Button>
            </a>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">No Obligation</h3>
                <p className="text-white/80 text-sm">Free consultation with no pressure or commitment</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Local Expertise</h3>
                <p className="text-white/80 text-sm">Deep knowledge of Santa Clarita communities</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Proven Results</h3>
                <p className="text-white/80 text-sm">Helping families find their perfect homes since 2010</p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-premium-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  )
}
