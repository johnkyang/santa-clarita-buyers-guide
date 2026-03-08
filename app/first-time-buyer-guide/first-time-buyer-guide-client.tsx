'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  FileText,
  Home,
  DollarSign,
  Search,
  Key,
  Shield,
  Calculator,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    icon: Calculator,
    title: 'Know Your Budget',
    description:
      'Before you fall in love with a home, understand what you can actually afford — not just what a lender will approve. Budget for mortgage, property taxes, HOA fees, and Mello-Roos.',
    links: [
      { label: 'Buying Power Calculator', href: '/buying-power' },
      { label: 'HOA Fees Explained', href: '/blog/hoa-fees-santa-clarita' },
      { label: 'Property Taxes Explained', href: '/blog/property-taxes-santa-clarita-explained' },
      { label: 'Mello-Roos: The Hidden Cost', href: '/blog/mello-roos-santa-clarita' },
    ],
  },
  {
    number: '02',
    icon: FileText,
    title: 'Get Pre-Approved',
    description:
      "Your pre-approval letter is your proof of purchasing power. Learn what lenders look at, which documents you'll need, and how to get the strongest letter possible.",
    links: [
      { label: 'How to Get Pre-Approved in Santa Clarita', href: '/blog/how-to-get-pre-approved-santa-clarita' },
      { label: 'FHA vs. Conventional Loan', href: '/blog/fha-vs-conventional-loan-santa-clarita' },
      { label: 'How Much Down Payment Do You Need?', href: '/blog/how-much-down-payment-santa-clarita' },
      { label: 'Down Payment Assistance Programs', href: '/dpa-checker' },
    ],
  },
  {
    number: '03',
    icon: Search,
    title: 'Find Your Neighborhood',
    description:
      "Santa Clarita has six distinct communities — each with different character, price ranges, schools, and amenities. Match yourself to the right one before you start touring homes.",
    links: [
      { label: 'Neighborhood Match Quiz', href: '/neighborhood-quiz' },
      { label: 'Compare Valencia vs. Stevenson Ranch', href: '/blog/valencia-vs-stevenson-ranch-comparison' },
      { label: 'Best Neighborhoods for Families', href: '/blog/best-neighborhoods-santa-clarita-families-2026' },
      { label: 'School Ratings by Neighborhood', href: '/blog/santa-clarita-neighborhoods-school-ratings' },
    ],
  },
  {
    number: '04',
    icon: Home,
    title: 'Make an Offer',
    description:
      "When you find the right home, you need to act decisively and strategically. Learn how offers work, what contingencies to include, and how to compete without overpaying.",
    links: [
      { label: 'How to Win a Bidding War in Santa Clarita', href: '/blog/how-to-win-bidding-war-santa-clarita-2026' },
      { label: 'What Is Escrow?', href: '/blog/what-is-escrow-buyers-guide' },
    ],
  },
  {
    number: '05',
    icon: Shield,
    title: 'Inspect and Investigate',
    description:
      "Your inspection contingency period is your last chance to fully evaluate the property. Know what to look for and how to negotiate repairs — especially in Santa Clarita's climate.",
    links: [
      { label: 'Home Inspection Checklist for Santa Clarita', href: '/blog/home-inspection-checklist-santa-clarita' },
      { label: 'Fire Risk in Santa Clarita Neighborhoods', href: '/blog/fire-risk-santa-clarita-neighborhoods' },
    ],
  },
  {
    number: '06',
    icon: Key,
    title: 'Close and Get Your Keys',
    description:
      "Closing day is the finish line. Understand your closing costs, what you'll sign, and how the wire transfer and deed recording process works in California.",
    links: [
      { label: 'Closing Costs in Santa Clarita: What to Budget', href: '/blog/closing-costs-santa-clarita-2026' },
      { label: 'What Is Escrow?', href: '/blog/what-is-escrow-buyers-guide' },
    ],
  },
]

