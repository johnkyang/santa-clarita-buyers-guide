import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, GitCompare } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { neighborhoodComparisons } from '@/data/comparisons/neighborhood-comparisons'

export const metadata: Metadata = {
  title: 'Santa Clarita Neighborhood Comparisons | Compare Communities Side-by-Side',
  description:
    'Compare Santa Clarita neighborhoods side-by-side. Valencia vs Stevenson Ranch, Saugus vs Canyon Country, and more. Find the perfect community for your family with detailed price, school, and amenity comparisons.',
  keywords: [
    'Santa Clarita neighborhood comparison',
    'Valencia vs Stevenson Ranch',
    'Valencia vs Newhall',
    'Saugus vs Canyon Country',
    'compare Santa Clarita communities',
    'best Santa Clarita neighborhood',
  ],
  openGraph: {
    title: 'Santa Clarita Neighborhood Comparisons',
    description: 'Compare Santa Clarita neighborhoods side-by-side. Find the perfect community for your family.',
    type: 'website',
  },
}

export default function ComparisonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <GitCompare className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare Santa Clarita Neighborhoods
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find the perfect Santa Clarita community for your family. Compare neighborhoods side-by-side
              to see differences in pricing, schools, amenities, and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Comparisons
          </h2>
          <p className="text-lg text-gray-600">
            Detailed side-by-side comparisons to help you choose the right neighborhood
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {neighborhoodComparisons.map((comparison) => {
            const n1Name = comparison.neighborhood1Slug
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
            const n2Name = comparison.neighborhood2Slug
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')

            return (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200 border-2 group-hover:border-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">Comparison</Badge>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                      {n1Name} vs {n2Name}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {comparison.metaDescription.split('.')[0]}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-semibold">Compare:</span>
                        <span>Prices, Schools, Amenities & More</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why Compare Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Compare Neighborhoods?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Make Informed Decisions</h3>
            <p className="text-gray-600">
              See side-by-side comparisons of home prices, school ratings, and community amenities
              to make the best choice for your family.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Understand Trade-Offs</h3>
            <p className="text-gray-600">
              Every neighborhood has strengths and weaknesses. Our comparisons highlight key
              differences to help you prioritize what matters most.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Your Perfect Match</h3>
            <p className="text-gray-600">
              Match your lifestyle, budget, and priorities to the neighborhood that fits you best.
              Each comparison includes recommendations by buyer type.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get personalized recommendations based on your budget, lifestyle, and priorities.
          </p>
          <Link href="/contact">
            <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Talk to a Local Expert
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* More Resources */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Santa Clarita Resources
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/neighborhoods" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  All Neighborhoods
                </CardTitle>
                <CardDescription>
                  Explore detailed guides for all 6 Santa Clarita neighborhoods
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/guides" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Buyer Guides
                </CardTitle>
                <CardDescription>
                  Educational resources for first-time buyers, investors, and more
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/contact" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Contact Us
                </CardTitle>
                <CardDescription>
                  Get personalized assistance from local real estate experts
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
