export interface BuyerTypeGuide {
  slug: string
  title: string
  subtitle: string
  heroTitle: string
  metaDescription: string
  keywords: string[]

  // Page Content
  introduction: string

  challenges: {
    title: string
    description: string
    icon: string
  }[]

  benefits: {
    title: string
    description: string
  }[]

  recommendedNeighborhoods: {
    slug: string
    reason: string
    pricePoint: string
  }[]

  actionSteps: {
    step: number
    title: string
    description: string
  }[]

  faqs: {
    question: string
    answer: string
  }[]

  ctaTitle: string
  ctaDescription: string
}
