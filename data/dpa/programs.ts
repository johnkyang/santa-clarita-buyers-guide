export type Eligibility = 'likely' | 'possibly' | 'unlikely'

export interface DPAAnswers {
  income: string
  firstTimeBuyer: string
  creditScore: string
  purchasePrice: string
}

export interface DPAProgram {
  id: string
  name: string
  shortName: string
  benefit: string
  maxAmount: string
  repayment: string
  description: string
  getEligibility: (answers: DPAAnswers) => Eligibility
}

export const dpaPrograms: DPAProgram[] = [
  {
    id: 'dream-for-all',
    name: 'CalHFA Dream For All',
    shortName: 'Dream For All',
    benefit: 'Up to 20% / $150,000',
    maxAmount: '$150,000',
    repayment: 'Shared appreciation (no monthly payment)',
    description:
      'The biggest program available. Covers up to 20% of your purchase price with no monthly payment — appreciation is shared when you sell or refinance.',
    getEligibility({ income, firstTimeBuyer, creditScore, purchasePrice }: DPAAnswers): Eligibility {
      // Requires first-generation buyer, first-time buyer, credit 660+, income limits, price within limits
      if (firstTimeBuyer !== 'first-generation') return 'unlikely'
      if (creditScore === 'below-620' || creditScore === '620-659') return 'unlikely'
      if (income === 'over-250k') return 'unlikely'
      if (purchasePrice === 'over-1089k') return 'unlikely'
      if (creditScore === '660-679' || income === '180k-250k') return 'possibly'
      return 'likely'
    },
  },
  {
    id: 'myhome',
    name: 'CalHFA MyHome Assistance',
    shortName: 'CalHFA MyHome',
    benefit: 'Up to 3.5% of purchase price',
    maxAmount: '3.5% of price',
    repayment: 'Deferred loan — due when you sell or refinance',
    description:
      'A zero-interest deferred loan for first-time buyers. No monthly payment until you sell, refinance, or pay off the first mortgage. Available year-round.',
    getEligibility({ income, firstTimeBuyer, creditScore, purchasePrice }: DPAAnswers): Eligibility {
      if (firstTimeBuyer === 'not-first-time') return 'unlikely'
      if (creditScore === 'below-620') return 'unlikely'
      if (income === 'over-250k') return 'unlikely'
      if (purchasePrice === 'over-1089k') return 'unlikely'
      if (creditScore === '620-659' || income === '180k-250k') return 'possibly'
      return 'likely'
    },
  },
  {
    id: 'gsfa-platinum',
    name: 'GSFA Platinum Program',
    shortName: 'GSFA Platinum',
    benefit: 'Up to 5% — true grant, no repayment',
    maxAmount: '5% of loan amount',
    repayment: 'Grant — no repayment required',
    description:
      'The most flexible program: no first-time buyer requirement, credit score from 620, and it\'s a true grant you never have to pay back. Available to repeat buyers too.',
    getEligibility({ income, creditScore, purchasePrice }: DPAAnswers): Eligibility {
      if (creditScore === 'below-620') return 'unlikely'
      if (income === 'over-250k') return 'unlikely'
      if (purchasePrice === 'over-1089k') return 'possibly'
      if (creditScore === '620-659' || income === '180k-250k') return 'possibly'
      return 'likely'
    },
  },
  {
    id: 'calhfa-zip',
    name: 'CalHFA ZIP (Zero Interest Program)',
    shortName: 'CalHFA ZIP',
    benefit: 'Up to $30,000 for closing costs',
    maxAmount: '$30,000',
    repayment: 'Zero-interest deferred loan',
    description:
      'Covers closing costs when you already have a down payment. A zero-interest deferred loan that pairs with CalHFA first mortgage products.',
    getEligibility({ income, firstTimeBuyer, creditScore, purchasePrice }: DPAAnswers): Eligibility {
      if (firstTimeBuyer === 'not-first-time') return 'unlikely'
      if (creditScore === 'below-620') return 'unlikely'
      if (income === 'over-250k') return 'unlikely'
      if (purchasePrice === 'over-1089k') return 'unlikely'
      if (creditScore === '620-659' || income === '180k-250k') return 'possibly'
      return 'likely'
    },
  },
]

export interface DPAQuestion {
  id: keyof DPAAnswers
  question: string
  options: { id: string; label: string }[]
}

export const dpaQuestions: DPAQuestion[] = [
  {
    id: 'income',
    question: 'What is your annual household income?',
    options: [
      { id: 'under-80k', label: 'Under $80,000' },
      { id: '80k-120k', label: '$80,000 – $120,000' },
      { id: '120k-180k', label: '$120,000 – $180,000' },
      { id: '180k-250k', label: '$180,000 – $250,000' },
      { id: 'over-250k', label: 'Over $250,000' },
    ],
  },
  {
    id: 'firstTimeBuyer',
    question: 'What is your homebuyer status?',
    options: [
      { id: 'first-generation', label: "I'm a first-time buyer AND my parents never owned a home (first-generation)" },
      { id: 'first-time', label: "I'm a first-time buyer (haven't owned in 3+ years), but my parents owned" },
      { id: 'not-first-time', label: 'I currently own or have recently owned a home' },
    ],
  },
  {
    id: 'creditScore',
    question: 'What is your approximate credit score?',
    options: [
      { id: 'below-620', label: 'Below 620' },
      { id: '620-659', label: '620 – 659' },
      { id: '660-679', label: '660 – 679' },
      { id: '680-719', label: '680 – 719' },
      { id: '720-plus', label: '720 or higher' },
    ],
  },
  {
    id: 'purchasePrice',
    question: 'What is your target purchase price range?',
    options: [
      { id: 'under-600k', label: 'Under $600,000' },
      { id: '600k-800k', label: '$600,000 – $800,000' },
      { id: '800k-1m', label: '$800,000 – $1,000,000' },
      { id: '1m-1089k', label: '$1,000,000 – $1,089,300 (2026 FHA limit)' },
      { id: 'over-1089k', label: 'Over $1,089,300' },
    ],
  },
]
