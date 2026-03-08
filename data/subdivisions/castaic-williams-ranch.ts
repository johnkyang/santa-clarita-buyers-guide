import type { Subdivision } from '@/types/subdivision'

export const castaicWilliamsRanch: Subdivision = {
  slug: 'williams-ranch',
  name: 'Williams Ranch',
  parentNeighborhood: 'castaic',
  parentNeighborhoodName: 'Castaic',
  tagline: 'New-Era Master-Planned Living with Resort Amenities',
  heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2400',

  description: `Williams Ranch is Castaic's most modern master-planned community — a thoughtfully designed neighborhood that brings Valencia-caliber amenities to a location where buyers can still get significantly more home for their investment. Developed from the 2010s through the 2020s, Williams Ranch features newer construction with open floor plans, energy-efficient systems, and resort-style community amenities that most Castaic communities simply don't offer.

The community centers around a resort-style recreation area with swimming pools, a clubhouse, and a parks-and-trails network connecting the neighborhood's phases. Homes were built across multiple phases with consistent architectural standards, creating a cohesive streetscape of contemporary California homes that are move-in ready and require minimal updating — a meaningful contrast to older Canyon Country or Castaic neighborhoods where dated kitchens and bathrooms are the norm.

Williams Ranch is positioned to benefit from Castaic's continued growth and improving infrastructure. Proximity to I-5 makes it a practical choice for Los Angeles commuters willing to accept the trade-off of a slightly longer drive for significantly more space, newer construction, and community amenities at pricing that simply doesn't exist in Valencia or Stevenson Ranch. Live Oak Elementary (8/10) and Castaic High School (7/10) serve the community.`,

  established: '2010s–2020s',
  totalHomes: 800,

  quickFacts: {
    location: 'Castaic, Santa Clarita',
    hoaFee: '$130–$225/month',
    medianPrice: '$810,000 (January 2025)',
    lotSizes: '5,500 – 9,000 sq ft',
    homeSizes: '2,100 – 4,000 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Live Oak Elementary',
        rating: '8/10',
        distance: '1.0 mile',
        highlights: ['Highest-rated elementary in Castaic', 'Strong academic programs', 'Active parent community'],
      },
      {
        name: 'Castaic Elementary',
        rating: '7/10',
        distance: '1.8 miles',
        highlights: ['Community-focused school', 'Growing enrollment', 'After-school programs'],
      },
    ],
    middle: [
      {
        name: 'Castaic Middle School',
        rating: '7/10',
        distance: '2.0 miles',
        highlights: ['Sports and extracurricular activities', 'Transition programs to high school', 'Improving academic metrics'],
      },
    ],
    high: [
      {
        name: 'Castaic High School',
        rating: '7/10',
        distance: '2.5 miles',
        highlights: ['Newest high school in Hart District', 'Modern campus and facilities', 'Growing AP and extracurricular offerings'],
      },
    ],
  },

  amenities: [
    {
      name: 'Resort-Style Community Pool',
      description: 'Junior Olympic pool with sun deck, lounge areas, and adjacent spa — a premium amenity for Castaic',
    },
    {
      name: 'Clubhouse & Recreation Center',
      description: 'Community clubhouse available for private events, fitness activities, and neighborhood programs',
    },
    {
      name: 'Parks & Trail Network',
      description: 'Multiple community parks connected by a trail system linking all neighborhood phases',
    },
    {
      name: 'Castaic Lake',
      description: '5 minutes away — 9,000-acre lake for boating, fishing, jet skiing, and weekend water recreation',
    },
    {
      name: 'Castaic Sports Complex',
      description: 'State-of-the-art youth sports facilities nearby for baseball, soccer, and community events',
    },
    {
      name: 'Lake Hughes Road Corridor',
      description: 'Growing local retail, dining, and services along the main Castaic commercial corridor',
    },
  ],

  homeStyles: [
    {
      builder: 'William Lyon Homes / Taylor Morrison',
      squareFeet: '2,400 – 3,600 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '3–4 bathrooms',
      style: 'Contemporary California & Farmhouse',
      lotSize: '5,500 – 7,500 sq ft',
      priceRange: '$760,000 – $975,000',
      features: ['Open-concept great rooms', 'Large kitchen islands with quartz countertops', 'Primary suites with walk-in closets', 'Attached 2–3 car garages', 'Private rear yards with space for pools'],
    },
    {
      builder: 'Lennar / KB Home',
      squareFeet: '2,800 – 4,000 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '3.5–4 bathrooms',
      style: 'Spanish and Mediterranean Revival',
      lotSize: '7,000 – 9,000 sq ft',
      priceRange: '$870,000 – $1,075,000',
      features: ['Bonus rooms and loft spaces', 'Gourmet kitchens with full appliance packages', 'Tile roofs with energy-efficient insulation', 'Larger lots with mountain views', '3-car garages on select plans'],
    },
  ],

  hoa: {
    monthlyFee: '$130–$225/month',
    included: [
      'Community pool and spa maintenance and operation',
      'Clubhouse access and management',
      'Common area landscaping and irrigation',
      'Parks and trail system maintenance',
      'Community events and seasonal programs',
    ],
    restrictions: [
      'Pool area hours and rules',
      'Architectural committee review for exterior modifications',
      'Approved color palette for exterior paint',
      'Parking and vehicle storage per CC&Rs',
      'Landscaping maintenance standards',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 9,
      averagePrice: '$823,000',
      averageDays: 30,
      saleToListRatio: '99.1%',
    },
    inventory: {
      activeListings: 12,
      inEscrow: 6,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$770,000', yoyChange: '+8.5%' },
      { year: 2024, medianPrice: '$795,000', yoyChange: '+3.2%' },
      { year: 2025, medianPrice: '$810,000', yoyChange: '+1.9%' },
    ],
  },

  pros: [
    'Newest construction in Castaic — modern floor plans and energy efficiency',
    'Community pool and clubhouse bring resort-style amenities to Castaic',
    'Live Oak Elementary (8/10) — Castaic\'s highest-rated elementary school',
    'Significant space advantage vs. Valencia or Stevenson Ranch at same price',
    'Minutes from Castaic Lake for year-round boating and water recreation',
    'I-5 corridor access for Los Angeles and Santa Clarita commuters',
    'Move-in ready homes with minimal updating needed',
  ],

  cons: [
    'Higher HOA fees for Castaic ($130–$225/month)',
    'School ratings trail west-side communities — top rating is 8/10',
    'Longer commute to Los Angeles compared to Valencia or Saugus',
    'Castaic High School still building its track record and reputation',
    'Less established retail than Valencia or Stevenson Ranch',
  ],

  perfectFor: [
    'Buyers who want newer construction without Valencia prices',
    'Outdoor enthusiasts who want Castaic Lake lifestyle built in',
    'Families with younger children who benefit most from Live Oak Elementary',
    'Los Angeles commuters willing to trade commute time for space and savings',
    'Move-up buyers from older Castaic or Canyon Country neighborhoods',
  ],

  maybeNotFor: [
    'School-priority buyers who need 9/10+ rated high schools',
    'Buyers who need quick, frequent access to downtown Los Angeles',
    'Those who want to walk to restaurants and shopping',
    'Buyers expecting Stevenson Ranch-level school performance',
  ],

  alternatives: [
    {
      name: 'North Lake (Castaic)',
      reason: 'Established Castaic community with more affordable pricing and mature landscaping',
    },
    {
      name: 'Stetson Ranch (Canyon Country)',
      reason: 'Similar master-planned feel at comparable pricing with better school ratings',
    },
    {
      name: 'Golden Valley (Saugus)',
      reason: 'Golden Valley High (9/10) in similar price range — trade lakeside lifestyle for better schools',
    },
  ],

  metaDescription: 'Williams Ranch Castaic guide: newest master-planned community, community pool, Live Oak Elementary (8/10), modern homes $760K–$1.07M, Castaic Lake lifestyle. New construction Castaic.',
  keywords: [
    'Williams Ranch Castaic',
    'Williams Ranch homes for sale',
    'new construction Castaic CA',
    'Castaic master-planned community',
    'Castaic homes with pool',
    'Live Oak Elementary homes',
    'Castaic real estate 2025',
    'newer homes Castaic',
    'Castaic Lake community homes',
    'buy home Williams Ranch Castaic',
  ],
}
