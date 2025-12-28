import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen } from 'lucide-react'
import type { Guide } from '@/types/guide'

interface GuideCardProps {
  guide: Guide
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link href={`/guides/${guide.slug}`}>
      <Card className="h-full transition-all hover:shadow-lg">
        <CardHeader>
          <div className="mb-2 flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium">Buyer Guide</span>
          </div>
          <CardTitle className="text-xl">{guide.title}</CardTitle>
          <CardDescription>{guide.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="line-clamp-3 text-sm text-muted-foreground">{guide.introduction}</p>

          <div className="space-y-2">
            <div className="text-sm font-semibold">What You&apos;ll Learn:</div>
            <ul className="space-y-1">
              {guide.sections.slice(0, 3).map((section, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 text-primary">•</span>
                  <span className="line-clamp-1">{section.title}</span>
                </li>
              ))}
              {guide.sections.length > 3 && (
                <li className="text-sm text-muted-foreground">
                  + {guide.sections.length - 3} more topics
                </li>
              )}
            </ul>
          </div>

          <div className="flex items-center text-sm font-medium text-primary">
            Read Guide <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
