import type { Neighborhood } from '@/types/neighborhood'

export const valencia: Neighborhood = {
  slug: 'valencia',
  name: 'Valencia',
  tagline: 'A Master-Planned Community with Modern Amenities',
  heroImage: '/images/neighborhoods/valencia-hero.jpg',

  description:
    'Valencia is one of Santa Clarita\'s premier master-planned communities, known for its tree-lined streets, excellent schools, and family-friendly atmosphere. Originally developed in the 1960s, Valencia has grown into a vibrant community offering a perfect blend of suburban comfort and modern conveniences. With its walkable neighborhoods, extensive parks, and proximity to shopping and entertainment, Valencia attracts families, professionals, and retirees alike.',

  highlights: [
    'Master-planned community with extensive parks and trails',
    'Home to Six Flags Magic Mountain',
    'Valencia Town Center for shopping and dining',
    'Award-winning schools in the William S. Hart School District',
    'Easy access to I-5 freeway for commuters',
    'College of the Canyons campus nearby',
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
    'Discover Valencia, Santa Clarita\'s premier master-planned community. Explore homes, schools, amenities, and lifestyle in this family-friendly neighborhood with excellent schools and modern conveniences.',

  keywords: [
    'Valencia CA homes',
    'Valencia real estate',
    'Valencia Santa Clarita',
    'Valencia neighborhoods',
    'Valencia schools',
    'homes for sale Valencia',
    'Valencia master-planned community',
    'Valencia Town Center',
  ],
}
