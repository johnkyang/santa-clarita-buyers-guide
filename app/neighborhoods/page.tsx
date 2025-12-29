'use client'

import { neighborhoods } from '@/data/neighborhoods'
import { NeighborhoodCard } from '@/components/neighborhoods/neighborhood-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Image as ImageIcon } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

export default function NeighborhoodsPage() {
  const neighborhoodData = [
    {
      name: 'Valencia',
      slug: 'valencia',
      priceRange: '$850K - $1.5M',
      character: 'Master-Planned',
      bestFor: 'Families, Professionals',
      colorTheme: 'blue',
      hoverBg: 'hover:bg-blue-50'
    },
    {
      name: 'Stevenson Ranch',
      slug: 'stevenson-ranch',
      priceRange: '$900K - $1.4M',
      character: 'Gated, Upscale',
      bestFor: 'Luxury Buyers',
      colorTheme: 'orange',
      hoverBg: 'hover:bg-orange-50'
    },
    {
      name: 'Saugus',
      slug: 'saugus',
      priceRange: '$650K - $1.2M',
      character: 'Established',
      bestFor: 'Value Seekers',
      colorTheme: 'green',
      hoverBg: 'hover:bg-green-50'
    },
    {
      name: 'Canyon Country',
      slug: 'canyon-country',
      priceRange: '$600K - $1.2M',
      character: 'Spacious Lots',
      bestFor: 'First-Time Buyers',
      colorTheme: 'purple',
      hoverBg: 'hover:bg-purple-50'
    },
    {
      name: 'Newhall',
      slug: 'newhall',
      priceRange: '$550K - $900K',
      character: 'Historic Charm',
      bestFor: 'Character Seekers',
      colorTheme: 'yellow',
      hoverBg: 'hover:bg-yellow-50'
    },
    {
      name: 'Castaic',
      slug: 'castaic',
      priceRange: '$700K - $1M',
      character: 'Lake Community',
      bestFor: 'Outdoor Enthusiasts',
      colorTheme: 'teal',
      hoverBg: 'hover:bg-teal-50'
    }
  ]

  return (
    <>
      {/* Hero Section with Photo Placeholder */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        {/* Photo Placeholder with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-700/85 z-10" />
          {/* Placeholder for: Santa Clarita aerial view / neighborhoods collage */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-center text-white/30 z-20 relative">
              <ImageIcon className="w-24 h-24 mx-auto mb-4" />
              <p className="text-sm font-medium">Photo Placeholder: Santa Clarita Neighborhoods Aerial View</p>
              <p className="text-xs mt-2">Recommended: 1920x800px</p>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-white/90 text-sm font-medium">6 Unique Communities</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Explore Santa Clarita Neighborhoods
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover the unique character and amenities of each community
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro Section with Colored Background */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                Each Santa Clarita neighborhood offers its own unique lifestyle, price point, and amenities.
                Whether you&apos;re looking for master-planned Valencia, upscale Stevenson Ranch, family-friendly
                Saugus, affordable Canyon Country, historic Newhall, or lakeside Castaic, we&apos;ll help you find
                the perfect community for your needs.
              </p>
            </div>
          </AnimatedSection>

          {/* Quick Comparison Table */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Neighborhood</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Character</th>
                      <th className="px-6 py-4 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {neighborhoodData.map((neighborhood) => (
                      <tr key={neighborhood.slug} className={`${neighborhood.hoverBg} transition-colors cursor-pointer`}>
                        <td className={`px-6 py-4 font-semibold text-${neighborhood.colorTheme}-600`}>{neighborhood.name}</td>
                        <td className="px-6 py-4">{neighborhood.priceRange}</td>
                        <td className="px-6 py-4">{neighborhood.character}</td>
                        <td className="px-6 py-4">{neighborhood.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Neighborhood Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <AnimatedSection key={neighborhood.slug} delay={index * 0.1} className="w-full">
                <NeighborhoodCard neighborhood={neighborhood} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Color */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Neighborhood?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss which Santa Clarita community is the best fit for your lifestyle and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-6 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl text-lg h-auto"
                >
                  Get Started
                </Button>
              </Link>
              <a href="tel:6614517200">
                <Button
                  size="lg"
                  className="px-8 py-6 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 hover:scale-105 transition-all shadow-xl text-lg h-auto"
                >
                  Call (661) 451-7200
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
