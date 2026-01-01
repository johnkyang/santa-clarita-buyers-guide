import { Metadata } from 'next'
import { fiftyFivePlusGuide } from '@/data/guides'
import { GuideHero } from '@/components/guides/guide-hero'
import { GuideSection } from '@/components/guides/guide-section'
import { GuideFAQs } from '@/components/guides/guide-faqs'
import { ScheduleTourCTA } from '@/components/shared/schedule-tour-cta'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { ArticleSchema } from '@/components/shared/article-schema'
import { RelatedGuides } from '@/components/shared/related-guides'
import { RelatedNeighborhoods } from '@/components/shared/related-neighborhoods'
import { DollarSign, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: fiftyFivePlusGuide.title,
  description: fiftyFivePlusGuide.metaDescription,
  keywords: fiftyFivePlusGuide.keywords,
}

export default function FiftyFivePlusGuidePage() {
  return (
    <div>
      <ArticleSchema
        headline={fiftyFivePlusGuide.title}
        description={fiftyFivePlusGuide.metaDescription}
        keywords={fiftyFivePlusGuide.keywords}
        datePublished="2025-01-01T00:00:00Z"
        dateModified={new Date().toISOString()}
      />
      <GuideHero guide={fiftyFivePlusGuide} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Buyer Guides', href: '/guides' },
            { label: 'Senior 55+ Communities', href: '/guides/55-plus-communities' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-600">
              {fiftyFivePlusGuide.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-gradient-to-b from-white to-orange-50/30 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            {fiftyFivePlusGuide.sections.map((section, index) => (
              <GuideSection key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      {fiftyFivePlusGuide.faqs && <GuideFAQs faqs={fiftyFivePlusGuide.faqs} />}

      {/* Related Neighborhoods */}
      <RelatedNeighborhoods
        title="Neighborhoods with 55+ Communities"
        description="Discover active adult communities in Santa Clarita's most desirable neighborhoods"
        neighborhoods={[
          {
            name: 'Valencia',
            slug: 'valencia',
            tagline: 'Multiple age-qualified communities with resort-style amenities',
            priceRange: '$500K - $850K',
            highlights: ['Active adult living', 'Clubhouses & pools'],
          },
          {
            name: 'Newhall',
            slug: 'newhall',
            tagline: 'Close-knit senior communities near historic downtown',
            priceRange: '$450K - $700K',
            highlights: ['Walkability', 'Community activities'],
          },
          {
            name: 'Saugus',
            slug: 'saugus',
            tagline: 'Affordable 55+ options in family-friendly area',
            priceRange: '$475K - $650K',
            highlights: ['Great value', 'Low-maintenance living'],
          },
        ]}
      />

      {/* Related Guides */}
      <RelatedGuides
        guides={[
          {
            title: 'Reverse for Purchase',
            description: 'Learn how reverse mortgages can help seniors 62+ buy a home with no monthly mortgage payments',
            href: '/guides/reverse-mortgage',
            icon: <DollarSign className="h-5 w-5 text-white" />,
          },
          {
            title: 'Resale Homes Guide',
            description: 'Explore existing homes in established 55+ communities throughout Santa Clarita',
            href: '/guides/resale',
            icon: <Home className="h-5 w-5 text-white" />,
          },
          {
            title: 'First-Time Home Buyer Guide',
            description: 'Downsizing or buying for the first time? Learn the home buying process step-by-step',
            href: '/guides/first-time-buyer',
            icon: <Home className="h-5 w-5 text-white" />,
          },
        ]}
      />

      {/* CTA Section */}
      <ScheduleTourCTA
        title="Explore 55+ Communities"
        description="Let us help you find the perfect active adult community in Santa Clarita with the amenities and lifestyle you deserve"
        variant="primary"
        showPhone={true}
      />
    </div>
  )
}
