import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Home, Heart, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Santa Clarita Buyer Guides | First-Time, Move-Up, Senior & Investor Resources',
  description:
    'Complete buyer guides for all types of Santa Clarita homebuyers. First-time buyer programs, move-up strategies, 55+ communities, and investment property analysis. Find the perfect Santa Clarita neighborhood for your situation.',
  keywords: [
    'Santa Clarita buyer guide',
    'first-time homebuyer Santa Clarita',
    'move-up buyer Valencia',
    '55+ communities Santa Clarita',
    'investment properties Santa Clarita',
    'homebuyer resources',
  ],
  openGraph: {
    title: 'Santa Clarita Buyer Guides',
    description: 'Find the perfect Santa Clarita home with guides tailored to your buyer type.',
    type: 'website',
  },
}

const buyerTypes = [
  {
    slug: 'first-time',
    title: 'First-Time Homebuyers',
    description:
      'Learn about down payment assistance, FHA loans, and the best starter neighborhoods in Santa Clarita. Get step-by-step guidance for your first home purchase.',
    icon: Home,
    features: [
      'Down payment assistance programs',
      'FHA & VA loan guidance',
      'Affordable starter neighborhoods',
      'First-time buyer tax benefits',
    ],
    priceRange: '$500K - $750K',
    color: 'blue',
  },
  {
    slug: 'move-up',
    title: 'Move-Up Buyers',
    description:
      'Leverage your equity to upgrade to a larger home in premium neighborhoods. Timing strategies, financing options, and move-up neighborhood recommendations.',
    icon: TrendingUp,
    features: [
      'Equity maximization strategies',
      'Sale & purchase timing',
      'Premium neighborhoods guide',
      'Move-up financing options',
    ],
    priceRange: '$850K - $2.5M+',
    color: 'green',
  },
  {
    slug: 'senior-55-plus',
    title: 'Senior & 55+ Buyers',
    description:
      'Discover active adult communities, single-story homes, and low-maintenance living options perfect for retirement in Santa Clarita\'s mild climate.',
    icon: Heart,
    features: [
      '55+ community options',
      'Single-story home inventory',
      'Healthcare proximity guide',
      'Downsizing strategies',
    ],
    priceRange: '$450K - $1.2M',
    color: 'purple',
  },
  {
    slug: 'investor',
    title: 'Real Estate Investors',
    description:
      'Market analysis, cash flow calculations, and investment neighborhood recommendations. Build wealth through Santa Clarita real estate.',
    icon: Users,
    features: [
      'Rental market analysis',
      'ROI & cash flow calculations',
      'Best investment neighborhoods',
      'Property management insights',
    ],
    priceRange: '$400K - $1.5M',
    color: 'orange',
  },
]

export default function BuyersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Users className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Santa Clarita Buyer Guides
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find the perfect Santa Clarita home with expert guidance tailored to your unique
              situation. Whether you&apos;re buying your first home, moving up, retiring, or
              investing, we have the resources you need.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer Type Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Buyer Type
          </h2>
          <p className="text-lg text-gray-600">
            Get personalized recommendations, neighborhood guides, and step-by-step action plans
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {buyerTypes.map((type) => {
            const IconComponent = type.icon
            return (
              <Link
                key={type.slug}
                href={`/buyers/${type.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-200 border-2 group-hover:border-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-${type.color}-100 rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-8 h-8 text-${type.color}-600`} />
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-blue-600 transition-colors">
                      {type.title}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-3">
                      {type.priceRange}
                    </Badge>
                    <CardDescription className="text-base">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why Use Our Guides */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use Our Buyer Guides?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tailored Recommendations</h3>
              <p className="text-gray-600">
                Get neighborhood suggestions, financing strategies, and action plans specific to
                your buyer type and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Market Expertise</h3>
              <p className="text-gray-600">
                Benefit from detailed Santa Clarita market knowledge, neighborhood comparisons, and
                insider insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step-by-Step Guidance</h3>
              <p className="text-gray-600">
                Follow clear action plans from pre-approval to closing, with resources and support
                at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Santa Clarita Quick Facts
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">6</p>
              <p className="text-gray-700">Neighborhoods</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">$750K</p>
              <p className="text-gray-700">Median Home Price</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">9/10</p>
              <p className="text-gray-700">Average School Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">280+</p>
              <p className="text-gray-700">Sunny Days/Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get personalized guidance and start your Santa Clarita home search today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/neighborhoods">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white text-orange-700 hover:bg-gray-100"
              >
                Browse Neighborhoods
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* More Resources */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Resources
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/compare" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Compare Neighborhoods
                </CardTitle>
                <CardDescription>
                  Side-by-side comparisons of Santa Clarita communities
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/guides" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Educational Guides
                </CardTitle>
                <CardDescription>
                  New construction, resale, 55+, and reverse mortgage guides
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Blog & News
                </CardTitle>
                <CardDescription>
                  Latest Santa Clarita real estate market updates
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
