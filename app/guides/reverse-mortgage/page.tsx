import { Metadata } from 'next'
import { reverseMortgageGuide } from '@/data/guides'
import { GuideHero } from '@/components/guides/guide-hero'
import { GuideSection } from '@/components/guides/guide-section'
import { GuideFAQs } from '@/components/guides/guide-faqs'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: reverseMortgageGuide.title,
  description: reverseMortgageGuide.metaDescription,
  keywords: reverseMortgageGuide.keywords,
}

export default function ReverseMortgageGuidePage() {
  return (
    <div>
      <GuideHero guide={reverseMortgageGuide} />

      <section className="container py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {reverseMortgageGuide.introduction}
          </p>
        </div>
      </section>

      <Separator />

      <div className="container py-12">
        <div className="mx-auto max-w-3xl space-y-12">
          {reverseMortgageGuide.sections.map((section, index) => (
            <GuideSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>

      <Separator />

      {reverseMortgageGuide.faqs && <GuideFAQs faqs={reverseMortgageGuide.faqs} />}

      <section className="bg-gradient-to-b from-background to-muted/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold">Need Reverse Mortgage Guidance?</h2>
            <p className="mt-2 text-muted-foreground">
              Our team can help you understand your options and connect you with trusted reverse
              mortgage specialists in Santa Clarita.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg">Get Expert Help</Button>
              </Link>
              <Link href="/neighborhoods">
                <Button size="lg" variant="outline">
                  Explore Neighborhoods
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
