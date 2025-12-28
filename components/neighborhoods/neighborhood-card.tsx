import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react'
import type { Neighborhood } from '@/types/neighborhood'

interface NeighborhoodCardProps {
  neighborhood: Neighborhood
}

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  const minPrice = neighborhood.priceRanges.singleFamily?.min
  const maxPrice = neighborhood.priceRanges.singleFamily?.max

  return (
    <Link href={`/neighborhoods/${neighborhood.slug}`} className="group block">
      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:scale-[1.02]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />

        {/* Price Badge */}
        {minPrice && maxPrice && (
          <div className="absolute top-6 right-6 z-10">
            <div className="bg-premium-blue text-white px-5 py-3 rounded-2xl shadow-premium backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <div className="text-sm font-semibold">
                  ${(minPrice / 1000).toFixed(0)}K - ${(maxPrice / 1000000).toFixed(1)}M
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          {/* Location Badge */}
          <div className="mb-4">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-3 py-1.5">
              <MapPin className="h-3 w-3 mr-1.5" />
              Santa Clarita
            </Badge>
          </div>

          {/* Title */}
          <h3 className="font-display text-3xl font-bold text-white mb-3 transition-transform duration-500 group-hover:translate-x-2">
            {neighborhood.name}
          </h3>

          {/* Tagline */}
          <p className="text-white/90 text-lg mb-6 line-clamp-2">
            {neighborhood.tagline}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-6">
            {neighborhood.highlights.slice(0, 2).map((highlight, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-premium-orange/90 text-white text-xs font-medium backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {highlight.length > 25 ? `${highlight.substring(0, 25)}...` : highlight}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span>Explore {neighborhood.name}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  )
}
