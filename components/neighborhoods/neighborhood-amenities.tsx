import type { Neighborhood } from '@/types/neighborhood'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin } from 'lucide-react'

interface NeighborhoodAmenitiesProps {
  neighborhood: Neighborhood
}

export function NeighborhoodAmenities({ neighborhood }: NeighborhoodAmenitiesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Amenities & Lifestyle</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {neighborhood.amenities.map((amenity, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <div className="h-6 w-6 text-primary">
                      {/* Icon placeholder - in a real app, you'd map icon names to actual icons */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{amenity.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{amenity.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
