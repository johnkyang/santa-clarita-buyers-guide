export interface School {
  name: string
  type: 'elementary' | 'middle' | 'high' | 'private'
  rating?: number
  district?: string
  website?: string
}

export interface PriceRange {
  min: number
  max: number
  median: number
  lastUpdated: string
}

export interface Amenity {
  name: string
  description: string
  icon: string
}

export interface Neighborhood {
  slug: string
  name: string
  tagline: string
  heroImage: string

  // Overview
  description: string
  highlights: string[]
  demographics?: {
    population?: number
    medianAge?: number
    medianIncome?: number
  }

  // Schools
  schools: School[]
  schoolDistrict: string

  // Pricing
  priceRanges: {
    singleFamily: PriceRange
    townhome?: PriceRange
    condo?: PriceRange
  }

  // Amenities
  amenities: Amenity[]
  nearbyAttractions: string[]

  // SEO
  metaDescription: string
  keywords: string[]
}
