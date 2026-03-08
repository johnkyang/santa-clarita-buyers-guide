import type { Subdivision } from '@/types/subdivision'

export const stevensonRanchSouthernOaks: Subdivision = {
  slug: 'southern-oaks',
  name: 'Southern Oaks',
  parentNeighborhood: 'stevenson-ranch',
  parentNeighborhoodName: 'Stevenson Ranch',
  tagline: 'Upscale Gated Living with Resort-Style Amenities',
  heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2400',

  description: `Southern Oaks is one of Stevenson Ranch's premier gated communities, offering an elevated lifestyle defined by architectural elegance, mature landscaping, and the exclusive resort amenities that make Stevenson Ranch Santa Clarita's most prestigious address. Developed in the 1990s-2000s, Southern Oaks features custom-quality homes on generous lots, meticulous HOA-maintained common areas, and the kind of quiet, secure neighborhood that discerning buyers demand.

Residents of Southern Oaks enjoy full access to The Centre — Stevenson Ranch's spectacular 42,000 square-foot recreation facility with resort-style pools, state-of-the-art fitness center, tennis courts, and event spaces. Combined with the neighborhood's own private parks, walking trails, and gated entry with controlled access, Southern Oaks delivers a lifestyle that balances privacy with community.

The neighborhood feeds into Stevenson Ranch's crown jewel schools: Old Orchard Elementary (10/10) and West Ranch High School (9/10) — consistently among the highest-rated schools in all of Los Angeles County. Proximity to the Stevenson Ranch Marketplace (Sprouts, restaurants, services) and the I-5 freeway (5 minutes) makes daily life exceptionally convenient without sacrificing the peaceful, refined atmosphere that defines this community.`,

  established: '1990s–2000s',
  totalHomes: 650,

  quickFacts: {
    location: 'Stevenson Ranch, Santa Clarita',
    hoaFee: '$200–$350/month',
    medianPrice: '$1,100,000 (January 2025)',
    lotSizes: '6,500 – 12,000 sq ft',
    homeSizes: '2,200 – 4,200 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Old Orchard Elementary',
        rating: '10/10',
        distance: '0.8 miles',
        highlights: ['Perfect 10/10 GreatSchools rating', 'California Distinguished School', 'STEAM and enrichment programs'],
      },
      {
        name: 'Pico Canyon Elementary',
        rating: '9/10',
        distance: '1.2 miles',
        highlights: ['Award-winning academics', 'Strong parent community', 'Arts and music programs'],
      },
    ],
    middle: [
      {
        name: 'Rancho Pico Junior High',
        rating: '9/10',
        distance: '1.5 miles',
        highlights: ['Honors and accelerated programs', 'Competitive athletics', 'Strong college-prep foundation'],
      },
    ],
    high: [
      {
        name: 'West Ranch High School',
        rating: '9/10',
        distance: '1.8 miles',
        highlights: ['Top 5% of California high schools', 'Award-winning arts and athletics', 'Extensive AP course offerings'],
      },
    ],
  },

  amenities: [
    {
      name: 'The Centre (Stevenson Ranch)',
      description: 'Exclusive 42,000 sq ft resort-style recreation facility with pools, fitness center, tennis, and event spaces — included with HOA',
    },
    {
      name: 'Gated Entry & Security',
      description: 'Controlled access entry with 24-hour monitoring, providing privacy and peace of mind',
    },
    {
      name: 'Community Parks & Trails',
      description: 'Private neighborhood parks, playgrounds, and an extensive trail system connecting to Stevenson Ranch open spaces',
    },
    {
      name: 'Stevenson Ranch Marketplace',
      description: 'Nearby shopping center with Sprouts Farmers Market, restaurants, coffee, and essential services',
    },
    {
      name: 'Stevenson Ranch Library',
      description: 'Modern branch library with extensive programs for children and adults, 5 minutes away',
    },
    {
      name: 'Manicured Landscaping',
      description: 'HOA-maintained streetscapes with mature trees and professionally curated common area landscaping',
    },
  ],

  homeStyles: [
    {
      builder: 'William Lyon Homes / Toll Brothers',
      squareFeet: '2,800 – 4,200 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '3–4.5 bathrooms',
      style: 'Mediterranean & Spanish Colonial Revival',
      lotSize: '8,000 – 12,000 sq ft',
      priceRange: '$1,100,000 – $1,500,000',
      features: ['Formal living and dining rooms', 'Chef kitchens with islands', 'Master suites with soaking tubs', 'Private rear yards with pool potential', '3-car garages'],
    },
    {
      builder: 'Standard Pacific / CalAtlantic',
      squareFeet: '2,200 – 3,200 sq ft',
      bedrooms: '4 bedrooms',
      bathrooms: '2.5–3.5 bathrooms',
      style: 'Transitional Contemporary',
      lotSize: '6,500 – 9,000 sq ft',
      priceRange: '$950,000 – $1,200,000',
      features: ['Open-concept floor plans', 'Upstairs bonus rooms/lofts', 'Energy-efficient construction', 'Private backyards', '2–3 car garages'],
    },
    {
      builder: 'Various Custom Builders',
      squareFeet: '3,500 – 5,000+ sq ft',
      bedrooms: '5–6 bedrooms',
      bathrooms: '4–6 bathrooms',
      style: 'Custom Estate & Tuscan',
      lotSize: '10,000 – 15,000 sq ft',
      priceRange: '$1,400,000 – $2,200,000',
      features: ['Custom finishes throughout', 'Resort-style pool and spa', 'Outdoor kitchens and entertainment', 'Home theaters and offices', 'View lots available'],
    },
  ],

  hoa: {
    monthlyFee: '$200–$350/month',
    included: [
      'Full access to The Centre recreation facility',
      'Gated entry maintenance and security',
      'Common area landscaping and maintenance',
      'Community parks and trails upkeep',
      'Street lighting and signage',
      'Community events and programs',
    ],
    restrictions: [
      'Architectural review required for exterior modifications',
      'Approved exterior paint colors from HOA palette',
      'Landscape standards must be maintained',
      'RV/boat parking in garage or approved side yards only',
      'Strict enforcement ensures property value protection',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 7,
      averagePrice: '$1,125,000',
      averageDays: 22,
      saleToListRatio: '100.2%',
    },
    inventory: {
      activeListings: 9,
      inEscrow: 4,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$1,025,000', yoyChange: '+9.1%' },
      { year: 2024, medianPrice: '$1,075,000', yoyChange: '+4.9%' },
      { year: 2025, medianPrice: '$1,100,000', yoyChange: '+2.3%' },
    ],
  },

  pros: [
    'Old Orchard Elementary (10/10) — one of the highest-rated schools in LA County',
    'West Ranch High School (9/10) — exceptional college-prep programs',
    'Full access to The Centre resort-style recreation facility',
    'Gated community with controlled access and 24-hour security',
    'Strong property values and appreciation history',
    'Convenient to I-5 freeway and Stevenson Ranch Marketplace',
    'Meticulously maintained neighborhood aesthetic',
  ],

  cons: [
    'Premium pricing — entry point above $950K for most homes',
    'HOA fees ($200–$350/month) significantly increase monthly costs',
    'Mello-Roos assessments vary — verify before purchasing',
    'Limited availability — low turnover in desirable community',
    'Longer commute to downtown LA (50–70 minutes)',
  ],

  perfectFor: [
    'Families with school-age children seeking top-rated schools',
    'Professionals and executives valuing security and prestige',
    'Buyers upgrading from Valencia seeking an upscale step up',
    'Those who will use resort amenities regularly',
    'Buyers who value HOA enforcement protecting property values',
    'Families planning long-term in a stable, prestigious community',
  ],

  maybeNotFor: [
    'First-time buyers on tighter budgets',
    'Those who find HOA restrictions limiting',
    'Buyers needing frequent downtown LA access',
    'Anyone wanting large rural lots or equestrian facilities',
  ],

  alternatives: [
    {
      name: 'Westridge (Stevenson Ranch)',
      reason: 'Another Stevenson Ranch gated community at a slightly different price point',
    },
    {
      name: 'Westridge (Valencia)',
      reason: 'Similar resort amenities and school quality in Valencia, with slightly lower entry pricing',
    },
    {
      name: 'Bridgeport Valencia',
      reason: 'Established Valencia community with excellent schools and more affordable pricing',
    },
  ],

  metaDescription: 'Southern Oaks Stevenson Ranch guide: gated community, Old Orchard Elementary (10/10), West Ranch High (9/10), The Centre resort amenities, homes $950K–$2.2M. Premium Santa Clarita living.',
  keywords: [
    'Southern Oaks Stevenson Ranch',
    'Southern Oaks homes for sale',
    'Stevenson Ranch gated communities',
    'Old Orchard Elementary homes',
    'West Ranch High School neighborhood',
    'The Centre Stevenson Ranch',
    'Stevenson Ranch homes 2025',
    'luxury homes Stevenson Ranch',
    'gated community Santa Clarita',
    'Southern Oaks real estate',
  ],
}
