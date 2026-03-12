'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Home, Users, DollarSign, GraduationCap, Clock, CheckCircle } from 'lucide-react'

type FilterKey = 'all' | 'first-time' | 'financing' | 'senior'

interface Guide {
  slug: string
  href: string
  title: string
  description: string
  tag: string
  icon: React.ElementType
  category: FilterKey[]
  readTime: string
  learns: string[]
}

const GUIDES: Guide[] = [
  {
    slug: 'first-time-buyer-guide',
    href: '/first-time-buyer-guide',
    title: 'First-Time Buyer Guide 2026',
    description: 'From pre-approval to closing day — everything a first-time buyer needs in one place.',
    tag: 'Step-by-Step Guide',
    icon: GraduationCap,
    category: ['first-time'],
    readTime: '15 min read',
    learns: [
      'Get pre-approved with confidence',
      'Understand CalHFA assistance programs ($15K–$30K)',
      'Navigate offers and escrow without surprises',
    ],
  },
  {
    slug: 'first-time-buyer',
    href: '/guides/first-time-buyer',
    title: 'First-Time Home Buyer Deep Dive',
    description: 'Complete guide with live affordability calculator and down payment assistance programs.',
    tag: 'Interactive Guide',
    icon: Home,
    category: ['first-time'],
    readTime: '12 min read',
    learns: [
      'Use the interactive affordability calculator',
      'Meet credit & down payment requirements',
      'Explore assistance programs',
    ],
  },
  {
    slug: 'new-construction',
    href: '/guides/new-construction',
    title: 'New Construction Home Buying Guide',
    description: 'Everything you need to know before buying a brand-new home from a builder in Santa Clarita.',
    tag: 'Buyer Guide',
    icon: Building2,
    category: ['first-time'],
    readTime: '11 min read',
    learns: [
      'Navigate the builder process step-by-step',
      'Negotiate upgrades and incentives',
      'Understand builder contracts',
    ],
  },
  {
    slug: 'resale',
    href: '/guides/resale',
    title: 'Resale Home Buying Guide',
    description: 'How to find, evaluate, and win on existing homes in Santa Clarita\'s competitive market.',
    tag: 'Buyer Guide',
    icon: Home,
    category: ['first-time'],
    readTime: '10 min read',
    learns: [
      'Run the home search process',
      'Master the inspection process',
      'Negotiate price and terms',
    ],
  },
  {
    slug: '55-plus-communities',
    href: '/guides/55-plus-communities',
    title: '55+ Community Living Guide',
    description: 'Discover active adult communities and what retirement living really looks like in Santa Clarita.',
    tag: 'Lifestyle Guide',
    icon: Users,
    category: ['senior'],
    readTime: '9 min read',
    learns: [
      'What qualifies as a 55+ community',
      'Communities available in Santa Clarita',
      'Financial considerations for seniors',
    ],
  },
  {
    slug: 'reverse-mortgage',
    href: '/guides/reverse-mortgage',
    title: 'Reverse Mortgage for Purchase',
    description: 'A little-known financial tool that lets buyers 62+ purchase a home with no monthly mortgage payment.',
    tag: 'Senior Guide',
    icon: DollarSign,
    category: ['senior', 'financing'],
    readTime: '8 min read',
    learns: [
      'How reverse for purchase works',
      'Who qualifies at 62+',
      'Risks and protections explained',
    ],
  },
]

const FILTER_TABS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'first-time', label: 'First-Time Buyers' },
  { key: 'financing', label: 'Financing' },
  { key: 'senior', label: '55+ & Senior' },
]

function countForFilter(key: FilterKey) {
  if (key === 'all') return GUIDES.length
  return GUIDES.filter((g) => g.category.includes(key)).length
}

