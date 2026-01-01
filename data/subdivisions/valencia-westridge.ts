import type { Subdivision } from '@/types/subdivision'

export const valenciaWestridge: Subdivision = {
  slug: 'westridge',
  name: 'Westridge',
  parentNeighborhood: 'valencia',
  parentNeighborhoodName: 'Valencia',
  tagline: 'Resort-Style Living with Award-Winning Schools',
  heroImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2400',

  description: `Westridge is one of Valencia's most desirable master-planned communities, offering resort-style amenities, top-rated schools, and a strong sense of community. Established in the 1990s, this well-maintained neighborhood features approximately 2,100 residences with mature landscaping and a family-friendly atmosphere.`,

  established: '1990s',
  totalHomes: 2100,

  quickFacts: {
    location: 'North Valencia, Santa Clarita',
    hoaFee: '$150-$250/month (varies by sub-association)',
    medianPrice: '$1,050,000 (January 2025)',
    lotSizes: '5,000 - 9,000 sq ft',
    homeSizes: '1,800 - 4,200 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Bridgeport Elementary',
        rating: '9/10',
        distance: 'Walking distance',
        highlights: ['Strong parent involvement', 'Excellent STEM programs', 'High API scores'],
      },
    ],
    middle: [
      {
        name: 'Rio Norte Junior High',
        rating: '8/10',
        distance: '1.5 miles',
        highlights: ['Advanced placement programs', 'Outstanding athletics', 'Award-winning music'],
      },
    ],
    high: [
      {
        name: 'Valencia High School',
        rating: '8/10',
        distance: '2 miles',
        highlights: ['90%+ college acceptance rate', 'Award-winning performing arts', 'AP/IB programs'],
      },
    ],
  },

  amenities: [
    {
      name: 'Westridge Community Center & Pool',
      description: 'Olympic-size swimming pool, children\'s wading pool, spa and BBQ areas',
    },
    {
      name: 'Fitness Center',
      description: 'Well-equipped fitness facility for residents',
    },
    {
      name: 'Sports Courts',
      description: 'Basketball courts and tennis courts',
    },
    {
      name: 'Parks & Playgrounds',
      description: 'Multiple pocket parks with playground equipment for all ages',
    },
    {
      name: 'Walking Trails',
      description: 'Scenic trails connecting to regional trail systems',
    },
  ],

  homeStyles: [
    {
      builder: 'Centex/Pulte Homes',
      squareFeet: '2,200 - 3,500 sq ft',
      bedrooms: '3-5 bedrooms',
      bathrooms: '2.5-4 bathrooms',
      style: 'Mediterranean and Spanish Revival',
      lotSize: '6,000-7,500 sq ft',
      priceRange: '$950K - $1.2M',
      features: ['Formal living/dining', 'Gourmet kitchens', 'Master suite retreats', 'Attached garages'],
    },
    {
      builder: 'Lennar Homes',
      squareFeet: '1,800 - 3,000 sq ft',
      bedrooms: '3-4 bedrooms',
      bathrooms: '2.5-3.5 bathrooms',
      style: 'Contemporary California',
      lotSize: '5,500-6,500 sq ft',
      priceRange: '$900K - $1.1M',
      features: ['Open concept layouts', 'Modern finishes', 'Energy efficient', 'Smart home ready'],
    },
    {
      builder: 'KB Home',
      squareFeet: '2,000 - 2,800 sq ft',
      bedrooms: '3-4 bedrooms',
      bathrooms: '2.5-3 bathrooms',
      style: 'Craftsman and Traditional',
      lotSize: '5,000-6,000 sq ft',
      priceRange: '$875K - $1.05M',
      features: ['Functional floor plans', 'Upgraded kitchens', 'Good storage', 'Low maintenance yards'],
    },
    {
      builder: 'Westridge Townhomes',
      squareFeet: '1,600 - 2,200 sq ft',
      bedrooms: '2-3 bedrooms',
      bathrooms: '2.5-3 bathrooms',
      style: 'Attached Townhomes',
      lotSize: 'Attached',
      priceRange: '$750K - $900K',
      features: ['2-car attached garage', 'Private patios', 'Lower HOA responsibilities', 'Great for first-time buyers'],
    },
  ],

  hoa: {
    monthlyFee: '$150-$250/month',
    included: [
      'Community pool and amenities maintenance',
      'Common area landscaping',
      'Parkway tree trimming',
      'Exterior building maintenance (townhomes)',
      'Community events',
      'Reserve fund contributions',
    ],
    restrictions: [
      'No RV or boat parking on street',
      'Landscaping must meet standards',
      'Exterior paint colors must be approved',
      'No basketball hoops in front yards',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 8,
      averagePrice: '$1,048,000',
      averageDays: 28,
      saleToListRatio: '99.1%',
    },
    inventory: {
      activeListings: 12,
      inEscrow: 3,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$980,000', yoyChange: '+8.2%' },
      { year: 2024, medianPrice: '$1,020,000', yoyChange: '+4.1%' },
      { year: 2025, medianPrice: '$1,050,000', yoyChange: '+2.9%' },
    ],
  },

  pros: [
    'Top-rated schools within walking distance',
    'Resort-style amenities included in HOA',
    'Strong property value appreciation',
    'Safe, family-friendly community',
    'Excellent location and freeway access',
    'Well-maintained throughout',
  ],

  cons: [
    'Higher HOA fees than some Valencia neighborhoods',
    'Homes built in 1990s-2000s (not brand new)',
    'Premium pricing compared to other Santa Clarita areas',
    'Limited lot sizes (not ideal if you want large yard)',
    'HOA restrictions on modifications',
  ],

  perfectFor: [
    'Families with school-age children',
    'Professionals commuting to LA/Burbank',
    'Buyers wanting amenity-rich lifestyle',
    'Those who appreciate maintained community',
    'Move-up buyers from smaller Santa Clarita homes',
  ],

  maybeNotFor: [
    'First-time buyers on tight budgets (unless using assistance)',
    'Those wanting brand-new construction',
    'Buyers preferring large lots/acreage',
    'People who dislike HOA restrictions',
  ],

  alternatives: [
    {
      name: 'North Park Valencia',
      reason: 'Newer construction (2010s builds)',
    },
    {
      name: 'Bridgeport (Valencia)',
      reason: 'Similar schools, older homes, lower price point',
    },
    {
      name: 'Stevenson Ranch',
      reason: 'Larger lots (8,000-12,000 sq ft)',
    },
  ],

  metaDescription: 'Complete guide to Westridge Valencia: schools, amenities, home prices, HOA info, and what makes this master-planned community special in Santa Clarita.',
  keywords: [
    'Westridge Valencia',
    'Valencia neighborhoods',
    'Westridge homes for sale',
    'Valencia master-planned community',
    'Westridge Valencia CA',
    'homes in Westridge Valencia',
  ],
}
