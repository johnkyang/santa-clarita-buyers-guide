import { Metadata } from 'next'
import { newConstructionGuide } from '@/data/guides'
import { GuideHero } from '@/components/guides/guide-hero'
import { GuideSection } from '@/components/guides/guide-section'
import { GuideFAQs } from '@/components/guides/guide-faqs'
import { ScheduleTourCTA } from '@/components/shared/schedule-tour-cta'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { ArticleSchema } from '@/components/shared/article-schema'
import { RelatedGuides } from '@/components/shared/related-guides'
import { RelatedNeighborhoods } from '@/components/shared/related-neighborhoods'
import { Home, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: newConstructionGuide.title,
  description: newConstructionGuide.metaDescription,
  keywords: newConstructionGuide.keywords,
}

export default function NewConstructionGuidePage() {
  return (
    <div>
      <ArticleSchema
        headline={newConstructionGuide.title}
        description={newConstructionGuide.metaDescription}
        keywords={newConstructionGuide.keywords}
        datePublished="2025-01-01T00:00:00Z"
        dateModified={new Date().toISOString()}
      />
      <GuideHero guide={newConstructionGuide} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Buyer Guides', href: '/guides' },
            { label: 'New Construction', href: '/guides/new-construction' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-600">
              {newConstructionGuide.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-gradient-to-b from-white to-orange-50/30 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            {newConstructionGuide.sections.map((section, index) => (
              <GuideSection key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      {newConstructionGuide.faqs && <GuideFAQs faqs={newConstructionGuide.faqs} />}

      {/* Related Neighborhoods */}
      <RelatedNeighborhoods
        title="Top Communities for New Construction"
        description="Explore Santa Clarita neighborhoods with active new home construction and development"
        neighborhoods={[
          {
            name: 'Valencia',
            slug: 'valencia',
            tagline: 'Master-planned community with ongoing new development',
            priceRange: '$650K - $1.5M',
            highlights: ['Award-winning schools', 'New residential projects'],
          },
          {
            name: 'Stevenson Ranch',
            slug: 'stevenson-ranch',
            tagline: 'Upscale community with premium new homes',
            priceRange: '$800K - $2M+',
            highlights: ['Golf course community', 'Luxury new builds'],
          },
          {
            name: 'Castaic',
            slug: 'castaic',
            tagline: 'Growing area with new construction opportunities',
            priceRange: '$600K - $900K',
            highlights: ['Lake access', 'Newer developments'],
          },
        ]}
      />

      {/* Related Guides */}
      <RelatedGuides
        guides={[
          {
            title: 'First-Time Home Buyer Guide',
            description: 'Complete roadmap for first-time buyers including affordability calculators and down payment assistance programs',
            href: '/guides/first-time-buyer',
            icon: <Home className="h-5 w-5 text-white" />,
          },
          {
            title: 'Down Payment Assistance',
            description: 'Explore CalHFA Dream For All, MyHome, and GSFA programs to help with your down payment',
            href: '/down-payment-assistance',
            icon: <DollarSign className="h-5 w-5 text-white" />,
          },
          {
            title: 'Resale Homes Guide',
            description: 'Learn about buying existing homes in Santa Clarita and how they compare to new construction',
            href: '/guides/resale',
            icon: <Home className="h-5 w-5 text-white" />,
          },
        ]}
      />

      {/* CTA Section */}
      <ScheduleTourCTA
        title="Ready to Explore New Construction?"
        description="Let us help you navigate the new construction process and find the perfect builder and community for your needs"
        variant="primary"
        showPhone={true}
      />
    </div>
  )
}
