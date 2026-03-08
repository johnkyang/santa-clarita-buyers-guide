import type { Subdivision } from '@/types/subdivision'

export const castaicEastCastaic: Subdivision = {
  slug: 'east-castaic',
  name: 'East Castaic',
  parentNeighborhood: 'castaic',
  parentNeighborhoodName: 'Castaic',
  tagline: 'Established Value with Space to Breathe',
  heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400',

  description: `East Castaic is the most established and accessible part of Castaic — a community of well-built homes set on generous lots where buyers consistently discover they can get significantly more space than any comparable west-side neighborhood at a price that makes long-term financial sense. This is where value-conscious buyers land when they refuse to compromise on square footage and yard space but also don't want to overpay for amenities or zip codes they won't fully use.

The neighborhood developed across several decades, creating a natural diversity of home ages, styles, and sizes that gives buyers strong options across price ranges. Homes from the 1980s and 1990s offer classic layouts and mature landscaping, while 2000s builds bring more contemporary designs and improved energy standards. Lot sizes throughout East Castaic tend to run larger than Canyon Country or Saugus equivalents — 7,500 to 15,000+ sq ft is common — creating room for pools, vegetable gardens, RV storage, and the kind of outdoor living space that Santa Clarita's western communities price out of reach.

East Castaic's position on the eastern side of the community provides easy access to the Castaic Sports Complex, the I-5 freeway corridor, and the growing retail and dining options developing along Lake Hughes Road. Live Oak Elementary (8/10) is the highest-rated school in the immediate area, and Castaic High School (7/10) continues to grow its academic and extracurricular offerings as a relatively newer campus in the Hart District.`,

  established: '1980s–2000s',
  totalHomes: 1100,

  quickFacts: {
    location: 'East Castaic, Santa Clarita',
    hoaFee: '$0–$65/month (most minimal or none)',
    medianPrice: '$695,000 (January 2025)',
    lotSizes: '7,500 – 16,000 sq ft',
    homeSizes: '1,700 – 3,500 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Live Oak Elementary',
        rating: '8/10',
        distance: '1.5 miles',
        highlights: ['Best-rated elementary in Castaic', 'Strong academic programs', 'High parent engagement'],
      },
      {
        name: 'Castaic Elementary',
        rating: '7/10',
        distance: '2.0 miles',
        highlights: ['Neighborhood school feel', 'After-school enrichment options', 'Growing STEAM curriculum'],
      },
    ],
    middle: [
      {
        name: 'Castaic Middle School',
        rating: '7/10',
        distance: '2.5 miles',
        highlights: ['Solid college-prep transition', 'Sports and arts programs', 'Improving academic performance'],
      },
    ],
    high: [
      {
        name: 'Castaic High School',
        rating: '7/10',
        distance: '3.0 miles',
        highlights: ['Modern facilities and campus', 'Expanding AP and elective offerings', 'Growing athletics and performing arts'],
      },
    ],
  },

  amenities: [
    {
      name: 'Castaic Sports Complex',
      description: 'State-of-the-art youth sports facility nearby with baseball, soccer, softball fields, and community events',
    },
    {
      name: 'Val Verde Park',
      description: 'Community park with playgrounds, picnic areas, and sports courts serving East Castaic families',
    },
    {
      name: 'Castaic Lake',
      description: '10 minutes away — 9,000-acre lake for boating, fishing, jet skiing, swimming beaches, and weekend recreation',
    },
    {
      name: 'Hiking Trails & Open Space',
      description: 'Access to trail systems linking to Castaic area open spaces and hillside paths',
    },
    {
      name: 'Lake Hughes Road Retail',
      description: 'Grocery, restaurants, banking, and essential services expanding along the primary Castaic commercial corridor',
    },
  ],

  homeStyles: [
    {
      builder: 'Various 1980s–1990s Builders',
      squareFeet: '1,700 – 2,500 sq ft',
      bedrooms: '3–4 bedrooms',
      bathrooms: '2–2.5 bathrooms',
      style: 'Ranch and Traditional',
      lotSize: '7,500 – 12,000 sq ft',
      priceRange: '$590,000 – $750,000',
      features: ['Established and mature yards', 'Single-story options common', 'Great lot sizes for the price', 'Room for ADU or workshop additions', 'RV and boat parking on many lots'],
    },
    {
      builder: 'Various 1990s–2000s Builders',
      squareFeet: '2,200 – 3,200 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '2.5–3.5 bathrooms',
      style: 'California Contemporary and Mediterranean',
      lotSize: '9,000 – 16,000 sq ft',
      priceRange: '$715,000 – $900,000',
      features: ['Two-story layouts with family rooms', 'Updated kitchens in many homes', 'Large backyards with pool potential', 'Attached 3-car garages on some plans', 'Views of hills and mountains from upper floors'],
    },
  ],

  hoa: {
    monthlyFee: '$0–$65/month',
    included: [
      'Many East Castaic properties have no HOA',
      'Some sections include basic common area maintenance',
      'Access to community parks and trails maintained by city/county',
    ],
    restrictions: [
      'Minimal restrictions on most properties',
      'Freedom to park RVs, boats, and work trucks on most lots',
      'ADU construction allowed per city guidelines',
      'Some older CC&Rs may apply — verify at purchase',
      'Generally the least restrictive area in Castaic',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 10,
      averagePrice: '$706,000',
      averageDays: 34,
      saleToListRatio: '98.9%',
    },
    inventory: {
      activeListings: 14,
      inEscrow: 6,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$655,000', yoyChange: '+8.3%' },
      { year: 2024, medianPrice: '$678,000', yoyChange: '+3.5%' },
      { year: 2025, medianPrice: '$695,000', yoyChange: '+2.5%' },
    ],
  },

  pros: [
    'Castaic\'s most affordable entry point for single-family homes',
    'Large lots (7,500–16,000+ sq ft) — exceptional space for the price',
    'Minimal to no HOA — freedom to use your property as you need',
    'RV, boat, and recreational vehicle parking on most lots',
    'Castaic Lake 10 minutes away for boating and outdoor recreation',
    'I-5 freeway access for commuters',
    'ADU-friendly lots — opportunity for rental income or multi-generational living',
  ],

  cons: [
    'School ratings are the area\'s weakest point at 7–8/10 maximum',
    'Older home stock — many properties need cosmetic updates',
    'Further from west-side retail, dining, and entertainment',
    'Castaic High School building its reputation as a newer campus',
    'Less community cohesion than master-planned communities',
  ],

  perfectFor: [
    'Value buyers who want the most space per dollar in Santa Clarita',
    'Investors and buyers interested in ADU addition potential',
    'Buyers who want to park boats, RVs, or multiple vehicles at home',
    'First-time buyers priced out of Valley-proper communities',
    'Retirees or remote workers who value space, quiet, and outdoor access',
    'Buyers open to updating a home to match their taste',
  ],

  maybeNotFor: [
    'School-priority families who need 9/10+ rated schools',
    'Buyers wanting newer construction without update projects',
    'Those who need quick, frequent Los Angeles access',
    'Buyers wanting walkable neighborhoods with retail and dining nearby',
  ],

  alternatives: [
    {
      name: 'North Lake (Castaic)',
      reason: 'More scenic Castaic option with lake views and direct Castaic Lake access',
    },
    {
      name: 'Williams Ranch (Castaic)',
      reason: 'Newer Castaic construction with community pool amenities at a higher price point',
    },
    {
      name: 'Fair Oaks Ranch (Canyon Country)',
      reason: 'Similar value-focused community with Canyon High (8/10) and Fair Oaks Park access',
    },
  ],

  metaDescription: 'East Castaic guide: affordable Castaic entry, large lots 7,500–16,000 sq ft, minimal HOA, homes $590K–$900K, ADU-friendly. Best value family living near Castaic Lake.',
  keywords: [
    'East Castaic homes for sale',
    'East Castaic real estate',
    'affordable homes Castaic CA',
    'large lot homes Castaic',
    'Castaic entry-level homes',
    'Castaic real estate 2025',
    'ADU homes Castaic',
    'RV parking homes Castaic',
    'Castaic family homes',
    'buy home East Castaic',
  ],
}
