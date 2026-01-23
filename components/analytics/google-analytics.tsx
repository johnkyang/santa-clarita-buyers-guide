'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { initDataLayer } from '@/lib/schema-analytics'

interface GoogleAnalyticsProps {
  measurementId?: string
}

/**
 * Google Analytics 4 Component
 *
 * Initializes GA4 and the dataLayer for schema tracking.
 * Add your GA4 Measurement ID to enable full analytics.
 *
 * The dataLayer is always initialized for schema tracking,
 * even without a GA4 ID configured.
 *
 * To get your GA4 Measurement ID:
 * 1. Go to Google Analytics (analytics.google.com)
 * 2. Admin > Data Streams > Select your stream
 * 3. Copy the Measurement ID (starts with G-)
 */
export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Initialize dataLayer on mount
  useEffect(() => {
    initDataLayer()

    // Push initial page view event
    if (typeof window !== 'undefined') {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname,
        page_title: document.title,
      })
    }
  }, [])

  // If no measurement ID, just initialize dataLayer without GA4 scripts
  if (!measurementId) {
    return null
  }

  return (
    <>
      {/* Google Analytics 4 Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

/**
 * Data Layer Debug Component
 * Shows dataLayer events in development mode
 */
export function DataLayerDebug() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    // Log dataLayer events as they're pushed
    const originalPush = window.dataLayer?.push
    if (originalPush) {
      window.dataLayer.push = function (...args) {
        console.log('[DataLayer Event]', ...args)
        return originalPush.apply(this, args)
      }
    }
  }, [])

  return null
}
