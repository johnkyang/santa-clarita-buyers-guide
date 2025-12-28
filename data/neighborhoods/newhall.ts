import type { Neighborhood } from '@/types/neighborhood'

export const newhall: Neighborhood = {
  slug: 'newhall',
  name: 'Newhall',
  tagline: 'Historic Charm Meets Modern Living',
  heroImage: '/images/neighborhoods/newhall-hero.jpg',

  description:
    'Newhall is the historic heart of Santa Clarita, offering a unique blend of old-town charm and modern amenities. As the oldest community in the Santa Clarita Valley, Newhall features tree-lined streets, historic buildings, and a walkable downtown area. The neighborhood has undergone significant revitalization in recent years, attracting young professionals, families, and artists who appreciate its authentic character and affordable housing options compared to other Santa Clarita neighborhoods.',

  highlights: [
    'Historic downtown with charming Main Street',
    'Affordable housing options with character',
    'Walkable neighborhoods and local businesses',
    'Hart Park with museums and recreational facilities',
    'Growing arts and culture scene',
    'Close proximity to Old Road and local amenities',
  ],

  demographics: {
    population: 28000,
    medianAge: 35,
    medianIncome: 75000,
  },

  schools: [
    {
      name: 'Hart High School',
      type: 'high',
      rating: 7,
      district: 'William S. Hart Union High School District',
      website: 'https://www.hartdistrict.org/hart',
    },
    {
      name: 'Placerita Junior High',
      type: 'middle',
      rating: 7,
      district: 'William S. Hart Union High School District',
    },
    {
      name: 'Newhall Elementary',
      type: 'elementary',
      rating: 7,
      district: 'Newhall School District',
    },
    {
      name: 'Oak Hills Elementary',
      type: 'elementary',
      rating: 8,
      district: 'Newhall School District',
    },
  ],

  schoolDistrict: 'Served by William S. Hart Union High School District and Newhall School District',

  priceRanges: {
    singleFamily: {
      min: 550000,
      max: 950000,
      median: 700000,
      lastUpdated: '2025-01',
    },
    townhome: {
      min: 450000,
      max: 650000,
      median: 550000,
      lastUpdated: '2025-01',
    },
    condo: {
      min: 350000,
      max: 550000,
      median: 450000,
      lastUpdated: '2025-01',
    },
  },

  amenities: [
    {
      name: 'Historic Main Street',
      description: 'Charming downtown with local shops, cafes, and restaurants',
      icon: 'building-2',
    },
    {
      name: 'Hart Park',
      description: 'Large park with Heritage Junction museums and sports fields',
      icon: 'tree-deciduous',
    },
    {
      name: 'Newhall Library',
      description: 'Santa Clarita Public Library branch with community programs',
      icon: 'book-open',
    },
    {
      name: 'Farmers Market',
      description: 'Weekly farmers market featuring local produce and vendors',
      icon: 'shopping-basket',
    },
    {
      name: 'Gateway Center',
      description: 'Shopping and dining complex along The Old Road',
      icon: 'store',
    },
    {
      name: 'Walk of Western Stars',
      description: 'Historic tribute to Western film and TV stars',
      icon: 'star',
    },
  ],

  nearbyAttractions: [
    'William S. Hart Museum',
    'Heritage Junction Historic Park',
    'The MAIN (Main Street Arts Initiative)',
    'Newhall Farmers Market',
    'Gateway Center',
    'Hart Park',
    'Saugus Speedway Swap Meet',
  ],

  metaDescription:
    'Explore Newhall, Santa Clarita\'s historic downtown neighborhood. Find homes with character, local amenities, excellent schools, and a vibrant community atmosphere at affordable prices.',

  keywords: [
    'Newhall CA homes',
    'Newhall real estate',
    'Newhall Santa Clarita',
    'historic Newhall',
    'Newhall downtown',
    'homes for sale Newhall',
    'affordable Santa Clarita homes',
    'Newhall Main Street',
  ],
}
