import type { Neighborhood } from '@/types/neighborhood'

export const castaic: Neighborhood = {
  slug: 'castaic',
  name: 'Castaic',
  tagline: 'Lakeside Living with Natural Beauty',
  heroImage: '/images/neighborhoods/castaic-hero.jpg',

  description:
    'Castaic is Santa Clarita Valley\'s premier lakeside community and outdoor recreation paradise, offering a lifestyle centered around the spectacular 9,000-acre Castaic Lake—Southern California\'s ultimate destination for boating, fishing, water sports, and mountain-framed natural beauty. Located at the northern gateway of the valley along Interstate 5, Castaic delivers what outdoor enthusiasts and nature lovers crave: immediate access to water recreation, Angeles National Forest hiking, Pyramid Lake proximity, and breathtaking mountain vistas, all while providing exceptional home value compared to central Santa Clarita communities. Home to approximately 19,000 residents, Castaic spans from lakeside properties with stunning water views to hillside estates overlooking the valley, newer master-planned developments like Rivervillage with resort amenities, and established neighborhoods offering authentic small-town character. With home prices ranging from $350,000 (condos) to $1.2M+ (custom lakeside estates), Castaic attracts outdoor-oriented families, commuters seeking affordability without sacrificing natural beauty, retirees desiring peaceful lakeside living, and adventure seekers who prioritize weekend lake activities over urban conveniences. The community features Castaic High School (7/10), Live Oak Elementary (8/10), the state-of-the-art Castaic Sports Complex, and rapidly improving retail infrastructure including shopping centers and dining options. Castaic\'s unbeatable combination—waterfront lifestyle, mountain recreation, I-5 commuter access, $150,000-$300,000 savings versus comparable Valencia properties, low traffic, clean air, and genuine community feel—makes it Santa Clarita\'s best-kept secret for buyers who refuse to compromise outdoor living for suburban cookie-cutter developments. This is where you wake up to mountain sunrises, spend weekends on the lake instead of in shopping malls, and get significantly more house and land for your money. For families who value nature over nightlife, water sports over wine bars, and authentic outdoor Southern California living, Castaic is the obvious choice.',

  highlights: [
    'Castaic Lake: 9,000-acre premier recreation destination for boating, fishing, jet skiing, water skiing, swimming',
    'Exceptional value: $350K-$1.2M+ homes ($150K-$300K below comparable Valencia, significantly more space)',
    'Waterfront lifestyle: lakeside properties, lake-view homes, immediate water access, beach areas, boat launches',
    'Outdoor recreation paradise: Angeles National Forest access, Pyramid Lake nearby, endless hiking trails',
    'Larger properties: many lots 8,000-20,000+ sq ft, room for RVs, boats, outdoor living spaces',
    'Castaic High School (7/10), Live Oak Elementary (8/10), improving Castaic Union School District',
    'Rivervillage master-plan: newer gated community with pools, parks, trails, resort-style amenities',
    'I-5 corridor location: easy commute to Valencia (15 min), Santa Clarita (20 min), Los Angeles (45-60 min)',
    'Natural beauty: mountain vistas, cleaner air, lower density, peaceful semi-rural atmosphere',
    'Castaic Sports Complex: state-of-the-art youth sports facilities, baseball, soccer, community events',
    'Growing retail: expanding shopping centers, restaurants, essential services along Lake Hughes Road',
    'No or minimal Mello-Roos in established neighborhoods, authentic small-town community character',
  ],

  demographics: {
    population: 19000,
    medianAge: 37,
    medianIncome: 82000,
  },

  schools: [
    {
      name: 'Castaic High School',
      type: 'high',
      rating: 7,
      district: 'William S. Hart Union High School District',
      website: 'https://www.hartdistrict.org/castaic',
    },
    {
      name: 'Castaic Middle School',
      type: 'middle',
      rating: 7,
      district: 'Castaic Union School District',
    },
    {
      name: 'Castaic Elementary',
      type: 'elementary',
      rating: 7,
      district: 'Castaic Union School District',
    },
    {
      name: 'Live Oak Elementary',
      type: 'elementary',
      rating: 8,
      district: 'Castaic Union School District',
    },
  ],

  schoolDistrict: 'Served by William S. Hart Union High School District and Castaic Union School District',

  priceRanges: {
    singleFamily: {
      min: 550000,
      max: 1200000,
      median: 750000,
      lastUpdated: '2025-01',
    },
    townhome: {
      min: 450000,
      max: 700000,
      median: 575000,
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
      name: 'Castaic Lake',
      description: '9,000-acre lake for boating, fishing, and water recreation',
      icon: 'waves',
    },
    {
      name: 'Castaic Sports Complex',
      description: 'Multipurpose sports fields and recreation facilities',
      icon: 'trophy',
    },
    {
      name: 'Lake Hughes Road Shopping',
      description: 'Local shopping and dining along main corridor',
      icon: 'shopping-bag',
    },
    {
      name: 'Hiking Trails',
      description: 'Access to numerous trails and natural open spaces',
      icon: 'mountain',
    },
    {
      name: 'Castaic Lagoon',
      description: 'Smaller recreation area for swimming and picnicking',
      icon: 'sun',
    },
    {
      name: 'Val Verde Park',
      description: 'Community park with playgrounds and sports facilities',
      icon: 'layout-grid',
    },
  ],

  nearbyAttractions: [
    'Castaic Lake State Recreation Area',
    'Castaic Lagoon',
    'Ridge Route Communities Museum',
    'Pyramid Lake (nearby)',
    'Angeles National Forest access',
    'Templin Highway scenic drive',
    'The Outlets at Tejon Ranch',
  ],

  faqs: [
    {
      question: 'What are the average home prices in Castaic, CA?',
      answer:
        'Castaic offers exceptional lakeside living value with home prices ranging from $350,000 for condos to $1.2M+ for custom lakeside estates. Single-family homes typically range from $550,000 to $1.2M (median $750,000), townhomes from $450,000 to $700,000 (median $575,000), and condos from $350,000 to $550,000 (median $450,000) as of January 2025. Castaic homes are typically $150,000-$300,000 less expensive than comparable Valencia properties while offering significantly larger lots (8,000-20,000+ sq ft common), stunning lake and mountain views, and outdoor recreation lifestyle that urban communities simply cannot match—making it ideal for nature lovers, boating enthusiasts, and value-conscious buyers.',
    },
    {
      question: 'How are the schools in Castaic?',
      answer:
        'Castaic features solid schools including Live Oak Elementary rated 8/10, Castaic High School rated 7/10, and Castaic Middle School rated 7/10. Schools are served by the William S. Hart Union High School District and Castaic Union School District. While ratings average slightly lower than premium Valencia schools, many families prioritize the $150,000-$300,000 housing savings, waterfront lifestyle, larger properties, and outdoor recreation access over marginal rating differences. The savings allow families to invest in tutoring, extracurriculars, private lessons, or college savings while enjoying a quality of life that Valencia buyers pay premium prices to achieve.',
    },
    {
      question: 'What outdoor recreation does Castaic Lake offer?',
      answer:
        'Castaic Lake is a 9,000-acre premier recreation destination offering world-class boating, fishing (bass, trout, catfish tournaments), jet skiing, water skiing, wakeboarding, kayaking, swimming, and beach areas. The lake features multiple boat launches, picnic areas, hiking trails with spectacular views, and the Castaic Lagoon for swimming and smaller watercraft. Nearby attractions include Pyramid Lake, Angeles National Forest access, and endless mountain trails. For outdoor enthusiasts, Castaic delivers the Southern California waterfront lifestyle—wake up to mountain sunrises, spend weekends on the water, and enjoy authentic outdoor living that urban communities can only dream about.',
    },
    {
      question: 'What is the commute time from Castaic?',
      answer:
        'Castaic offers excellent I-5 corridor location with direct freeway access. The commute to Valencia is 15 minutes, Santa Clarita 20 minutes, and Los Angeles 45-75 minutes depending on traffic and destination. Many residents work in Santa Clarita, Valencia, or at nearby corporate parks, making Castaic a practical choice despite its northern location. The I-5 provides easy access south to LA and north to Bakersfield. Castaic\'s slightly longer commute is offset by significantly lower housing costs ($150K-$300K savings), larger properties, waterfront lifestyle, and cleaner air—for buyers prioritizing quality of life over proximity to urban centers.',
    },
    {
      question: 'Is Castaic good for families or better for outdoor enthusiasts?',
      answer:
        'Castaic excels for both families and outdoor enthusiasts, especially those who prioritize nature and recreation. Families appreciate affordable housing, larger lots with room for kids to play, the state-of-the-art Castaic Sports Complex with youth leagues, community parks, safe neighborhoods, and small-town character where neighbors know each other. Outdoor enthusiasts love immediate lake access, boating and fishing opportunities, Angeles National Forest hiking, mountain biking trails, cleaner air, and authentic outdoor lifestyle. Castaic attracts families who value weekend lake activities over shopping malls, nature over nightlife, and space over density—offering the best of both worlds.',
    },
    {
      question: 'What is Rivervillage and does Castaic have Mello-Roos?',
      answer:
        'Rivervillage is Castaic\'s newest master-planned community featuring gated neighborhoods, resort-style pools, parks, trails, and modern homes. It offers Valencia-style amenities at lower price points, attracting buyers seeking new construction with HOA amenities. Mello-Roos in Castaic varies significantly—established neighborhoods typically have no or minimal Mello-Roos, while newer developments like Rivervillage have assessments ranging from $3,000-$6,000+ annually. Always verify Mello-Roos for specific properties before purchasing. Despite potential Mello-Roos in newer areas, Castaic\'s $150,000-$300,000 purchase price advantage versus Valencia still delivers overall savings and better value for buyers prioritizing space, waterfront access, and outdoor living.',
    },
  ],

  daysOnMarket: 32,
  walkScore: 30,
  schoolRating: '7.2/10',

  metaDescription:
    'Complete Castaic, CA guide. Santa Clarita\'s lakeside community: 9,000-acre Castaic Lake recreation, homes $350K-$1.2M+ ($150K-$300K below Valencia), larger lots (8,000-20,000+ sq ft), Rivervillage master-plan, Castaic High (7/10), outdoor paradise. Best value for waterfront lifestyle, boating, fishing, nature lovers in Santa Clarita Valley.',

  keywords: [
    'Castaic CA homes for sale',
    'Castaic real estate Santa Clarita',
    'Castaic Lake homes',
    'lakefront properties Castaic',
    'waterfront homes Castaic Lake',
    'affordable homes Castaic',
    'Castaic home prices 2025',
    'Rivervillage Castaic',
    'Castaic vs Valencia prices',
    'Castaic High School rating',
    'Live Oak Elementary Castaic',
    'outdoor living Castaic',
    'boating communities Castaic',
    'larger lots Castaic',
    'I-5 corridor homes',
    'northern Santa Clarita',
    'Castaic Sports Complex',
    'buy home Castaic CA',
  ],
}
