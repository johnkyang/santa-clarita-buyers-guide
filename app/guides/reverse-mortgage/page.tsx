import { Metadata } from 'next'
import { reverseMortgageGuide } from '@/data/guides'
import { GuideHero } from '@/components/guides/guide-hero'
import { GuideSection } from '@/components/guides/guide-section'
import { GuideFAQs } from '@/components/guides/guide-faqs'
import { ScheduleTourCTA } from '@/components/shared/schedule-tour-cta'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { ArticleSchema } from '@/components/shared/article-schema'
import { RelatedGuides } from '@/components/shared/related-guides'
import { RelatedNeighborhoods } from '@/components/shared/related-neighborhoods'
import { Users, Home, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: reverseMortgageGuide.title,
  description: reverseMortgageGuide.metaDescription,
  keywords: reverseMortgageGuide.keywords,
}

export default function ReverseMortgageGuidePage() {
  return (
    <div>
      <ArticleSchema
        headline={reverseMortgageGuide.title}
        description={reverseMortgageGuide.metaDescription}
        keywords={reverseMortgageGuide.keywords}
        datePublished="2025-01-01T00:00:00Z"
        dateModified={new Date().toISOString()}
      />
      <GuideHero guide={reverseMortgageGuide} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Buyer Guides', href: '/guides' },
            { label: 'Reverse for Purchase', href: '/guides/reverse-mortgage' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-600">
              {reverseMortgageGuide.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-gradient-to-b from-white to-orange-50/30 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            {reverseMortgageGuide.sections.map((section, index) => (
              <GuideSection key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      {reverseMortgageGuide.faqs && <GuideFAQs faqs={reverseMortgageGuide.faqs} />}

      {/* Related Neighborhoods */}
      <RelatedNeighborhoods
        title="Best Neighborhoods for Seniors 62+"
        description="Explore Santa Clarita communities ideal for buyers using reverse for purchase loans"
        neighborhoods={[
          {
            name: 'Valencia',
            slug: 'valencia',
            tagline: 'Age-restricted communities with full amenities',
            priceRange: '$500K - $900K',
            highlights: ['Active adult living', 'Low maintenance'],
          },
          {
            name: 'Newhall',
            slug: 'newhall',
            tagline: 'Historic charm with senior-friendly features',
            priceRange: '$450K - $750K',
            highlights: ['Walkable downtown', 'Single-story homes'],
          },
          {
            name: 'Saugus',
            slug: 'saugus',
            tagline: 'Affordable senior housing options',
            priceRange: '$475K - $700K',
            highlights: ['Great value', 'Quiet neighborhoods'],
          },
        ]}
      />

      {/* Related Guides */}
      <RelatedGuides
        guides={[
          {
            title: 'Senior 55+ Communities',
            description: 'Discover active adult communities and age-restricted neighborhoods in Santa Clarita',
            href: '/guides/55-plus-communities',
            icon: <Users className="h-5 w-5 text-white" />,
          },
          {
            title: 'Resale Homes Guide',
            description: 'Browse existing homes perfect for reverse for purchase transactions',
            href: '/guides/resale',
            icon: <Home className="h-5 w-5 text-white" />,
          },
          {
            title: 'New Construction Homes',
            description: 'Learn about buying brand-new homes with a reverse mortgage for purchase',
            href: '/guides/new-construction',
            icon: <Building className="h-5 w-5 text-white" />,
          },
        ]}
      />

      {/* CTA Section */}
      <ScheduleTourCTA
        title="Need Reverse Mortgage Guidance?"
        description="Our team can help you understand your options and connect you with trusted reverse mortgage specialists in Santa Clarita"
        variant="primary"
        showPhone={true}
      />
    </div>
  )
}
