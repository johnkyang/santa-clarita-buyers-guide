'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import { AnimatedSection } from './animated-section'

interface ScheduleTourCTAProps {
  title?: string
  description?: string
  variant?: 'primary' | 'secondary'
  showPhone?: boolean
}

export function ScheduleTourCTA({
  title = 'Ready to See It in Person?',
  description = "Schedule a tour and explore Santa Clarita's finest neighborhoods with a local expert",
  variant = 'primary',
  showPhone = true
}: ScheduleTourCTAProps) {
  const bgStyles = {
    primary: 'bg-gradient-to-r from-premium-blue via-blue-600 to-premium-blue-dark',
    secondary: 'bg-gradient-to-br from-blue-50 to-orange-50'
  }

  const textStyles = {
    primary: 'text-white',
    secondary: 'text-gray-900'
  }

  const descStyles = {
    primary: 'text-white/90',
    secondary: 'text-gray-600'
  }

  return (
    <section className={`${bgStyles[variant]} py-16 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Calendar className={`w-8 h-8 ${variant === 'primary' ? 'text-white' : 'text-premium-blue'}`} />
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${textStyles[variant]} mb-4`}>
              {title}
            </h2>

            <p className={`text-lg sm:text-xl ${descStyles[variant]} mb-8 max-w-2xl mx-auto`}>
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className={`group h-14 px-8 text-lg font-bold ${
                    variant === 'primary'
                      ? 'bg-white text-premium-blue hover:bg-gray-50'
                      : 'bg-gradient-to-r from-premium-orange to-premium-rust hover:from-orange-600 hover:to-orange-700'
                  } shadow-premium-lg hover:shadow-premium transition-all duration-300 hover:scale-105`}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Tour
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {showPhone && (
                <a href="tel:6614517200">
                  <Button
                    size="lg"
                    variant="outline"
                    className={`group h-14 px-8 text-lg font-bold ${
                      variant === 'primary'
                        ? 'bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue'
                        : 'border-2 border-premium-blue text-premium-blue hover:bg-premium-blue hover:text-white'
                    } transition-all duration-300 hover:scale-105`}
                  >
                    <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                    (661) 451-7200
                  </Button>
                </a>
              )}
            </div>

            {variant === 'primary' && (
              <p className="text-white/70 text-sm mt-6">
                Free consultation • No obligation • Local expertise
              </p>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
