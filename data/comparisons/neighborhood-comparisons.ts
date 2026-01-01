import type { NeighborhoodComparison } from '@/types/comparison'

export const neighborhoodComparisons: NeighborhoodComparison[] = [
  // Valencia comparisons (most searched)
  {
    slug: 'valencia-vs-stevenson-ranch',
    neighborhood1Slug: 'valencia',
    neighborhood2Slug: 'stevenson-ranch',
    title: 'Valencia vs Stevenson Ranch: Which Santa Clarita Neighborhood Is Right for You?',
    metaDescription:
      'Compare Valencia vs Stevenson Ranch, CA. Side-by-side comparison of home prices, schools, amenities, commute times, and lifestyle. Find the perfect Santa Clarita neighborhood for your family in 2025.',
    introduction:
      'Valencia and Stevenson Ranch are two of Santa Clarita\'s most desirable master-planned communities, but they offer distinctly different lifestyles and price points. Both communities feature excellent schools, resort-style amenities, and family-friendly environments, yet each has unique characteristics that appeal to different buyer types. This comprehensive comparison will help you understand the key differences between these two premier neighborhoods.',
    keyDifferences: [
      {
        category: 'Price Range',
        neighborhood1Point: 'Single-family homes from $650K-$1.5M, townhomes from $500K-$750K',
        neighborhood2Point: 'Single-family homes from $850K-$2.5M+, townhomes from $650K-$950K',
      },
      {
        category: 'Community Character',
        neighborhood1Point: 'Larger, more established master-planned community with urban amenities',
        neighborhood2Point: 'Smaller, more exclusive gated community with premium features',
      },
      {
        category: 'Shopping & Dining',
        neighborhood1Point: 'Adjacent to Valencia Town Center, multiple shopping centers, Six Flags',
        neighborhood2Point: 'Short drive to major shopping, more residential and private feel',
      },
      {
        category: 'Schools',
        neighborhood1Point: 'Excellent schools (8-10/10 ratings), larger campuses',
        neighborhood2Point: 'Top-rated schools (9-10/10 ratings), smaller class sizes',
      },
      {
        category: 'Recreation',
        neighborhood1Point: '30+ parks, aquatic center, extensive public trails and facilities',
        neighborhood2Point: 'Private parks, country club, HOA recreational facilities',
      },
      {
        category: 'Commute',
        neighborhood1Point: 'Metrolink station access, central location to freeways',
        neighborhood2Point: 'Slightly longer commute but quieter neighborhood setting',
      },
    ],
    bestFor: {
      neighborhood1: [
        'Buyers seeking more affordable entry point ($500K-$750K townhomes)',
        'Families who want walkable access to shopping, dining, and entertainment',
        'First-time buyers and young families',
        'Commuters who need Metrolink access',
        'Those who prefer a more urban, active community atmosphere',
      ],
      neighborhood2: [
        'Move-up buyers with higher budgets ($850K+)',
        'Families seeking exclusive gated community living',
        'Buyers prioritizing privacy and security',
        'Those who want resort-style amenities and country club access',
        'Families who prefer a quieter, more secluded environment',
      ],
    },
  },
  {
    slug: 'valencia-vs-newhall',
    neighborhood1Slug: 'valencia',
    neighborhood2Slug: 'newhall',
    title: 'Valencia vs Newhall: Modern Master-Planned vs Historic Character',
    metaDescription:
      'Valencia vs Newhall comparison guide. Compare home prices, schools, lifestyle, and community character. Discover which Santa Clarita neighborhood fits your needs and budget.',
    introduction:
      'Valencia and Newhall represent two distinct approaches to Santa Clarita living. Valencia is a modern master-planned community known for its walkability, shopping, and resort-style amenities. Newhall is Santa Clarita\'s historic downtown, offering character-filled homes, arts and culture, and a more traditional neighborhood feel. Both offer excellent value, but appeal to very different buyer preferences.',
    keyDifferences: [
      {
        category: 'Price Range',
        neighborhood1Point: 'Single-family homes $650K-$1.5M, median $850K',
        neighborhood2Point: 'Single-family homes $550K-$950K, median $700K',
      },
      {
        category: 'Home Style',
        neighborhood1Point: 'Modern tract homes (1980s-2020s), planned neighborhoods',
        neighborhood2Point: 'Mix of historic homes (1920s-1960s) and newer construction',
      },
      {
        category: 'Community Vibe',
        neighborhood1Point: 'Suburban, family-oriented, master-planned amenities',
        neighborhood2Point: 'Historic downtown, arts district, walkable Main Street',
      },
      {
        category: 'Lot Sizes',
        neighborhood1Point: 'Typically smaller lots (5,000-8,000 sq ft), HOA communities',
        neighborhood2Point: 'Larger lots (8,000-15,000+ sq ft), many non-HOA properties',
      },
      {
        category: 'Schools',
        neighborhood1Point: 'Modern school facilities with high ratings (8-10/10)',
        neighborhood2Point: 'Mix of historic and modern schools (7-9/10 ratings)',
      },
      {
        category: 'Lifestyle',
        neighborhood1Point: 'Shopping malls, theme parks, organized recreation',
        neighborhood2Point: 'Arts venues, breweries, farmers market, community events',
      },
    ],
    bestFor: {
      neighborhood1: [
        'Families seeking modern homes with turnkey condition',
        'Buyers who want resort-style amenities and HOA services',
        'Those who prioritize walkability to shopping and dining',
        'Families with school-age children seeking top-rated schools',
        'First-time buyers wanting move-in ready properties',
      ],
      neighborhood2: [
        'Buyers seeking character homes with unique architecture',
        'Those who prefer larger lots and more privacy',
        'Buyers looking for better value per square foot',
        'Families who appreciate arts, culture, and downtown lifestyle',
        'Investors and those willing to renovate for equity',
      ],
    },
  },
  {
    slug: 'saugus-vs-canyon-country',
    neighborhood1Slug: 'saugus',
    neighborhood2Slug: 'canyon-country',
    title: 'Saugus vs Canyon Country: Affordable Santa Clarita Neighborhoods Compared',
    metaDescription:
      'Saugus vs Canyon Country neighborhood comparison. Find out which offers better value, schools, amenities, and lifestyle for budget-conscious Santa Clarita homebuyers.',
    introduction:
      'Saugus and Canyon Country are two of Santa Clarita\'s most affordable neighborhoods, making them popular choices for first-time buyers, young families, and those seeking value. Both areas offer excellent schools, family-friendly environments, and convenient freeway access. However, they differ in community character, home styles, and amenities. This guide will help you determine which neighborhood offers the best fit for your lifestyle and budget.',
    keyDifferences: [
      {
        category: 'Price Range',
        neighborhood1Point: 'Single-family homes $550K-$900K, median $725K',
        neighborhood2Point: 'Single-family homes $500K-$850K, median $675K',
      },
      {
        category: 'Community Character',
        neighborhood1Point: 'More suburban, organized neighborhoods, HOA communities',
        neighborhood2Point: 'More rural feel, larger lots, horse properties available',
      },
      {
        category: 'Home Styles',
        neighborhood1Point: 'Primarily 1970s-1990s tract homes, some newer construction',
        neighborhood2Point: 'Mix of ranch-style homes, custom homes, and equestrian properties',
      },
      {
        category: 'Lot Sizes',
        neighborhood1Point: 'Standard suburban lots (6,000-10,000 sq ft)',
        neighborhood2Point: 'Larger lots (10,000-40,000+ sq ft), rural parcels available',
      },
      {
        category: 'Schools',
        neighborhood1Point: 'Strong school ratings (7-9/10), multiple options',
        neighborhood2Point: 'Good schools (7-8/10), neighborhood elementary schools',
      },
      {
        category: 'Recreation',
        neighborhood1Point: 'Central Park, youth sports facilities, organized programs',
        neighborhood2Point: 'Hiking trails, equestrian facilities, outdoor recreation',
      },
    ],
    bestFor: {
      neighborhood1: [
        'First-time buyers seeking affordable entry ($550K-$700K)',
        'Families who want organized neighborhoods and HOA amenities',
        'Those who prioritize proximity to shopping and schools',
        'Buyers seeking suburban lifestyle with community feel',
        'Commuters who need easy freeway access (SR-14)',
      ],
      neighborhood2: [
        'Buyers seeking the lowest prices in Santa Clarita ($500K-$650K)',
        'Families who want larger lots and more outdoor space',
        'Horse enthusiasts and those seeking rural atmosphere',
        'Those who prefer fewer HOA restrictions',
        'Buyers willing to invest in older homes for better value',
      ],
    },
  },
  {
    slug: 'valencia-vs-castaic',
    neighborhood1Slug: 'valencia',
    neighborhood2Slug: 'castaic',
    title: 'Valencia vs Castaic: Urban Amenities vs Lakeside Living',
    metaDescription:
      'Compare Valencia vs Castaic neighborhoods. Evaluate home prices, schools, lake access, amenities, and commute times. Find the right Santa Clarita community for your lifestyle.',
    introduction:
      'Valencia and Castaic offer two very different Santa Clarita experiences. Valencia is the region\'s premier master-planned community with urban amenities, top-rated schools, and extensive shopping and dining. Castaic offers lakeside living, outdoor recreation, and a more relaxed pace of life. Both communities have their unique advantages depending on your lifestyle priorities and budget.',
    keyDifferences: [
      {
        category: 'Price Range',
        neighborhood1Point: 'Single-family homes $650K-$1.5M, townhomes $500K-$750K',
        neighborhood2Point: 'Single-family homes $600K-$1.2M, lakefront properties $800K-$2M+',
      },
      {
        category: 'Primary Draw',
        neighborhood1Point: 'Master-planned amenities, shopping, schools, entertainment',
        neighborhood2Point: 'Castaic Lake recreation, boating, fishing, outdoor lifestyle',
      },
      {
        category: 'Community Type',
        neighborhood1Point: 'Dense master-planned community, urban/suburban mix',
        neighborhood2Point: 'Spread out, rural/suburban mix with lake orientation',
      },
      {
        category: 'Shopping & Dining',
        neighborhood1Point: 'Multiple shopping centers, 100+ restaurants, Town Center',
        neighborhood2Point: 'Limited local shopping, 10-15 minute drive to major retail',
      },
      {
        category: 'Schools',
        neighborhood1Point: 'Top-rated schools (8-10/10), multiple options per level',
        neighborhood2Point: 'Good schools (7-8/10), fewer options, potential for transfers',
      },
      {
        category: 'Commute',
        neighborhood1Point: 'Central location, Metrolink access, 45-60 min to LA',
        neighborhood2Point: 'Northern edge of Santa Clarita, 55-75 min commute to LA',
      },
    ],
    bestFor: {
      neighborhood1: [
        'Families prioritizing top-rated schools and education',
        'Buyers who want walkable access to shopping, dining, entertainment',
        'Commuters who need Metrolink or shorter drive to Los Angeles',
        'Those who prefer organized HOA communities with amenities',
        'First-time buyers and young families seeking full-service community',
      ],
      neighborhood2: [
        'Outdoor enthusiasts who love boating, fishing, and water sports',
        'Buyers seeking lakefront or lake-view properties',
        'Those who prefer quieter, more rural atmosphere',
        'Families willing to trade convenience for natural beauty',
        'Retirees and second-home buyers seeking recreation-focused lifestyle',
      ],
    },
  },
  {
    slug: 'stevenson-ranch-vs-newhall',
    neighborhood1Slug: 'stevenson-ranch',
    neighborhood2Slug: 'newhall',
    title: 'Stevenson Ranch vs Newhall: Gated Luxury vs Historic Value',
    metaDescription:
      'Stevenson Ranch vs Newhall comparison. Discover the differences in pricing, amenities, schools, and lifestyle between these two distinct Santa Clarita neighborhoods.',
    introduction:
      'Stevenson Ranch and Newhall sit at opposite ends of the Santa Clarita real estate spectrum. Stevenson Ranch is known for its gated luxury communities, premium amenities, and higher price points. Newhall offers character-rich homes, historic downtown charm, and better affordability. Both neighborhoods have excellent schools and family-friendly environments, but appeal to buyers with very different priorities and budgets.',
    keyDifferences: [
      {
        category: 'Price Range',
        neighborhood1Point: 'Single-family homes $850K-$2.5M+, median $1.2M',
        neighborhood2Point: 'Single-family homes $550K-$950K, median $700K',
      },
      {
        category: 'Community Type',
        neighborhood1Point: 'Gated master-planned community with private amenities',
        neighborhood2Point: 'Historic downtown with mix of home ages and styles',
      },
      {
        category: 'HOA & Amenities',
        neighborhood1Point: 'Higher HOA dues ($200-$400+/mo), country club, pools, parks',
        neighborhood2Point: 'Many non-HOA homes, public parks and community facilities',
      },
      {
        category: 'Home Age',
        neighborhood1Point: 'Newer construction (1990s-2020s), modern floor plans',
        neighborhood2Point: 'Mix of historic (1920s-1960s) and newer homes',
      },
      {
        category: 'Lot Sizes',
        neighborhood1Point: 'Smaller lots (5,000-8,000 sq ft) with premium landscaping',
        neighborhood2Point: 'Larger lots (8,000-15,000+ sq ft) with mature trees',
      },
      {
        category: 'Lifestyle',
        neighborhood1Point: 'Resort-style living, exclusive community, high-end shopping nearby',
        neighborhood2Point: 'Arts district, farmers market, walkable downtown, local events',
      },
    ],
    bestFor: {
      neighborhood1: [
        'Move-up buyers with budgets over $850K',
        'Families seeking gated community security and exclusivity',
        'Buyers who want resort-style amenities and country club access',
        'Those who prioritize newer construction and modern features',
        'Families who prefer organized community programs and events',
      ],
      neighborhood2: [
        'Budget-conscious buyers ($550K-$750K range)',
        'Those seeking character homes with unique architecture',
        'Buyers who want larger lots and more outdoor space',
        'Families who appreciate arts, culture, and downtown lifestyle',
        'Investors and renovation-minded buyers seeking value',
      ],
    },
  },
  {
    slug: 'saugus-vs-newhall',
    neighborhood1Slug: 'saugus',
    neighborhood2Slug: 'newhall',
    title: 'Saugus vs Newhall: Which Offers Better Value for Santa Clarita Homebuyers?',
    metaDescription:
      'Compare Saugus vs Newhall neighborhoods. Side-by-side analysis of home prices, schools, parks, commute times, and community character to help you choose.',
    introduction:
      'Saugus and Newhall are two of Santa Clarita\'s most affordable and family-friendly neighborhoods. Both areas offer good schools, central locations, and strong community pride. Saugus has a more suburban, organized feel with newer tract homes, while Newhall provides historic character, downtown amenities, and diverse housing stock. This comparison will help you decide which neighborhood aligns better with your lifestyle and homebuying priorities.',
    keyDifferences: [
      {
        category: 'Price Range',
        neighborhood1Point: 'Single-family homes $550K-$900K, median $725K',
        neighborhood2Point: 'Single-family homes $550K-$950K, median $700K',
      },
      {
        category: 'Community Character',
        neighborhood1Point: 'Suburban neighborhoods, family-oriented, sports-focused',
        neighborhood2Point: 'Historic downtown, arts community, walkable Main Street',
      },
      {
        category: 'Home Styles',
        neighborhood1Point: '1970s-1990s tract homes, planned neighborhoods',
        neighborhood2Point: 'Mix of historic (1920s-1960s) and modern homes',
      },
      {
        category: 'Shopping & Dining',
        neighborhood1Point: 'Saugus Café, local shopping centers, Walmart Supercenter',
        neighborhood2Point: 'Historic Main Street, breweries, restaurants, farmers market',
      },
      {
        category: 'Recreation',
        neighborhood1Point: 'Saugus Central Park, youth sports leagues, community programs',
        neighborhood2Point: 'Arts district, MAIN theater, public parks, cultural events',
      },
      {
        category: 'Schools',
        neighborhood1Point: 'Strong schools (7-9/10), athletic programs, newer facilities',
        neighborhood2Point: 'Mix of historic and modern schools (7-9/10 ratings)',
      },
    ],
    bestFor: {
      neighborhood1: [
        'Families with children involved in youth sports',
        'Buyers seeking suburban neighborhood feel',
        'Those who prefer newer homes (1980s-1990s)',
        'Families who want organized HOA communities',
        'Commuters who need easy access to SR-14 freeway',
      ],
      neighborhood2: [
        'Buyers seeking character and unique home architecture',
        'Families who appreciate arts, culture, and downtown events',
        'Those who want walkable access to Main Street shops and restaurants',
        'Buyers looking for larger lots and mature landscaping',
        'Investors and those comfortable with renovation projects',
      ],
    },
  },
]

// Helper function to get comparison by slug
export function getComparisonBySlug(slug: string): NeighborhoodComparison | undefined {
  return neighborhoodComparisons.find((c) => c.slug === slug)
}

// Get all comparison slugs for generateStaticParams
export function getComparisonSlugs(): string[] {
  return neighborhoodComparisons.map((c) => c.slug)
}

// Generate reverse comparison slug (e.g., newhall-vs-valencia from valencia-vs-newhall)
export function getReverseSlug(slug: string): string {
  const parts = slug.split('-vs-')
  if (parts.length !== 2) return slug
  return `${parts[1]}-vs-${parts[0]}`
}

// Get comparison data (handles both forward and reverse)
export function getComparisonData(slug: string): NeighborhoodComparison | undefined {
  const comparison = getComparisonBySlug(slug)
  if (comparison) return comparison

  // Try reverse
  const reverseSlug = getReverseSlug(slug)
  return getComparisonBySlug(reverseSlug)
}
