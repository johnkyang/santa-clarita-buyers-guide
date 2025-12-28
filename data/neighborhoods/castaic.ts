import type { Neighborhood } from '@/types/neighborhood'

export const castaic: Neighborhood = {
  slug: 'castaic',
  name: 'Castaic',
  tagline: 'Lakeside Living with Natural Beauty',
  heroImage: '/images/neighborhoods/castaic-hero.jpg',

  description:
    'Castaic is a unique community situated at the northern edge of the Santa Clarita Valley, best known for Castaic Lake and its natural beauty. This growing area offers a mix of established neighborhoods and new developments, with many homes featuring lake views or easy access to outdoor recreation. Castaic appeals to those who value outdoor activities, more affordable housing, and a peaceful setting while maintaining reasonable commute access to Los Angeles. The community offers a more rural feel compared to central Santa Clarita, with plenty of opportunities for boating, fishing, and hiking.',

  highlights: [
    'Castaic Lake for boating, fishing, and water sports',
    'More affordable housing with larger properties',
    'Natural beauty and mountain views',
    'Growing community with new development',
    'Easy I-5 access for commuters',
    'Less congested than central Santa Clarita',
  ],

  demographics: {
    population: 19000,
    medianAge: 37,
    medianIncome: 82000,
  },

  schools: [
    {
      name: 'Castaic High School',
      type: 'high',
      rating: 7,
      district: 'William S. Hart Union High School District',
      website: 'https://www.hartdistrict.org/castaic',
    },
    {
      name: 'Castaic Middle School',
      type: 'middle',
      rating: 7,
      district: 'Castaic Union School District',
    },
    {
      name: 'Castaic Elementary',
      type: 'elementary',
      rating: 7,
      district: 'Castaic Union School District',
    },
    {
      name: 'Live Oak Elementary',
      type: 'elementary',
      rating: 8,
      district: 'Castaic Union School District',
    },
  ],

  schoolDistrict: 'Served by William S. Hart Union High School District and Castaic Union School District',

  priceRanges: {
    singleFamily: {
      min: 550000,
      max: 1200000,
      median: 750000,
      lastUpdated: '2025-01',
    },
    townhome: {
      min: 450000,
      max: 700000,
      median: 575000,
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
      name: 'Castaic Lake',
      description: '9,000-acre lake for boating, fishing, and water recreation',
      icon: 'waves',
    },
    {
      name: 'Castaic Sports Complex',
      description: 'Multipurpose sports fields and recreation facilities',
      icon: 'trophy',
    },
    {
      name: 'Lake Hughes Road Shopping',
      description: 'Local shopping and dining along main corridor',
      icon: 'shopping-bag',
    },
    {
      name: 'Hiking Trails',
      description: 'Access to numerous trails and natural open spaces',
      icon: 'mountain',
    },
    {
      name: 'Castaic Lagoon',
      description: 'Smaller recreation area for swimming and picnicking',
      icon: 'sun',
    },
    {
      name: 'Val Verde Park',
      description: 'Community park with playgrounds and sports facilities',
      icon: 'layout-grid',
    },
  ],

  nearbyAttractions: [
    'Castaic Lake State Recreation Area',
    'Castaic Lagoon',
    'Ridge Route Communities Museum',
    'Pyramid Lake (nearby)',
    'Angeles National Forest access',
    'Templin Highway scenic drive',
    'The Outlets at Tejon Ranch',
  ],

  metaDescription:
    'Discover Castaic homes near beautiful Castaic Lake. Find affordable properties with mountain views, outdoor recreation, and a peaceful lifestyle in Santa Clarita\'s northern community.',

  keywords: [
    'Castaic homes',
    'Castaic real estate',
    'Castaic Lake homes',
    'Castaic Santa Clarita',
    'lakefront properties Castaic',
    'affordable Castaic homes',
    'Castaic neighborhoods',
    'northern Santa Clarita',
  ],
}
