export interface Subdivision {
  slug: string
  name: string
  parentNeighborhood: string // e.g., "valencia", "newhall"
  parentNeighborhoodName: string // e.g., "Valencia", "Newhall"
  tagline: string
  heroImage?: string

  // Overview
  description: string
  established: string
  totalHomes: number

  // Quick Facts
  quickFacts: {
    location: string
    hoaFee: string
    medianPrice: string
    lotSizes: string
    homeSizes: string
  }

  // Schools
  schools: {
    elementary: SchoolInfo[]
    middle: SchoolInfo[]
    high: SchoolInfo[]
  }

  // Amenities
  amenities: SubdivisionAmenity[]

  // Home Styles
  homeStyles: HomeStyle[]

  // HOA Information
  hoa: {
    monthlyFee: string
    included: string[]
    restrictions: string[]
  }

  // Market Data
  marketData: {
    recentSales: {
      last30Days: number
      averagePrice: string
      averageDays: number
      saleToListRatio: string
    }
    inventory: {
      activeListings: number
      inEscrow: number
    }
    priceHistory: {
      year: number
      medianPrice: string
      yoyChange: string
    }[]
  }

  // Pros & Cons
  pros: string[]
  cons: string[]

  // Who Should Consider
  perfectFor: string[]
  maybeNotFor: string[]

  // Nearby Alternatives
  alternatives: {
    name: string
    reason: string
  }[]

  // SEO
  metaDescription: string
  keywords: string[]
}

export interface SchoolInfo {
  name: string
  rating: string
  distance: string
  highlights: string[]
}

export interface SubdivisionAmenity {
  name: string
  description: string
  icon?: string
}

export interface HomeStyle {
  builder: string
  squareFeet: string
  bedrooms: string
  bathrooms: string
  style: string
  lotSize: string
  priceRange: string
  features: string[]
}
