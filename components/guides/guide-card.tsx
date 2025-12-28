import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'
import type { Guide } from '@/types/guide'

interface GuideCardProps {
  guide: Guide
}

const gradients = [
  'from-premium-blue via-premium-blue-dark to-blue-900',
  'from-premium-orange via-premium-rust to-orange-700',
  'from-premium-green via-emerald-600 to-teal-700',
  'from-amber-500 via-orange-500 to-red-600',
]

export function GuideCard({ guide }: GuideCardProps) {
  const gradient = gradients[Math.abs(guide.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % gradients.length]

  return (
    <Link href={`/guides/${guide.slug}`} className="group block">
      <div className="relative h-full rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:scale-105">
        {/* Gradient Header */}
        <div className={`relative bg-gradient-to-br ${gradient} p-8 pb-16`}>
          {/* Icon */}
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm border-2 border-white/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <BookOpen className="h-10 w-10 text-white" />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold text-white mb-2 line-clamp-2">
            {guide.title}
          </h3>

          {/* Subtitle */}
          <p className="text-white/90 text-sm line-clamp-2">
            {guide.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 pt-6">
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
              What You&apos;ll Learn:
            </h4>
            <ul className="space-y-3">
              {guide.sections.slice(0, 3).map((section, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-premium-green flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 line-clamp-2 leading-relaxed">
                    {section.title}
                  </span>
                </li>
              ))}
            </ul>
            {guide.sections.length > 3 && (
              <p className="mt-4 text-sm font-semibold text-premium-blue">
                + {guide.sections.length - 3} more topics
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-premium-blue font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span>Read Full Guide</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </div>
        </div>

        {/* Decorative Element */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-full -mr-16 -mt-16 blur-2xl`} />
      </div>
    </Link>
  )
}
