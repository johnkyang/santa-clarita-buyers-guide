'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calculator, Compass } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20">

      {/* Editorial Hero Grid */}
      <section className="grid lg:grid-cols-12 gap-12 items-center py-16 lg:py-24 mb-16">

        {/* Left: Text Content */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-editorial-gold font-bold tracking-[0.2em] uppercase text-xs mb-5">
            Free · Independent · Always On Your Side
          </span>

          <h1 className="font-display text-5xl lg:text-7xl xl:text-[80px] font-medium leading-[1.05] tracking-tighter text-slate-900 mb-8">
            Your Journey<br />
            to Homeownership<br />
            <em className="not-italic text-editorial-gold">in Santa Clarita.</em>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed max-w-xl mb-10">
            The valley&apos;s only free, independent buyer resource. Honest neighborhood data,
            financial tools, and expert guidance — no sales pressure, ever.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/buying-power">
              <button className="flex items-center gap-2 bg-editorial-gold px-7 py-4 rounded-full text-editorial-dark font-bold hover:brightness-110 hover:scale-105 transition-all">
                <Calculator className="h-5 w-5" />
                See What You Can Afford
              </button>
            </Link>
            <Link href="/neighborhood-quiz">
              <button className="flex items-center gap-2 border border-editorial-gold/40 px-7 py-4 rounded-full text-slate-700 font-semibold hover:bg-editorial-gold/10 hover:scale-105 transition-all">
                <Compass className="h-5 w-5" />
                Find My Neighborhood
              </button>
            </Link>
          </div>

          {/* Trust signal */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border-2 border-editorial-gold/30 bg-editorial-gold/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-editorial-gold" style={{ fontSize: '18px' }}>verified</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">100% Free Resource. Zero Sales Pressure.</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Kailei Media · Santa Clarita, CA</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Editorial Image Card */}
        <motion.div
          className="lg:col-span-5 relative hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 relative">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200"
              alt="Beautiful Santa Clarita home"
              fill
              priority
              quality={85}
              sizes="40vw"
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3AAAAAA//2Q=="
            />
          </div>
          {/* Floating quote card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl max-w-[190px] -rotate-3 border border-editorial-gold/15">
            <span className="material-symbols-outlined text-editorial-gold block mb-2" style={{ fontSize: '24px' }}>verified</span>
            <p className="text-xs font-medium text-slate-500 italic leading-relaxed">
              &ldquo;No sales pressure. Just the clearest path to our first home.&rdquo;
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <motion.section
        className="mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="grid md:grid-cols-3 gap-0 border border-editorial-gold/20 rounded-2xl overflow-hidden bg-white shadow-sm">
          {[
            {
              icon: 'location_city',
              value: '6',
              label: 'Neighborhoods Analyzed',
              desc: 'Valencia, Newhall, Saugus, Canyon Country, Stevenson Ranch & Castaic.',
            },
            {
              icon: 'menu_book',
              value: '4',
              label: 'Free Buyer Guides',
              desc: 'First-time buyers, VA loans, FHA, and move-up buyer guides included.',
            },
            {
              icon: 'payments',
              value: '$0',
              label: 'Cost to You. Ever.',
              desc: 'Free tools, free data, free guidance. No hidden fees, no obligation.',
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`p-10 flex flex-col items-center text-center hover:bg-editorial-gold/5 transition-colors ${
                i < 2 ? 'border-b md:border-b-0 md:border-r border-editorial-gold/10' : ''
              }`}
            >
              <span className="material-symbols-outlined text-editorial-gold mb-4" style={{ fontSize: '40px' }}>
                {stat.icon}
              </span>
              <h3 className="font-display text-5xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-3">{stat.label}</p>
              <p className="text-xs text-slate-400 leading-relaxed px-4">{stat.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

    </div>
  )
}
