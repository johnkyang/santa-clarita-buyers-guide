'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import { MobileMenu } from './mobile-menu'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const NAV_LINK_STYLE: React.CSSProperties = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className="site-header sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: '#0f1f3d',
        borderBottomColor: 'rgba(30,58,110,0.4)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-20 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}>
          <div className="p-1.5 rounded-lg" style={{ backgroundColor: '#c9a227', color: '#071525', flexShrink: 0 }}>
            <span className="material-symbols-outlined block" style={{ fontSize: '20px', lineHeight: '1' }}>
              auto_stories
            </span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight" style={{ color: '#ffffff', textDecoration: 'none' }}>
            Santa Clarita Buyers Guide
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {mainNavigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button
                    style={{ ...NAV_LINK_STYLE, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    {item.name}
                    <svg className="h-3 w-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full hidden pt-2 group-hover:block z-50">
                    <div
                      className="w-64 rounded-xl p-3 shadow-xl"
                      style={{
                        backgroundColor: '#0f1f3d',
                        border: '1px solid rgba(30,58,110,0.6)',
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block rounded-lg p-2.5 transition-colors hover:bg-[rgba(201,162,39,0.1)]"
                          style={{ color: '#ffffff', textDecoration: 'none' }}
                        >
                          <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#ffffff' }}>{child.name}</div>
                          {child.description && (
                            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  style={NAV_LINK_STYLE}
                  className="hover:opacity-100 transition-opacity"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="tel:6614517200"
            className="hidden lg:flex items-center justify-center rounded-full w-10 h-10 transition-colors hover:bg-[rgba(201,162,39,0.1)]"
            style={{ border: '1px solid rgba(30,58,110,0.6)', color: '#ffffff', textDecoration: 'none' }}
            aria-label="Call (661) 451-7200"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
          </a>
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-tight hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#c9a227', color: '#071525', textDecoration: 'none' }}
          >
            Expert Advice
          </Link>
          <button
            className="md:hidden p-1"
            style={{ color: '#ffffff' }}
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
