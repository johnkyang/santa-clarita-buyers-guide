import type { Neighborhood } from '@/types/neighborhood'

export const canyonCountry: Neighborhood = {
  slug: 'canyon-country',
  name: 'Canyon Country',
  tagline: 'Spacious Living with a Rural Feel',
  heroImage: '/images/neighborhoods/canyon-country-hero.jpg',

  description:
    'Canyon Country is Santa Clarita Valley\'s largest, most diverse, and most affordable community, home to 58,000 residents seeking spacious living, equestrian opportunities, and exceptional value. Spanning from the 14 Freeway east to Agua Dulce, Canyon Country offers an irresistible combination: larger lots (many 10,000-20,000+ sq ft), semi-rural atmosphere with horse trails and ranch properties, proximity to Angeles National Forest and Vasquez Rocks hiking, and home prices $200,000-$400,000 below comparable Valencia homes. This expansive community features everything from affordable starter condos ($400K) to luxury equestrian estates ($1.5M+), making it accessible to first-time buyers, growing families, and horse enthusiasts alike. Canyon Country boasts Canyon High School (rated 8/10) and Golden Valley High School (7/10), abundant parks including the 40-acre Fair Oaks Ranch Community Park, easy 14 Freeway access for Palmdale/Lancaster commuters, and rapidly improving retail with new shopping centers along Soledad Canyon Road. While schools rate slightly lower than west-side communities, savvy buyers recognize Canyon Country\'s unbeatable value: more house, more land, more freedom to customize, and authentic small-town community feel. For families prioritizing space over amenities, outdoor enthusiasts craving nature access, equestrian lovers needing horse facilities, and budget-conscious buyers refusing to compromise on square footage, Canyon Country delivers Southern California living at prices that actually make sense. This is where you get a 2,500 sq ft home with a pool and RV parking for what a 1,600 sq ft townhome costs in Valencia—the value proposition is undeniable.',

  highlights: [
    'Largest community: 58,000 residents with diverse housing from $400K condos to $1.5M+ equestrian estates',
    'Best value: $200K-$400K less than comparable west-side homes, significantly more house for your money',
    'Larger lots: many properties 10,000-20,000+ sq ft with room for pools, RVs, workshops, horses',
    'Equestrian paradise: horse trails, bridle paths, properties with corrals, stables, and riding areas',
    'Canyon High School (8/10), Golden Valley High (7/10), Leona Cox Elementary (8/10)',
    'Nature access: Angeles National Forest minutes away, Vasquez Rocks, endless hiking trails',
    'Fair Oaks Ranch Community Park: 40 acres with sports fields, playgrounds, community events',
    'Easy 14 Freeway access: ideal location for Palmdale, Lancaster, Antelope Valley commuters',
    'Growing retail: new shopping centers on Soledad Canyon, restaurants, essential services expanding',
    'Small-town character: tight-knit neighborhoods, community events, authentic feel, friendly neighbors',
    'No or minimal Mello-Roos in most established neighborhoods',
    'First-time buyer paradise: attainable entry points with condos and townhomes starting at $400K',
  ],

  demographics: {
    population: 58000,
    medianAge: 36,
    medianIncome: 78000,
  },

  schools: [
    {
      name: 'Canyon High School',
      type: 'high',
      rating: 8,
      district: 'William S. Hart Union High School District',
      website: 'https://www.hartdistrict.org/canyon',
    },
    {
      name: 'Sierra Vista Junior High',
      type: 'middle',
      rating: 7,
      district: 'William S. Hart Union High School District',
    },
    {
      name: 'Golden Valley High School',
      type: 'high',
      rating: 7,
      district: 'William S. Hart Union High School District',
    },
    {
      name: 'Fair Oaks Elementary',
      type: 'elementary',
      rating: 7,
      district: 'Sulphur Springs Union School District',
    },
    {
      name: 'Leona Cox Elementary',
      type: 'elementary',
      rating: 8,
      district: 'Sulphur Springs Union School District',
    },
  ],

  schoolDistrict: 'Served by William S. Hart Union High School District and Sulphur Springs Union School District',

  priceRanges: {
    singleFamily: {
      min: 550000,
      max: 1100000,
      median: 750000,
      lastUpdated: '2025-01',
    },
    townhome: {
      min: 450000,
      max: 650000,
      median: 550000,
      lastUpdated: '2025-01',
    },
    condo: {
      min: 350000,
      max: 550000,
      median: 450000,
      lastUpdated: '2025-01',
    },
  },

  amenities: [
    {
      name: 'Fair Oaks Ranch Park',
      description: 'Large community park with sports facilities and trails',
      icon: 'trees',
    },
    {
      name: 'Soledad Canyon Road',
      description: 'Main commercial corridor with shopping and services',
      icon: 'map-pin',
    },
    {
      name: 'Equestrian Facilities',
      description: 'Numerous horse trails and boarding facilities',
      icon: 'horse',
    },
    {
      name: 'Angeles National Forest',
      description: 'Direct access to hiking, camping, and outdoor recreation',
      icon: 'mountain',
    },
    {
      name: 'Sand Canyon Country Club',
      description: 'Golf course and recreational facilities',
      icon: 'flag',
    },
    {
      name: 'Shopping Centers',
      description: 'Growing selection of retail and dining options',
      icon: 'shopping-cart',
    },
  ],

  nearbyAttractions: [
    'Vasquez Rocks Natural Area Park',
    'Angeles National Forest',
    'Fair Oaks Ranch Park',
    'Sand Canyon Country Club',
    'Canyon Country Community Center',
    'Plum Canyon Trail',
    'Santa Clarita Woodlands Park',
  ],

  metaDescription:
    'Complete Canyon Country, CA guide. Santa Clarita\'s largest, most affordable community: spacious lots (10,000-20,000+ sq ft), equestrian properties, homes $400K-$1.5M+ ($200K-$400K below Valencia), Canyon High (8/10), Angeles National Forest access, 14 Freeway commuters. Best value for families seeking space, outdoor living, and affordability.',

  keywords: [
    'Canyon Country homes for sale',
    'Canyon Country real estate Santa Clarita',
    'equestrian properties Canyon Country',
    'affordable homes Canyon Country',
    'Canyon High School rating',
    'larger lots Santa Clarita',
    'Canyon Country home prices 2025',
    'first time buyer Canyon Country',
    'best value Santa Clarita',
    '14 freeway commute homes',
    'horse properties Canyon Country',
    'Vasquez Rocks homes',
    'Fair Oaks Ranch Park',
    'Golden Valley High School',
    'Canyon Country vs Valencia prices',
    'spacious lots Canyon Country',
    'Soledad Canyon shopping',
    'buy home Canyon Country CA',
  ],
}
