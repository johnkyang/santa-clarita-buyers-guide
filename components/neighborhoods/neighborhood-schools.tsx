import type { Neighborhood } from '@/types/neighborhood'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Star, MapPin } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'
import { SchoolSchema } from '@/components/shared/school-schema'

interface NeighborhoodSchoolsProps {
  neighborhood: Neighborhood
}

export function NeighborhoodSchools({ neighborhood }: NeighborhoodSchoolsProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <SchoolSchema schools={neighborhood.schools} neighborhoodName={neighborhood.name} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-premium-blue to-premium-blue-dark rounded-2xl flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Schools & Education</h2>
            </div>

            <p className="text-lg text-gray-600 mb-8">{neighborhood.schoolDistrict}</p>
          </AnimatedSection>

          <div className="grid gap-6">
            {neighborhood.schools.map((school, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <Card className="bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">{school.name}</CardTitle>
                        {school.district && (
                          <p className="text-sm text-gray-600">{school.district}</p>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
                        <Badge
                          variant={school.type === 'elementary' ? 'default' : 'secondary'}
                          className="bg-gradient-to-r from-premium-orange to-premium-rust text-white border-0"
                        >
                          {school.type.charAt(0).toUpperCase() + school.type.slice(1)}
                        </Badge>
                        {school.rating && (
                          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1.5 text-sm font-bold text-white shadow-md">
                            <Star className="h-4 w-4 fill-current" />
                            {school.rating}/10
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {neighborhood.nearbyAttractions && neighborhood.nearbyAttractions.length > 0 && (
            <AnimatedSection delay={0.2}>
              <Card className="mt-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-100 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-premium-green to-emerald-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Nearby Attractions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {neighborhood.nearbyAttractions.map((attraction, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-gradient-to-br from-premium-green to-emerald-600 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-700">{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  )
}
