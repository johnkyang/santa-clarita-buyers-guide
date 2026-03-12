'use client'

import Link from 'next/link'
import { Calculator, Compass, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCallback } from 'react'

const TRUST_PILLS = [
  '100% Free Resource',
  'Zero Sales Pressure',
  '24/7 AI Advisor',
]

const STATS = [
  { icon: 'location_city', value: '6', label: 'Neighborhoods Analyzed', desc: 'Valencia, Newhall, Saugus, Canyon Country, Stevenson Ranch & Castaic.' },
  { icon: 'menu_book', value: '4', label: 'Free Buyer Guides', desc: 'First-time buyers, VA loans, FHA, and move-up buyer guides included.' },
  { icon: 'payments', value: '$0', label: 'Cost to You. Ever.', desc: 'Free tools, free data, free guidance. No hidden fees, no obligation.' },
]

export function Hero() {
  const scrollDown = useCallback(() => {
    const el = document.getElementById('hero-below')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }, [])

  return (
    <div style={{ background: 'var(--gradient-hero)' }} className="relative overflow-hidden">

      {/* Top gold rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent 0%, var(--color-gold-700) 25%, var(--color-gold-700) 75%, transparent 100%)', opacity: 0.5 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* ── 3-column split hero ───────────────────── */}
        <section
          className="relative py-16 lg:py-24"
          style={{ minHeight: 'clamp(420px, 70vh, 680px)' }}
        >
          {/* 3-col grid: left | 1px rule | right */}
          <div className="hidden lg:grid items-center h-full" style={{ gridTemplateColumns: '55fr auto 45fr', minHeight: 'clamp(420px, 60vh, 620px)' }}>

            {/* ── LEFT: eyebrow + staggered headline ── */}
            <div className="pr-[clamp(2rem,4vw,4.5rem)] flex flex-col justify-center">

              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="block w-8 h-px bg-gold-700 shrink-0" aria-hidden="true" />
                <span className="text-gold-700 font-bold tracking-[0.22em] uppercase text-[11px]">
                  Santa Clarita Valley
                </span>
              </motion.div>

              {/* Headline — 3 staggered mask reveals */}
              <h1
                className="font-display font-normal leading-[1.0] tracking-tight text-white"
                style={{ fontSize: 'clamp(3.25rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}
              >
                {['Your Journey', 'to Homeownership', 'in Santa Clarita.'].map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-[0.07em]">
                    <motion.span
                      className={`block${i === 2 ? ' text-gold-700 italic font-light' : ''}`}
                      initial={{ clipPath: 'inset(0 100% 0 0)' }}
                      animate={{ clipPath: 'inset(0 0% 0 0)' }}
                      transition={{ duration: 0.85, delay: 0.18 + i * 0.16, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            {/* ── VERTICAL GOLD RULE ── */}
            <motion.div
              className="w-px self-stretch mx-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, var(--color-gold-700) 18%, var(--color-gold-700) 82%, transparent 100%)',
                transformOrigin: 'top center',
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />

            {/* ── RIGHT: subtext + CTAs + trust pills ── */}
            <div className="pl-[clamp(2rem,4vw,4.5rem)] flex flex-col justify-center">

              <motion.p
                className="text-[10px] font-medium tracking-[0.22em] uppercase text-white/35 mb-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.8 }}
              >
                The independent buyer resource
              </motion.p>

              <motion.p
                className="text-white/65 font-light leading-[1.75] mb-8"
                style={{ fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                The valley&apos;s only <strong className="font-medium text-white/90">free, independent</strong> buyer resource.
                Honest neighborhood data, financial tools, and expert guidance —
                no sales pressure, ever.
              </motion.p>

              {/* CTAs — stacked in right column */}
              <motion.div
                className="flex flex-col gap-3 mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.05 }}
              >
                <Link href="/buying-power">
                  <button className="w-full flex items-center justify-center gap-2 bg-gold-700 px-7 py-[0.875rem] rounded-[2px] text-navy-950 font-medium text-[13px] tracking-[0.08em] uppercase hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-gold-600 transition-all">
                    <Calculator className="h-4 w-4" />
                    See What You Can Afford
                  </button>
                </Link>
                <Link href="/neighborhood-quiz">
                  <button className="w-full flex items-center justify-center gap-2 border border-white/35 px-7 py-[0.875rem] rounded-[2px] text-white/90 font-medium text-[13px] tracking-[0.08em] uppercase hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white/[0.06] hover:border-white/65 transition-all">
                    <Compass className="h-4 w-4" />
                    Find My Neighborhood
                  </button>
                </Link>
              </motion.div>

              {/* Trust pills */}
              <motion.div
                className="flex flex-col gap-[0.45rem]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 1.2 }}
                role="list"
                aria-label="Trust indicators"
              >
                {TRUST_PILLS.map((label) => (
                  <div
                    key={label}
                    role="listitem"
                    className="inline-flex items-center gap-2 px-3 py-[0.3rem] border rounded-full w-fit"
                    style={{
                      borderColor: 'rgba(201,162,39,0.22)',
                      background: 'rgba(201,162,39,0.07)',
                    }}
                  >
                    <span
                      className="block w-[5px] h-[5px] rounded-full bg-gold-700 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[11px] text-white/65 tracking-[0.02em]">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── MOBILE: single column fallback ── */}
          <div className="lg:hidden flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-gold-700 font-bold tracking-[0.2em] uppercase text-xs mb-5">
                Free · Independent · Always On Your Side
              </span>
              <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tighter text-white mb-6">
                Your Journey<br />
                to Homeownership<br />
                <em className="not-italic text-gold-700">in Santa Clarita.</em>
              </h1>
              <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                The valley&apos;s only free, independent buyer resource.
                Honest neighborhood data, financial tools, and expert guidance —
                no sales pressure, ever.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/buying-power">
                  <button className="flex items-center gap-2 bg-gold-700 px-6 py-3.5 rounded-full text-navy-950 font-bold hover:bg-gold-600 transition-all">
                    <Calculator className="h-4 w-4" />
                    See What You Can Afford
                  </button>
                </Link>
                <Link href="/neighborhood-quiz">
                  <button className="flex items-center gap-2 border border-gold-700/40 px-6 py-3.5 rounded-full text-white font-semibold hover:bg-gold-700/10 transition-all">
                    <Compass className="h-4 w-4" />
                    Find My Neighborhood
                  </button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {TRUST_PILLS.map((label) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-full"
                    style={{ borderColor: 'rgba(201,162,39,0.22)', background: 'rgba(201,162,39,0.07)' }}
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-gold-700 shrink-0" aria-hidden="true" />
                    <span className="text-[11px] text-white/65">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Scroll chevron ── */}
          <motion.button
            onClick={scrollDown}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[0.45rem] pb-2 bg-transparent border-0 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.9 }}
            aria-label="Scroll down to explore"
          >
            <span className="text-[9px] font-medium tracking-[0.22em] uppercase text-white/35">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
              aria-hidden="true"
            >
              <ChevronDown className="h-5 w-5 text-gold-700" strokeWidth={1.5} />
            </motion.span>
          </motion.button>
        </section>

        {/* Stats Grid */}
        <div id="hero-below" />
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-premium" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(201,162,39,0.18)' }}>
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-10 flex flex-col items-center text-center hover:bg-gold-700/5 transition-colors ${
                  i < 2 ? 'border-b md:border-b-0 md:border-r border-gold-700/10' : ''
                }`}
              >
                <span className="material-symbols-outlined text-gold-700 mb-4" style={{ fontSize: '40px' }}>
                  {stat.icon}
                </span>
                <h3 className="font-display text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm uppercase tracking-widest font-bold text-white/60 mb-3">{stat.label}</p>
                <p className="text-xs text-white/40 leading-relaxed px-4">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  )
}
