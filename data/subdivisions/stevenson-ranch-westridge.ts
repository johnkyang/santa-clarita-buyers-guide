import type { Subdivision } from '@/types/subdivision'

export const stevensonRanchWestridge: Subdivision = {
  slug: 'westridge',
  name: 'Westridge',
  parentNeighborhood: 'stevenson-ranch',
  parentNeighborhoodName: 'Stevenson Ranch',
  tagline: 'Refined Hilltop Living with Valley Views',
  heroImage: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2400',

  description: `Westridge in Stevenson Ranch sits elevated above the valley floor, offering residents sweeping views of the Santa Clarita Valley alongside the prestigious lifestyle and award-winning schools that make Stevenson Ranch the most coveted address in the area. This established community blends California architectural traditions with resort-caliber amenities in a setting that feels removed from the city while remaining minutes from every convenience.

Homes in Westridge were built across multiple phases from the mid-1990s through early 2000s, resulting in a mature streetscape of tree-lined streets, well-established landscaping, and a mix of home sizes that accommodate families at various stages. The community's hilltop positioning creates natural privacy buffers between streets and provides many homes with desirable view lots overlooking the valley or surrounding open space.

Like all Stevenson Ranch communities, Westridge residents have exclusive access to The Centre — the 42,000 square-foot resort-style facility that is the community's crown amenity — and benefit from the same elite school pipeline that sends students to Rancho Pico Junior High (9/10) and West Ranch High School (9/10). The combination of views, schools, and amenities at Westridge's price point makes it one of the most compelling entry points into Stevenson Ranch living.`,

  established: '1995–2003',
  totalHomes: 750,

  quickFacts: {
    location: 'Stevenson Ranch, Santa Clarita',
    hoaFee: '$175–$310/month',
    medianPrice: '$995,000 (January 2025)',
    lotSizes: '6,000 – 10,500 sq ft',
    homeSizes: '2,000 – 3,800 sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Stevenson Ranch Elementary',
        rating: '9/10',
        distance: '0.6 miles',
        highlights: ['Award-winning academics', 'Strong family community', 'Technology and arts integration'],
      },
      {
        name: 'Pico Canyon Elementary',
        rating: '9/10',
        distance: '1.0 mile',
        highlights: ['High test scores', 'California Distinguished School', 'Active PTA and parent programs'],
      },
    ],
    middle: [
      {
        name: 'Rancho Pico Junior High',
        rating: '9/10',
        distance: '1.8 miles',
        highlights: ['Advanced math and science tracks', 'Competitive athletics and arts', 'Strong college-prep foundation'],
      },
    ],
    high: [
      {
        name: 'West Ranch High School',
        rating: '9/10',
        distance: '2.0 miles',
        highlights: ['Top-rated in William S. Hart District', 'Extensive AP and IB programs', 'Championship sports and award-winning arts'],
      },
    ],
  },

  amenities: [
    {
      name: 'The Centre (Stevenson Ranch)',
      description: 'Exclusive 42,000 sq ft resort recreation center with pools, fitness center, tennis courts, and event spaces — HOA included',
    },
    {
      name: 'Valley View Trails',
      description: 'Neighborhood hiking and walking trails with panoramic views of the Santa Clarita Valley and surrounding mountains',
    },
    {
      name: 'Community Parks',
      description: 'Multiple parks within walking distance offering playgrounds, grassy areas, and sports courts',
    },
    {
      name: 'Stevenson Ranch Marketplace',
      description: 'Nearby retail hub with Sprouts, restaurants, banking, and daily services just minutes from home',
    },
    {
      name: 'Stevenson Ranch Library',
      description: 'Well-equipped branch library with programs for all ages, 5–8 minutes away',
    },
  ],

  homeStyles: [
    {
      builder: 'Pardee Homes',
      squareFeet: '2,000 – 2,900 sq ft',
      bedrooms: '3–4 bedrooms',
      bathrooms: '2.5–3 bathrooms',
      style: 'Traditional California & French Country',
      lotSize: '6,000 – 8,500 sq ft',
      priceRange: '$875,000 – $1,100,000',
      features: ['Formal and casual living spaces', 'Updated kitchens with granite and stainless', 'Private rear yards', 'Attached 2–3 car garages', 'Many with view lots'],
    },
    {
      builder: 'Shea Homes',
      squareFeet: '2,600 – 3,800 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '3–4 bathrooms',
      style: 'Mediterranean & Spanish Revival',
      lotSize: '7,500 – 10,500 sq ft',
      priceRange: '$1,050,000 – $1,400,000',
      features: ['Gourmet kitchens with large islands', 'Primary suites with retreat areas', 'Bonus/game rooms', 'Pool-sized yards with view potential', '3-car garages'],
    },
  ],

  hoa: {
    monthlyFee: '$175–$310/month',
    included: [
      'Full access to The Centre recreation facility',
      'Common area landscaping and maintenance',
      'Community trails and parks upkeep',
      'Neighborhood security and monitoring',
      'Community events and seasonal programs',
    ],
    restrictions: [
      'Architectural committee approval for exterior changes',
      'HOA-approved color palette for exterior painting',
      'Landscaping must be maintained to community standards',
      'Commercial vehicle and RV parking restrictions apply',
      'Pet and rental policies per CC&Rs',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 8,
      averagePrice: '$1,010,000',
      averageDays: 25,
      saleToListRatio: '99.5%',
    },
    inventory: {
      activeListings: 10,
      inEscrow: 5,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$935,000', yoyChange: '+8.7%' },
      { year: 2024, medianPrice: '$968,000', yoyChange: '+3.5%' },
      { year: 2025, medianPrice: '$995,000', yoyChange: '+2.8%' },
    ],
  },

  pros: [
    'Valley and mountain views from many homes and trails',
    'Rancho Pico Junior High (9/10) and West Ranch High (9/10)',
    'Access to The Centre resort recreation facility',
    'More attainable entry point into Stevenson Ranch vs. Southern Oaks',
    'Mature, established neighborhood with quiet streets',
    'Strong appreciation and stable property values',
  ],

  cons: [
    'Hilltop location means some streets have steeper grades',
    'HOA fees and Mello-Roos add significantly to monthly costs — verify totals',
    'Older homes (1995–2003) may need cosmetic updates',
    'Limited inventory — not many homes come to market',
    'Premium pricing relative to other Santa Clarita communities',
  ],

  perfectFor: [
    'Families prioritizing top-rated middle and high schools',
    'Buyers who value views and natural setting alongside community amenities',
    'Those looking for a slightly more attainable entry into Stevenson Ranch',
    'Buyers upgrading from Canyon Country or Saugus communities',
    'Long-term homeowners seeking stable, appreciating investment',
  ],

  maybeNotFor: [
    'Buyers needing flat lots for pools or heavy outdoor use',
    'Those who find HOA restrictions burdensome',
    'Buyers on a tight monthly budget (HOA + Mello-Roos adds $500–$1,000/month)',
    'First-time buyers — the entry price is among the highest in Santa Clarita',
  ],

  alternatives: [
    {
      name: 'Southern Oaks (Stevenson Ranch)',
      reason: 'Adjacent Stevenson Ranch community with similar schools and amenities, slightly higher price point',
    },
    {
      name: 'Westridge (Valencia)',
      reason: 'Valencia community with comparable amenities and the same school quality pipeline',
    },
    {
      name: 'Bridgeport Valencia',
      reason: 'Established Valencia neighborhood with strong schools and more affordable pricing',
    },
  ],

  metaDescription: 'Westridge Stevenson Ranch guide: valley views, West Ranch High (9/10), Rancho Pico Junior High (9/10), The Centre resort amenities, homes $875K–$1.4M. Elevated Santa Clarita living.',
  keywords: [
    'Westridge Stevenson Ranch',
    'Westridge homes for sale Stevenson Ranch',
    'Stevenson Ranch community homes',
    'West Ranch High School homes',
    'Rancho Pico Junior High neighborhood',
    'Stevenson Ranch real estate 2025',
    'valley view homes Santa Clarita',
    'Stevenson Ranch entry price',
    'The Centre Stevenson Ranch amenities',
    'buy home Stevenson Ranch CA',
  ],
}
