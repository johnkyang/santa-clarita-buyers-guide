import type { Neighborhood } from '@/types/neighborhood'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

interface NeighborhoodAmenitiesProps {
  neighborhood: Neighborhood
}

export function NeighborhoodAmenities({ neighborhood }: NeighborhoodAmenitiesProps) {
  const gradients = [
    'from-premium-blue to-premium-blue-dark',
    'from-premium-orange to-premium-rust',
    'from-premium-green to-emerald-600',
    'from-amber-500 to-orange-600',
    'from-purple-500 to-purple-600',
    'from-pink-500 to-pink-600'
  ]

  return (
    <section className="bg-gradient-to-b from-white to-orange-50/30 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-premium-orange to-premium-rust rounded-2xl flex items-center justify-center">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Amenities & Lifestyle</h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhood.amenities.map((amenity, index) => {
              const gradient = gradients[index % gradients.length]
              return (
                <AnimatedSection key={index} delay={0.05 * (index + 1)}>
                  <Card className="bg-gradient-to-br from-white to-gray-50/50 border-2 border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">{amenity.name}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{amenity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
