import type { Neighborhood } from '@/types/neighborhood'

export const canyonCountry: Neighborhood = {
  slug: 'canyon-country',
  name: 'Canyon Country',
  tagline: 'Spacious Living with a Rural Feel',
  heroImage: '/images/neighborhoods/canyon-country-hero.jpg',

  description:
    'Canyon Country offers a unique blend of suburban convenience and rural charm in Santa Clarita. Known for its larger lots, equestrian properties, and more affordable housing options, Canyon Country attracts families who desire more space and a relaxed lifestyle. The community features a mix of established neighborhoods and newer developments, with easy access to hiking trails, parks, and natural open spaces. Canyon Country provides excellent value for buyers seeking larger homes and properties while maintaining proximity to Santa Clarita amenities.',

  highlights: [
    'Larger lots and equestrian-friendly properties',
    'More affordable housing than other Santa Clarita areas',
    'Close proximity to Angeles National Forest',
    'Growing retail and dining options',
    'Peaceful, semi-rural atmosphere',
    'Access to excellent hiking and outdoor recreation',
  ],

  demographics: {
    population: 58000,
    medianAge: 36,
    medianIncome: 78000,
  },

  schools: [
    {
      name: 'Canyon High School',
      type: 'high',
      rating: 8,
      district: 'William S. Hart Union High School District',
      website: 'https://www.hartdistrict.org/canyon',
    },
    {
      name: 'Sierra Vista Junior High',
      type: 'middle',
      rating: 7,
      district: 'William S. Hart Union High School District',
    },
    {
      name: 'Golden Valley High School',
      type: 'high',
      rating: 7,
      district: 'William S. Hart Union High School District',
    },
    {
      name: 'Fair Oaks Elementary',
      type: 'elementary',
      rating: 7,
      district: 'Sulphur Springs Union School District',
    },
    {
      name: 'Leona Cox Elementary',
      type: 'elementary',
      rating: 8,
      district: 'Sulphur Springs Union School District',
    },
  ],

  schoolDistrict: 'Served by William S. Hart Union High School District and Sulphur Springs Union School District',

  priceRanges: {
    singleFamily: {
      min: 550000,
      max: 1100000,
      median: 750000,
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
      name: 'Fair Oaks Ranch Park',
      description: 'Large community park with sports facilities and trails',
      icon: 'trees',
    },
    {
      name: 'Soledad Canyon Road',
      description: 'Main commercial corridor with shopping and services',
      icon: 'map-pin',
    },
    {
      name: 'Equestrian Facilities',
      description: 'Numerous horse trails and boarding facilities',
      icon: 'horse',
    },
    {
      name: 'Angeles National Forest',
      description: 'Direct access to hiking, camping, and outdoor recreation',
      icon: 'mountain',
    },
    {
      name: 'Sand Canyon Country Club',
      description: 'Golf course and recreational facilities',
      icon: 'flag',
    },
    {
      name: 'Shopping Centers',
      description: 'Growing selection of retail and dining options',
      icon: 'shopping-cart',
    },
  ],

  nearbyAttractions: [
    'Vasquez Rocks Natural Area Park',
    'Angeles National Forest',
    'Fair Oaks Ranch Park',
    'Sand Canyon Country Club',
    'Canyon Country Community Center',
    'Plum Canyon Trail',
    'Santa Clarita Woodlands Park',
  ],

  metaDescription:
    'Explore Canyon Country homes in Santa Clarita. Find spacious properties, equestrian estates, and affordable housing options in a peaceful setting with easy access to nature and amenities.',

  keywords: [
    'Canyon Country homes',
    'Canyon Country real estate',
    'Canyon Country Santa Clarita',
    'equestrian properties Canyon Country',
    'affordable Santa Clarita homes',
    'Canyon Country neighborhoods',
    'large lot homes Santa Clarita',
  ],
}
