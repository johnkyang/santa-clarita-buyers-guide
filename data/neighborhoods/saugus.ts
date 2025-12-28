import type { Neighborhood } from '@/types/neighborhood'

export const saugus: Neighborhood = {
  slug: 'saugus',
  name: 'Saugus',
  tagline: 'Family-Friendly Living with Excellent Value',
  heroImage: '/images/neighborhoods/saugus-hero.jpg',

  description:
    'Saugus is a well-established, family-oriented community in Santa Clarita known for its excellent schools, affordable housing, and strong sense of community. With mature neighborhoods featuring tree-lined streets and well-maintained homes, Saugus offers a traditional suburban lifestyle. The area is popular among families who value good schools, safe neighborhoods, and convenient access to parks and recreation. Saugus provides excellent value compared to newer Santa Clarita communities while maintaining high quality of life.',

  highlights: [
    'Highly-rated schools including Saugus High School',
    'Mature, tree-lined neighborhoods',
    'Excellent value for single-family homes',
    'Central Park with extensive recreational facilities',
    'Strong community involvement and events',
    'Easy access to I-5 and commuter routes',
  ],

  demographics: {
    population: 32000,
    medianAge: 40,
    medianIncome: 85000,
  },

  schools: [
    {
      name: 'Saugus High School',
      type: 'high',
      rating: 9,
      district: 'William S. Hart Union High School District',
      website: 'https://www.hartdistrict.org/saugus',
    },
    {
      name: 'Arroyo Seco Junior High',
      type: 'middle',
      rating: 8,
      district: 'William S. Hart Union High School District',
    },
    {
      name: 'Emblem Academy',
      type: 'elementary',
      rating: 9,
      district: 'Saugus Union School District',
    },
    {
      name: 'Rosedell Elementary',
      type: 'elementary',
      rating: 8,
      district: 'Saugus Union School District',
    },
    {
      name: 'Highlands Elementary',
      type: 'elementary',
      rating: 8,
      district: 'Saugus Union School District',
    },
  ],

  schoolDistrict: 'Served by William S. Hart Union High School District and Saugus Union School District',

  priceRanges: {
    singleFamily: {
      min: 600000,
      max: 1200000,
      median: 800000,
      lastUpdated: '2025-01',
    },
    townhome: {
      min: 480000,
      max: 700000,
      median: 590000,
      lastUpdated: '2025-01',
    },
    condo: {
      min: 380000,
      max: 580000,
      median: 480000,
      lastUpdated: '2025-01',
    },
  },

  amenities: [
    {
      name: 'Central Park',
      description: '60-acre park with sports fields, playgrounds, and skate park',
      icon: 'layout-template',
    },
    {
      name: 'Saugus Union School District',
      description: 'Award-winning elementary school district',
      icon: 'graduation-cap',
    },
    {
      name: 'Bouquet Canyon Road Shopping',
      description: 'Convenient shopping centers with groceries and services',
      icon: 'shopping-bag',
    },
    {
      name: 'Santa Clarita Sports Complex',
      description: 'Youth and adult sports leagues and facilities',
      icon: 'football',
    },
    {
      name: 'Saugus Cafe',
      description: 'Historic diner and local gathering spot since 1886',
      icon: 'coffee',
    },
    {
      name: 'Community Centers',
      description: 'Multiple recreation centers with programs and activities',
      icon: 'building',
    },
  ],

  nearbyAttractions: [
    'Central Park',
    'Santa Clarita Sports Complex',
    'Bouquet Canyon Regional Park',
    'Saugus Swap Meet',
    'Historic Saugus Cafe',
    'Tesoro Adobe Historic Park',
    'Santa Clarita Public Library - Saugus Branch',
  ],

  metaDescription:
    'Discover Saugus, Santa Clarita\'s family-friendly neighborhood with award-winning schools, mature communities, and excellent home values. Perfect for families seeking quality schools and suburban living.',

  keywords: [
    'Saugus CA homes',
    'Saugus real estate',
    'Saugus Santa Clarita',
    'Saugus schools',
    'Saugus High School',
    'homes for sale Saugus',
    'family-friendly Saugus',
    'Saugus neighborhoods',
  ],
}
