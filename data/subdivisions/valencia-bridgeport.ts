import type { Subdivision } from '@/types/subdivision'

export const valenciaBridgeport: Subdivision = {
  slug: 'bridgeport',
  name: 'Bridgeport',
  parentNeighborhood: 'valencia',
  parentNeighborhoodName: 'Valencia',
  tagline: 'Established Valencia Living with Top Schools',
  heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400',

  description: `Bridgeport is a well-established Valencia neighborhood known for excellent schools, mature trees, and strong community values. Built primarily in the 1980s-1990s, this family-friendly community offers more affordable Valencia living while maintaining access to top-rated schools and amenities.`,

  established: '1980s-1990s',
  totalHomes: 1800,

  quickFacts: {
    location: 'North Valencia, Santa Clarita',
    hoaFee: '$75-$125/month',
    medianPrice: '$875,000 (January 2025)',
    lotSizes: '5,000 - 8,500 sq ft',
    homeSizes: '1,600 - 3,500 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Bridgeport Elementary',
        rating: '9/10',
        distance: 'Within neighborhood',
        highlights: ['California Distinguished School', 'Strong STEM focus', 'Active parent community'],
      },
    ],
    middle: [
      {
        name: 'Rio Norte Junior High',
        rating: '8/10',
        distance: '1 mile',
        highlights: ['Gifted programs', 'Award-winning band', 'Competitive athletics'],
      },
    ],
    high: [
      {
        name: 'Valencia High School',
        rating: '8/10',
        distance: '2.5 miles',
        highlights: ['High API scores', 'Extensive AP courses', 'College preparation focus'],
      },
    ],
  },

  amenities: [
    {
      name: 'Community Pool',
      description: 'Seasonal community pool with lap lanes and recreation area',
    },
    {
      name: 'Parks & Playgrounds',
      description: 'Several neighborhood parks with play structures and picnic areas',
    },
    {
      name: 'Walking Paths',
      description: 'Tree-lined sidewalks throughout the neighborhood',
    },
    {
      name: 'Greenbelt Access',
      description: 'Connects to Santa Clarita greenbelt system for hiking and biking',
    },
  ],

  homeStyles: [
    {
      builder: 'Various Builders',
      squareFeet: '1,600 - 2,400 sq ft',
      bedrooms: '3-4 bedrooms',
      bathrooms: '2-3 bathrooms',
      style: 'Traditional Ranch and Two-Story',
      lotSize: '5,000-6,500 sq ft',
      priceRange: '$775K - $925K',
      features: ['Attached 2-car garage', 'Mature landscaping', 'Many updated kitchens', 'Original hardwood floors (some homes)'],
    },
    {
      builder: 'Lennar/Centex',
      squareFeet: '2,200 - 3,000 sq ft',
      bedrooms: '4-5 bedrooms',
      bathrooms: '2.5-3 bathrooms',
      style: 'Mediterranean and Contemporary',
      lotSize: '6,000-8,500 sq ft',
      priceRange: '$850K - $1.05M',
      features: ['Upgraded kitchens', 'Master suites', 'Large backyards', 'RV access (many homes)'],
    },
    {
      builder: 'Townhome Communities',
      squareFeet: '1,400 - 1,900 sq ft',
      bedrooms: '2-3 bedrooms',
      bathrooms: '2-2.5 bathrooms',
      style: 'Attached Townhomes',
      lotSize: 'Attached',
      priceRange: '$650K - $775K',
      features: ['Low-maintenance living', 'Gated communities', 'Pool access', 'Great for first-time buyers'],
    },
  ],

  hoa: {
    monthlyFee: '$75-$125/month',
    included: [
      'Common area maintenance',
      'Neighborhood pool (seasonal)',
      'Parkway landscaping',
      'Street lighting',
      'Community events',
    ],
    restrictions: [
      'Architectural approval for exterior changes',
      'RV parking allowed with restrictions',
      'Front yard landscaping standards',
      'Fence height limitations',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 12,
      averagePrice: '$882,000',
      averageDays: 32,
      saleToListRatio: '98.5%',
    },
    inventory: {
      activeListings: 15,
      inEscrow: 5,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$825,000', yoyChange: '+7.8%' },
      { year: 2024, medianPrice: '$860,000', yoyChange: '+4.2%' },
      { year: 2025, medianPrice: '$875,000', yoyChange: '+1.7%' },
    ],
  },

  pros: [
    'Same excellent schools as Westridge at lower price',
    'More affordable Valencia option',
    'Mature trees and established landscaping',
    'Larger lots than many newer communities',
    'Lower HOA fees than newer developments',
    'RV parking allowed in many areas',
  ],

  cons: [
    'Older homes may need updating',
    'Fewer amenities than newer communities',
    'Some homes have original fixtures',
    'Not as many modern floor plans',
    'May need HVAC/roof updates',
  ],

  perfectFor: [
    'Families prioritizing schools over newness',
    'Buyers wanting more house for the money',
    'Those who appreciate mature neighborhoods',
    'First-time buyers using assistance programs',
    'Buyers planning to update/customize',
  ],

  maybeNotFor: [
    'Those wanting brand-new construction',
    'Buyers seeking resort-style amenities',
    'People who don\'t want to do any updates',
    'Those wanting modern smart home features',
  ],

  alternatives: [
    {
      name: 'Westridge Valencia',
      reason: 'More amenities, slightly higher price',
    },
    {
      name: 'Creekside Valencia',
      reason: 'Similar price, different location',
    },
    {
      name: 'Golden Valley (Saugus)',
      reason: 'Similar schools, even lower price',
    },
  ],

  metaDescription: 'Bridgeport Valencia guide: affordable Valencia living with top-rated Bridgeport Elementary, mature neighborhoods, and family-friendly community.',
  keywords: [
    'Bridgeport Valencia',
    'Bridgeport homes for sale',
    'Bridgeport Elementary neighborhood',
    'Valencia affordable homes',
    'Bridgeport Valencia CA',
  ],
}
