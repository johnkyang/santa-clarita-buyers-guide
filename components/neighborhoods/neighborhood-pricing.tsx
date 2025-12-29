import type { Neighborhood } from '@/types/neighborhood'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

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

  return (
    <section className="bg-muted/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Price Ranges & Market Data</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {neighborhood.priceRanges.singleFamily && (
              <Card>
                <CardHeader>
                  <CardTitle>Single Family Homes</CardTitle>
                  <CardDescription>Detached homes with yards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Price Range</div>
                    <div className="text-lg font-semibold">
                      {formatPrice(neighborhood.priceRanges.singleFamily.min)} -{' '}
                      {formatPrice(neighborhood.priceRanges.singleFamily.max)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Median Price</div>
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(neighborhood.priceRanges.singleFamily.median)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Updated: {formatDate(neighborhood.priceRanges.singleFamily.lastUpdated)}
                  </div>
                </CardContent>
              </Card>
            )}

            {neighborhood.priceRanges.townhome && (
              <Card>
                <CardHeader>
                  <CardTitle>Townhomes</CardTitle>
                  <CardDescription>Attached multi-level homes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Price Range</div>
                    <div className="text-lg font-semibold">
                      {formatPrice(neighborhood.priceRanges.townhome.min)} -{' '}
                      {formatPrice(neighborhood.priceRanges.townhome.max)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Median Price</div>
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(neighborhood.priceRanges.townhome.median)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Updated: {formatDate(neighborhood.priceRanges.townhome.lastUpdated)}
                  </div>
                </CardContent>
              </Card>
            )}

            {neighborhood.priceRanges.condo && (
              <Card>
                <CardHeader>
                  <CardTitle>Condominiums</CardTitle>
                  <CardDescription>Low-maintenance units</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Price Range</div>
                    <div className="text-lg font-semibold">
                      {formatPrice(neighborhood.priceRanges.condo.min)} -{' '}
                      {formatPrice(neighborhood.priceRanges.condo.max)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Median Price</div>
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(neighborhood.priceRanges.condo.median)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Updated: {formatDate(neighborhood.priceRanges.condo.lastUpdated)}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Prices are estimates based on recent market data and may vary. Contact us for current
            listings and accurate pricing information.
          </p>
        </div>
      </div>
    </section>
  )
}
