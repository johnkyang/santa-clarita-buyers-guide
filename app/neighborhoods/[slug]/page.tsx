import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNeighborhoodBySlug, getNeighborhoodSlugs } from '@/data/neighborhoods'
import { NeighborhoodHero } from '@/components/neighborhoods/neighborhood-hero'
import { NeighborhoodOverview } from '@/components/neighborhoods/neighborhood-overview'
import { NeighborhoodSchools } from '@/components/neighborhoods/neighborhood-schools'
import { NeighborhoodPricing } from '@/components/neighborhoods/neighborhood-pricing'
import { NeighborhoodAmenities } from '@/components/neighborhoods/neighborhood-amenities'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

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
    title: `${neighborhood.name} - Santa Clarita Neighborhood Guide`,
    description: neighborhood.metaDescription,
    keywords: neighborhood.keywords,
    openGraph: {
      title: `${neighborhood.name} - Santa Clarita`,
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
