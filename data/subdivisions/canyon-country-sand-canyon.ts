import type { Subdivision } from '@/types/subdivision'

export const canyonCountrySandCanyon: Subdivision = {
  slug: 'sand-canyon',
  name: 'Sand Canyon',
  parentNeighborhood: 'canyon-country',
  parentNeighborhoodName: 'Canyon Country',
  tagline: 'Rural Elegance, Golf, and Equestrian Living',
  heroImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2400',

  description: `Sand Canyon is Canyon Country's most distinctive and prestigious enclave — a semi-rural corridor stretching along Sand Canyon Road that offers an entirely different lifestyle from standard Santa Clarita subdivisions. This is where you find custom estates on acre-plus lots, equestrian properties with private corrals and trail access, golf course living along the Sand Canyon Country Club, and a pace of life that feels worlds apart from tract home suburbia — while remaining only 20 minutes from Valencia's restaurants, Target, and freeway access.

The area developed organically over decades, with custom homes, equestrian ranches, and semi-custom subdivisions coexisting in a setting framed by oak-studded hillsides, dry creek beds, and distant mountain vistas. Lot sizes range dramatically — from 12,000 sq ft in the more subdivided sections to 5+ acres for true ranch properties — giving buyers flexibility in how much land they want to manage.

Sand Canyon Country Club anchors the western end of the corridor, providing 18 holes of golf, tennis, pool, and dining in a private club setting. The club serves as a community hub for many Sand Canyon residents and gives the area an upscale, destination feel that is unique in Canyon Country. For buyers who prize outdoor lifestyle, space, privacy, and the ability to keep horses at home, Sand Canyon represents the best version of Canyon Country living.`,

  established: '1970s–Present (ongoing custom builds)',
  totalHomes: 1200,

  quickFacts: {
    location: 'Canyon Country / Sand Canyon, Santa Clarita',
    hoaFee: '$0–$120/month (varies by section)',
    medianPrice: '$875,000 (January 2025)',
    lotSizes: '12,000 sq ft – 5+ acres',
    homeSizes: '2,000 – 6,000+ sq ft',
  },

  schools: {
    elementary: [
      {
        name: 'Leona Cox Elementary',
        rating: '8/10',
        distance: '3.5 miles',
        highlights: ['Best school rating in Canyon Country area', 'STEAM programs and technology integration', 'Strong academic performance'],
      },
      {
        name: 'Fair Oaks Elementary',
        rating: '7/10',
        distance: '4.0 miles',
        highlights: ['Community school atmosphere', 'After-school enrichment', 'Friendly neighborhood feel'],
      },
    ],
    middle: [
      {
        name: 'Sierra Vista Junior High',
        rating: '7/10',
        distance: '4.5 miles',
        highlights: ['Solid transition to high school', 'Sports and arts programs', 'Improving test score trajectory'],
      },
    ],
    high: [
      {
        name: 'Canyon High School',
        rating: '8/10',
        distance: '5.0 miles',
        highlights: ['Strongest academic offering in Canyon Country', 'AP courses and college counseling', 'Championship-level athletics'],
      },
    ],
  },

  amenities: [
    {
      name: 'Sand Canyon Country Club',
      description: '18-hole private golf course with club membership available — tennis, pool, restaurant, and event facilities',
    },
    {
      name: 'Equestrian Trails & Facilities',
      description: 'Extensive network of riding trails, with many properties offering private corrals, stables, and arena space',
    },
    {
      name: 'Angeles National Forest Access',
      description: 'Direct trail connections to the national forest for hiking, mountain biking, and equestrian riding',
    },
    {
      name: 'Vasquez Rocks Natural Area',
      description: '15 minutes away — iconic filming location with dramatic geology, hiking trails, and stunning views',
    },
    {
      name: 'Sand Canyon Reservoir Area',
      description: 'Scenic open space and walking paths along the canyon floor',
    },
  ],

  homeStyles: [
    {
      builder: 'Custom Builders & Architects',
      squareFeet: '3,500 – 6,000+ sq ft',
      bedrooms: '4–6 bedrooms',
      bathrooms: '3.5–6 bathrooms',
      style: 'Custom Ranch Estate & California Craftsman',
      lotSize: '1–5+ acres',
      priceRange: '$1,100,000 – $2,500,000+',
      features: ['Custom architectural details throughout', 'Horse corrals and barn structures', 'Resort-style pools and outdoor kitchens', 'Detached guest houses or ADUs', 'RV access, workshop buildings, and storage'],
    },
    {
      builder: 'Semi-Custom / Production Builders',
      squareFeet: '2,600 – 4,000 sq ft',
      bedrooms: '4–5 bedrooms',
      bathrooms: '3–4 bathrooms',
      style: 'Spanish and Santa Barbara Style',
      lotSize: '12,000 – 25,000 sq ft',
      priceRange: '$820,000 – $1,150,000',
      features: ['Tile roofs and stucco exteriors', 'Upgraded kitchens with views', 'Large lots with room for horses or pools', 'Attached 3-car garages', 'Private rear yard retreats'],
    },
    {
      builder: 'Older Established Homes',
      squareFeet: '2,000 – 3,000 sq ft',
      bedrooms: '3–4 bedrooms',
      bathrooms: '2–3 bathrooms',
      style: 'Ranch and Traditional',
      lotSize: '12,000 – 20,000 sq ft',
      priceRange: '$700,000 – $875,000',
      features: ['Original character and charm', 'Large lots with mature trees', 'Room for horses or expansion', 'Workshop and outbuilding potential', 'Private rural setting'],
    },
  ],

  hoa: {
    monthlyFee: '$0–$120/month (varies significantly by section)',
    included: [
      'Many Sand Canyon properties have no HOA at all',
      'Some subdivisions include minimal common area maintenance',
      'Sand Canyon Country Club membership is separate and optional',
    ],
    restrictions: [
      'Equestrian uses allowed throughout most of Sand Canyon',
      'Fewer restrictions than Valencia or Stevenson Ranch communities',
      'Some newer subdivisions have architectural CC&Rs',
      'No blanket restrictions — varies widely by parcel and section',
      'Check specific property for applicable covenants',
    ],
  },

  marketData: {
    recentSales: {
      last30Days: 6,
      averagePrice: '$892,000',
      averageDays: 38,
      saleToListRatio: '97.8%',
    },
    inventory: {
      activeListings: 12,
      inEscrow: 4,
    },
    priceHistory: [
      { year: 2023, medianPrice: '$825,000', yoyChange: '+6.5%' },
      { year: 2024, medianPrice: '$858,000', yoyChange: '+4.0%' },
      { year: 2025, medianPrice: '$875,000', yoyChange: '+2.0%' },
    ],
  },

  pros: [
    'Unique equestrian lifestyle with horse trails and property options',
    'Sand Canyon Country Club golf, tennis, and dining on your doorstep',
    'Large lots (12,000 sq ft to 5+ acres) — extraordinary space for the price',
    'Angeles National Forest and Vasquez Rocks minutes away',
    'Privacy and semi-rural atmosphere unavailable anywhere else in SCV',
    'Low to no HOA fees in many sections',
    'Custom and semi-custom homes with character and architectural variety',
  ],

  cons: [
    'Further from freeway access than most Canyon Country areas',
    'Schools require driving — not walkable to any campus',
    'More limited retail nearby — grocery runs require a trip',
    'Longer commute to Los Angeles (55–80 minutes)',
    'Larger lots mean more maintenance responsibilities',
    'Fire risk is a consideration given rural hillside setting',
  ],

  perfectFor: [
    'Horse owners and equestrian enthusiasts who want to keep horses at home',
    'Golf enthusiasts who want Sand Canyon Country Club access nearby',
    'Buyers who prize privacy, space, and rural atmosphere above all',
    'Remote workers or entrepreneurs who do not commute daily',
    'Custom home buyers who want architectural freedom and large lots',
    'Nature lovers craving immediate national forest and trail access',
  ],

  maybeNotFor: [
    'Daily Los Angeles commuters — driving time adds up quickly',
    'Families who prioritize top school ratings',
    'Buyers wanting walkable neighborhoods or urban convenience',
    'Those who prefer the security and aesthetic consistency of gated communities',
  ],

  alternatives: [
    {
      name: 'Fair Oaks Ranch (Canyon Country)',
      reason: 'More community-oriented Canyon Country option with good park access at lower price point',
    },
    {
      name: 'Stetson Ranch (Canyon Country)',
      reason: 'Master-planned Canyon Country community with pool amenities and more conventional suburban feel',
    },
    {
      name: 'Castaic (Williams Ranch)',
      reason: 'Another rural lifestyle option with lakeside access if you are open to Castaic living',
    },
  ],

  metaDescription: 'Sand Canyon Canyon Country guide: equestrian living, Sand Canyon Country Club golf, large lots 12,000 sq ft–5+ acres, custom estate homes $700K–$2.5M+. Rural luxury in Santa Clarita.',
  keywords: [
    'Sand Canyon Canyon Country',
    'Sand Canyon homes for sale',
    'equestrian properties Santa Clarita',
    'horse properties Canyon Country',
    'Sand Canyon Country Club homes',
    'large lot homes Santa Clarita',
    'custom homes Canyon Country',
    'rural Santa Clarita living',
    'Sand Canyon real estate 2025',
    'equestrian Santa Clarita Valley',
  ],
}
