/**
 * Breadcrumbs Component with JSON-LD Schema
 *
 * Uses the centralized schema generator from lib/schema.ts
 * Includes both visual breadcrumb navigation and structured data
 */

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { generateBreadcrumbSchema, type BreadcrumbItem } from '@/lib/schema'
import { JsonLd } from './json-ld'

// Re-export for backward compatibility
export type { BreadcrumbItem }

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = generateBreadcrumbSchema({ items })

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link
              href="/"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {index === items.length - 1 ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
