import { Metadata } from 'next'
import { newConstructionGuide } from '@/data/guides'
import { GuideHero } from '@/components/guides/guide-hero'
import { GuideSection } from '@/components/guides/guide-section'
import { GuideFAQs } from '@/components/guides/guide-faqs'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: newConstructionGuide.title,
  description: newConstructionGuide.metaDescription,
  keywords: newConstructionGuide.keywords,
}

export default function NewConstructionGuidePage() {
  return (
    <div>
      <GuideHero guide={newConstructionGuide} />

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {newConstructionGuide.introduction}
          </p>
        </div>
      </section>

      <Separator />

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl space-y-12">
          {newConstructionGuide.sections.map((section, index) => (
            <GuideSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>

      <Separator />

      {/* FAQs */}
      {newConstructionGuide.faqs && <GuideFAQs faqs={newConstructionGuide.faqs} />}

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold">Ready to Explore New Construction?</h2>
            <p className="mt-2 text-muted-foreground">
              Let us help you navigate the new construction process and find the perfect builder and
              community for your needs.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/guides">
                <Button size="lg" variant="outline">
                  View All Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
