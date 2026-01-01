import type { Subdivision } from '@/types/subdivision'

export const newhallOldTown: Subdivision = {
  slug: 'old-town',
  name: 'Old Town Newhall',
  parentNeighborhood: 'newhall',
  parentNeighborhoodName: 'Newhall',
  tagline: 'Historic Charm Meets Modern Downtown Living',
  heroImage: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2400',

  description: `Old Town Newhall is Santa Clarita's historic heart, featuring charming vintage homes, a walkable downtown with local shops and restaurants, and a tight-knit community atmosphere. This unique neighborhood offers character you won't find in newer developments, with tree-lined streets and homes dating back to the early 1900s alongside tastefully renovated properties.`,

  established: 'Early 1900s - Present',
  totalHomes: 850,

  quickFacts: {
    location: 'Downtown Newhall, Santa Clarita',
    hoaFee: 'Minimal or None (most properties)',
    medianPrice: '$725,000 (January 2025)',
    lotSizes: '4,000 - 10,000 sq ft',
    homeSizes: '1,200 - 2,800 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Newhall Elementary',
        rating: '7/10',
        distance: 'Walking distance',
        highlights: ['Community-focused', 'Small class sizes', 'Arts integration'],
      },
      {
        name: 'Peachland Elementary',
        rating: '7/10',
        distance: '1 mile',
        highlights: ['Established school', 'Parent involvement', 'Traditional education'],
      },
    ],
    middle: [
      {
        name: 'Placerita Junior High',
        rating: '7/10',
        distance: '1.5 miles',
        highlights: ['Strong athletics', 'Music programs', 'College prep'],
      },
    ],
    high: [
      {
        name: 'Hart High School',
        rating: '8/10',
        distance: '2 miles',
        highlights: ['Historic school', 'Strong academics', 'Award-winning drama program'],
      },
    ],
  },

  amenities: [
    {
      name: 'Downtown Main Street',
      description: 'Walkable Main Street with local restaurants, cafes, boutiques, and entertainment',
    },
    {
      name: 'Arts District',
      description: 'Art galleries, The MAIN theater, and cultural events',
    },
    {
      name: 'Farmers Market',
      description: 'Weekly farmers market and community events',
    },
    {
      name: 'Historic Parks',
      description: 'Hart Park, William S. Hart Museum and Park nearby',
    },
    {
      name: 'Metrolink Station',
      description: 'Walking distance to Metrolink for LA commuters',
    },
  ],

  homeStyles: [
    {
      builder: 'Historic Homes',
      squareFeet: '1,200 - 2,000 sq ft',
      bedrooms: '2-3 bedrooms',
      bathrooms: '1-2 bathrooms',
      style: 'Craftsman, Victorian, Ranch',
      lotSize: '4,000-7,000 sq ft',
      priceRange: '$625K - $775K',
      features: ['Original character details', 'Hardwood floors', 'Large front porches', 'Mature trees'],
    },
    {
      builder: 'Renovated/Updated',
      squareFeet: '1,400 - 2,200 sq ft',
      bedrooms: '2-4 bedrooms',
      bathrooms: '2-2.5 bathrooms',
      style: 'Updated Vintage',
      lotSize: '5,000-8,000 sq ft',
      priceRange: '$700K - $850K',
      features: ['Modern kitchens', 'Updated bathrooms', 'Original charm preserved', 'Energy efficient upgrades'],
    },
    {
      builder: 'New Construction/Infill',
      squareFeet: '1,800 - 2,800 sq ft',
      bedrooms: '3-4 bedrooms',
      bathrooms: '2.5-3 bathrooms',
      style: 'Modern Farmhouse, Contemporary',
      lotSize: '5,000-10,000 sq ft',
      priceRange: '$800K - $950K',
      features: ['Brand new construction', 'Modern amenities', 'Smart home features', 'Walking distance to downtown'],
    },
  ],

  hoa: {
    monthlyFee: 'None to minimal',
    included: [
      'Most properties have no HOA',
      'Some newer developments have minimal fees',
      'City maintains streets and infrastructure',
    ],
    restrictions: [
      'Historic preservation guidelines in some areas',
      'City zoning and building codes apply',
      'No HOA restrictions for most properties',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 7,
      averagePrice: '$738,000',
      averageDays: 35,
      saleToListRatio: '98.2%',
    },
    inventory: {
      activeListings: 9,
      inEscrow: 3,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$675,000', yoyChange: '+9.1%' },
      { year: 2024, medianPrice: '$705,000', yoyChange: '+4.4%' },
      { year: 2025, medianPrice: '$725,000', yoyChange: '+2.8%' },
    ],
  },

  pros: [
    'Unique character and charm not found in newer areas',
    'Walkable downtown with local businesses',
    'Lower price point than Valencia',
    'No HOA fees for most properties',
    'Strong sense of community',
    'Metrolink access for LA commuters',
    'Arts and culture scene',
  ],

  cons: [
    'Older homes may need significant updates',
    'Less standardized than master-planned communities',
    'Some homes built before modern building codes',
    'Limited off-street parking in historic areas',
    'Fewer modern amenities',
    'Schools rated lower than Valencia',
  ],

  perfectFor: [
    'Buyers wanting character over cookie-cutter',
    'Those who value walkability and community',
    'First-time buyers seeking affordability',
    'People who enjoy renovation projects',
    'Metrolink commuters',
    'Artists and creatives',
    'Those who appreciate historic charm',
  ],

  maybeNotFor: [
    'Buyers wanting brand-new, turnkey homes',
    'Those prioritizing top-rated schools only',
    'People who prefer HOA-maintained communities',
    'Buyers wanting modern floor plans',
  ],

  alternatives: [
    {
      name: 'Canyon Country',
      reason: 'Similar price point, newer homes',
    },
    {
      name: 'Bridgeport Valencia',
      reason: 'Higher-rated schools, slightly higher price',
    },
    {
      name: 'Saugus',
      reason: 'More suburban feel, similar affordability',
    },
  ],

  metaDescription: 'Old Town Newhall guide: historic homes, walkable downtown, local restaurants, arts district, and unique character in Santa Clarita\'s original neighborhood.',
  keywords: [
    'Old Town Newhall',
    'Newhall downtown',
    'historic homes Newhall',
    'Newhall Main Street',
    'Old Town Newhall homes for sale',
    'downtown Newhall CA',
  ],
}
