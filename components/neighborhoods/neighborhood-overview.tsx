import type { Neighborhood } from '@/types/neighborhood'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

interface NeighborhoodOverviewProps {
  neighborhood: Neighborhood
}

export function NeighborhoodOverview({ neighborhood }: NeighborhoodOverviewProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold">Overview</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {neighborhood.description}
        </p>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              {neighborhood.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {neighborhood.demographics && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {neighborhood.demographics.population && (
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">
                    {neighborhood.demographics.population.toLocaleString()}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Population</div>
                </CardContent>
              </Card>
            )}
            {neighborhood.demographics.medianAge && (
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">
                    {neighborhood.demographics.medianAge}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Median Age</div>
                </CardContent>
              </Card>
            )}
            {neighborhood.demographics.medianIncome && (
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">
                    ${(neighborhood.demographics.medianIncome / 1000).toFixed(0)}K
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Median Income</div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
