'use client'

import Link from 'next/link'
import { Calculator, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function CalculatorTool() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-2 border-navy-700/20 shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - CTA */}
            <div className="bg-gradient-to-br from-navy-700 to-navy-800 p-8 lg:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Calculator className="h-6 w-6" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Not Sure How Much You Can Afford?
                </h2>
              </div>

              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Before you get pre-approved, use our free Buying Power Calculator to see what you might
                qualify for. Get instant estimates based on conservative underwriting standards.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">See your max purchase price instantly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">Complete monthly payment breakdown (PITI + PMI)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">Auto-recommend Conventional vs FHA loans</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">
                    100% free, no email required, instant results
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/buying-power">
                  <Button
                    size="lg"
                    className="w-full bg-white text-navy-700 hover:bg-gray-100 font-semibold text-lg py-6"
                  >
                    Try Buying Power Calculator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/mortgage-qualifier">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white/10 font-semibold text-lg py-6"
                  >
                    Try Mortgage Qualifier (Sliders)
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Example */}
            <div className="bg-white p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Example Calculation</h3>
                <p className="text-sm text-gray-600">
                  See what someone making $8,000/month with good credit might afford:
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-sm text-gray-600">Monthly Income</span>
                  <span className="font-semibold text-gray-900">$8,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-sm text-gray-600">Credit Score</span>
                  <span className="font-semibold text-gray-900">720 (Good)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-sm text-gray-600">Down Payment</span>
                  <span className="font-semibold text-gray-900">5%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-sm text-gray-600">Interest Rate</span>
                  <span className="font-semibold text-gray-900">6.5%</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy-700/5 to-navy-700/10 rounded-xl p-6 border border-navy-700/20">
                <div className="text-sm text-gray-600 mb-1">Estimated Buying Power</div>
                <div className="text-4xl font-bold text-navy-700 mb-3">$475,000</div>
                <div className="text-sm text-gray-600 mb-4">
                  Monthly Payment: <span className="font-semibold text-gray-900">$3,450</span>
                </div>
                <div className="text-xs text-gray-500 bg-white rounded-lg p-3">
                  <strong>Note:</strong> This is a conservative estimate based on FHA underwriting
                  standards. Your actual pre-approval may be higher depending on your full financial
                  profile.
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  After using the calculator, come back here to get your official pre-approval letter from
                  John!
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
