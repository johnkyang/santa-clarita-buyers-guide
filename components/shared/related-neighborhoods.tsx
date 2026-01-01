import Link from 'next/link'
import { ArrowRight, MapPin, Home } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface RelatedNeighborhood {
  name: string
  slug: string
  tagline: string
  priceRange?: string
  highlights?: string[]
}

interface RelatedNeighborhoodsProps {
  neighborhoods: RelatedNeighborhood[]
  title?: string
  description?: string
}

export function RelatedNeighborhoods({
  neighborhoods,
  title = 'Explore Santa Clarita Neighborhoods',
  description,
}: RelatedNeighborhoodsProps) {
  if (!neighborhoods || neighborhoods.length === 0) return null

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-premium-green to-emerald-600 rounded-xl flex items-center justify-center">
              <Home className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((neighborhood, index) => (
            <Link key={index} href={`/neighborhoods/${neighborhood.slug}`} className="group">
              <Card className="h-full bg-white border-2 border-green-100 hover:border-premium-green hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-premium-green flex-shrink-0" />
                      <CardTitle className="text-xl text-gray-900 group-hover:text-premium-green transition-colors">
                        {neighborhood.name}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {neighborhood.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {neighborhood.priceRange && (
                    <Badge className="mb-3 bg-premium-green text-white hover:bg-emerald-700">
                      {neighborhood.priceRange}
                    </Badge>
                  )}
                  {neighborhood.highlights && neighborhood.highlights.length > 0 && (
                    <ul className="space-y-1 mb-4">
                      {neighborhood.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1 w-1.5 h-1.5 bg-premium-green rounded-full flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-premium-green group-hover:text-white transition-all"
                  >
                    Explore {neighborhood.name}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/neighborhoods">
            <Button
              size="lg"
              className="bg-gradient-to-r from-premium-green to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg"
            >
              View All Neighborhoods
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