const faqs = [
  {
    q: 'How much do I need to save to buy a home in Santa Clarita?',
    a: "Plan for 3.5–20% of the purchase price for your down payment, plus 2–3% of the purchase price in closing costs. For a $750,000 home, that's roughly $26,000–$37,500 minimum (3.5% FHA + 2% closing costs). Down payment assistance programs can significantly reduce what you need out of pocket.",
  },
  {
    q: 'What credit score do I need to buy a home in Santa Clarita?',
    a: 'FHA loans require a minimum 580 credit score for 3.5% down (or 500 with 10% down). Conventional loans typically require 620+, with the best rates available at 720+. Your credit score also affects your interest rate — a higher score can save you hundreds per month.',
  },
  {
    q: 'How long does it take to buy a home in Santa Clarita?',
    a: 'From pre-approval to closing typically takes 45–75 days. The search phase varies widely — some buyers find their home in a week, others take several months. Plan for a 3–6 month process from start to finish.',
  },
  {
    q: 'Do I need a real estate agent to buy a home?',
    a: "Buyer's agents are typically paid by the seller (as part of the listing agreement), so their services are free to you as a buyer. A good buyer's agent provides access to off-market listings, negotiation expertise, local market knowledge, and transaction coordination. We strongly recommend working with one.",
  },
  {
    q: 'What are Mello-Roos taxes and do all Santa Clarita homes have them?',
    a: 'Mello-Roos is a special tax found in newer communities that finances infrastructure. It can add $1,200–$6,000+ per year to your costs. Not all Santa Clarita homes have it — older, established neighborhoods typically do not. Always ask before making an offer.',
  },
  {
    q: 'What is escrow and how long does it take?',
    a: 'Escrow is a neutral third party that holds your deposit and coordinates the closing process. In California, escrow typically takes 30–45 days. During escrow, your lender processes your loan, inspections are conducted, and all conditions of the sale are verified before the deed transfers.',
  },
  {
    q: 'Can I use down payment assistance as a first-time buyer in Santa Clarita?',
    a: 'Yes. Programs like CalHFA Dream For All, CalHFA MyHome, and GSFA Platinum provide $15,000–$150,000 in assistance for eligible first-time buyers. Take our free DPA Eligibility Checker to see which programs you may qualify for.',
  },
]

const resources = [
  {
    icon: Calculator,
    title: 'Buying Power Calculator',
    description: 'See exactly what you can afford based on your income and debts.',
    href: '/buying-power',
    color: 'bg-premium-blue/10 text-premium-blue',
  },
  {
    icon: DollarSign,
    title: 'DPA Eligibility Checker',
    description: 'Find out if you qualify for $15,000–$150,000 in down payment assistance.',
    href: '/dpa-checker',
    color: 'bg-premium-green/10 text-premium-green',
  },
  {
    icon: Home,
    title: 'Neighborhood Match Quiz',
    description: 'Answer 5 questions and get matched to your ideal Santa Clarita neighborhood.',
    href: '/neighborhood-quiz',
    color: 'bg-amber-100 text-amber-700',
  },
]

export function FirstTimeBuyerGuideClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-premium-cream to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-premium-blue via-premium-blue-dark to-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-premium-gold blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm border border-white/20">
                <BookOpen className="h-4 w-4" />
                Complete Buyer Education Resource
              </div>
              <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
                First-Time Home Buyer Guide
                <span className="block text-premium-gold mt-2">Santa Clarita 2026</span>
              </h1>
              <p className="text-lg text-white/80 sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Everything you need to go from &ldquo;thinking about buying&rdquo; to holding your keys —
                written for the Santa Clarita market, with no jargon and no sales pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#steps">
                  <Button
                    size="lg"
                    className="group h-14 bg-premium-gold hover:bg-amber-500 text-gray-900 font-bold px-8 text-base transition-all duration-300 hover:scale-105"
                  >
                    Start the Guide
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/buying-power">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-base"
                  >
                    Calculate My Budget
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Tools Strip */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Free Tools for First-Time Buyers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${resource.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-premium-blue transition-colors text-sm">
                      {resource.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{resource.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6-Step Guide */}
      <section id="steps" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              The 6 Stages of Buying a Home in Santa Clarita
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps in order. Each one links to detailed guides that go deeper on every topic.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-premium-blue/8 text-premium-blue">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-premium-gold uppercase tracking-widest">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-900 sm:text-2xl mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-premium-blue/8 hover:text-premium-blue transition-colors duration-200 border border-gray-200"
                          >
                            {link.label}
                            <ChevronRight className="h-3.5 w-3.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-4">
                What Does It Really Cost to Buy in Santa Clarita?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The list price is just the beginning. Here&apos;s a realistic picture of the total costs for a $750,000 home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upfront Costs */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-premium-gold" />
                  Upfront Costs (One-Time)
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Down payment (3.5% FHA)', value: '$26,250' },
                    { label: 'Down payment (5% conventional)', value: '$37,500' },
                    { label: 'Down payment (20% conventional)', value: '$150,000' },
                    { label: 'Closing costs (est. 2–3%)', value: '$15,000–22,500' },
                    { label: 'Home inspection(s)', value: '$600–1,200' },
                    { label: 'Moving expenses', value: '$1,500–5,000' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Costs */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5 text-premium-gold" />
                  Monthly Costs (Ongoing)
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Mortgage P&I (5% down, 7%)', value: '~$4,760' },
                    { label: 'Property tax (1%)', value: '~$625' },
                    { label: 'Mello-Roos (if applicable)', value: '$0–500' },
                    { label: 'HOA fees (if applicable)', value: '$30–400' },
                    { label: "Homeowner's insurance", value: '~$175' },
                    { label: 'Total estimated monthly', value: '$5,600–6,460' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              All estimates for a $750,000 home in Santa Clarita at March 2026 rates. Use the{' '}
              <Link href="/buying-power" className="text-premium-gold hover:underline">
                Buying Power Calculator
              </Link>{' '}
              for your specific numbers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                First-Time Buyer Questions — Answered
              </h2>
              <p className="text-gray-600 text-lg">
                The questions we hear most often from first-time buyers in Santa Clarita.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-premium-blue" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All First-Time Buyer Posts */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                All First-Time Buyer Guides
              </h2>
              <p className="text-gray-600 text-lg">
                Deep-dive articles on every topic first-time Santa Clarita buyers need to know.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'How to Get Pre-Approved in Santa Clarita', href: '/blog/how-to-get-pre-approved-santa-clarita', desc: 'Documents, credit scores, and how to get the strongest letter.' },
                { title: 'What Is Escrow? A Buyer\'s Guide', href: '/blog/what-is-escrow-buyers-guide', desc: 'How California\'s closing process works, step by step.' },
                { title: 'HOA Fees in Santa Clarita', href: '/blog/hoa-fees-santa-clarita', desc: 'What HOAs cover, typical costs, and red flags to watch for.' },
                { title: 'Property Taxes in Santa Clarita Explained', href: '/blog/property-taxes-santa-clarita-explained', desc: 'Prop 13, direct assessments, supplemental bills, and exemptions.' },
                { title: 'Mello-Roos: The Hidden Cost', href: '/blog/mello-roos-santa-clarita', desc: 'Which communities have it, how much it runs, and how to find it.' },
                { title: 'Home Inspection Checklist', href: '/blog/home-inspection-checklist-santa-clarita', desc: 'What to inspect and Santa Clarita-specific risks to flag.' },
                { title: 'FHA vs. Conventional Loan', href: '/blog/fha-vs-conventional-loan-santa-clarita', desc: 'Side-by-side comparison for Santa Clarita buyers.' },
                { title: 'How Much Down Payment Do You Need?', href: '/blog/how-much-down-payment-santa-clarita', desc: 'From 0% VA to 20% conventional — all your options.' },
                { title: 'Closing Costs: What to Budget', href: '/blog/closing-costs-santa-clarita-2026', desc: 'Every closing cost line item, explained.' },
                { title: 'Down Payment Assistance Programs', href: '/blog/down-payment-assistance-programs-santa-clarita-2026', desc: 'CalHFA, GSFA, and other programs available in 2026.' },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-premium-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-premium-blue transition-colors text-sm leading-snug mb-1">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-3xl bg-gradient-to-br from-premium-blue to-premium-blue-dark p-10 sm:p-14 shadow-xl">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-4">
                Ready to Start Your Home Search?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                We&apos;re a free, independent resource — not a brokerage. No pressure, no commissions,
                just straight information to help you make the best decision.
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
              <p className="text-white/50 text-xs mt-6">
                100% free. No sales calls. No obligation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
