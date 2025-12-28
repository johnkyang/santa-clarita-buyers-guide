import { Metadata } from 'next'
import { guides } from '@/data/guides'
import { GuideCard } from '@/components/guides/guide-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Santa Clarita Home Buying Guides',
  description:
    'Comprehensive guides for buying homes in Santa Clarita. Learn about new construction, resale homes, 55+ communities, and reverse mortgages.',
}

export default function GuidesPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Home Buying Guides</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Expert guides to help you navigate every step of the home buying process in Santa
          Clarita. From new construction to retirement communities, we&apos;ve got you covered.
        </p>
      </section>

      {/* Guides Grid */}
      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-16 max-w-2xl rounded-lg border bg-muted/50 p-8 text-center">
        <h2 className="text-2xl font-bold">Still Have Questions?</h2>
        <p className="mt-2 text-muted-foreground">
          Our team is here to provide personalized guidance for your unique situation.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
          <Link href="/neighborhoods">
            <Button size="lg" variant="outline">
              Explore Neighborhoods
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
