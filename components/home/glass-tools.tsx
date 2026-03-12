'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Calculator,
  Compass,
  DollarSign,
  MapPin,
  BookOpen,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'

const TOOLS = [
  {
    icon: Calculator,
    label: 'Free Calculator',
    title: 'Buying Power',
    description:
      'Know your real max purchase price before you visit a single open house. Conservative DTI math, no inflated numbers.',
    href: '/buying-power',
    cta: 'Calculate Now',
    accentHex: '#c9a227',
    glowColor: 'rgba(201,162,39,0.18)',
  },
  {
    icon: Compass,
    label: '5 Questions',
    title: 'Neighborhood Match Quiz',
    description:
      "Answer 5 quick lifestyle questions. We'll score all 6 neighborhoods and show your top 3 matches — instantly.",
    href: '/neighborhood-quiz',
    cta: 'Find Your Match',
    accentHex: '#c9a227',
    glowColor: 'rgba(201,162,39,0.18)',
  },
  {
    icon: DollarSign,
    label: '4 Programs',
    title: 'DPA Eligibility Checker',
    description:
      "See if you qualify for down payment assistance in under 2 minutes. CalHFA, MyHome, ZIP, and more.",
    href: '/dpa-checker',
    cta: 'Check Eligibility',
    accentHex: '#10b981',
    glowColor: 'rgba(16,185,129,0.18)',
  },
  {
    icon: MapPin,
    label: '6 Guides',
    title: 'Neighborhood Deep-Dives',
    description:
      'Valencia, Newhall, Saugus, Canyon Country, Stevenson Ranch, Castaic — price ranges, schools, and lifestyle data.',
    href: '/neighborhoods',
    cta: 'Explore Neighborhoods',
    accentHex: '#c9a227',
    glowColor: 'rgba(201,162,39,0.18)',
  },
  {
    icon: BookOpen,
    label: 'Always Free',
    title: 'Buyer Guides Library',
    description:
      'First-time buyers, VA loans, FHA, and move-up guides written in plain language. No signup required.',
    href: '/guides',
    cta: 'Read the Guides',
    accentHex: '#c9a227',
    glowColor: 'rgba(201,162,39,0.18)',
  },
  {
    icon: TrendingUp,
    label: 'Live Data',
    title: 'Market Intelligence Hub',
    description:
      'Monthly market pulse with real price trends, absorption rates, and data-backed analysis for all SCV communities.',
    href: '/santa-clarita-real-estate-market',
    cta: 'View Market Data',
    accentHex: '#c9a227',
    glowColor: 'rgba(201,162,39,0.18)',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export function GlassTools() {
  return (
    <section
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #071525 0%, #0f1f3d 55%, #162b52 100%)' }}
    >
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #c9a227 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #1e3a6e 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Gold top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, #c9a227 25%, #c9a227 75%, transparent 100%)',
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="block w-8 h-px opacity-60" style={{ background: '#c9a227' }} aria-hidden="true" />
            <span
              className="text-[11px] font-bold tracking-[0.24em] uppercase"
              style={{ color: '#c9a227' }}
            >
              Free Tools & Resources
            </span>
            <span className="block w-8 h-px opacity-60" style={{ background: '#c9a227' }} aria-hidden="true" />
          </div>
          <h2
            className="font-display font-normal leading-tight text-white mb-5"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', letterSpacing: '-0.02em' }}
          >
            Everything You Need to Buy{' '}
            <span
              className="italic font-light"
              style={{ color: '#c9a227' }}
            >
              With Confidence
            </span>
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            Six free tools built for Santa Clarita buyers. No registration. No sales pressure.
            Use them as many times as you need.
          </p>
        </motion.div>

        {/* Glass cards grid */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {TOOLS.map((tool) => {
            const Icon = tool.icon
            return (
              <motion.div key={tool.title} variants={cardVariants}>
                <Link href={tool.href} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500 rounded-2xl">
                  <div
                    className="relative h-full rounded-2xl p-7 transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.background = 'rgba(255,255,255,0.09)'
                      el.style.border = `1px solid rgba(255,255,255,0.22)`
                      el.style.boxShadow = `0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px ${tool.accentHex}33, inset 0 1px 0 rgba(255,255,255,0.12)`
                      el.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.background = 'rgba(255,255,255,0.05)'
                      el.style.border = '1px solid rgba(255,255,255,0.10)'
                      el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.25)'
                      el.style.transform = 'translateY(0)'
                    }}
                  >
                    {/* Label pill */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="flex items-center justify-center w-11 h-11 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `${tool.accentHex}18`,
                          border: `1px solid ${tool.accentHex}30`,
                          boxShadow: `0 0 16px ${tool.glowColor}`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: tool.accentHex }} strokeWidth={1.75} />
                      </div>
                      <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                        style={{
                          color: tool.accentHex,
                          background: `${tool.accentHex}14`,
                          border: `1px solid ${tool.accentHex}28`,
                        }}
                      >
                        {tool.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display font-bold text-white mb-3 leading-snug transition-colors duration-200 group-hover:text-yellow-200"
                      style={{ fontSize: '1.1875rem' }}
                    >
                      {tool.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/65 transition-colors duration-200">
                      {tool.description}
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center gap-1.5 mt-auto">
                      <span
                        className="text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors duration-200"
                        style={{ color: tool.accentHex }}
                      >
                        {tool.cta}
                      </span>
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: tool.accentHex }}
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to right, transparent, ${tool.accentHex}, transparent)` }}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom trust note */}
        <motion.p
          className="mt-12 text-center text-white/30 text-xs tracking-[0.12em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Operated by Kailei Media · Not a licensed brokerage · 100% Independent
        </motion.p>
      </div>
    </section>
  )
}
