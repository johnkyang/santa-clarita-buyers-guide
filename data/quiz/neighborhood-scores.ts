export type NeighborhoodSlug =
  | 'valencia'
  | 'stevenson-ranch'
  | 'saugus'
  | 'canyon-country'
  | 'newhall'
  | 'castaic'

export type ScoreMap = Partial<Record<NeighborhoodSlug, number>>

export interface QuizOption {
  id: string
  label: string
  scores: ScoreMap
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'budget',
    question: 'What is your home buying budget?',
    options: [
      {
        id: 'under-600k',
        label: 'Under $600,000',
        scores: { 'canyon-country': 3, newhall: 3, castaic: 2 },
      },
      {
        id: '600k-800k',
        label: '$600,000 – $800,000',
        scores: { saugus: 3, 'canyon-country': 2, newhall: 2, castaic: 1 },
      },
      {
        id: '800k-1m',
        label: '$800,000 – $1,000,000',
        scores: { valencia: 3, saugus: 2, 'stevenson-ranch': 1, castaic: 1 },
      },
      {
        id: '1m-1-5m',
        label: '$1,000,000 – $1,500,000',
        scores: { valencia: 3, 'stevenson-ranch': 3 },
      },
      {
        id: 'over-1-5m',
        label: 'Over $1,500,000',
        scores: { 'stevenson-ranch': 3, valencia: 2 },
      },
    ],
  },
  {
    id: 'lifestyle',
    question: 'What matters most to your family?',
    options: [
      {
        id: 'schools-activities',
        label: 'Top schools & family activities',
        scores: { valencia: 3, 'stevenson-ranch': 2, saugus: 1 },
      },
      {
        id: 'space-outdoors',
        label: 'Space, privacy & outdoor living',
        scores: { 'canyon-country': 3, castaic: 2, 'stevenson-ranch': 1 },
      },
      {
        id: 'walkability-shopping',
        label: 'Walkability, dining & shopping',
        scores: { valencia: 3, newhall: 3 },
      },
      {
        id: 'security-privacy',
        label: 'Gated security & quiet streets',
        scores: { 'stevenson-ranch': 3, castaic: 1 },
      },
      {
        id: 'value-affordability',
        label: 'Best value for the money',
        scores: { 'canyon-country': 3, newhall: 2, saugus: 1 },
      },
    ],
  },
  {
    id: 'household',
    question: 'Who is in your household?',
    options: [
      {
        id: 'solo-couple',
        label: 'Just me or a couple (no kids)',
        scores: { newhall: 2, valencia: 2 },
      },
      {
        id: 'small-family',
        label: 'Small family (1–2 kids)',
        scores: { valencia: 2, saugus: 2, 'stevenson-ranch': 1 },
      },
      {
        id: 'large-family',
        label: 'Large family (3+ kids)',
        scores: { 'canyon-country': 2, saugus: 2, valencia: 1 },
      },
      {
        id: 'empty-nester',
        label: 'Empty nester or retiring',
        scores: { valencia: 2, 'stevenson-ranch': 2, castaic: 1 },
      },
    ],
  },
  {
    id: 'commute',
    question: 'What is your commute situation?',
    options: [
      {
        id: 'commute-la',
        label: 'I commute to LA (I-5 / Metrolink)',
        scores: { valencia: 3, 'stevenson-ranch': 2, newhall: 1 },
      },
      {
        id: 'commute-av',
        label: 'I work in Antelope Valley (SR-14)',
        scores: { 'canyon-country': 3, saugus: 2 },
      },
      {
        id: 'remote',
        label: 'I work remotely — commute is not a factor',
        scores: { castaic: 2, 'canyon-country': 1, newhall: 1, saugus: 1, valencia: 1, 'stevenson-ranch': 1 },
      },
      {
        id: 'local',
        label: 'I work locally in Santa Clarita',
        scores: { valencia: 1, saugus: 1, newhall: 1, 'canyon-country': 1, 'stevenson-ranch': 1, castaic: 1 },
      },
    ],
  },
  {
    id: 'home-type',
    question: 'What type of home are you looking for?',
    options: [
      {
        id: 'new-construction',
        label: 'Brand new construction',
        scores: { valencia: 2, 'canyon-country': 2 },
      },
      {
        id: 'established',
        label: 'Established neighborhood with character',
        scores: { newhall: 3, saugus: 2 },
      },
      {
        id: 'luxury',
        label: 'Luxury or custom home',
        scores: { 'stevenson-ranch': 3, valencia: 2 },
      },
      {
        id: 'best-value',
        label: 'Most square footage for the money',
        scores: { 'canyon-country': 3, saugus: 1, castaic: 1 },
      },
    ],
  },
]

export const neighborhoodMeta: Record<
  NeighborhoodSlug,
  { name: string; tagline: string; priceRange: string; highlights: string[] }
> = {
  valencia: {
    name: 'Valencia',
    tagline: 'Master-planned perfection with top schools and 70+ parks',
    priceRange: '$650K – $1.5M+',
    highlights: ['Award-winning Hart Union schools', '40+ miles of paseos', 'Bridgeport Lake & community events'],
  },
  'stevenson-ranch': {
    name: 'Stevenson Ranch',
    tagline: 'Gated luxury with West Ranch High and exclusive neighborhoods',
    priceRange: '$850K – $2.5M+',
    highlights: ['West Ranch High School (9/10)', 'Gated community security', 'Larger lots & upscale finishes'],
  },
  saugus: {
    name: 'Saugus',
    tagline: 'Excellent schools and great value in a family-friendly community',
    priceRange: '$600K – $1.2M',
    highlights: ['Saugus High School (8/10)', 'Saugus Sports Complex', 'Strong family community culture'],
  },
  'canyon-country': {
    name: 'Canyon Country',
    tagline: 'More space, lower prices, and a laid-back neighborhood feel',
    priceRange: '$550K – $1.1M',
    highlights: ['Largest lots for the price', 'Easy SR-14 access', 'Equestrian trails nearby'],
  },
  newhall: {
    name: 'Newhall',
    tagline: 'Historic downtown with walkability and growing community energy',
    priceRange: '$550K – $950K',
    highlights: ['Walkable Old Town Newhall', 'Most affordable entry point', 'Arts district & farmers market'],
  },
  castaic: {
    name: 'Castaic',
    tagline: 'Lakeside living with outdoor access and peaceful surroundings',
    priceRange: '$550K – $1.2M+',
    highlights: ['Castaic Lake recreation area', 'Peaceful, spacious feel', 'Great for outdoor families'],
  },
}

export function calculateNeighborhoodScores(
  answers: Record<string, string>
): Array<{ slug: NeighborhoodSlug; score: number }> {
  const totals: Record<NeighborhoodSlug, number> = {
    valencia: 0,
    'stevenson-ranch': 0,
    saugus: 0,
    'canyon-country': 0,
    newhall: 0,
    castaic: 0,
  }

  for (const question of quizQuestions) {
    const answerId = answers[question.id]
    if (!answerId) continue
    const option = question.options.find((o) => o.id === answerId)
    if (!option) continue
    for (const [slug, pts] of Object.entries(option.scores) as [NeighborhoodSlug, number][]) {
      totals[slug] = (totals[slug] || 0) + pts
    }
  }

  return (Object.entries(totals) as [NeighborhoodSlug, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([slug, score]) => ({ slug, score }))
}
