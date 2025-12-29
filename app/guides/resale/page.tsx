import { Metadata } from 'next'
import { resaleGuide } from '@/data/guides'
import { GuideHero } from '@/components/guides/guide-hero'
import { GuideSection } from '@/components/guides/guide-section'
import { GuideFAQs } from '@/components/guides/guide-faqs'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: resaleGuide.title,
  description: resaleGuide.metaDescription,
  keywords: resaleGuide.keywords,
}

export default function ResaleGuidePage() {
  return (
    <div>
      <GuideHero guide={resaleGuide} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {resaleGuide.introduction}
          </p>
        </div>
      </section>

      <Separator />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl space-y-12">
          {resaleGuide.sections.map((section, index) => (
            <GuideSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>

      <Separator />

      {resaleGuide.faqs && <GuideFAQs faqs={resaleGuide.faqs} />}

      <section className="bg-gradient-to-b from-background to-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold">Ready to Find Your Resale Home?</h2>
            <p className="mt-2 text-muted-foreground">
              Let us help you navigate the resale market and find the perfect existing home in Santa
              Clarita.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/neighborhoods">
                <Button size="lg" variant="outline">
                  Browse Neighborhoods
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
