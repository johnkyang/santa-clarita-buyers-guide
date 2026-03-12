'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// ─── Counter Hook ─────────────────────────────────────────────
function useCounter(target: number, duration = 1800, started = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!started || target === 0) {
      setValue(target)
      return
    }
    const startTime = performance.now()
    function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4) }
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(target * easeOutQuart(progress)))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])

  return value
}

// ─── Stats Data ───────────────────────────────────────────────
const STATS = [
  { target: 7,   prefix: '',  suffix: '',  label: 'Free Buyer Guides',              display: null },
  { target: 6,   prefix: '',  suffix: '',  label: 'Neighborhoods Analyzed',         display: null },
  { target: 0,   prefix: '$', suffix: '',  label: 'Cost to You. Ever.',             display: '$0' },
  { target: 100, prefix: '',  suffix: '%', label: 'Independent. No Agent Pressure.', display: null },
]

function StatItem({ stat, started, index }: { stat: typeof STATS[0]; started: boolean; index: number }) {
  const count = useCounter(stat.target, 1800, started)
  const display = stat.display ?? `${stat.prefix}${count}${stat.suffix}`

  return (
    <motion.div
      className={`text-center px-6 py-8 relative ${index < STATS.length - 1 ? 'border-r border-gold-700/20' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <span className="font-display text-5xl lg:text-6xl font-bold text-gold-700 block mb-3">
        {display}
      </span>
      <span className="text-xs font-semibold tracking-widest uppercase text-white/60">
        {stat.label}
      </span>
    </motion.div>
  )
}

// ─── Badges Data ──────────────────────────────────────────────
const BADGES = [
  {
    icon: 'verified_user',
    label: '100% Free Resource',
    desc: 'No hidden fees. No upsells. Ever.',
  },
  {
    icon: 'visibility_off',
    label: 'Zero Sales Pressure',
    desc: "We don't sell leads or refer agents for commission.",
  },
  {
    icon: 'gavel',
    label: 'Not a Brokerage',
    desc: 'Operated by Kailei Media, an independent marketing firm.',
  },
  {
    icon: 'location_on',
    label: 'Santa Clarita Only',
    desc: 'Hyper-local guides built exclusively for this valley.',
  },
]

// ─── Testimonials Data ────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "I had no idea programs like CalHFA existed until I found this site. Saved us over $20,000 on our down payment.",
    name: 'Marcus T.',
    context: 'First-time buyer · Newhall',
  },
  {
    quote: "Unlike every other real estate site, there was no pressure, no follow-up calls, no nothing. Just genuinely useful information.",
    name: 'Sandra R.',
    context: 'Resale buyer · Valencia',
  },
  {
    quote: "The neighborhood comparison alone was worth it. Helped us choose Canyon Country over Saugus — and we couldn't be happier.",
    name: 'Derek & Priya L.',
    context: 'Move-up buyers · Canyon Country',
  },
]

// ─── Main Component ───────────────────────────────────────────
export function TrustSignals() {
  // Stats scroll trigger
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' })

  // Badges scroll trigger
  const badgesRef = useRef<HTMLDivElement>(null)
  const badgesInView = useInView(badgesRef, { once: true, margin: '-80px' })

  // Testimonials scroll trigger
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-80px' })

  // Mobile carousel state
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function check() { setIsMobile(window.innerWidth <= 768) }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isMobile) return
    const timer = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 4000)
    return () => clearInterval(timer)
  }, [isMobile])

  function goPrev() { setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) }
  function goNext() { setCurrent(c => (c + 1) % TESTIMONIALS.length) }

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — ANIMATED STAT COUNTERS
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-navy-900 overflow-hidden">
        {/* Gold top rule */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, transparent 0%, var(--color-gold-700) 30%, var(--color-gold-500) 50%, var(--color-gold-700) 70%, transparent 100%)' }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 20% 50%, rgba(201,162,39,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-20 py-16 lg:py-20" ref={statsRef}>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-gold-700 block mb-4">
              Everything on this site is 100% free.
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
              Built for Buyers. Not for Commissions.
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-gold-700/15 rounded-2xl overflow-hidden">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} started={statsInView} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — TRUST BADGE CARDS
      ══════════════════════════════════════════════════════ */}
      <section className="bg-warm-50 py-16 lg:py-20 relative overflow-hidden">
        {/* Faint diagonal lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,162,39,0.025) 40px, rgba(201,162,39,0.025) 41px)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-20" ref={badgesRef}>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-gold-700 block mb-3">
              Why buyers trust this resource
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy-900">
              A Different Kind of Buyer Resource
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="bg-white rounded-xl p-7 text-center border-t-[3px] border-gold-700 shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 24 }}
                animate={badgesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-gold-700" style={{ fontSize: '26px' }}>
                    {badge.icon}
                  </span>
                </div>
                <p className="font-semibold text-navy-900 text-sm mb-1.5 leading-snug">{badge.label}</p>
                <p className="text-warm-700 text-xs leading-relaxed">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-20 border-t border-warm-200" ref={testimonialsRef}>
        <div className="max-w-5xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-gold-700 block mb-3">
              What buyers are saying
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy-900">
              Real Feedback From Real Santa Clarita Buyers
            </h2>
          </div>

          {/* Desktop: 3-column stagger | Mobile: carousel */}
          {isMobile ? (
            /* Mobile Carousel */
            <div>
              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="flex-none w-full">
                      <TestimonialCard testimonial={t} />
                    </div>
                  ))}
                </div>
              </div>
              {/* Carousel controls */}
              <div className="flex items-center justify-center gap-4 mt-7">
                <button
                  onClick={goPrev}
                  className="w-11 h-11 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-navy-800 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'w-6 bg-gold-700' : 'w-2 bg-warm-300 hover:bg-gold-500'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={goNext}
                  className="w-11 h-11 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-navy-800 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            /* Desktop 3-column grid */
            <div className="grid grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.15 }}
                >
                  <TestimonialCard testimonial={t} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — DISCLOSURE BAR
      ══════════════════════════════════════════════════════ */}
      <div className="bg-navy-950 border-t border-gold-700/20 py-4 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-2.5">
          <span className="material-symbols-outlined text-gold-700 flex-shrink-0" style={{ fontSize: '16px' }}>info</span>
          <p className="text-xs text-white/50 leading-relaxed text-center font-light tracking-wide">
            Santa Clarita Buyers Guide is operated by Kailei Media, a marketing firm.
            We are NOT a licensed real estate agent or brokerage. Information is for educational purposes only.
          </p>
        </div>
      </div>
    </>
  )
}

// ─── Testimonial Card Sub-component ──────────────────────────
function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0]
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 border-l-4 border-gold-700 flex flex-col h-full">
      {/* Decorative quote mark */}
      <span
        className="font-display text-8xl leading-none text-gold-700 block mb-3 select-none"
        style={{ opacity: 0.3, lineHeight: 0.7 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="font-display italic text-navy-900 text-base leading-relaxed flex-1 mb-6">
        {testimonial.quote}
      </p>
      <div className="border-t border-warm-200 pt-4">
        <p className="font-semibold text-navy-900 text-sm mb-0.5">{testimonial.name}</p>
        <p className="text-warm-600 text-xs mb-2">{testimonial.context}</p>
        <span className="text-gold-700 tracking-wide" aria-label="5 stars">★★★★★</span>
      </div>
    </div>
  )
}
