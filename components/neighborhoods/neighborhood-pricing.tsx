import type { Neighborhood } from '@/types/neighborhood'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Home, Building, Building2 } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

interface NeighborhoodPricingProps {
  neighborhood: Neighborhood
}

export function NeighborhoodPricing({ neighborhood }: NeighborhoodPricingProps) {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(2)}M`
    }
    return `$${(price / 1000).toFixed(0)}K`
  }

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  const propertyTypeColors = {
    singleFamily: { gradient: 'from-premium-blue to-premium-blue-dark', bg: 'from-blue-50 to-white', border: 'border-blue-100' },
    townhome: { gradient: 'from-premium-orange to-premium-rust', bg: 'from-orange-50 to-white', border: 'border-orange-100' },
    condo: { gradient: 'from-premium-green to-emerald-600', bg: 'from-green-50 to-white', border: 'border-green-100' }
  }

  return (
    <section className="bg-gradient-to-b from-blue-50/30 to-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-premium-green to-emerald-600 rounded-2xl flex items-center justify-center">
                <DollarSign className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Price Ranges & Market Data</h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {neighborhood.priceRanges.singleFamily && (
              <AnimatedSection delay={0.1}>
                <Card className={`bg-gradient-to-br ${propertyTypeColors.singleFamily.bg} border-2 ${propertyTypeColors.singleFamily.border} shadow-md hover:shadow-lg transition-all duration-300 h-full`}>
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${propertyTypeColors.singleFamily.gradient} rounded-xl flex items-center justify-center mb-3`}>
                      <Home className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Single Family Homes</CardTitle>
                    <CardDescription className="text-gray-600">Detached homes with yards</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">Price Range</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {formatPrice(neighborhood.priceRanges.singleFamily.min)} -{' '}
                        {formatPrice(neighborhood.priceRanges.singleFamily.max)}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-sm font-medium text-gray-600 mb-1">Median Price</div>
                      <div className="text-2xl font-bold text-premium-blue">
                        {formatPrice(neighborhood.priceRanges.singleFamily.median)}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Updated: {formatDate(neighborhood.priceRanges.singleFamily.lastUpdated)}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}

            {neighborhood.priceRanges.townhome && (
              <AnimatedSection delay={0.15}>
                <Card className={`bg-gradient-to-br ${propertyTypeColors.townhome.bg} border-2 ${propertyTypeColors.townhome.border} shadow-md hover:shadow-lg transition-all duration-300 h-full`}>
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${propertyTypeColors.townhome.gradient} rounded-xl flex items-center justify-center mb-3`}>
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Townhomes</CardTitle>
                    <CardDescription className="text-gray-600">Attached multi-level homes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">Price Range</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {formatPrice(neighborhood.priceRanges.townhome.min)} -{' '}
                        {formatPrice(neighborhood.priceRanges.townhome.max)}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-sm font-medium text-gray-600 mb-1">Median Price</div>
                      <div className="text-2xl font-bold text-premium-orange">
                        {formatPrice(neighborhood.priceRanges.townhome.median)}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Updated: {formatDate(neighborhood.priceRanges.townhome.lastUpdated)}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}

            {neighborhood.priceRanges.condo && (
              <AnimatedSection delay={0.2}>
                <Card className={`bg-gradient-to-br ${propertyTypeColors.condo.bg} border-2 ${propertyTypeColors.condo.border} shadow-md hover:shadow-lg transition-all duration-300 h-full`}>
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${propertyTypeColors.condo.gradient} rounded-xl flex items-center justify-center mb-3`}>
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Condominiums</CardTitle>
                    <CardDescription className="text-gray-600">Low-maintenance units</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">Price Range</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {formatPrice(neighborhood.priceRanges.condo.min)} -{' '}
                        {formatPrice(neighborhood.priceRanges.condo.max)}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-sm font-medium text-gray-600 mb-1">Median Price</div>
                      <div className="text-2xl font-bold text-premium-green">
                        {formatPrice(neighborhood.priceRanges.condo.median)}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Updated: {formatDate(neighborhood.priceRanges.condo.lastUpdated)}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}
          </div>

          <AnimatedSection delay={0.25}>
            <div className="mt-8 bg-blue-50 border-2 border-blue-100 rounded-xl p-4">
              <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold">Note:</span> Prices are estimates based on recent market data and may vary. Contact us for current listings and accurate pricing information.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
