'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400"
          alt="Beautiful Santa Clarita homes and neighborhoods"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3AAAAAA//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 text-sm font-medium text-white"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-premium-orange"></span>
            </span>
            Your Trusted Guide to Santa Clarita Real Estate
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl mb-8"
          >
            Find Your Dream Home in{' '}
            <span className="text-gradient-warm inline-block">
              Santa Clarita
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl mb-12"
          >
            Discover pristine neighborhoods, explore new construction and resale homes,
            and unlock insider knowledge about Santa Clarita Valley&apos;s finest communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 mb-8"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-premium-lg hover:shadow-premium transition-all duration-300 hover:scale-110"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:6614517200">
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-16 px-10 text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue-dark transition-all duration-300 hover:scale-110"
              >
                <Phone className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
                (661) 451-7200
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-sm mb-16"
          >
            Free consultation • No obligation • Connect with local experts
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8"
          >
            {[
              { value: '6', label: 'Neighborhoods', gradient: 'from-premium-blue to-premium-blue-dark' },
              { value: '4', label: 'Buyer Guides', gradient: 'from-premium-orange to-premium-rust' },
              { value: '55+', label: 'Communities', gradient: 'from-premium-green to-emerald-600' },
              { value: '100%', label: 'Free Resource', gradient: 'from-amber-400 to-orange-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-premium"
              >
                <div className={`text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
