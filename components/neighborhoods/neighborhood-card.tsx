import Link from 'next/link'
import { MapPin, TrendingUp } from 'lucide-react'
import type { Neighborhood } from '@/types/neighborhood'

interface NeighborhoodCardProps {
  neighborhood: Neighborhood
}

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  const minPrice = neighborhood.priceRanges.singleFamily?.min
  const maxPrice = neighborhood.priceRanges.singleFamily?.max

  const { daysOnMarket, walkScore, schoolRating } = neighborhood

  return (
    <Link href={`/neighborhoods/${neighborhood.slug}`} className="group block">
      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:scale-[1.02]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200')`,
          }}
          role="img"
          aria-label={`${neighborhood.name} neighborhood in Santa Clarita`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />

        {/* Price Badge */}
        {minPrice && maxPrice && (
          <div className="absolute top-6 right-6 z-10">
            <div className="bg-navy-700 text-white px-5 py-3 rounded-2xl shadow-premium backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <div className="text-sm font-semibold">
                  ${(minPrice / 1000).toFixed(0)}K - ${(maxPrice / 1000000).toFixed(1)}M
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hover tooltip — 3 stats, centered over image */}
        {(daysOnMarket !== undefined || walkScore !== undefined || schoolRating) && (
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="rounded-xl border border-gold-700/50 mx-auto max-w-[280px]"
              style={{ backdropFilter: 'blur(12px)', background: 'rgba(10,18,38,0.80)' }}
            >
              <div className="grid grid-cols-3">
                {daysOnMarket !== undefined && (
                  <div className="flex flex-col items-center text-center py-4 px-2 border-r border-white/20">
                    <span className="material-symbols-outlined text-gold-700 mb-1" style={{ fontSize: 18 }}>calendar_today</span>
                    <span className="font-display text-gold-700 font-bold text-xl leading-none mb-0.5">{daysOnMarket}</span>
                    <span className="text-[9px] text-white/60 uppercase tracking-wider leading-tight">Days on Market</span>
                  </div>
                )}
                {walkScore !== undefined && (
                  <div className="flex flex-col items-center text-center py-4 px-2 border-r border-white/20">
                    <span className="material-symbols-outlined text-gold-700 mb-1" style={{ fontSize: 18 }}>directions_walk</span>
                    <span className="font-display text-gold-700 font-bold text-xl leading-none mb-0.5">{walkScore}</span>
                    <span className="text-[9px] text-white/60 uppercase tracking-wider leading-tight">Walk Score</span>
                  </div>
                )}
                {schoolRating && (
                  <div className="flex flex-col items-center text-center py-4 px-2">
                    <span className="material-symbols-outlined text-gold-700 mb-1" style={{ fontSize: 18 }}>school</span>
                    <span className="font-display text-gold-700 font-bold text-xl leading-none mb-0.5">{schoolRating}</span>
                    <span className="text-[9px] text-white/60 uppercase tracking-wider leading-tight">School Rating</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">

          {/* Frosted location tag */}
          <div className="mb-4">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium"
              style={{ backdropFilter: 'blur(6px)', background: 'rgba(10,18,38,0.60)' }}
            >
              <MapPin className="h-3 w-3 text-gold-700" />
              Santa Clarita
            </div>
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-600/90 text-white text-xs font-medium backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {highlight.length > 25 ? `${highlight.substring(0, 25)}...` : highlight}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span>Explore {neighborhood.name}</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2" style={{ fontSize: 20 }}>arrow_forward</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
