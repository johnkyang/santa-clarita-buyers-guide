import { Metadata } from 'next'
import { resaleGuide } from '@/data/guides'
import { GuideHero } from '@/components/guides/guide-hero'
import { GuideSection } from '@/components/guides/guide-section'
import { GuideFAQs } from '@/components/guides/guide-faqs'
import { ScheduleTourCTA } from '@/components/shared/schedule-tour-cta'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { ArticleSchema } from '@/components/shared/article-schema'
import { RelatedGuides } from '@/components/shared/related-guides'
import { RelatedNeighborhoods } from '@/components/shared/related-neighborhoods'
import { Home, DollarSign, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: resaleGuide.title,
  description: resaleGuide.metaDescription,
  keywords: resaleGuide.keywords,
}

export default function ResaleGuidePage() {
  return (
    <div>
      <ArticleSchema
        headline={resaleGuide.title}
        description={resaleGuide.metaDescription}
        keywords={resaleGuide.keywords}
        datePublished="2025-01-01T00:00:00Z"
        dateModified={new Date().toISOString()}
      />
      <GuideHero guide={resaleGuide} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Buyer Guides', href: '/guides' },
            { label: 'Resale Homes', href: '/guides/resale' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-600">
              {resaleGuide.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-gradient-to-b from-white to-orange-50/30 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            {resaleGuide.sections.map((section, index) => (
              <GuideSection key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      {resaleGuide.faqs && <GuideFAQs faqs={resaleGuide.faqs} />}

      {/* Related Neighborhoods */}
      <RelatedNeighborhoods
        title="Browse Resale Homes by Neighborhood"
        description="Discover established Santa Clarita communities with quality resale inventory"
        neighborhoods={[
          {
            name: 'Valencia',
            slug: 'valencia',
            tagline: 'Diverse housing options in a master-planned community',
            priceRange: '$650K - $1.5M',
            highlights: ['Established neighborhoods', 'Great schools'],
          },
          {
            name: 'Newhall',
            slug: 'newhall',
            tagline: 'Historic charm with character-rich homes',
            priceRange: '$600K - $950K',
            highlights: ['Walkable downtown', 'Unique properties'],
          },
          {
            name: 'Saugus',
            slug: 'saugus',
            tagline: 'Family-friendly with excellent value',
            priceRange: '$625K - $900K',
            highlights: ['Top-rated schools', 'Parks & recreation'],
          },
        ]}
      />

      {/* Related Guides */}
      <RelatedGuides
        guides={[
          {
            title: 'First-Time Home Buyer Guide',
            description: 'Your complete roadmap to buying your first home, including budgeting tools and step-by-step process',
            href: '/guides/first-time-buyer',
            icon: <Home className="h-5 w-5 text-white" />,
          },
          {
            title: 'Down Payment Assistance',
            description: 'Learn about programs that can help you with down payment and closing costs',
            href: '/down-payment-assistance',
            icon: <DollarSign className="h-5 w-5 text-white" />,
          },
          {
            title: 'New Construction Homes',
            description: 'Compare resale vs new construction and see which option is right for you',
            href: '/guides/new-construction',
            icon: <Building className="h-5 w-5 text-white" />,
          },
        ]}
      />

      {/* CTA Section */}
      <ScheduleTourCTA
        title="Ready to Find Your Resale Home?"
        description="Let us help you navigate the resale market and find the perfect existing home in Santa Clarita"
        variant="primary"
        showPhone={true}
      />
    </div>
  )
}
