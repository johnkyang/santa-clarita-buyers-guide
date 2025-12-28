export interface GuideSection {
  id: string
  title: string
  content: string
  subsections?: GuideSection[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Resource {
  title: string
  url: string
  description: string
}

export interface Guide {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  introduction: string

  sections: GuideSection[]

  faqs?: FAQ[]

  resources?: Resource[]

  // SEO
  metaDescription: string
  keywords: string[]
}
