'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, ExternalLink, MessageSquare, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function LenderCTA() {
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
            Ready to Start Your{' '}
            <span className="text-gradient-warm inline-block">Pre-Approval</span>?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-white/90 leading-relaxed mb-4">
            Take the first step toward homeownership today. Get pre-approved and start shopping with confidence.
          </p>
          <p className="mx-auto max-w-2xl text-lg text-premium-orange font-semibold mb-12">
            Remember to mention SantaClaritaBuyersGuide.com for your $500 closing costs credit!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 mb-16">
            <a href="https://www.loandepot.com/jyang" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white text-premium-blue hover:bg-premium-cream shadow-premium-lg hover:shadow-premium transition-all duration-300 hover:scale-110"
              >
                Apply Online Now
                <ExternalLink className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="tel:8184456354">
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue transition-all duration-300 hover:scale-110"
              >
                <Phone className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
                Call (818) 445-6354
              </Button>
            </a>
          </div>

          {/* What Happens Next */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-left mb-12">
            <h3 className="font-display text-2xl font-bold text-white mb-6 text-center">
              What Happens After You Apply:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Application Review</h4>
                  <p className="text-sm text-white/80">
                    John reviews your application and reaches out within 24 hours to discuss your situation and answer questions.
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
                  <h4 className="font-semibold text-white mb-2">DPA Assessment</h4>
                  <p className="text-sm text-white/80">
                    We&apos;ll identify which down payment assistance programs you qualify for and maximize your buying power.
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
                  <h4 className="font-semibold text-white mb-2">Pre-Approval Letter</h4>
                  <p className="text-sm text-white/80">
                    Receive your official pre-approval letter to use when making offers on Santa Clarita homes.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Alternative: Questions First? */}
          <Card className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-white mx-auto mb-4 opacity-80" />
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Have Questions First?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Not ready to apply yet? That&apos;s okay! Reach out to discuss your situation, learn about DPA programs,
                or get answers to any mortgage questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8184456354">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 bg-white text-premium-blue hover:bg-premium-cream font-bold"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Free Consultation
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-8 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue font-bold"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Trust Signals */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-premium-orange mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">No Obligation</h3>
              <p className="text-white/80 text-sm">Free consultation and application with no commitment required</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-premium-orange mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Fast Response</h3>
              <p className="text-white/80 text-sm">Get answers within 24 hours and pre-approval in 5-7 days</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-premium-orange mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Local Expert</h3>
              <p className="text-white/80 text-sm">15+ years serving Santa Clarita home buyers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-premium-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
