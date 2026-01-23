import { Metadata } from 'next'
import { MortgageQualifier } from '@/components/MortgageQualifier'
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mortgage Qualifying Calculator | Santa Clarita Buyers Guide',
  description: 'Use our interactive mortgage qualifying calculator to see how much home you can afford in Santa Clarita. Get real-time DTI calculations and qualification status.',
  openGraph: {
    title: 'Mortgage Qualifying Calculator | Santa Clarita Buyers Guide',
    description: 'Use our interactive mortgage qualifying calculator to see how much home you can afford in Santa Clarita.',
    type: 'website',
  },
}

export default function MortgageQualifierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-premium-blue via-premium-blue-dark to-blue-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="h-4 w-4" />
            <span>Interactive Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Mortgage Qualifying Calculator
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            See exactly how much home you can afford in Santa Clarita. Adjust the sliders to explore different scenarios in real-time.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <MortgageQualifier />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-16 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
            What This Calculator Includes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'DTI Calculation',
                description: 'Real-time debt-to-income ratio calculation to show your qualification status'
              },
              {
                title: 'PMI Estimates',
                description: 'Automatic PMI calculation when down payment is less than 20%'
              },
              {
                title: 'Property Tax',
                description: 'Santa Clarita-specific property tax estimate at 1.25% annually'
              },
              {
                title: 'HOA Fees',
                description: 'Estimated $400/month HOA fees (varies by community)'
              },
              {
                title: 'Max Home Price',
                description: 'Calculates the maximum home price based on 43% DTI limit'
              },
              {
                title: 'Payment Breakdown',
                description: 'Detailed monthly payment breakdown with all costs included'
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-premium-orange to-premium-rust text-white py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            This calculator provides estimates. Get pre-approved to know exactly how much you can borrow and start your home search with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-pre-approved"
              className="inline-flex items-center justify-center gap-2 bg-white text-premium-orange font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get Pre-Approved Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/buying-power"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Try Buying Power Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
