'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Compass } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

export function QuizCTAStrip() {
  return (
    <AnimatedSection>
      <div className="bg-gradient-to-r from-gold-600 to-gold-800 py-8 sm:py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white sm:text-xl">
                  Not sure which neighborhood is right for you?
                </p>
                <p className="text-sm text-white/80">
                  Answer 5 quick questions — we&apos;ll match you to your ideal Santa Clarita community.
                </p>
              </div>
            </div>
            <Link href="/neighborhood-quiz" className="shrink-0">
              <Button
                size="lg"
                className="group h-12 w-full px-8 font-bold bg-white text-gold-800 hover:bg-white/90 transition-all duration-300 hover:scale-105 sm:w-auto"
              >
                Take the 2-Min Quiz
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
