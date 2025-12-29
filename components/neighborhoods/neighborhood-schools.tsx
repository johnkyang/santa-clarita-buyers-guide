import type { Neighborhood } from '@/types/neighborhood'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Star } from 'lucide-react'

interface NeighborhoodSchoolsProps {
  neighborhood: Neighborhood
}

export function NeighborhoodSchools({ neighborhood }: NeighborhoodSchoolsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Schools & Education</h2>
        </div>

        <p className="mt-4 text-muted-foreground">{neighborhood.schoolDistrict}</p>

        <div className="mt-8 grid gap-4">
          {neighborhood.schools.map((school, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{school.name}</CardTitle>
                    {school.district && (
                      <p className="mt-1 text-sm text-muted-foreground">{school.district}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={school.type === 'elementary' ? 'default' : 'secondary'}>
                      {school.type.charAt(0).toUpperCase() + school.type.slice(1)}
                    </Badge>
                    {school.rating && (
                      <div className="flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-sm font-semibold text-primary-foreground">
                        <Star className="h-3 w-3 fill-current" />
                        {school.rating}/10
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {neighborhood.nearbyAttractions && neighborhood.nearbyAttractions.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Nearby Attractions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 sm:grid-cols-2">
                {neighborhood.nearbyAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span className="text-sm">{attraction}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
