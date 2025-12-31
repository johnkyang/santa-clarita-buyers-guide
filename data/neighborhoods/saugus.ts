import type { Neighborhood } from '@/types/neighborhood'

export const saugus: Neighborhood = {
  slug: 'saugus',
  name: 'Saugus',
  tagline: 'Family-Friendly Living with Excellent Value',
  heroImage: '/images/neighborhoods/saugus-hero.jpg',

  description:
    'Saugus represents Santa Clarita Valley\'s best value proposition—a well-established, family-oriented community delivering award-winning schools (Saugus High rated 9/10, Emblem Academy 9/10), mature tree-lined neighborhoods, and exceptional affordability without sacrificing quality of life. Home to approximately 32,000 residents, Saugus features homes built primarily in the 1970s-1990s offering larger lots, traditional floor plans, and character that newer communities lack. With median home prices ranging from $380,000 (condos) to $1.2M (larger single-family homes), Saugus attracts first-time buyers, growing families, and value-conscious purchasers who prioritize excellent schools and community over gated entries and resort amenities. The community boasts Central Park—a spectacular 60-acre recreation hub—historic landmarks like the 1886 Saugus Cafe, the renowned Santa Clarita Sports Complex, and superior central location providing easy access to all Santa Clarita has to offer. Saugus delivers the authentic suburban family experience: kids biking to friends\' houses, neighbors who know each other, active PTAs, youth sports leagues, and homes with actual yards—all at prices $150,000-$300,000 below comparable Valencia or Stevenson Ranch properties. For buyers seeking maximum value, established neighborhoods, top-rated public schools, and genuine community feel without the premium price tag, Saugus is Santa Clarita\'s hidden gem.',

  highlights: [
    'Award-winning schools: Saugus High School (9/10), Emblem Academy (9/10), strong Saugus Union School District',
    'Best value in Santa Clarita: $380K-$1.2M (typically $150K-$300K less than Valencia/Stevenson Ranch)',
    'Central Park: 60 acres with soccer fields, baseball diamonds, skate park, playgrounds, trails',
    'Mature neighborhoods (1970s-1990s) with larger lots, established trees, traditional character',
    'Excellent central location: easy access to I-5, Valencia, Canyon Country, all Santa Clarita amenities',
    'Santa Clarita Sports Complex: state-of-the-art youth and adult sports facilities',
    'Strong community feel: active neighborhood associations, block parties, youth leagues',
    'Historic Saugus Cafe (est. 1886): iconic local gathering spot',
    'Mix of housing: condos ($380K), townhomes ($480K-$700K), single-family ($600K-$1.2M)',
    'Low or no Mello-Roos: most neighborhoods have minimal or paid-off Mello-Roos',
    'Convenient shopping: Bouquet Canyon, Golden Valley corridors with groceries, dining, services',
    'First-time buyer friendly: more attainable entry points than newer communities',
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
    'Complete Saugus, CA community guide. Santa Clarita\'s best value: award-winning schools (Saugus High 9/10), Central Park, affordable homes ($380K-$1.2M), mature neighborhoods, no Mello-Roos in most areas, first-time buyer friendly. Everything you need to know about buying in Saugus, Santa Clarita\'s hidden gem for families seeking quality and value.',

  keywords: [
    'Saugus CA homes for sale',
    'Saugus real estate Santa Clarita',
    'Saugus High School rating',
    'Emblem Academy Saugus',
    'Central Park Saugus',
    'affordable homes Santa Clarita',
    'Saugus home prices 2025',
    'first time buyer Saugus',
    'Saugus vs Valencia',
    'Saugus neighborhoods guide',
    'Saugus Union School District',
    'Santa Clarita Sports Complex',
    'best value Santa Clarita',
    'Saugus Mello-Roos',
    'family friendly Saugus',
    'mature neighborhoods Saugus',
    'Bouquet Canyon Saugus',
    'buy home Saugus CA',
  ],
}
