'use client'

import { Building2, Users, TrendingUp, Shield } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

const features = [
  {
    icon: Building2,
    title: 'New Construction & Resale',
    description:
      'Compare new builds with resale homes to find the perfect fit for your lifestyle and budget.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    gradient: 'from-premium-blue/90 to-premium-blue-dark/90',
  },
  {
    icon: Users,
    title: '55+ Communities',
    description:
      'Explore active adult communities designed for an engaging and maintenance-free lifestyle.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800',
    gradient: 'from-premium-orange/90 to-premium-rust/90',
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description:
      'Stay informed with up-to-date price ranges and market trends across all neighborhoods.',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=800',
    gradient: 'from-premium-green/90 to-emerald-700/90',
  },
  {
    icon: Shield,
    title: 'Expert Guidance',
    description:
      'Get comprehensive information on reverse mortgages, financing, and buyer protections.',
    image: 'https://images.unsplash.com/photo-1554224311-beee4porches6c?q=80&w=800',
    gradient: 'from-amber-500/90 to-orange-600/90',
  },
]

export function Features() {
  return (
    <section className="py-20 sm:py-32 bg-premium-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Why Choose{' '}
            <span className="text-gradient-premium">Santa Clarita</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 leading-relaxed">
            A thriving community with award-winning schools, diverse housing, and endless amenities
          </p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:scale-105 cursor-pointer">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${feature.image}')` }}
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${feature.gradient} transition-opacity duration-500 group-hover:opacity-95`} />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 text-white">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3 transition-transform duration-500 group-hover:translate-x-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
