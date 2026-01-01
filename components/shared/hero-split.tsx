'use client'

import { ReactNode } from 'react'
import { AnimatedSection } from './animated-section'
import { HeroMediaPlaceholder } from './hero-media-placeholder'

interface HeroSplitProps {
  badge?: {
    icon: ReactNode
    text: string
    color?: string
  }
  title: string
  subtitle: string
  actions?: ReactNode
  variant?: 'community' | 'guide'
  placeholderTitle?: string
  children?: ReactNode
}

export function HeroSplit({
  badge,
  title,
  subtitle,
  actions,
  variant = 'community',
  placeholderTitle,
  children
}: HeroSplitProps) {
  const bgGradients = {
    community: 'from-blue-50 via-white to-blue-50/30',
    guide: 'from-orange-50 via-white to-orange-50/30'
  }

  const badgeColors = {
    community: 'bg-blue-100 border-blue-200 text-blue-700',
    guide: 'bg-orange-100 border-orange-200 text-orange-700'
  }

  return (
    <section className={`relative bg-gradient-to-b ${bgGradients[variant]} py-16 lg:py-24 overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-premium-blue/5 to-premium-orange/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-premium-green/5 to-premium-blue/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image Placeholder */}
          <AnimatedSection className="order-2 lg:order-1">
            <HeroMediaPlaceholder
              title={placeholderTitle}
              variant={variant}
            />
          </AnimatedSection>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection delay={0.1}>
              {badge && (
                <div className={`inline-flex items-center gap-2 ${badge.color || badgeColors[variant]} rounded-full px-4 py-2 mb-6 border`}>
                  {badge.icon}
                  <span className="text-sm font-semibold">{badge.text}</span>
                </div>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                {title}
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                {subtitle}
              </p>

              {children}

              {actions && (
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  {actions}
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
