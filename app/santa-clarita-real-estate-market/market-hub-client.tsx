'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  BarChart3,
  Home,
  Clock,
  DollarSign,
  ChevronRight,
  Calendar,
  BookOpen,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// March 2026 snapshot data — update monthly
const marketSnapshot = {
  asOf: 'February 2026 Closings',
  updatedDate: 'March 7, 2026',
  stats: [
    {
      label: 'Median Sold Price',
      value: '$855,000',
      change: '+3.0%',
      direction: 'up' as const,
      note: 'Year over year',
    },
    {
      label: 'Active Listings',
      value: '487',
      change: '+31%',
      direction: 'up' as const,
      note: 'Year over year',
    },
    {
      label: 'Median Days on Market',
      value: '28 days',
      change: '+2 days',
      direction: 'neutral' as const,
      note: 'Year over year',
    },
    {
      label: 'Months of Inventory',
      value: '1.9 mo',
      change: '+0.5 mo',
      direction: 'up' as const,
      note: "Seller's market < 4 mo",
    },
    {
      label: 'Sold-to-List Ratio',
      value: '99.1%',
      change: '-0.5 pts',
      direction: 'neutral' as const,
      note: 'Near full asking price',
    },
    {
      label: '30-Yr Mortgage Rate',
      value: '6.87%',
      change: '-0.25%',
      direction: 'down' as const,
      note: 'Down from Feb high',
    },
  ],
}

const neighborhoods = [
  {
    name: 'Valencia',
    median: '$975,000',
    listings: 168,
    dom: 22,
    yoy: '+2.6%',
    direction: 'up' as const,
    vibe: 'Most competitive',
    color: 'bg-premium-blue/8 border-premium-blue/20',
    textColor: 'text-premium-blue',
  },
  {
    name: 'Stevenson Ranch',
    median: '$1,155,000',
    listings: 41,
    dom: 19,
    yoy: '+2.9%',
    direction: 'up' as const,
    vibe: 'Lowest inventory',
    color: 'bg-amber-50 border-amber-200',
    textColor: 'text-amber-700',
  },
  {
    name: 'Saugus',
    median: '$810,000',
    listings: 112,
    dom: 31,
    yoy: '+3.8%',
    direction: 'up' as const,
    vibe: 'Best negotiating room',
    color: 'bg-premium-green/8 border-premium-green/20',
    textColor: 'text-premium-green',
  },
  {
    name: 'Newhall',
    median: '$748,000',
    listings: 42,
    dom: 29,
    yoy: '+2.2%',
    direction: 'up' as const,
    vibe: 'Walkable downtown',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-700',
  },
  {
    name: 'Canyon Country',
    median: '$728,000',
    listings: 97,
    dom: 33,
    yoy: '+4.1%',
    direction: 'up' as const,
    vibe: 'Best appreciation',
    color: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-700',
  },
  {
    name: 'Castaic',
    median: '$718,000',
    listings: 27,
    dom: 38,
    yoy: '+1.8%',
    direction: 'up' as const,
    vibe: 'Most buyer-friendly',
    color: 'bg-teal-50 border-teal-200',
    textColor: 'text-teal-700',
  },
]

const marketPosts = [
  {
    title: 'Santa Clarita Market Pulse — March 2026',
    excerpt: 'Prices hold at $855K median as inventory ticks up 11% heading into spring.',
    href: '/blog/santa-clarita-market-pulse-march-2026',
    date: 'March 7, 2026',
    tag: 'Latest',
    tagColor: 'bg-premium-green/10 text-premium-green',
  },
  {
    title: 'Santa Clarita Housing Market Report — January 2025',
    excerpt: 'How the market entered 2025 and what trends carried into the new year.',
    href: '/blog/santa-clarita-market-report-january-2025',
    date: 'January 1, 2025',
    tag: 'Archive',
    tagColor: 'bg-gray-100 text-gray-500',
  },
]

