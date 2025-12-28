import type { Neighborhood } from '@/types/neighborhood'

export const stevensonRanch: Neighborhood = {
  slug: 'stevenson-ranch',
  name: 'Stevenson Ranch',
  tagline: 'Upscale Living in a Gated Community',
  heroImage: '/images/neighborhoods/stevenson-ranch-hero.jpg',

  description:
    'Stevenson Ranch is an exclusive, master-planned community located just west of Santa Clarita proper. Known for its gated neighborhoods, upscale homes, and meticulously maintained landscapes, Stevenson Ranch offers a premium lifestyle with resort-style amenities. The community features rolling hills, mature trees, and well-designed neighborhoods with a variety of architectural styles. Popular among professionals and families seeking a higher-end living experience, Stevenson Ranch provides excellent schools, recreational facilities, and a strong sense of community.',

  highlights: [
    'Gated, master-planned community with premium homes',
    'Resort-style Recreation Center (The Centre)',
    'Award-winning schools and high test scores',
    'Meticulously landscaped neighborhoods',
    'Low-density development with spacious lots',
    'HOA amenities including pools, parks, and trails',
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
    'Discover Stevenson Ranch, an exclusive gated community in Santa Clarita offering upscale homes, top-rated schools, and resort-style amenities. Perfect for families seeking premium lifestyle.',

  keywords: [
    'Stevenson Ranch homes',
    'Stevenson Ranch real estate',
    'gated community Santa Clarita',
    'luxury homes Stevenson Ranch',
    'Stevenson Ranch schools',
    'upscale Santa Clarita',
    'Stevenson Ranch neighborhoods',
  ],
}
