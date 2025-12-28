import { Metadata } from 'next'
import { neighborhoods } from '@/data/neighborhoods'
import { NeighborhoodCard } from '@/components/neighborhoods/neighborhood-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Santa Clarita Neighborhoods',
  description:
    'Explore all Santa Clarita neighborhoods including Valencia, Newhall, Saugus, Canyon Country, Stevenson Ranch, and Castaic. Compare schools, prices, and amenities.',
}

export default function NeighborhoodsPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Santa Clarita Neighborhoods
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover the unique character, amenities, and lifestyle of each Santa Clarita
          neighborhood. From historic charm to modern luxury, find the perfect community for your
          family.
        </p>
      </section>

      {/* Neighborhoods Grid */}
      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodCard key={neighborhood.slug} neighborhood={neighborhood} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-16 max-w-2xl rounded-lg border bg-muted/50 p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to Find Your Home?</h2>
        <p className="mt-2 text-muted-foreground">
          Let us help you explore these neighborhoods in person and find the perfect home for your
          needs.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/contact">
            <Button size="lg">Schedule a Tour</Button>
          </Link>
          <Link href="/guides">
            <Button size="lg" variant="outline">
              View Buyer Guides
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
