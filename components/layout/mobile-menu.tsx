'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mainNavigation } from '@/data/navigation'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleItem = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name)
  }

  if (!open) return null

  return (
    <div className="border-t bg-background md:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1 py-4">
        {mainNavigation.map((item) => (
          <div key={item.name}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleItem(item.name)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  {item.name}
                  {expandedItem === item.name ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                <div
                  className={cn(
                    'space-y-1 overflow-hidden transition-all',
                    expandedItem === item.name ? 'max-h-96 py-2' : 'max-h-0'
                  )}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={onClose}
                      className="block rounded-md px-6 py-2 text-sm hover:bg-accent"
                    >
                      <div className="font-medium">{child.name}</div>
                      {child.description && (
                        <div className="text-xs text-muted-foreground">{child.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
        <div className="pt-4">
          <Link href="/contact" onClick={onClose}>
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
