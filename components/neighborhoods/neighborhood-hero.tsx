import type { Neighborhood } from '@/types/neighborhood'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, DollarSign } from 'lucide-react'
import { HeroSplit } from '@/components/shared/hero-split'

interface NeighborhoodHeroProps {
  neighborhood: Neighborhood
}

export function NeighborhoodHero({ neighborhood }: NeighborhoodHeroProps) {
  return (
    <HeroSplit
      badge={{
        icon: <MapPin className="w-4 h-4" />,
        text: 'Santa Clarita Neighborhood'
      }}
      title={`${neighborhood.name} - Santa Clarita Community Guide`}
      subtitle={neighborhood.tagline}
      variant="community"
      placeholderTitle={`${neighborhood.name} Community Photo`}
      actions={
        <>
          <Link href="/contact">
            <Button
              size="lg"
              className="group h-14 px-8 text-lg font-bold bg-gradient-to-r from-premium-blue to-premium-blue-dark hover:from-blue-700 hover:to-blue-800 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
            >
              Schedule a Tour
            </Button>
          </Link>
          <Link href="/neighborhoods">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg font-semibold border-2 border-premium-blue text-premium-blue hover:bg-premium-blue hover:text-white transition-all duration-300"
            >
              View All Neighborhoods
            </Button>
          </Link>
        </>
      }
    >
      {/* Price Range Info */}
      {neighborhood.priceRanges.singleFamily && (
        <div className="inline-flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-md border-2 border-blue-100">
          <div className="w-12 h-12 bg-gradient-to-br from-premium-green to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-gray-600">Home Prices</div>
            <div className="text-lg font-bold text-gray-900">
              ${(neighborhood.priceRanges.singleFamily.min / 1000).toFixed(0)}K - $
              {(neighborhood.priceRanges.singleFamily.max / 1000000).toFixed(1)}M
            </div>
          </div>
        </div>
      )}
    </HeroSplit>
  )
}
