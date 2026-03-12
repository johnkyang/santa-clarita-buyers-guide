import { Metadata } from 'next'
import { BuyingPowerCalculator } from '@/components/BuyingPowerCalculator'
import { Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Buying Power Calculator | Santa Clarita Home Buyers Guide',
  description:
    'Calculate how much home you can afford in Santa Clarita. Free mortgage calculator with accurate DTI, PMI, and payment estimates. Get your buying power in seconds.',
  keywords: [
    'Santa Clarita mortgage calculator',
    'home affordability calculator',
    'buying power calculator',
    'how much house can I afford',
    'Santa Clarita home loan calculator',
    'mortgage payment calculator',
    'FHA calculator',
    'conventional loan calculator',
    'DTI calculator',
    'PMI calculator',
  ],
  openGraph: {
    title: 'Buying Power Calculator | Santa Clarita Homes',
    description:
      'Discover how much home you can afford in Santa Clarita with our free, accurate mortgage calculator.',
    type: 'website',
  },
}

export default function BuyingPowerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-navy-800 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-10 w-10" />
              <h1 className="text-3xl lg:text-5xl font-bold">Buying Power Calculator</h1>
            </div>
            <p className="text-xl text-blue-100 mb-4">
              Discover how much home you can realistically afford in Santa Clarita
            </p>
            <p className="text-blue-200">
              Get accurate estimates based on conservative underwriting — know your buying power before you
              start shopping.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BuyingPowerCalculator />
        </div>
      </section>

      {/* Alternative Calculator CTA */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            Want a simpler, slider-based experience?
          </p>
          <a
            href="/mortgage-qualifier"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-800 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Try Our Mortgage Qualifying Calculator
          </a>
        </div>
      </section>

      {/* Why Use This Calculator Section */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Use Our Buying Power Calculator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conservative & Realistic</h3>
              <p className="text-gray-700">
                No inflated numbers or marketing fluff. Our calculator uses real underwriting standards so you
                know what you can truly afford.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate PMI & Taxes</h3>
              <p className="text-gray-700">
                Includes detailed PMI calculations based on your credit score and Santa Clarita property tax
                rates for accurate monthly payments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-700">
                Get your maximum purchase price and monthly payment breakdown in seconds. No email required, no
                spam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How the Calculator Works</h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-navy-700 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mt-0">Conservative Underwriting Standards</h3>
              <p className="mb-0">
                Our calculator uses <strong>43% DTI for Conventional loans</strong> and{' '}
                <strong>46.99% DTI for FHA loans</strong> — the same standards real lenders use. This ensures
                you get realistic numbers, not inflated marketing figures.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900">What&apos;s Included in Your Payment</h3>
            <ul className="space-y-2">
              <li>
                <strong>Principal & Interest:</strong> Your core mortgage payment based on loan amount and
                interest rate
              </li>
              <li>
                <strong>Property Taxes:</strong> Estimated at 1.25% annually for Santa Clarita (excludes
                Mello-Roos)
              </li>
              <li>
                <strong>Homeowner&apos;s Insurance:</strong> Tiered estimates based on purchase price ($3,000-$6,000
                annually)
              </li>
              <li>
                <strong>PMI or FHA Mortgage Insurance:</strong> Calculated using actual rate tables based on
                your credit score and down payment
              </li>
              <li>
                <strong>HOA Fees:</strong> If applicable to your target neighborhood
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900">Loan Program Recommendation</h3>
            <p>
              The calculator automatically recommends <strong>Conventional</strong> or <strong>FHA</strong>{' '}
              based on your down payment and credit score:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>FHA:</strong> Best for lower down payments (3.5-10%) or credit scores below 680
              </li>
              <li>
                <strong>Conventional:</strong> Best for down payments 10%+ or excellent credit (680+)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Is this calculator accurate for Santa Clarita?
              </h3>
              <p className="text-gray-700">
                Yes! We use actual Santa Clarita property tax rates (1.25%) and local homeowner&apos;s insurance
                estimates. Mello-Roos is excluded since it varies by neighborhood — we&apos;ll discuss that during
                pre-approval.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Why is my estimate lower than other calculators?
              </h3>
              <p className="text-gray-700">
                We use <strong>conservative underwriting standards</strong> (43% DTI for Conventional, 46.99%
                for FHA) to give you realistic numbers. Many online calculators use inflated DTI ratios to show
                higher amounts. We&apos;d rather you know what you can truly afford.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I qualify for more than this shows?</h3>
              <p className="text-gray-700">
                Possibly! This is a conservative estimate. Some lenders may approve higher amounts based on
                compensating factors like excellent credit, large reserves, or stable employment history. Get
                pre-approved to know your exact maximum.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Does this include Mello-Roos?</h3>
              <p className="text-gray-700">
                No. Mello-Roos special assessments vary widely by neighborhood in Santa Clarita ($0-$6,000+
                annually). We exclude them from base calculations. Your pre-approval will include specific
                Mello-Roos for properties you&apos;re considering.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What about VA loans?</h3>
              <p className="text-gray-700">
                This calculator doesn&apos;t support VA loan calculations due to their unique requirements (no down
                payment, no PMI, VA funding fee). If you&apos;re a veteran or active military,{' '}
                <a href="/get-pre-approved" className="text-navy-700 font-semibold hover:underline">
                  contact us for specialized VA loan analysis
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-navy-700 to-navy-800 text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Home Search?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Now that you know your buying power, let&apos;s get you pre-approved and start finding your perfect
            Santa Clarita home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-pre-approved"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get Pre-Approved Now
            </a>
            <a
              href="/neighborhoods"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Explore Neighborhoods
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
