'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Home, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted/50 py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Your Guide to Santa Clarita Real Estate</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Find Your Perfect Home in{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Santa Clarita
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Discover the best neighborhoods, explore new construction and resale homes, and learn
            about 55+ communities in Santa Clarita Valley. Your comprehensive resource for making
            an informed home buying decision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link href="/neighborhoods">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                Explore Neighborhoods
              </Button>
            </Link>
            <Link href="/guides">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Buyer Guides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            <div className="text-center">
              <div className="text-3xl font-bold">6</div>
              <div className="mt-1 text-sm text-muted-foreground">Neighborhoods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4</div>
              <div className="mt-1 text-sm text-muted-foreground">Buyer Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">55+</div>
              <div className="mt-1 text-sm text-muted-foreground">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">Free Resource</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
