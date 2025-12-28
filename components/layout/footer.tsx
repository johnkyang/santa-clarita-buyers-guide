import Link from 'next/link'
import { footerNavigation } from '@/data/navigation'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">Santa Clarita</h3>
              <p className="text-sm font-light">Buyers Guide</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive resource for buying homes in Santa Clarita, California.
            </p>
            {siteConfig.contact && (
              <div className="space-y-2 text-sm text-muted-foreground">
                {siteConfig.contact.email && (
                  <div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-primary"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                )}
                {siteConfig.contact.phone && (
                  <div>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
                      className="hover:text-primary"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Neighborhoods</h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.neighborhoods.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
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
                    className="text-muted-foreground transition-colors hover:text-primary"
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
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
