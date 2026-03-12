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
  const isCommunity = variant === 'community'

  const badgeColors = {
    community: 'border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.1)] text-[#c9a227]',
    guide: 'bg-orange-100 border-orange-200 text-orange-700'
  }

  return (
    <section
      className={`relative py-16 lg:py-24 overflow-hidden ${!isCommunity ? 'bg-gradient-to-b from-orange-50 via-white to-orange-50/30' : ''}`}
      style={isCommunity ? { background: 'linear-gradient(180deg, #071525 0%, #0f1f3d 55%, #162b52 100%)' } : undefined}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0f1f3d]/5 to-[#c9a227]/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#10b981]/5 to-[#0f1f3d]/5 rounded-full blur-3xl -ml-48 -mb-48" />

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

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${isCommunity ? 'text-white' : 'text-gray-900'} mb-6 leading-tight`}>
                {title}
              </h1>

              <p className={`text-xl lg:text-2xl ${isCommunity ? 'text-white/80' : 'text-gray-600'} mb-8 leading-relaxed`}>
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
