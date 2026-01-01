import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getSubdivisionBySlug, getSubdivisionSlugs, getSubdivisionsByNeighborhood } from '@/data/subdivisions'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Home,
  School,
  TrendingUp,
  MapPin,
  DollarSign,
  CheckCircle2,
  XCircle,
  Users,
  ArrowRight,
  Building2,
  Sparkles
} from 'lucide-react'

interface SubdivisionPageProps {
  params: {
    slug: string
    subdivision: string
  }
}

export async function generateStaticParams() {
  const slugs = getSubdivisionSlugs()
  return slugs.map(({ parentNeighborhood, slug }) => ({
    slug: parentNeighborhood,
    subdivision: slug,
  }))
}

export async function generateMetadata({ params }: SubdivisionPageProps): Promise<Metadata> {
  const subdivision = getSubdivisionBySlug(params.slug, params.subdivision)

  if (!subdivision) {
    return {}
  }

  return {
    title: `${subdivision.name} ${subdivision.parentNeighborhoodName} | Complete Neighborhood Guide`,
    description: subdivision.metaDescription,
    keywords: subdivision.keywords,
    openGraph: {
      title: `${subdivision.name} ${subdivision.parentNeighborhoodName}`,
      description: subdivision.metaDescription,
      type: 'website',
      images: subdivision.heroImage ? [subdivision.heroImage] : [],
    },
  }
}

