'use client'

import Link from 'next/link'
import { Calculator, TrendingUp, DollarSign, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'
import { Button } from '@/components/ui/button'

export function CalculatorCTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-700 to-navy-800 p-8 sm:p-16 shadow-2xl">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  How Much Home Can You Afford?
                </h2>
              </div>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Use our free Buying Power Calculator to get accurate estimates based on{' '}
                <span className="font-semibold text-white">conservative underwriting standards</span>—no
                inflated numbers or marketing fluff.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-white/20 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Conservative & Realistic</h3>
                    <p className="text-blue-100">
                      Real DTI limits (43% Conventional, 46.99% FHA) so you know what you can truly afford
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-white/20 rounded-lg">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Accurate Santa Clarita Costs</h3>
                    <p className="text-blue-100">
                      Includes actual property tax rates (1.25%), insurance estimates, and detailed PMI
                      calculations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-white/20 rounded-lg">
                    <Calculator className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Instant Results</h3>
                    <p className="text-blue-100">
                      Get your max purchase price and complete payment breakdown in seconds
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/buying-power">
                  <Button
                    size="lg"
                    className="bg-white text-navy-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-xl"
                  >
                    Calculate My Buying Power
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/mortgage-qualifier">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
                  >
                    Slider-Based Calculator
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Right Content - Calculator Preview */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Monthly Income</span>
                    <span className="font-semibold text-white">$8,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Credit Score</span>
                    <span className="font-semibold text-white">720 (Good)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Down Payment</span>
                    <span className="font-semibold text-white">5%</span>
                  </div>

                  <div className="border-t border-white/20 pt-4 mt-4">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-blue-100 text-lg">Your Estimated Buying Power</span>
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">$475,000</div>
                    <p className="text-sm text-blue-200">
                      Based on conservative FHA underwriting standards
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="text-sm text-blue-100 mb-1">Estimated Monthly Payment</div>
                    <div className="text-2xl font-bold text-white">$3,450/mo</div>
                    <div className="text-xs text-blue-200 mt-2">Includes PITI + HOA + MIP</div>
                  </div>

                  <p className="text-sm text-blue-200 text-center mt-4">
                    👆 Example calculation - yours may be higher or lower
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
