'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import { MobileMenu } from './mobile-menu'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-editorial-gold/15 bg-editorial-light/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 lg:px-20 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="bg-editorial-gold p-1.5 rounded-lg text-editorial-dark">
            <span className="material-symbols-outlined block" style={{ fontSize: '20px', lineHeight: '1' }}>
              auto_stories
            </span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-slate-900">
            Santa Clarita Buyers Guide
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {mainNavigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-slate-600 hover:text-editorial-gold transition-colors">
                    {item.name}
                    <svg className="h-3 w-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                    <div className="w-64 rounded-xl border border-editorial-gold/20 bg-editorial-light p-3 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block rounded-lg p-2.5 hover:bg-editorial-gold/10 transition-colors"
                        >
                          <div className="font-semibold text-sm text-slate-800">{child.name}</div>
                          {child.description && (
                            <div className="text-xs text-slate-500 mt-0.5">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-widest text-slate-600 hover:text-editorial-gold transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:6614517200"
            className="hidden lg:flex items-center justify-center rounded-full w-10 h-10 border border-editorial-gold/30 hover:bg-editorial-gold/10 transition-colors text-slate-600 hover:text-editorial-gold"
            aria-label="Call (661) 451-7200"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
          </a>
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 bg-editorial-gold px-5 py-2.5 rounded-full text-editorial-dark font-bold text-sm tracking-tight hover:brightness-110 transition-all"
          >
            Expert Advice
          </Link>
          <button
            className="md:hidden p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
