import type { Neighborhood } from '@/types/neighborhood'

export const valencia: Neighborhood = {
  slug: 'valencia',
  name: 'Valencia',
  tagline: 'A Master-Planned Community with Modern Amenities',
  heroImage: '/images/neighborhoods/valencia-hero.jpg',

  description:
    'Valencia is Santa Clarita\'s flagship master-planned community, setting the standard for thoughtful urban design since the 1960s. Home to over 35,000 residents, Valencia offers an exceptional blend of suburban tranquility and modern convenience. With six distinct neighborhoods ranging from affordable townhomes to luxury hillside estates, Valencia provides options for every lifestyle and budget. The community features award-winning schools (including a perfect 10-rated elementary school), over 2,000 acres of parks and open space, world-class shopping at Westfield Valencia Town Center, and proximity to Six Flags Magic Mountain. Valencia\'s strategic location provides easy freeway access for commuters while maintaining a peaceful, family-oriented atmosphere that has made it one of Southern California\'s most desirable communities for over 50 years.',

  highlights: [
    'Six distinct neighborhoods: Westridge, Bridgeport, Northbridge, Old Orchard, Valencia Meadows, and Valencia Greens',
    'Award-winning schools including Old Orchard Elementary (10/10 rating) and Valencia High School (8/10)',
    'Over 30 parks totaling 2,000+ acres including the iconic 25-acre Bridgeport Lake',
    'Westfield Valencia Town Center with 100+ stores and restaurants',
    'Home to Six Flags Magic Mountain theme park and entertainment complex',
    'Metrolink commuter rail station for easy Los Angeles access',
    'College of the Canyons campus with 20,000+ students',
    'Diverse housing: $500K townhomes to $2.5M+ custom estates',
    'Walkable, bike-friendly neighborhoods with extensive trail systems',
    'Santa Clarita Aquatic Center and numerous recreational facilities',
  ],

  demographics: {
    population: 35000,
    medianAge: 38,
    medianIncome: 95000,
  },

  schools: [
    {
      name: 'Valencia High School',
      type: 'high',
      rating: 8,
      district: 'William S. Hart Union High School District',
      website: 'https://www.hartdistrict.org/valencia',
    },
    {
      name: 'Rancho Pico Junior High',
      type: 'middle',
      rating: 8,
      district: 'William S. Hart Union High School District',
    },
    {
      name: 'Bridgeport Elementary',
      type: 'elementary',
      rating: 9,
      district: 'Newhall School District',
    },
    {
      name: 'Valencia Meadows Elementary',
      type: 'elementary',
      rating: 8,
      district: 'Newhall School District',
    },
  ],

  schoolDistrict: 'Primarily served by William S. Hart Union High School District and Newhall School District',

  priceRanges: {
    singleFamily: {
      min: 650000,
      max: 1500000,
      median: 850000,
      lastUpdated: '2025-01',
    },
    townhome: {
      min: 500000,
      max: 750000,
      median: 625000,
      lastUpdated: '2025-01',
    },
    condo: {
      min: 400000,
      max: 650000,
      median: 525000,
      lastUpdated: '2025-01',
    },
  },

  amenities: [
    {
      name: 'Valencia Town Center',
      description: 'Premier shopping destination with major retailers and restaurants',
      icon: 'shopping-cart',
    },
    {
      name: 'Six Flags Magic Mountain',
      description: 'World-class theme park with thrilling roller coasters',
      icon: 'ticket',
    },
    {
      name: 'Bridgeport Park',
      description: '25-acre park with lake, playgrounds, and sports facilities',
      icon: 'tree-pine',
    },
    {
      name: 'Valencia Marketplace',
      description: 'Shopping center with Whole Foods, Trader Joe\'s, and specialty stores',
      icon: 'store',
    },
    {
      name: 'Santa Clarita Aquatic Center',
      description: 'Olympic-size swimming pool and water park',
      icon: 'waves',
    },
    {
      name: 'Valencia Country Club',
      description: 'Private golf course and country club',
      icon: 'golf',
    },
  ],

  nearbyAttractions: [
    'Six Flags Magic Mountain',
    'Valencia Town Center',
    'Bridgeport Marketplace',
    'College of the Canyons',
    'Santa Clarita Aquatic Center',
    'Mountasia Family Fun Center',
    'Westfield Valencia Town Center',
  ],

  metaDescription:
    'Complete Valencia, CA community guide. Explore 6 distinct neighborhoods (Westridge, Bridgeport, Northbridge), top-rated schools (Old Orchard 10/10), 30+ parks, shopping, dining, commute times, Mello-Roos info, and current home prices ($500K-$2.5M+). Everything you need to know about buying a home in Valencia, Santa Clarita.',

  keywords: [
    'Valencia CA homes for sale',
    'Valencia real estate Santa Clarita',
    'Westridge Valencia homes',
    'Bridgeport Valencia',
    'Northbridge Valencia',
    'Old Orchard Elementary Valencia',
    'Valencia Town Center shopping',
    'Valencia schools ratings',
    'Valencia Mello-Roos',
    'master-planned community Valencia',
    'Valencia home prices 2025',
    'buy home Valencia CA',
    'Valencia neighborhoods guide',
    'Valencia commute Los Angeles',
    'best neighborhoods Valencia',
    'Valencia parks and recreation',
    'Six Flags Magic Mountain homes',
    'College of the Canyons Valencia',
  ],
}
