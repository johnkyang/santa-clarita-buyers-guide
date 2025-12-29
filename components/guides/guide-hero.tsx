import type { Guide } from '@/types/guide'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'

interface GuideHeroProps {
  guide: Guide
}

export function GuideHero({ guide }: GuideHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <BookOpen className="h-6 w-6" />
            <span className="font-medium">Buyer Guide</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{guide.title}</h1>

          <p className="mt-4 text-xl text-muted-foreground">{guide.subtitle}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg">Get Personalized Help</Button>
            </Link>
            <Link href="/guides">
              <Button size="lg" variant="outline">
                View All Guides
              </Button>
            </Link>
          </div>

          {/* Table of Contents */}
          <div className="mt-12 rounded-lg border bg-card p-6">
            <h2 className="font-semibold">In This Guide:</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {guide.sections.map((section, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-primary">•</span>
                  <span>{section.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
