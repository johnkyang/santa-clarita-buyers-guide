import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import type { Neighborhood } from '@/types/neighborhood'

interface NeighborhoodCardProps {
  neighborhood: Neighborhood
}

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <Link href={`/neighborhoods/${neighborhood.slug}`}>
      <Card className="h-full transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle>{neighborhood.name}</CardTitle>
          <CardDescription>{neighborhood.tagline}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {neighborhood.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {neighborhood.highlights.slice(0, 2).map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight.length > 30 ? `${highlight.substring(0, 30)}...` : highlight}
              </Badge>
            ))}
          </div>

          {neighborhood.priceRanges.singleFamily && (
            <div className="text-sm">
              <span className="font-semibold">From </span>
              <span className="text-primary">
                ${(neighborhood.priceRanges.singleFamily.min / 1000).toFixed(0)}K
              </span>
              <span className="text-muted-foreground"> - </span>
              <span className="text-primary">
                ${(neighborhood.priceRanges.singleFamily.max / 1000000).toFixed(1)}M
              </span>
            </div>
          )}

          <div className="flex items-center text-sm font-medium text-primary">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
