import type { Subdivision } from '@/types/subdivision'

export const castaicNorthLake: Subdivision = {
  slug: 'north-lake',
  name: 'North Lake',
  parentNeighborhood: 'castaic',
  parentNeighborhoodName: 'Castaic',
  tagline: 'Lakeside Lifestyle with Stunning Mountain Views',
  heroImage: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2400',

  description: `North Lake is Castaic's most scenic residential area — a community of established homes nestled in the hillsides above and around the northern reaches of Castaic Lake, where mountain views, natural open space, and immediate lake access define the character of daily life. This is the community for buyers who mean it when they say they want to live near the water, not just within driving distance of it.

Homes in North Lake enjoy proximity to the Castaic Lake State Recreation Area — one of Southern California's premier boating and fishing destinations. The area features winding hillside streets, generous lots, and a mix of established single-family homes that range from entry-level opportunities for first-time buyers to spacious lake-view estates for buyers who have found their forever location. The relative remoteness that some buyers see as a drawback is precisely what draws outdoor-focused families and professionals who work from home or have flexible schedules.

North Lake feeds into Castaic's school system — Live Oak Elementary (8/10) is the standout, while Castaic High School (7/10) serves high school students. The tradeoff for lakeside living and natural beauty is accepted readily by residents who value weekend water recreation, clean mountain air, and the profound quiet of a community removed from urban density. I-5 freeway access is 10–15 minutes away, making the commute manageable for those who value the lifestyle.`,

  established: '1980s–2000s',
  totalHomes: 950,

  quickFacts: {
    location: 'Castaic (North Lake area), Santa Clarita',
    hoaFee: '$0–$75/month (most have minimal or no HOA)',
    medianPrice: '$735,000 (January 2025)',
    lotSizes: '7,000 – 18,000 sq ft',
    homeSizes: '1,800 – 4,000 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Live Oak Elementary',
        rating: '8/10',
        distance: '2.5 miles',
        highlights: ['Highest-rated Castaic elementary', 'Strong family culture and parent involvement', 'Above-average test scores'],
      },
      {
        name: 'Castaic Elementary',
        rating: '7/10',
        distance: '3.0 miles',
        highlights: ['Smaller school with community feel', 'After-school enrichment programs', 'Growing academic performance'],
      },
    ],
    middle: [
      {
        name: 'Castaic Middle School',
        rating: '7/10',
        distance: '3.5 miles',
        highlights: ['Sports and activity programs', 'Steady academic improvement', 'Transition-focused curriculum'],
      },
    ],
    high: [
      {
        name: 'Castaic High School',
        rating: '7/10',
        distance: '4.0 miles',
        highlights: ['Modern campus opened recent years', 'Growing AP and elective programs', 'Active athletics and performing arts'],
      },
    ],
  },

  amenities: [
    {
      name: 'Castaic Lake State Recreation Area',
      description: 'Immediate access to 9,000-acre lake with boat launches, fishing, jet skiing, water skiing, swimming beaches, and picnic areas',
    },
    {
      name: 'Castaic Lagoon',
      description: 'Smaller recreation area adjacent to the lake — swimming, paddleboarding, and family beach activities',
    },
    {
      name: 'Hiking & Mountain Trails',
      description: 'Direct access to hillside trails with panoramic views of the lake, surrounding mountains, and valley',
    },
    {
      name: 'Angeles National Forest',
      description: 'Trailhead access minutes away for hiking, mountain biking, horseback riding, and wilderness recreation',
    },
    {
      name: 'Castaic Sports Complex',
      description: 'Youth sports fields and community facilities 10 minutes away for baseball, soccer, and community events',
    },
  ],

  homeStyles: [
    {
      builder: 'Established Builders (1980s–1990s)',
      squareFeet: '1,800 – 2,800 sq ft',
      bedrooms: '3–4 bedrooms',
      bathrooms: '2–3 bathrooms',
      style: 'Traditional and Ranch',
      lotSize: '7,000 – 12,000 sq ft',
      priceRange: '$625,000 – $800,000',
      features: ['Established mature landscaping', 'Larger lots with outdoor living potential', 'Some with lake or mountain views', 'Garage and driveway storage', 'Opportunity for renovation and personalization'],
    },
    {
      builder: 'Various 1990s–2000s Builders',
      squareFeet: '2,400 – 3,600 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '2.5–3.5 bathrooms',
      style: 'Mediterranean and California Contemporary',
      lotSize: '9,000 – 18,000 sq ft',
      priceRange: '$775,000 – $1,000,000',
      features: ['Open-concept updates on some homes', 'Views of lake or open space on elevated lots', 'Large rear yards with pool potential', 'Room for RVs, boats, and outdoor storage', '3-car garages on larger plans'],
    },
  ],

  hoa: {
    monthlyFee: '$0–$75/month',
    included: [
      'Most North Lake properties have no HOA',
      'Some sections have minimal common area maintenance fees',
      'Castaic Lake State Recreation Area access is through CA State Parks (daily or annual passes)',
    ],
    restrictions: [
      'Most properties have minimal to no HOA restrictions',
      'Standard county/city codes apply for property use',
      'More freedom for RVs, boats, ADUs, and property modifications',
      'Check individual parcels for any recorded easements near lake areas',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 7,
      averagePrice: '$748,000',
      averageDays: 35,
      saleToListRatio: '98.5%',
    },
    inventory: {
      activeListings: 11,
      inEscrow: 5,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$695,000', yoyChange: '+7.8%' },
      { year: 2024, medianPrice: '$718,000', yoyChange: '+3.3%' },
      { year: 2025, medianPrice: '$735,000', yoyChange: '+2.4%' },
    ],
  },

  pros: [
    'Immediate access to Castaic Lake — world-class boating, fishing, and water sports steps away',
    'Panoramic lake and mountain views from many homes and trails',
    'Larger lots (7,000–18,000+ sq ft) than most SCV communities at this price',
    'Minimal to no HOA — extraordinary freedom for outdoor storage and property use',
    'Live Oak Elementary (8/10) — above-average school for the area',
    'Lower entry prices than Williams Ranch or west-side communities',
    'Profound quiet and natural setting unlike any tract community',
  ],

  cons: [
    'School ratings (7–8/10) lower than Valencia or Stevenson Ranch',
    'Older homes (1980s–2000s) may need updating',
    'More remote feel — grocery and retail require a 10–15 minute drive',
    'Hillside terrain means some properties have steep driveways or grades',
    'Fire risk considerations given hillside and open space proximity',
  ],

  perfectFor: [
    'Boating and fishing enthusiasts who want immediate lake access',
    'Remote workers and home-based professionals who value natural setting',
    'Buyers who prioritize outdoor recreation over school ratings',
    'Value hunters wanting larger lots and views at below-market-average pricing',
    'Retirees or empty nesters seeking peaceful lakeside living',
    'Boat owners who want to store watercraft at or near home',
  ],

  maybeNotFor: [
    'Families whose primary priority is top-rated schools',
    'Daily Los Angeles commuters (adds 10–15 minutes vs. central SCV)',
    'Buyers who want walkable neighborhoods and urban conveniences',
    'Those wanting new construction — most homes here are 20–40 years old',
  ],

  alternatives: [
    {
      name: 'Williams Ranch (Castaic)',
      reason: 'Newer Castaic construction with community pool, slightly higher price, same lake access',
    },
    {
      name: 'East Castaic',
      reason: 'More established Castaic neighborhood with similar pricing and school access',
    },
    {
      name: 'Sand Canyon (Canyon Country)',
      reason: 'Similarly rural feel with equestrian focus and Angeles National Forest access',
    },
  ],

  metaDescription: 'North Lake Castaic guide: immediate Castaic Lake access, views, large lots 7,000–18,000 sq ft, minimal HOA, homes $625K–$1M. Lakeside living in Santa Clarita.',
  keywords: [
    'North Lake Castaic',
    'Castaic Lake homes for sale',
    'lakeside homes Castaic',
    'waterfront community Santa Clarita',
    'North Lake Castaic real estate',
    'Castaic homes with lake views',
    'large lot homes Castaic',
    'boating community Santa Clarita',
    'Castaic real estate 2025',
    'buy home near Castaic Lake',
  ],
}
