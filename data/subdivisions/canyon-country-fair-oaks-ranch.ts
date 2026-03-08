import type { Subdivision } from '@/types/subdivision'

export const canyonCountryFairOaksRanch: Subdivision = {
  slug: 'fair-oaks-ranch',
  name: 'Fair Oaks Ranch',
  parentNeighborhood: 'canyon-country',
  parentNeighborhoodName: 'Canyon Country',
  tagline: 'Family-Centered Living Next to Canyon Country\'s Best Park',
  heroImage: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2400',

  description: `Fair Oaks Ranch is Canyon Country's most family-oriented community, built around the remarkable Fair Oaks Ranch Community Park — a 40-acre destination park with sports fields, walking trails, playgrounds, and open spaces that rival anything in the Santa Clarita Valley. Families who move here quickly discover that weekend life revolves around the park, with youth leagues, community events, and neighbors who actually know each other.

Developed primarily in the late 1990s and 2000s, Fair Oaks Ranch offers spacious single-family homes on larger lots at pricing that feels impossible compared to west-side communities. A home here that would cost $200,000 more in Valencia delivers the same suburban lifestyle — quality construction, good schools, and safe streets — at a price point that makes financial sense for growing families who refuse to sacrifice space for zip code prestige.

Canyon High School (8/10) serves as the neighborhood high school, and the community feeds into solid elementary and middle school options that have improved steadily over the years. Fair Oaks Ranch is also minutes from the 14 Freeway — ideal for buyers who commute north to Palmdale or south through the valley — and benefits from Canyon Country's ongoing retail expansion along Soledad Canyon Road.`,

  established: '1997–2008',
  totalHomes: 900,

  quickFacts: {
    location: 'Canyon Country, Santa Clarita',
    hoaFee: '$45–$90/month (minimal)',
    medianPrice: '$760,000 (January 2025)',
    lotSizes: '6,000 – 10,000 sq ft',
    homeSizes: '1,900 – 3,500 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Fair Oaks Elementary',
        rating: '7/10',
        distance: '0.4 miles',
        highlights: ['Walking distance for most residents', 'Active parent involvement', 'After-school programs'],
      },
      {
        name: 'Leona Cox Elementary',
        rating: '8/10',
        distance: '1.5 miles',
        highlights: ['Above-average test scores', 'Strong STEAM curriculum', 'Technology integration'],
      },
    ],
    middle: [
      {
        name: 'Sierra Vista Junior High',
        rating: '7/10',
        distance: '1.8 miles',
        highlights: ['Sports programs and clubs', 'College-prep course offerings', 'Improving academics'],
      },
    ],
    high: [
      {
        name: 'Canyon High School',
        rating: '8/10',
        distance: '2.5 miles',
        highlights: ['Strong AP program enrollment', 'Championship athletics history', 'Visual and performing arts programs'],
      },
    ],
  },

  amenities: [
    {
      name: 'Fair Oaks Ranch Community Park',
      description: '40-acre destination park steps from the community — sports fields, walking trails, dog park, playgrounds, and picnic pavilions',
    },
    {
      name: 'Community Walking Trails',
      description: 'Interconnected trail network linking neighborhoods to the park and surrounding open space',
    },
    {
      name: 'Youth Sports Fields',
      description: 'Soccer, baseball, and softball fields hosting youth leagues throughout the school year and summer',
    },
    {
      name: 'Canyon Country Park',
      description: 'Additional community park 10 minutes away with gym, pool, and meeting facilities',
    },
    {
      name: 'Soledad Canyon Shopping',
      description: 'Growing retail corridor 5 minutes away with grocery, dining, and expanding services',
    },
  ],

  homeStyles: [
    {
      builder: 'Kaufman & Broad (KB Home)',
      squareFeet: '1,900 – 2,600 sq ft',
      bedrooms: '3–4 bedrooms',
      bathrooms: '2–3 bathrooms',
      style: 'Traditional and Ranch',
      lotSize: '6,000 – 8,000 sq ft',
      priceRange: '$680,000 – $825,000',
      features: ['Open living and dining areas', 'Good-sized backyard for families', 'Attached 2-car garage', 'Some with RV access', 'Easy to maintain layouts'],
    },
    {
      builder: 'Lennar / Centex',
      squareFeet: '2,400 – 3,500 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '3–4 bathrooms',
      style: 'California Contemporary',
      lotSize: '7,500 – 10,000 sq ft',
      priceRange: '$800,000 – $975,000',
      features: ['Large family rooms', 'Gourmet kitchens with islands', 'Upstairs bonus/loft rooms', 'Pool-sized backyards', '3-car garages on larger lots'],
    },
    {
      builder: 'Various Builders',
      squareFeet: '2,100 – 2,900 sq ft',
      bedrooms: '4 bedrooms',
      bathrooms: '2.5 bathrooms',
      style: 'Mediterranean and Spanish',
      lotSize: '6,500 – 9,000 sq ft',
      priceRange: '$720,000 – $875,000',
      features: ['Formal entry with vaulted ceilings', 'Tiled floors on main level', 'Mature rear yard landscaping', 'Covered patios', '2–3 car garages'],
    },
  ],

  hoa: {
    monthlyFee: '$45–$90/month',
    included: [
      'Common area landscaping maintenance',
      'Neighborhood park maintenance',
      'Community entry and signage upkeep',
      'Annual community events',
    ],
    restrictions: [
      'RV and boat parking allowed (check specific sub-sections)',
      'Front yard appearance standards',
      'Exterior modifications require written approval',
      'Less restrictive than west-side HOAs — more flexibility for homeowners',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 11,
      averagePrice: '$772,000',
      averageDays: 28,
      saleToListRatio: '99.3%',
    },
    inventory: {
      activeListings: 15,
      inEscrow: 7,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$720,000', yoyChange: '+7.1%' },
      { year: 2024, medianPrice: '$748,000', yoyChange: '+3.9%' },
      { year: 2025, medianPrice: '$760,000', yoyChange: '+1.6%' },
    ],
  },

  pros: [
    '40-acre Fair Oaks Ranch Park immediately accessible for outdoor family life',
    'Canyon High School (8/10) — strong academics and athletics',
    'Spacious lots with room for pools, gardens, and outdoor play',
    'Significantly more affordable than Stevenson Ranch or Valencia',
    'Low HOA fees with reasonable restrictions',
    'RV and boat parking allowed in most sections',
    'Strong 14 Freeway access for Palmdale/Antelope Valley commuters',
  ],

  cons: [
    'Schools rate slightly lower than west-side communities',
    'Fewer resort-style HOA amenities than Stevenson Ranch',
    'Longer drive to premium Valencia and Stevenson Ranch shopping',
    'Hotter in summer than west-side neighborhoods',
    'Less established retail than Valencia — still growing',
  ],

  perfectFor: [
    'Families who love outdoor and park-based activities',
    'Buyers prioritizing space and lot size over school ratings',
    'Antelope Valley or Palmdale commuters needing 14 Freeway access',
    'First-move-up buyers leaving condos or townhomes',
    'Sports families involved in youth leagues and outdoor recreation',
    'Buyers who want RV or boat storage at home',
  ],

  maybeNotFor: [
    'Families who prioritize 9/10+ school ratings above all else',
    'Buyers seeking walkable urban amenities',
    'Those wanting resort-style gated community lifestyle',
    'Buyers who need quick I-5 access to Los Angeles',
  ],

  alternatives: [
    {
      name: 'Stetson Ranch (Canyon Country)',
      reason: 'Newer Canyon Country community with more polished amenities and updated construction',
    },
    {
      name: 'Golden Valley (Saugus)',
      reason: 'Similar price range with Golden Valley High School (9/10) and strong family atmosphere',
    },
    {
      name: 'Bridgeport Valencia',
      reason: 'Higher-priced Valencia option with better school ratings and more retail access',
    },
  ],

  metaDescription: 'Fair Oaks Ranch Canyon Country guide: 40-acre community park, Canyon High School (8/10), spacious lots 6,000–10,000 sq ft, homes $680K–$975K. Best family value in Santa Clarita.',
  keywords: [
    'Fair Oaks Ranch Canyon Country',
    'Fair Oaks Ranch homes for sale',
    'Canyon Country family neighborhoods',
    'Canyon Country homes near park',
    'Canyon High School neighborhood',
    'Canyon Country real estate 2025',
    'affordable family homes Santa Clarita',
    'large lot homes Canyon Country',
    'Fair Oaks Ranch community',
    'buy home Canyon Country CA',
  ],
}
