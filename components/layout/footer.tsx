import Link from 'next/link'
import { footerNavigation } from '@/data/navigation'
import { Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">Santa Clarita</h3>
              <p className="text-sm font-light">Buyers Guide</p>
            </div>
            <p className="text-sm text-gray-400">
              Your comprehensive resource for buying homes in Santa Clarita, California.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:6614517200" className="hover:text-white transition-colors">
                  (661) 451-7200
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:jyang@loandepot.com" className="hover:text-white transition-colors">
                  jyang@loandepot.com
                </a>
              </div>
            </div>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Neighborhoods</h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.neighborhoods.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Buyer Guides</h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.guides.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Important Disclosure:</strong> Santa Clarita Buyers Guide is operated by Kailei Media,
              a marketing firm. We are NOT a licensed real estate agent or brokerage. We provide educational resources and connect
              prospective home buyers with affiliated real estate professionals in Santa Clarita, California. By using this website,
              you acknowledge that any information you submit may be shared with affiliated real estate agents who can provide
              professional assistance.
            </p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {currentYear} Santa Clarita Buyers Guide. A Kailei Media Property. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
