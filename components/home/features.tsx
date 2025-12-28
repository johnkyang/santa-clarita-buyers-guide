'use client'

import { Building2, Users, TrendingUp, Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { AnimatedSection } from '@/components/shared/animated-section'

const features = [
  {
    icon: Building2,
    title: 'New Construction & Resale',
    description:
      'Compare new builds with resale homes to find the perfect fit for your lifestyle and budget.',
  },
  {
    icon: Users,
    title: '55+ Communities',
    description:
      'Explore active adult communities designed for an engaging and maintenance-free lifestyle.',
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description:
      'Stay informed with up-to-date price ranges and market trends across all neighborhoods.',
  },
  {
    icon: Shield,
    title: 'Expert Guidance',
    description:
      'Get comprehensive information on reverse mortgages, financing, and buyer protections.',
  },
]

export function Features() {
  return (
    <section className="container py-16 sm:py-24">
      <AnimatedSection className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Choose Santa Clarita?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A thriving community with award-winning schools, diverse housing, and endless amenities
        </p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <Card className="h-full p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}