const relatedPosts = [
  { title: 'How to Win a Bidding War in Santa Clarita', href: '/blog/how-to-win-bidding-war-santa-clarita-2026' },
  { title: 'New Construction in Santa Clarita 2026', href: '/blog/new-construction-santa-clarita-2026' },
  { title: 'Santa Clarita vs. Simi Valley: Which Is Better?', href: '/blog/santa-clarita-vs-simi-valley' },
  { title: 'Santa Clarita vs. Thousand Oaks: Which Should You Choose?', href: '/blog/santa-clarita-vs-thousand-oaks' },
  { title: 'Flood Zone Risk in Santa Clarita', href: '/blog/flood-zone-risk-santa-clarita' },
  { title: 'Fire Risk in Santa Clarita Neighborhoods', href: '/blog/fire-risk-santa-clarita-neighborhoods' },
  { title: 'Moving from Los Angeles to Santa Clarita', href: '/blog/moving-from-los-angeles-to-santa-clarita' },
  { title: 'How Much House Can I Afford in Santa Clarita?', href: '/blog/how-much-house-can-i-afford-santa-clarita-2026' },
]

function TrendIcon({ direction }: { direction: 'up' | 'down' | 'neutral' }) {
  if (direction === 'up') return <TrendingUp className="h-4 w-4 text-premium-green" />
  if (direction === 'down') return <TrendingDown className="h-4 w-4 text-premium-blue" />
  return <Minus className="h-4 w-4 text-gray-400" />
}

