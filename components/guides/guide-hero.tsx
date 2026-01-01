import type { Guide } from '@/types/guide'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen, CheckCircle } from 'lucide-react'
import { HeroSplit } from '@/components/shared/hero-split'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface GuideHeroProps {
  guide: Guide
}

export function GuideHero({ guide }: GuideHeroProps) {
  return (
    <>
      <HeroSplit
        badge={{
          icon: <BookOpen className="w-4 h-4" />,
          text: 'Buyer Guide'
        }}
        title={guide.title}
        subtitle={guide.subtitle}
        variant="guide"
        placeholderTitle={`${guide.title} Guide Image`}
        actions={
          <>
            <Link href="/contact">
              <Button
                size="lg"
                className="group h-14 px-8 text-lg font-bold bg-gradient-to-r from-premium-orange to-premium-rust hover:from-orange-600 hover:to-orange-700 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
              >
                Get Personalized Help
              </Button>
            </Link>
            <Link href="/guides">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold border-2 border-premium-orange text-premium-orange hover:bg-premium-orange hover:text-white transition-all duration-300"
              >
                View All Guides
              </Button>
            </Link>
          </>
        }
      >
        {/* Table of Contents Card */}
        <Card className="mt-6 bg-white border-2 border-orange-100 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">📋 In This Guide:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 sm:grid-cols-2">
              {guide.sections.slice(0, 6).map((section, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-premium-orange flex-shrink-0" />
                  <span className="text-gray-700">{section.title}</span>
                </li>
              ))}
            </ul>
            {guide.sections.length > 6 && (
              <p className="mt-3 text-sm font-semibold text-premium-orange">
                + {guide.sections.length - 6} more sections
              </p>
            )}
          </CardContent>
        </Card>
      </HeroSplit>
    </>
  )
}
