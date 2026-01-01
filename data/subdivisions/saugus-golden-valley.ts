import type { Subdivision } from '@/types/subdivision'

export const saugusGoldenValley: Subdivision = {
  slug: 'golden-valley',
  name: 'Golden Valley',
  parentNeighborhood: 'saugus',
  parentNeighborhoodName: 'Saugus',
  tagline: 'Family-Friendly Living with Excellent Schools',
  heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2400',

  description: `Golden Valley is a well-established Saugus neighborhood known for top-rated schools, family-friendly atmosphere, and excellent value. Built primarily in the 1990s-2000s, this community offers spacious homes, well-maintained streets, and a strong sense of community pride. Families are drawn here for Golden Valley High School and the safe, suburban lifestyle.`,

  established: '1990s-2000s',
  totalHomes: 1500,

  quickFacts: {
    location: 'Saugus, Santa Clarita',
    hoaFee: '$50-$100/month (varies)',
    medianPrice: '$795,000 (January 2025)',
    lotSizes: '5,500 - 9,000 sq ft',
    homeSizes: '1,800 - 3,800 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Golden Valley Elementary',
        rating: '9/10',
        distance: 'Within community',
        highlights: ['California Distinguished School', 'STEAM programs', 'High test scores'],
      },
      {
        name: 'Rosedell Elementary',
        rating: '8/10',
        distance: '1 mile',
        highlights: ['Strong academics', 'Parent-teacher partnership', 'Technology integration'],
      },
    ],
    middle: [
      {
        name: 'Arroyo Seco Junior High',
        rating: '8/10',
        distance: '1.5 miles',
        highlights: ['Honor roll programs', 'Competitive sports', 'Advanced math and science'],
      },
    ],
    high: [
      {
        name: 'Golden Valley High School',
        rating: '9/10',
        distance: '0.5 miles',
        highlights: ['National Blue Ribbon School', '95%+ college acceptance', 'Award-winning athletics and arts'],
      },
    ],
  },

  amenities: [
    {
      name: 'Community Parks',
      description: 'Multiple neighborhood parks with playgrounds, sports fields, and picnic areas',
    },
    {
      name: 'Central Park',
      description: 'Large community park with sports facilities, skate park, and dog park',
    },
    {
      name: 'Walking Trails',
      description: 'Extensive sidewalks and trails throughout the community',
    },
    {
      name: 'Shopping Centers',
      description: 'Nearby Golden Valley Shopping Center and restaurants',
    },
    {
      name: 'Sports Facilities',
      description: 'Youth sports leagues, soccer fields, baseball diamonds',
    },
  ],

  homeStyles: [
    {
      builder: 'Standard Pacific/CalAtlantic',
      squareFeet: '2,000 - 2,800 sq ft',
      bedrooms: '3-4 bedrooms',
      bathrooms: '2.5-3 bathrooms',
      style: 'Traditional and Mediterranean',
      lotSize: '6,000-7,500 sq ft',
      priceRange: '$750K - $875K',
      features: ['Attached 2-3 car garage', 'Vaulted ceilings', 'Open kitchens', 'Large master suites'],
    },
    {
      builder: 'KB Home/Lennar',
      squareFeet: '2,400 - 3,400 sq ft',
      bedrooms: '4-5 bedrooms',
      bathrooms: '3-4 bathrooms',
      style: 'Contemporary California',
      lotSize: '7,000-9,000 sq ft',
      priceRange: '$825K - $975K',
      features: ['Gourmet kitchens', 'Bonus rooms/lofts', 'RV access', 'Pool-sized yards'],
    },
    {
      builder: 'Various Builders',
      squareFeet: '1,800 - 2,400 sq ft',
      bedrooms: '3-4 bedrooms',
      bathrooms: '2-2.5 bathrooms',
      style: 'Ranch and Two-Story',
      lotSize: '5,500-6,500 sq ft',
      priceRange: '$700K - $825K',
      features: ['Single-story options', 'Good storage', 'Functional layouts', 'Low-maintenance landscaping'],
    },
  ],

  hoa: {
    monthlyFee: '$50-$100/month',
    included: [
      'Common area landscaping',
      'Street lighting maintenance',
      'Neighborhood signage',
      'Annual community events',
      'Some communities include parks',
    ],
    restrictions: [
      'RV parking allowed on side yards (most areas)',
      'Front yard landscaping standards',
      'Exterior paint must be approved',
      'Generally less restrictive than Valencia HOAs',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 10,
      averagePrice: '$802,000',
      averageDays: 30,
      saleToListRatio: '99.0%',
    },
    inventory: {
      activeListings: 14,
      inEscrow: 6,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$750,000', yoyChange: '+7.5%' },
      { year: 2024, medianPrice: '$780,000', yoyChange: '+4.0%' },
      { year: 2025, medianPrice: '$795,000', yoyChange: '+1.9%' },
    ],
  },

  pros: [
    'Top-rated schools, especially Golden Valley High',
    'Excellent value compared to Valencia',
    'Larger lots than many newer communities',
    'Family-oriented neighborhood',
    'Lower HOA fees',
    'RV parking allowed in most areas',
    'Close to shopping and services',
  ],

  cons: [
    'Not as many amenities as Valencia communities',
    'Slightly farther from I-5 freeway',
    'Homes may need updating (1990s-2000s construction)',
    'Less walkable than downtown areas',
    'Hotter in summer than Valencia',
  ],

  perfectFor: [
    'Families prioritizing top schools',
    'Buyers wanting more space for less money',
    'Those who appreciate suburban lifestyle',
    'Families with school-age children',
    'Buyers wanting larger yards',
    'People who need RV parking',
  ],

  maybeNotFor: [
    'Those wanting Valencia amenities',
    'Buyers seeking walkable urban lifestyle',
    'People wanting brand-new construction',
    'Those needing quick freeway access',
  ],

  alternatives: [
    {
      name: 'Bridgeport Valencia',
      reason: 'Similar schools and pricing, more central location',
    },
    {
      name: 'Canyon Country',
      reason: 'Even more affordable, similar suburban feel',
    },
    {
      name: 'North Park Valencia',
      reason: 'Newer construction, more amenities, higher price',
    },
  ],

  metaDescription: 'Golden Valley Saugus guide: top-rated Golden Valley High School, family-friendly neighborhoods, excellent value, and spacious homes in Santa Clarita.',
  keywords: [
    'Golden Valley Saugus',
    'Golden Valley High School neighborhood',
    'Saugus homes for sale',
    'Golden Valley homes',
    'Santa Clarita Golden Valley',
  ],
}