export function MarketHubClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-premium-cream to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-premium-blue-dark py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/3 top-1/3 h-80 w-80 rounded-full bg-premium-gold blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-premium-blue blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm border border-white/20">
                <BarChart3 className="h-4 w-4 text-premium-gold" />
                Updated {marketSnapshot.updatedDate}
              </div>
              <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
                Santa Clarita
                <span className="block text-premium-gold mt-1">Real Estate Market</span>
              </h1>
              <p className="text-lg text-white/80 sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Monthly price data, inventory trends, and neighborhood breakdowns — so you can make informed decisions, not guesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#snapshot">
                  <Button
                    size="lg"
                    className="group h-14 bg-premium-gold hover:bg-amber-500 text-gray-900 font-bold px-8 text-base transition-all hover:scale-105"
                  >
                    See Current Data
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/blog/santa-clarita-market-pulse-march-2026">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-base"
                  >
                    Read March Report
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Snapshot Stats */}
      <section id="snapshot" className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                  Market Snapshot
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  {marketSnapshot.asOf} · Updated {marketSnapshot.updatedDate}
                </p>
              </div>
              <Link
                href="/blog/santa-clarita-market-pulse-march-2026"
                className="inline-flex items-center gap-2 text-sm font-semibold text-premium-blue hover:underline"
              >
                Full March Report
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {marketSnapshot.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    {stat.label}
                  </p>
                  <p className="font-display text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <TrendIcon direction={stat.direction} />
                    <span className={`text-xs font-semibold ${
                      stat.direction === 'up' ? 'text-premium-green' :
                      stat.direction === 'down' ? 'text-premium-blue' :
                      'text-gray-500'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-400">{stat.note}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Data reflects SCV MLS closed sales and active listings. All figures are estimates. Individual property results vary.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhood Price Tracker */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl mb-3">
                Neighborhood Price Tracker — February 2026
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Santa Clarita is not one market — it&apos;s six. Here&apos;s how each community is performing right now.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((n, i) => (
                <motion.div
                  key={n.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`rounded-2xl border-2 p-5 ${n.color}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-gray-900">{n.name}</h3>
                      <span className={`text-xs font-semibold ${n.textColor}`}>{n.vibe}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendIcon direction={n.direction} />
                      <span className="text-sm font-bold text-premium-green">{n.yoy}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5" />
                        Median price
                      </span>
                      <span className="text-sm font-bold text-gray-900">{n.median}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1.5">
                        <Home className="h-3.5 w-3.5" />
                        Active listings
                      </span>
                      <span className="text-sm font-semibold text-gray-700">{n.listings}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        Days on market
                      </span>
                      <span className="text-sm font-semibold text-gray-700">{n.dom} days</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/10">
                    <Link
                      href={`/neighborhoods/${n.name.toLowerCase().replace(' ', '-')}`}
                      className={`text-xs font-semibold ${n.textColor} hover:underline inline-flex items-center gap-1`}
                    >
                      Explore {n.name}
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white border border-gray-100 p-6 text-center shadow-sm">
              <p className="text-gray-600 text-sm mb-4">
                <strong>Not sure which neighborhood fits your budget and lifestyle?</strong> Our free quiz matches you in 2 minutes.
              </p>
              <Link href="/neighborhood-quiz">
                <Button className="bg-gradient-to-r from-premium-blue to-premium-blue-dark text-white hover:opacity-90">
                  Take the Neighborhood Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Pulse Archive */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-premium-blue/8 px-3 py-1.5 text-xs font-semibold text-premium-blue mb-3">
                <Calendar className="h-3.5 w-3.5" />
                Monthly Series
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                Market Pulse Reports
              </h2>
              <p className="text-gray-600 mt-2">
                Published the first week of each month. Updated with SCV MLS data.
              </p>
            </div>

            <div className="space-y-4">
              {marketPosts.map((post, i) => (
                <motion.div
                  key={post.href}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    href={post.href}
                    className="group flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-premium-blue/8 text-premium-blue">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${post.tagColor}`}>
                          {post.tag}
                        </span>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-premium-blue transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
                    </div>
                    <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-gray-300 group-hover:text-premium-blue transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-sm text-gray-500">
                <strong className="text-gray-700">Subscribe to the monthly Market Pulse.</strong>{' '}
                Get each report delivered to your inbox the first week of every month.
              </p>
              <Link href="/contact" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-premium-blue hover:underline">
                Subscribe via contact form
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context: Is It a Good Time to Buy? */}
      <section className="bg-slate-900 py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl mb-10 text-center">
              Is Now a Good Time to Buy in Santa Clarita?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <h3 className="font-display text-lg font-bold text-premium-gold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Reasons to Buy Now
                </h3>
                <ul className="space-y-3">
                  {[
                    'Inventory is ticking up — more choices than 6 months ago',
                    'Rates eased to 6.87% — down from 7.12% peak in early Feb',
                    'Prices appreciate ~3% YoY — every month of delay costs money',
                    'DPA programs (CalHFA Dream For All) reopening spring 2026',
                    'Spring competition hasn\'t fully arrived yet — act before peak',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-premium-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <h3 className="font-display text-lg font-bold text-gray-400 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Reasons You Might Wait
                </h3>
                <ul className="space-y-3">
                  {[
                    'Rates are still elevated vs. 2020–21 lows (but those aren\'t coming back)',
                    'Affordability is stretched — median income-to-price ratio near historic high',
                    'Market could soften if recession risk materializes',
                    'Still a seller\'s market — buyers have less leverage than in neutral markets',
                    'If you\'re not financially ready (credit, savings, stable income)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-premium-gold/10 border border-premium-gold/30 p-6 text-center">
              <p className="text-white font-semibold mb-1">The honest answer:</p>
              <p className="text-gray-300 text-sm max-w-2xl mx-auto">
                Timing the market is nearly impossible. The right time to buy is when you&apos;re financially ready, planning to stay 5+ years, and have found the right home in the right neighborhood. Use our calculator to see if the numbers work for you — then decide.
              </p>
              <Link href="/buying-power" className="mt-4 inline-flex items-center gap-2 text-premium-gold font-semibold text-sm hover:underline">
                Run the numbers with the Buying Power Calculator
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-premium-blue" />
              <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                Market Intelligence Deep Dives
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm hover:shadow-md hover:border-premium-blue/20 transition-all duration-200"
                >
                  <ChevronRight className="h-4 w-4 shrink-0 text-gray-300 group-hover:text-premium-blue transition-colors" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-premium-blue transition-colors leading-snug">
                    {post.title}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-premium-blue hover:underline"
              >
                View all market articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-3xl bg-gradient-to-br from-premium-blue to-premium-blue-dark p-10 sm:p-14 shadow-xl">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-4">
                Ready to Buy in This Market?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Start with your budget. Our free calculator shows exactly what you can afford at today&apos;s rates — no signup required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/buying-power">
                  <Button
                    size="lg"
                    className="h-14 bg-premium-gold hover:bg-amber-500 text-gray-900 font-bold px-8 transition-all hover:scale-105"
                  >
                    Calculate My Budget
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 border-white/30 text-white hover:bg-white/10 font-semibold px-8"
                  >
                    Talk to a Local Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
