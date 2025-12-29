'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen, ArrowRight, CheckCircle, Building2, Home, Users, DollarSign, Image as ImageIcon } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'

export default function GuidesPage() {
  const guideDetails = [
    {
      slug: 'new-construction',
      title: 'New Construction Home Buying Guide',
      description: 'Everything you need to know about buying a brand-new home in Santa Clarita',
      icon: Building2,
      colorFrom: 'from-blue-500',
      colorTo: 'to-blue-600',
      bgGradient: 'from-blue-50',
      borderColor: 'border-blue-100',
      hoverBorder: 'hover:border-blue-300',
      textColor: 'text-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      benefits: [
        'Benefits of Buying New Construction',
        'The New Construction Buying Process',
        'Working with Home Builders'
      ]
    },
    {
      slug: 'resale',
      title: 'Resale Home Buying Guide',
      description: 'Navigate the resale market and find your perfect existing home in Santa Clarita',
      icon: Home,
      colorFrom: 'from-orange-500',
      colorTo: 'to-orange-600',
      bgGradient: 'from-orange-50',
      borderColor: 'border-orange-100',
      hoverBorder: 'hover:border-orange-300',
      textColor: 'text-orange-600',
      iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600',
      benefits: [
        'Advantages of Buying Resale Homes',
        'The Home Search Process',
        'The Home Inspection Process'
      ]
    },
    {
      slug: '55-plus-communities',
      title: '55+ Community Living Guide',
      description: 'Discover active adult communities and retirement living options in Santa Clarita',
      icon: Users,
      colorFrom: 'from-green-500',
      colorTo: 'to-green-600',
      bgGradient: 'from-green-50',
      borderColor: 'border-green-100',
      hoverBorder: 'hover:border-green-300',
      textColor: 'text-green-600',
      iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
      benefits: [
        'What Are 55+ Communities?',
        'Benefits of 55+ Community Living',
        '55+ Communities in Santa Clarita'
      ]
    },
    {
      slug: 'reverse-mortgage',
      title: 'Reverse Mortgage Guide',
      description: 'Understanding reverse mortgages for Santa Clarita homeowners aged 62+',
      icon: DollarSign,
      colorFrom: 'from-purple-500',
      colorTo: 'to-purple-600',
      bgGradient: 'from-purple-50',
      borderColor: 'border-purple-100',
      hoverBorder: 'hover:border-purple-300',
      textColor: 'text-purple-600',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      benefits: [
        'Reverse Mortgage Basics',
        'Benefits of Reverse Mortgages',
        'Costs & Risks'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-800/90 to-orange-700/85 z-10" />
          {/* Photo Placeholder */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-center text-white/30 z-20 relative">
              <ImageIcon className="w-24 h-24 mx-auto mb-4" />
              <p className="text-sm font-medium">Photo Placeholder: Happy family reading documents / planning</p>
              <p className="text-xs mt-2">Recommended: 1920x800px</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span className="text-white/90 text-sm font-medium">Expert Home Buying Resources</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Essential Home Buying Guides
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Everything you need to know about buying a home in Santa Clarita
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Guides Grid with Color Themes */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {guideDetails.map((guide, index) => {
              const Icon = guide.icon
              return (
                <AnimatedSection key={guide.slug} delay={index * 0.1} className="w-full">
                  <div className={`group relative bg-gradient-to-br ${guide.bgGradient} to-white border-2 ${guide.borderColor} rounded-2xl p-8 ${guide.hoverBorder} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                    {/* Icon Circle */}
                    <div className={`w-20 h-20 ${guide.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className={`w-5 h-5 ${guide.textColor}`} />
                      <span className={`text-sm font-semibold ${guide.textColor} uppercase tracking-wide`}>Buyer Guide</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {guide.title}
                    </h3>

                    <p className="text-gray-700 text-lg mb-6">
                      {guide.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {guide.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`w-6 h-6 ${guide.textColor.replace('text-', 'text-').replace('-600', '-500')} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                      <li className="text-sm text-gray-600">+ 5 more topics</li>
                    </ul>

                    <Link href={`/guides/${guide.slug}`}>
                      <Button
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${guide.colorFrom} ${guide.colorTo} text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-lg h-auto`}
                      >
                        Read Complete Guide
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to provide personalized guidance for your unique situation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-6 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl text-lg h-auto"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/neighborhoods">
                <Button
                  size="lg"
                  className="px-8 py-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 hover:scale-105 transition-all shadow-xl text-lg h-auto"
                >
                  Explore Neighborhoods
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
