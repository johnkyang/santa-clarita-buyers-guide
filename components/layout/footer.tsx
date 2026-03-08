import Link from 'next/link'
import { footerNavigation } from '@/data/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-editorial-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-16 pb-8">

        {/* Top: Brand + Navigation Links */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-editorial-gold p-1.5 rounded-lg text-editorial-dark">
                <span className="material-symbols-outlined block" style={{ fontSize: '20px', lineHeight: '1' }}>
                  auto_stories
                </span>
              </div>
              <h2 className="font-display text-xl font-bold text-white">Santa Clarita Buyers Guide</h2>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Your free, independent home buyer resource for Santa Clarita Valley, CA. No agents. No pressure.
            </p>
            <a
              href="tel:6614517200"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-editorial-gold transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>call</span>
              (661) 451-7200
            </a>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">Neighborhoods</h4>
            <ul className="space-y-3">
              {footerNavigation.neighborhoods.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/55 hover:text-editorial-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer Guides */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">Buyer Guides</h4>
            <ul className="space-y-3">
              {footerNavigation.guides.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/55 hover:text-editorial-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Company stacked */}
          <div className="space-y-8">
            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">Resources</h4>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/55 hover:text-editorial-gold transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-sm text-white/55 hover:text-editorial-gold transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-sm text-white/55 hover:text-editorial-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-sm text-white/55 hover:text-editorial-gold transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border border-white/10 rounded-xl p-6 mb-10 bg-white/5">
          <p className="text-xs text-white/40 leading-relaxed">
            <strong className="text-white/60">Important Disclosure:</strong> Santa Clarita Buyers Guide is operated by
            Kailei Media, a marketing firm. We are NOT a licensed real estate agent or brokerage. We provide educational
            resources and connect prospective home buyers with affiliated real estate professionals in Santa Clarita,
            California. By using this website, you acknowledge that any information you submit may be shared with
            affiliated real estate agents who can provide professional assistance.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-white/30">
            &copy; {currentYear} Santa Clarita Buyers Guide. A Kailei Media Property. All rights reserved.
          </p>
          <div className="text-center md:text-right">
            <p className="text-xs uppercase tracking-widest font-bold text-white/25">Curated with care in</p>
            <p className="text-sm font-bold text-white/55">Santa Clarita, CA</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
