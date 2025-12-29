import type { Neighborhood } from '@/types/neighborhood'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface NeighborhoodHeroProps {
  neighborhood: Neighborhood
}

export function NeighborhoodHero({ neighborhood }: NeighborhoodHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {neighborhood.name}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{neighborhood.tagline}</p>

          {neighborhood.priceRanges.singleFamily && (
            <div className="mt-6 text-lg">
              <span className="text-muted-foreground">Homes from </span>
              <span className="font-semibold text-primary">
                ${(neighborhood.priceRanges.singleFamily.min / 1000).toFixed(0)}K
              </span>
              <span className="text-muted-foreground"> to </span>
              <span className="font-semibold text-primary">
                ${(neighborhood.priceRanges.singleFamily.max / 1000000).toFixed(1)}M
              </span>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg">Schedule a Tour</Button>
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
  )
}
