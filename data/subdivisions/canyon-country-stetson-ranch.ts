import type { Subdivision } from '@/types/subdivision'

export const canyonCountryStetsonRanch: Subdivision = {
  slug: 'stetson-ranch',
  name: 'Stetson Ranch',
  parentNeighborhood: 'canyon-country',
  parentNeighborhoodName: 'Canyon Country',
  tagline: 'Master-Planned Canyon Country with Modern Amenities',
  heroImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2400',

  description: `Stetson Ranch is one of Canyon Country's most complete master-planned communities — a thoughtfully designed neighborhood that brings resort-style amenities and cohesive architecture to an area where buyers can still get significantly more house for their money compared to west-side communities. Built in phases from the early 2000s through the 2010s, Stetson Ranch offers a polished community experience with community pools, parks, and maintained common areas that elevate the living standard above typical Canyon Country offerings.

The community features a well-designed layout with curved streets, multiple pocket parks, and a central recreation area that serves as the social hub of the neighborhood. Homes were built by some of the Southland's most established builders, resulting in quality construction with larger floor plans, open-concept designs, and energy-efficient features that were ahead of their time for Canyon Country.

Stetson Ranch's location provides excellent 14 Freeway access for commuters while placing residents within easy reach of Canyon Country's expanding Soledad Canyon Road retail corridor. Golden Valley High School (7/10) and Canyon High School (8/10) serve the area, and the neighborhood's newer construction, competitive pricing, and community amenities make it a standout choice for buyers who want the best of Canyon Country living without sacrificing lifestyle quality.`,

  established: '2001–2012',
  totalHomes: 1100,

  quickFacts: {
    location: 'Canyon Country, Santa Clarita',
    hoaFee: '$75–$130/month',
    medianPrice: '$785,000 (January 2025)',
    lotSizes: '5,500 – 9,500 sq ft',
    homeSizes: '2,000 – 3,800 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Leona Cox Elementary',
        rating: '8/10',
        distance: '1.2 miles',
        highlights: ['Above-average test scores for Canyon Country', 'STEAM and technology programs', 'Strong parent community'],
      },
      {
        name: 'Fair Oaks Elementary',
        rating: '7/10',
        distance: '1.8 miles',
        highlights: ['Community-oriented school', 'Active after-school programs', 'Good teacher-student ratios'],
      },
    ],
    middle: [
      {
        name: 'Sierra Vista Junior High',
        rating: '7/10',
        distance: '2.0 miles',
        highlights: ['Competitive sports programs', 'Solid college-prep foundation', 'Growing AP/honors offerings'],
      },
    ],
    high: [
      {
        name: 'Canyon High School',
        rating: '8/10',
        distance: '2.8 miles',
        highlights: ['Strong academics and athletics', 'Award-winning music and arts programs', 'Diverse extracurricular activities'],
      },
      {
        name: 'Golden Valley High School',
        rating: '7/10',
        distance: '3.5 miles',
        highlights: ['Smaller campus for more personalized experience', 'Good sports programs', 'Improving academic metrics'],
      },
    ],
  },

  amenities: [
    {
      name: 'Community Pool & Recreation',
      description: 'Neighborhood pool, spa, and recreation area — a rare amenity for Canyon Country communities',
    },
    {
      name: 'Pocket Parks & Playgrounds',
      description: 'Multiple small parks distributed throughout the community for easy neighborhood access',
    },
    {
      name: 'Walking Trails',
      description: 'Internal trail system connecting neighborhoods to open space and adjacent parks',
    },
    {
      name: 'Canyon Country Park',
      description: '10 minutes away — gym, community pool, meeting rooms, sports courts, and community events',
    },
    {
      name: 'Soledad Canyon Road Corridor',
      description: 'Growing commercial strip 5 minutes away with grocery options, dining, banking, and expanding retail',
    },
  ],

  homeStyles: [
    {
      builder: 'William Lyon Homes',
      squareFeet: '2,200 – 3,200 sq ft',
      bedrooms: '4 bedrooms',
      bathrooms: '2.5–3.5 bathrooms',
      style: 'Contemporary California & Traditional',
      lotSize: '6,000 – 8,500 sq ft',
      priceRange: '$730,000 – $895,000',
      features: ['Open-concept great rooms', 'Gourmet kitchens with granite and stainless', 'Primary suite with dual vanities', 'Attached 3-car garages on some plans', 'Good-sized private yards'],
    },
    {
      builder: 'Centex / Pulte Homes',
      squareFeet: '2,600 – 3,800 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '3–4 bathrooms',
      style: 'Spanish and Mediterranean',
      lotSize: '7,000 – 9,500 sq ft',
      priceRange: '$850,000 – $1,050,000',
      features: ['Two-story floor plans with bonus rooms', 'Larger rear yards with pool potential', 'Covered patios and outdoor living', 'Tile flooring and upgraded finishes', '3-car tandem garages'],
    },
    {
      builder: 'DR Horton / Various',
      squareFeet: '2,000 – 2,700 sq ft',
      bedrooms: '3–4 bedrooms',
      bathrooms: '2.5 bathrooms',
      style: 'Transitional Ranch',
      lotSize: '5,500 – 7,500 sq ft',
      priceRange: '$690,000 – $825,000',
      features: ['Efficient single-story options available', 'Updated kitchens and bathrooms', 'Low-maintenance rear yards', 'Attached 2-car garages', 'Good street presence'],
    },
  ],

  hoa: {
    monthlyFee: '$75–$130/month',
    included: [
      'Community pool and spa maintenance and operation',
      'Common area landscaping and irrigation',
      'Pocket parks and playground maintenance',
      'Community trail upkeep',
      'Neighborhood events and seasonal programs',
    ],
    restrictions: [
      'Pool area hours and usage guidelines',
      'Exterior modifications require HOA approval',
      'Parking standards — driveways must be kept clear',
      'RV and boat parking in approved areas only',
      'Pet policies per CC&Rs',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 13,
      averagePrice: '$796,000',
      averageDays: 26,
      saleToListRatio: '99.6%',
    },
    inventory: {
      activeListings: 16,
      inEscrow: 8,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$740,000', yoyChange: '+7.4%' },
      { year: 2024, medianPrice: '$765,000', yoyChange: '+3.4%' },
      { year: 2025, medianPrice: '$785,000', yoyChange: '+2.6%' },
    ],
  },

  pros: [
    'Community pool — a significant amenity advantage over most Canyon Country neighborhoods',
    'Newer construction (2001–2012) with updated floor plans and energy efficiency',
    'More house for the money compared to Valencia or Stevenson Ranch',
    'Canyon High School (8/10) — one of the better Canyon Country school options',
    'Master-planned layout with consistent aesthetics and maintained common areas',
    'Strong 14 Freeway access for Antelope Valley commuters',
    'Larger lots than typical Canyon Country options',
  ],

  cons: [
    'School ratings lower than premium west-side communities',
    'Less retail and dining within walking distance',
    'Hotter temperatures than west-side Santa Clarita in summer',
    'Not as prestigious an address as Stevenson Ranch or Valencia',
    'Limited walkability — car-dependent for most errands',
  ],

  perfectFor: [
    'Buyers who want master-planned community feel without west-side prices',
    'Families seeking newer construction with community pool access',
    'Antelope Valley and Palmdale commuters needing 14 Freeway proximity',
    'Move-up buyers from condos or older Canyon Country homes',
    'Buyers who value floor plan size and yard space over school ratings',
  ],

  maybeNotFor: [
    'School-priority families who need 9/10+ ratings',
    'Buyers wanting walkable neighborhoods or urban amenities',
    'Those seeking the prestige of Stevenson Ranch gated communities',
    'Buyers who need frequent quick I-5 freeway access to Los Angeles',
  ],

  alternatives: [
    {
      name: 'Fair Oaks Ranch (Canyon Country)',
      reason: 'Adjacent Canyon Country community centered around a 40-acre park with larger lots',
    },
    {
      name: 'Golden Valley (Saugus)',
      reason: 'Similar price range with Golden Valley High School (9/10) and slightly higher school ratings',
    },
    {
      name: 'Sand Canyon (Canyon Country)',
      reason: 'More rural Canyon Country option for buyers wanting larger lots and equestrian lifestyle',
    },
  ],

  metaDescription: 'Stetson Ranch Canyon Country guide: master-planned community, pool amenities, Canyon High (8/10), newer construction, homes $690K–$1.05M. Best value in Canyon Country.',
  keywords: [
    'Stetson Ranch Canyon Country',
    'Stetson Ranch homes for sale',
    'Canyon Country master-planned community',
    'Canyon Country homes with pool',
    'newer homes Canyon Country',
    'Canyon Country real estate 2025',
    'Stetson Ranch Santa Clarita',
    'Canyon High School community',
    'affordable master-planned Santa Clarita',
    'buy home Stetson Ranch',
  ],
}
