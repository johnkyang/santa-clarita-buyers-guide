import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNeighborhoodBySlug, getNeighborhoodSlugs } from '@/data/neighborhoods'
import { getSubdivisionsByNeighborhood } from '@/data/subdivisions'
import { NeighborhoodHero } from '@/components/neighborhoods/neighborhood-hero'
import { NeighborhoodOverview } from '@/components/neighborhoods/neighborhood-overview'
import { NeighborhoodSchools } from '@/components/neighborhoods/neighborhood-schools'
import { NeighborhoodPricing } from '@/components/neighborhoods/neighborhood-pricing'
import { NeighborhoodAmenities } from '@/components/neighborhoods/neighborhood-amenities'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { MapPin, Home, ArrowRight } from 'lucide-react'

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

  return (
    <div>
      <NeighborhoodHero neighborhood={neighborhood} />

      <NeighborhoodOverview neighborhood={neighborhood} />

      <Separator />

      <NeighborhoodSchools neighborhood={neighborhood} />

      <Separator />

      <NeighborhoodPricing neighborhood={neighborhood} />

      <Separator />

      <NeighborhoodAmenities neighborhood={neighborhood} />

      {/* Subdivisions Section */}
      {subdivisions.length > 0 && (
        <>
          <Separator />
          <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-8 h-8 text-premium-blue" />
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
                    <Card className="h-full border-2 hover:border-premium-blue hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Home className="w-6 h-6 text-premium-blue" />
                          <Badge className="bg-premium-blue text-white">
                            {subdivision.quickFacts.medianPrice}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-premium-blue transition-colors">
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
                          className="w-full group-hover:bg-premium-blue group-hover:text-white group-hover:border-premium-blue transition-all"
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
