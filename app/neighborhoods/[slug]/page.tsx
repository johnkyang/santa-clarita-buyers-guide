import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNeighborhoodBySlug, getNeighborhoodSlugs } from '@/data/neighborhoods'
import { getSubdivisionsByNeighborhood } from '@/data/subdivisions'
import { NeighborhoodHero } from '@/components/neighborhoods/neighborhood-hero'
import { NeighborhoodOverview } from '@/components/neighborhoods/neighborhood-overview'
import { NeighborhoodSchools } from '@/components/neighborhoods/neighborhood-schools'
import { NeighborhoodPricing } from '@/components/neighborhoods/neighborhood-pricing'
import { NeighborhoodAmenities } from '@/components/neighborhoods/neighborhood-amenities'
import { NeighborhoodFAQs } from '@/components/neighborhoods/neighborhood-faqs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { MapPin, Home, ArrowRight } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/schema'

interface NeighborhoodPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all neighborhoods
export async function generateStaticParams() {
  const slugs = getNeighborhoodSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// Generate metadata for each neighborhood
export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
  const neighborhood = getNeighborhoodBySlug(params.slug)

  if (!neighborhood) {
    return {}
  }

  return {
    title: `${neighborhood.name} Community Guide`,
    description: neighborhood.metaDescription,
    keywords: neighborhood.keywords,
    openGraph: {
      title: `${neighborhood.name} Community Guide`,
      description: neighborhood.metaDescription,
      type: 'website',
    },
  }
}

export default function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const neighborhood = getNeighborhoodBySlug(params.slug)

  if (!neighborhood) {
    notFound()
  }

  const subdivisions = getSubdivisionsByNeighborhood(params.slug)

  // Generate BreadcrumbList schema: Home > Neighborhoods > [Neighborhood Name]
  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { label: 'Neighborhoods', href: '/neighborhoods' },
      { label: neighborhood.name, href: `/neighborhoods/${params.slug}` },
    ],
  })

  return (
    <div>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <NeighborhoodHero neighborhood={neighborhood} />

      <NeighborhoodOverview neighborhood={neighborhood} />

      <Separator />

      <NeighborhoodSchools neighborhood={neighborhood} />

      <Separator />

      <NeighborhoodPricing neighborhood={neighborhood} />

      <Separator />

      <NeighborhoodAmenities neighborhood={neighborhood} />

      {/* FAQs Section */}
      {neighborhood.faqs && neighborhood.faqs.length > 0 && (
        <>
          <Separator />
          <NeighborhoodFAQs faqs={neighborhood.faqs} neighborhoodName={neighborhood.name} />
        </>
      )}

      {/* Subdivisions Section */}
      {subdivisions.length > 0 && (
        <>
          <Separator />
          <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-8 h-8 text-navy-700" />
                <h2 className="text-3xl font-bold">Explore {neighborhood.name} Neighborhoods</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Dive deeper into specific communities within {neighborhood.name}
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subdivisions.map((subdivision) => (
                  <Link
                    key={subdivision.slug}
                    href={`/neighborhoods/${params.slug}/${subdivision.slug}`}
                    className="group"
                  >
                    <Card className="h-full border-2 hover:border-navy-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Home className="w-6 h-6 text-navy-700" />
                          <Badge className="bg-navy-700 text-white">
                            {subdivision.quickFacts.medianPrice}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-navy-700 transition-colors">
                          {subdivision.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {subdivision.tagline}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Home Sizes:</span>
                            <span className="font-medium">{subdivision.quickFacts.homeSizes}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">HOA:</span>
                            <span className="font-medium">{subdivision.quickFacts.hoaFee}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Homes:</span>
                            <span className="font-medium">{subdivision.totalHomes.toLocaleString()}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-navy-700 group-hover:text-white group-hover:border-navy-700 transition-all"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Pelona Hills New Construction Spotlight — Canyon Country only */}
      {params.slug === 'canyon-country' && (
        <>
          <Separator />
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                New Construction — Grand Opening March 28, 2026
              </div>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-3">Pelona Hills by Intracorp Homes</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    119 brand-new single-family homes in Sand Canyon with 360° valley views and <strong>no Mello-Roos</strong> — one of the only new construction communities in Santa Clarita without this assessment.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      '119 homes · 1,830–2,191 sq ft · 3–4 bed',
                      'No Mello-Roos (saves $300–$600/month vs. other new builds)',
                      'Walking distance to Sand Canyon Village (Sprouts, Starbucks)',
                      'Near Vista Canyon Metrolink station',
                      'Early California architecture · 2-car garage',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-amber-500 font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/pelona-hills">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-8">
                      View Pelona Hills Community Page
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4 text-amber-400">Get Pre-Approval Info</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Contact John Yang before the Grand Opening to understand your buying power, total monthly cost with HOA included, and how to position your offer.
                  </p>
                  <a
                    href="tel:8184456354"
                    className="flex items-center gap-3 bg-amber-500 hover:bg-amber-400 transition-colors px-6 py-4 rounded-xl font-bold text-slate-900 mb-4"
                  >
                    <Home className="w-5 h-5" />
                    Call John: (818) 445-6354
                  </a>
                  <Link
                    href="/pelona-hills#contact"
                    className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 transition-colors px-6 py-3 rounded-xl text-sm font-semibold text-white/80"
                  >
                    Or fill out the contact form →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold">Interested in {neighborhood.name}?</h2>
            <p className="mt-2 text-muted-foreground">
              Let us help you find the perfect home in this wonderful community.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/neighborhoods">
                <Button size="lg" variant="outline">
                  View All Neighborhoods
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
