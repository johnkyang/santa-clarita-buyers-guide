import type { Neighborhood } from '@/types/neighborhood'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Users, DollarSign, Calendar } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

interface NeighborhoodOverviewProps {
  neighborhood: Neighborhood
}

export function NeighborhoodOverview({ neighborhood }: NeighborhoodOverviewProps) {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About {neighborhood.name}
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-600">
              {neighborhood.description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="mt-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Community Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {neighborhood.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-gradient-to-br from-premium-green to-emerald-600 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {neighborhood.demographics && (
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {neighborhood.demographics.population && (
                <AnimatedSection delay={0.15}>
                  <Card className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-premium-blue to-premium-blue-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {neighborhood.demographics.population.toLocaleString()}
                      </div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Population
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}
              {neighborhood.demographics.medianAge && (
                <AnimatedSection delay={0.2}>
                  <Card className="bg-gradient-to-br from-white to-orange-50 border-2 border-orange-100 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-premium-orange to-premium-rust rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {neighborhood.demographics.medianAge}
                      </div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Median Age
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}
              {neighborhood.demographics.medianIncome && (
                <AnimatedSection delay={0.25}>
                  <Card className="bg-gradient-to-br from-white to-green-50 border-2 border-green-100 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-premium-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        ${(neighborhood.demographics.medianIncome / 1000).toFixed(0)}K
                      </div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Median Income
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
