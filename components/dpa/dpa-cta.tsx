'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function DPACTA() {
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Ready to Use DPA for Your{' '}
            <span className="text-gradient-warm inline-block">Santa Clarita Home</span>?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-white/90 leading-relaxed mb-12">
            Don&apos;t let the down payment be a barrier to homeownership. With up to $110,000+ in assistance
            available, your dream home is closer than you think. Let&apos;s get started today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 mb-16">
            <a href="tel:6614517200">
              <Button
                size="lg"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white text-premium-blue hover:bg-premium-cream shadow-premium-lg hover:shadow-premium transition-all duration-300 hover:scale-110"
              >
                <Phone className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
                Call (661) 451-7200
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue transition-all duration-300 hover:scale-110"
              >
                <MessageSquare className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
                Get Pre-Qualified
              </Button>
            </Link>
          </div>

          {/* What Happens Next */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-left">
            <h3 className="font-display text-2xl font-bold text-white mb-6 text-center">
              What Happens When You Contact Us:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Free Consultation</h4>
                  <p className="text-sm text-white/80">
                    We&apos;ll discuss your situation, income, credit, and homebuying goals with no obligation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Program Matching</h4>
                  <p className="text-sm text-white/80">
                    We&apos;ll identify which DPA programs you qualify for and estimate your assistance amount.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Lender Connection</h4>
                  <p className="text-sm text-white/80">
                    We&apos;ll connect you with our experienced DPA lender for pre-approval and next steps.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Trust Signals */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-premium-orange mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">No Obligation</h3>
              <p className="text-white/80 text-sm">Free consultation with no pressure or commitment</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-premium-orange mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Expert Guidance</h3>
              <p className="text-white/80 text-sm">15+ years helping Santa Clarita buyers navigate DPA</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-premium-orange mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Local Knowledge</h3>
              <p className="text-white/80 text-sm">Deep expertise in Santa Clarita market and neighborhoods</p>
            </div>
          </div>

          {/* Final Encouragement */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 border-0 p-8 shadow-premium-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 text-white flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-bold text-white text-lg mb-2">
                    Don&apos;t Wait - DPA Programs Can Run Out of Funding
                  </h4>
                  <p className="text-white/90 text-sm mb-4">
                    Down payment assistance programs have limited annual funding. The best time to apply is early in
                    the year, but programs are available year-round. Contact us today to check current availability and
                    reserve your spot.
                  </p>
                  <a href="tel:6614517200">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-premium-cream font-bold group"
                    >
                      Call Now to Get Started
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-premium-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
