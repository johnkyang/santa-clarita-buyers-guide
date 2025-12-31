import type { Neighborhood } from '@/types/neighborhood'

export const stevensonRanch: Neighborhood = {
  slug: 'stevenson-ranch',
  name: 'Stevenson Ranch',
  tagline: 'Upscale Living in a Gated Community',
  heroImage: '/images/neighborhoods/stevenson-ranch-hero.jpg',

  description:
    'Stevenson Ranch stands as Santa Clarita Valley\'s most prestigious master-planned community, offering an unparalleled blend of luxury, security, and resort-style living. Developed in the 1990s on 6,000 acres of rolling hills, this exclusive community features predominantly gated neighborhoods with meticulously maintained landscapes, mature trees, and architectural diversity ranging from Mediterranean villas to contemporary estates. Home to approximately 18,000 residents, Stevenson Ranch commands premium prices ($850K-$2.5M+) justified by exceptional amenities including The Centre—a world-class 42,000 square-foot recreation facility, three championship golf courses nearby, award-winning schools (West Ranch High rated 9/10, Old Orchard Elementary rated 10/10), and an extensive network of private parks and trails. The community attracts affluent professionals, executives, and families seeking privacy, prestige, and a refined lifestyle just minutes from major employment centers. With its gated entries, 24-hour security, and strict architectural standards enforced by HOAs, Stevenson Ranch delivers the exclusivity and property value protection that discerning buyers demand.',

  highlights: [
    'Predominantly gated communities with 24-hour security and controlled access',
    'The Centre: 42,000 sq ft resort-style recreation center with pools, fitness, tennis, and event spaces',
    'Award-winning schools: West Ranch High (9/10), Old Orchard Elementary (10/10), Pico Canyon Elementary (9/10)',
    'Meticulously maintained landscapes with mature trees and professional HOA management',
    'Low-density development: larger lots (6,000-15,000+ sq ft) with privacy and space',
    'Three nearby championship golf courses: Robinson Ranch, Valencia Country Club access',
    'Stevenson Ranch Library: Modern facility with extensive programs and resources',
    'Upscale home prices ($850K-$2.5M+) with strong appreciation history',
    'Strict architectural guidelines ensuring property value protection',
    'Extensive trail system connecting neighborhoods to parks and recreation',
    'The Marketplace at Stevenson Ranch: Sprouts, dining, services',
    'Quick access to I-5 and Valencia (5-10 minutes) while maintaining peaceful setting',
  ],

  demographics: {
    population: 18000,
    medianAge: 42,
    medianIncome: 125000,
  },

  schools: [
    {
      name: 'West Ranch High School',
      type: 'high',
      rating: 9,
      district: 'William S. Hart Union High School District',
      website: 'https://www.hartdistrict.org/westranch',
    },
    {
      name: 'Rancho Pico Junior High',
      type: 'middle',
      rating: 9,
      district: 'William S. Hart Union High School District',
    },
    {
      name: 'Old Orchard Elementary',
      type: 'elementary',
      rating: 10,
      district: 'Newhall School District',
    },
    {
      name: 'Pico Canyon Elementary',
      type: 'elementary',
      rating: 9,
      district: 'Newhall School District',
    },
    {
      name: 'Stevenson Ranch Elementary',
      type: 'elementary',
      rating: 9,
      district: 'Newhall School District',
    },
  ],

  schoolDistrict: 'Served by William S. Hart Union High School District and Newhall School District',

  priceRanges: {
    singleFamily: {
      min: 850000,
      max: 2500000,
      median: 1300000,
      lastUpdated: '2025-01',
    },
    townhome: {
      min: 650000,
      max: 950000,
      median: 800000,
      lastUpdated: '2025-01',
    },
  },

  amenities: [
    {
      name: 'The Centre (Recreation Center)',
      description: 'Resort-style facility with pools, fitness center, and event spaces',
      icon: 'dumbbell',
    },
    {
      name: 'Stevenson Ranch Library',
      description: 'Modern library branch with extensive resources and programs',
      icon: 'library',
    },
    {
      name: 'Community Parks & Trails',
      description: 'Extensive network of parks, playgrounds, and walking trails',
      icon: 'trees',
    },
    {
      name: 'The Stevenson Ranch Marketplace',
      description: 'Shopping center with Sprouts, restaurants, and services',
      icon: 'store',
    },
    {
      name: 'Sports Facilities',
      description: 'Baseball fields, tennis courts, and basketball courts',
      icon: 'basketball',
    },
    {
      name: 'Gated Neighborhoods',
      description: 'Enhanced security and privacy in many communities',
      icon: 'shield',
    },
  ],

  nearbyAttractions: [
    'The Centre Recreation Center',
    'Stevenson Ranch Library',
    'Pico Canyon Park',
    'The Marketplace at Stevenson Ranch',
    'Old Orchard Park',
    'Eternal Valley Memorial Park',
    'Quick access to Valencia and I-5',
  ],

  metaDescription:
    'Complete Stevenson Ranch, CA community guide. Explore gated neighborhoods, The Centre recreation facility, West Ranch High School (9/10), Robinson Ranch golf, home prices ($850K-$2.5M+), HOA amenities, Mello-Roos info, and why affluent families choose this exclusive Santa Clarita community. Comprehensive buyer\'s guide to Stevenson Ranch real estate.',

  keywords: [
    'Stevenson Ranch homes for sale',
    'Stevenson Ranch gated communities',
    'Stevenson Ranch real estate prices',
    'The Centre Stevenson Ranch',
    'West Ranch High School',
    'Old Orchard Elementary Stevenson Ranch',
    'Stevenson Ranch HOA fees',
    'luxury homes Stevenson Ranch',
    'Stevenson Ranch Mello-Roos',
    'Robinson Ranch golf Stevenson Ranch',
    'gated communities Santa Clarita',
    'upscale Santa Clarita neighborhoods',
    'Stevenson Ranch home prices 2025',
    'buy home Stevenson Ranch',
    'Stevenson Ranch vs Valencia',
    'Pico Canyon Elementary',
    'Stevenson Ranch Library',
    'master-planned Stevenson Ranch',
  ],
}
