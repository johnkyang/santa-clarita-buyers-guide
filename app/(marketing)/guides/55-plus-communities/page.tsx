import { Metadata } from 'next'
import { fiftyFivePlusGuide } from '@/data/guides'
import { GuideHero } from '@/components/guides/guide-hero'
import { GuideSection } from '@/components/guides/guide-section'
import { GuideFAQs } from '@/components/guides/guide-faqs'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: fiftyFivePlusGuide.title,
  description: fiftyFivePlusGuide.metaDescription,
  keywords: fiftyFivePlusGuide.keywords,
}

export default function FiftyFivePlusGuidePage() {
  return (
    <div>
      <GuideHero guide={fiftyFivePlusGuide} />

      <section className="container py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {fiftyFivePlusGuide.introduction}
          </p>
        </div>
      </section>

      <Separator />

      <div className="container py-12">
        <div className="mx-auto max-w-3xl space-y-12">
          {fiftyFivePlusGuide.sections.map((section, index) => (
            <GuideSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>

      <Separator />

      {fiftyFivePlusGuide.faqs && <GuideFAQs faqs={fiftyFivePlusGuide.faqs} />}

      <section className="bg-gradient-to-b from-background to-muted/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold">Explore 55+ Communities</h2>
            <p className="mt-2 text-muted-foreground">
              Let us help you find the perfect active adult community in Santa Clarita with the
              amenities and lifestyle you deserve.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg">Schedule a Tour</Button>
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
