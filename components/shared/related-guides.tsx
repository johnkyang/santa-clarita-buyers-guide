import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface RelatedGuide {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
}

interface RelatedGuidesProps {
  guides: RelatedGuide[]
  title?: string
}

export function RelatedGuides({ guides, title = 'Related Buyer Guides' }: RelatedGuidesProps) {
  if (!guides || guides.length === 0) return null

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-premium-blue to-premium-blue-dark rounded-xl flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Link key={index} href={guide.href} className="group">
              <Card className="h-full bg-white border-2 border-blue-100 hover:border-premium-blue hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    {guide.icon && (
                      <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {guide.icon}
                      </div>
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 group-hover:text-premium-blue transition-colors">
                        {guide.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed mt-2">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-premium-blue group-hover:text-white transition-all"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