export function GuidesClient() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [isStuck, setIsStuck] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  // Sticky shadow sentinel
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 1.0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const filtered = activeFilter === 'all'
    ? GUIDES
    : GUIDES.filter((g) => g.category.includes(activeFilter))

  return (
    <>
      {/* Page Header */}
      <header className="bg-navy-900 relative overflow-hidden" style={{ minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 clamp(1.25rem, 4vw, 3rem) clamp(2.5rem, 5vh, 3.5rem)' }}>
        {/* Top gold rule */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent, var(--color-gold-700) 30%, var(--color-gold-700) 70%, transparent)', opacity: 0.5 }}
          aria-hidden="true"
        />
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent 0, transparent 60px, rgba(255,255,255,0.011) 60px, rgba(255,255,255,0.011) 61px)',
          }}
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 60%, rgba(30,58,95,0.6) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1100px] w-full mx-auto">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/35 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="text-white/60 hover:text-gold-700 transition-colors">Home</Link>
            <span aria-hidden="true" className="opacity-50">›</span>
            <span className="text-white/60" aria-current="page">Buyer Guides</span>
          </nav>
          <p className="flex items-center gap-2.5 text-gold-700 font-medium tracking-[0.22em] uppercase text-[11px] mb-3">
            <span className="block w-6 h-px bg-gold-700 shrink-0" aria-hidden="true" />
            Expert Resources
          </p>
          <h1 className="font-display text-white/90 font-medium leading-[1.1] tracking-tight mb-3" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
            Free Home Buyer Guides
            <span className="block h-0.5 w-16 mt-2" style={{ background: 'linear-gradient(to right, var(--color-gold-700), transparent)', borderRadius: 1 }} aria-hidden="true" />
          </h1>
          <p className="text-white/60 font-light leading-[1.7] max-w-[54ch] mt-3" style={{ fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)' }}>
            Straightforward, expert-written guides for every type of buyer in Santa Clarita.
            No sales pitch. No obligation.
          </p>
        </div>
      </header>

      {/* Sentinel for sticky detection */}
      <div ref={sentinelRef} className="absolute h-px w-full pointer-events-none" aria-hidden="true" />

      {/* Sticky filter bar */}
      <div
        className="sticky z-40 bg-warm-50 transition-shadow duration-200"
        style={{
          top: 72,
          boxShadow: isStuck
            ? '0 1px 0 var(--color-warm-200), 0 4px 20px rgba(0,0,0,0.09)'
            : '0 1px 0 var(--color-warm-200)',
        }}
      >
        <div
          role="tablist"
          aria-label="Filter guides by buyer type"
          className="flex items-center gap-1.5 max-w-[1100px] mx-auto py-4 overflow-x-auto"
          style={{ padding: '1rem clamp(1.25rem, 4vw, 3rem)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeFilter === tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-[13px] font-medium whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab.key
                  ? 'bg-navy-900 border-navy-900 text-white shadow-md'
                  : 'bg-white border-warm-300 text-warm-600 hover:border-gold-700/40 hover:text-navy-900 hover:bg-gold-700/5'
              }`}
            >
              {tab.label}
              <span
                className={`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold leading-none ${
                  activeFilter === tab.key ? 'bg-gold-700/25 text-gold-700' : 'bg-black/8 text-inherit'
                }`}
              >
                {countForFilter(tab.key)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Guides grid */}
      <main className="py-12 bg-warm-50" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)' }}>
        <div className="max-w-[1100px] mx-auto">
          <AnimatePresence mode="sync">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-2 text-center py-20 text-warm-500"
              >
                <span className="material-symbols-outlined block text-4xl text-warm-300 mb-3" aria-hidden="true">search_off</span>
                No guides in this category yet.
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                className="grid md:grid-cols-2 gap-[clamp(1.25rem,2.5vw,1.75rem)]"
                initial={false}
              >
                <AnimatePresence>
                  {filtered.map((guide) => {
                    const Icon = guide.icon
                    return (
                      <motion.div
                        key={guide.slug}
                        layout
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.35 }}
                      >
                        <Link
                          href={guide.href}
                          className="group flex flex-col bg-white rounded-xl border border-warm-200 shadow-sm text-inherit no-underline overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:shadow-xl hover:border-gold-700/20"
                          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.07)' }}
                          aria-label={guide.title}
                        >
                          {/* Card top: icon + tag */}
                          <div className="flex items-start justify-between gap-4 p-[1.625rem] pb-0 mb-[1.125rem]">
                            <div className="w-[52px] h-[52px] rounded-[10px] bg-navy-900 flex items-center justify-center shrink-0 shadow-md group-hover:bg-navy-800 transition-colors">
                              <Icon className="h-6 w-6 text-gold-700" />
                            </div>
                            <span
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-[0.14em] uppercase text-gold-700 mt-1"
                              style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.20)' }}
                            >
                              {guide.tag}
                            </span>
                          </div>

                          {/* Card body */}
                          <div className="flex-1 px-[1.625rem]">
                            <h2 className="font-display text-navy-900 font-medium leading-[1.15] tracking-tight mb-2.5 group-hover:text-navy-700 transition-colors" style={{ fontSize: 'clamp(1.3125rem, 2.5vw, 1.625rem)', letterSpacing: '-0.015em' }}>
                              {guide.title}
                            </h2>
                            <p className="text-[14px] font-light text-warm-500 leading-[1.65] mb-5">
                              {guide.description}
                            </p>

                            {/* What you'll learn */}
                            <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-warm-400 mb-2.5">
                              What you&apos;ll learn
                            </p>
                            <ul className="flex flex-col gap-[0.45rem] mb-5">
                              {guide.learns.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-[13px] text-warm-700 leading-[1.45]">
                                  <CheckCircle className="h-[15px] w-[15px] text-gold-700 shrink-0 mt-[0.1rem]" style={{ fill: 'currentColor', color: 'var(--color-gold-700)' }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Card footer */}
                          <div className="mt-auto px-[1.625rem] pb-[1.625rem] pt-[1.125rem] border-t border-warm-200 flex flex-col gap-3.5">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center gap-[0.3rem] px-2.5 py-1 rounded-full bg-[#f4f2ee] border border-warm-200 text-[10px] font-medium text-warm-400 tracking-[0.06em]">
                                <Clock className="h-3 w-3" />
                                {guide.readTime}
                              </span>
                            </div>
                            <span className="flex items-center justify-center gap-2 w-full py-[0.875rem] px-6 bg-gold-700 text-navy-950 rounded-[6px] text-[13px] font-semibold tracking-[0.06em] hover:bg-gold-600 transition-all group-hover:-translate-y-px">
                              Read the Guide
                              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform" aria-hidden="true" style={{ fontSize: 16 }}>arrow_forward</span>
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom trust strip */}
      <footer className="bg-navy-900 relative overflow-hidden py-[clamp(3rem,6vw,4.5rem)] px-[clamp(1.25rem,4vw,3rem)]">
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, var(--color-gold-700) 30%, var(--color-gold-700) 70%, transparent)', opacity: 0.4 }} aria-hidden="true" />
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: 'menu_book', value: '7', label: 'Free Guides' },
              { icon: 'verified_user', value: '0', label: 'Sales Pressure' },
              { icon: 'location_city', value: '100%', label: 'Santa Clarita Focused' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center p-7 border border-white/7 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-1.5" style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.22)' }}>
                  <span className="material-symbols-outlined text-gold-700" style={{ fontSize: 22 }}>{s.icon}</span>
                </div>
                <span className="font-display text-white/90 font-normal leading-none tracking-tight mb-1" style={{ fontSize: '2.25rem', letterSpacing: '-0.02em' }}>{s.value}</span>
                <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/60">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[12px] text-white/35 leading-[1.6]">
            <strong className="text-white/60 font-medium">Santa Clarita Buyers Guide</strong> is operated by Kailei Media —
            a marketing firm, not a real estate brokerage.<br />
            All guides are free, independent, and written without sales pressure.
          </p>
        </div>
      </footer>
    </>
  )
}