export default function SubdivisionPage({ params }: SubdivisionPageProps) {
  const subdivision = getSubdivisionBySlug(params.slug, params.subdivision)

  if (!subdivision) {
    notFound()
  }

  const relatedSubdivisions = getSubdivisionsByNeighborhood(params.slug)
    .filter((s) => s.slug !== subdivision.slug)
    .slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-premium-blue to-premium-blue-dark py-16 lg:py-24">
        {subdivision.heroImage && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={subdivision.heroImage}
              alt={`${subdivision.name} ${subdivision.parentNeighborhoodName}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 backdrop-blur-sm">
              <MapPin className="w-3 h-3 mr-1" />
              {subdivision.parentNeighborhoodName}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {subdivision.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {subdivision.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-premium-blue hover:bg-gray-100 h-12 px-8">
                  Schedule a Tour
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={`/neighborhoods/${params.slug}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 h-12 px-8"
                >
                  Explore {subdivision.parentNeighborhoodName}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: 'Neighborhoods', href: '/neighborhoods' },
              { label: subdivision.parentNeighborhoodName, href: `/neighborhoods/${params.slug}` },
              { label: subdivision.name, href: `/neighborhoods/${params.slug}/${params.subdivision}` },
            ]}
          />
        </div>
      </div>

      {/* Quick Facts */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <Card className="border-2">
              <CardHeader className="pb-3">
                <MapPin className="w-5 h-5 text-premium-blue mb-2" />
                <CardTitle className="text-sm font-medium text-gray-600">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{subdivision.quickFacts.location}</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader className="pb-3">
                <DollarSign className="w-5 h-5 text-premium-blue mb-2" />
                <CardTitle className="text-sm font-medium text-gray-600">Median Price</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{subdivision.quickFacts.medianPrice}</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader className="pb-3">
                <Home className="w-5 h-5 text-premium-blue mb-2" />
                <CardTitle className="text-sm font-medium text-gray-600">Home Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{subdivision.quickFacts.homeSizes}</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader className="pb-3">
                <Building2 className="w-5 h-5 text-premium-blue mb-2" />
                <CardTitle className="text-sm font-medium text-gray-600">Lot Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{subdivision.quickFacts.lotSizes}</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader className="pb-3">
                <Sparkles className="w-5 h-5 text-premium-blue mb-2" />
                <CardTitle className="text-sm font-medium text-gray-600">HOA Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{subdivision.quickFacts.hoaFee}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">About {subdivision.name}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{subdivision.description}</p>
          <div className="grid gap-4 md:grid-cols-2 mt-8">
            <div className="bg-white p-6 rounded-lg border-2">
              <h3 className="font-semibold text-lg mb-2">Established</h3>
              <p className="text-gray-700">{subdivision.established}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2">
              <h3 className="font-semibold text-lg mb-2">Total Homes</h3>
              <p className="text-gray-700">{subdivision.totalHomes.toLocaleString()} residences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <School className="w-8 h-8 text-premium-blue" />
            <h2 className="text-3xl font-bold">Schools</h2>
          </div>

          <div className="space-y-8">
            {/* Elementary Schools */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Elementary Schools</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subdivision.schools.elementary.map((school) => (
                  <Card key={school.name} className="border-2 hover:border-premium-blue transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{school.name}</CardTitle>
                        <Badge className="bg-green-500 text-white">{school.rating}</Badge>
                      </div>
                      <CardDescription>{school.distance}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {school.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Middle Schools */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Middle Schools</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subdivision.schools.middle.map((school) => (
                  <Card key={school.name} className="border-2 hover:border-premium-blue transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{school.name}</CardTitle>
                        <Badge className="bg-green-500 text-white">{school.rating}</Badge>
                      </div>
                      <CardDescription>{school.distance}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {school.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* High Schools */}
            <div>
              <h3 className="text-xl font-semibold mb-4">High Schools</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subdivision.schools.high.map((school) => (
                  <Card key={school.name} className="border-2 hover:border-premium-blue transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{school.name}</CardTitle>
                        <Badge className="bg-green-500 text-white">{school.rating}</Badge>
                      </div>
                      <CardDescription>{school.distance}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {school.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Community Amenities</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subdivision.amenities.map((amenity, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{amenity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home Styles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Home Styles & Builders</h2>
          <div className="space-y-6">
            {subdivision.homeStyles.map((style, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{style.builder}</CardTitle>
                      <CardDescription className="text-base">{style.style}</CardDescription>
                    </div>
                    <Badge className="bg-premium-blue text-white text-lg px-4 py-2 w-fit">
                      {style.priceRange}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Square Feet</p>
                      <p className="font-semibold">{style.squareFeet}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Bedrooms</p>
                      <p className="font-semibold">{style.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Bathrooms</p>
                      <p className="font-semibold">{style.bathrooms}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Lot Size</p>
                      <p className="font-semibold">{style.lotSize}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Typical Features:</h4>
                    <div className="grid gap-2 md:grid-cols-2">
                      {style.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-premium-blue" />
            <h2 className="text-3xl font-bold">Market Insights</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-sm text-gray-600">Recent Sales (30 days)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-premium-blue">{subdivision.marketData.recentSales.last30Days}</p>
                <p className="text-sm text-gray-600 mt-1">homes sold</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-sm text-gray-600">Average Price</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-premium-blue">{subdivision.marketData.recentSales.averagePrice}</p>
                <p className="text-sm text-gray-600 mt-1">last 30 days</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-sm text-gray-600">Days on Market</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-premium-blue">{subdivision.marketData.recentSales.averageDays}</p>
                <p className="text-sm text-gray-600 mt-1">average</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-sm text-gray-600">Sale-to-List Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-premium-blue">{subdivision.marketData.recentSales.saleToListRatio}</p>
                <p className="text-sm text-gray-600 mt-1">of asking price</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Price History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Year</th>
                      <th className="text-left py-3 px-4">Median Price</th>
                      <th className="text-left py-3 px-4">Year-over-Year Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subdivision.marketData.priceHistory.map((data) => (
                      <tr key={data.year} className="border-b">
                        <td className="py-3 px-4 font-semibold">{data.year}</td>
                        <td className="py-3 px-4">{data.medianPrice}</td>
                        <td className="py-3 px-4">
                          <Badge className={data.yoyChange.startsWith('+') ? 'bg-green-500' : 'bg-red-500'}>
                            {data.yoyChange}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Pros & Cons</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="w-6 h-6" />
                  Advantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {subdivision.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <XCircle className="w-6 h-6" />
                  Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {subdivision.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Consider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-premium-blue" />
            <h2 className="text-3xl font-bold">Is {subdivision.name} Right for You?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Perfect For:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {subdivision.perfectFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Maybe Not For:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {subdivision.maybeNotFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOA Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">HOA Information</h2>

          <Card className="border-2 mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Monthly HOA Fee</CardTitle>
                <Badge className="text-xl px-4 py-2">{subdivision.hoa.monthlyFee}</Badge>
              </div>
            </CardHeader>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>What&apos;s Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {subdivision.hoa.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Rules & Restrictions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {subdivision.hoa.restrictions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      {subdivision.alternatives.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Also Consider</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {subdivision.alternatives.map((alt, idx) => (
                <Card key={idx} className="border-2 hover:border-premium-blue transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{alt.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{alt.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Subdivisions */}
      {relatedSubdivisions.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              More {subdivision.parentNeighborhoodName} Neighborhoods
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedSubdivisions.map((related) => (
                <Link
                  key={related.slug}
                  href={`/neighborhoods/${related.parentNeighborhood}/${related.slug}`}
                  className="group"
                >
                  <Card className="h-full border-2 hover:border-premium-blue hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="group-hover:text-premium-blue transition-colors">
                        {related.name}
                      </CardTitle>
                      <CardDescription>{related.tagline}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Median Price:</strong> {related.quickFacts.medianPrice}</p>
                        <p><strong>Home Sizes:</strong> {related.quickFacts.homeSizes}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-premium-blue to-premium-blue-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore {subdivision.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get personalized guidance and access to current {subdivision.name} listings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold bg-white text-premium-blue hover:bg-gray-100"
              >
                Schedule a Tour
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/down-payment-assistance">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white/10"
              >
                Down Payment Help
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
