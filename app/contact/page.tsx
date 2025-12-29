'use client'

import { LeadCaptureForm } from '@/components/forms/lead-capture-form'
import { Phone, MapPin, Clock, Shield, Award, Users, Image as ImageIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { AnimatedSection } from '@/components/shared/animated-section'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-700/85 z-10" />
          {/* Photo Placeholder */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-center text-white/30 z-20 relative">
              <ImageIcon className="w-24 h-24 mx-auto mb-4" />
              <p className="text-sm font-medium">Photo Placeholder: Professional consultation / handshake</p>
              <p className="text-xs mt-2">Recommended: 1920x600px</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
              <Phone className="w-4 h-4 text-green-400" />
              <span className="text-white/90 text-sm font-medium">Get Expert Guidance</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get Started Today
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to start your Santa Clarita home search? Let&apos;s find your perfect home together
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Trusted Service</h3>
                <p className="text-sm text-gray-600">Licensed professionals committed to your success</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Local Experts</h3>
                <p className="text-sm text-gray-600">Deep knowledge of Santa Clarita neighborhoods</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Personalized Approach</h3>
                <p className="text-sm text-gray-600">Tailored guidance for your unique needs</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <AnimatedSection>
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Phone</div>
                        <a
                          href="tel:6614517200"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                        >
                          (661) 451-7200
                        </a>
                        <p className="text-sm text-gray-600 mt-1">Call us anytime during business hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Service Area</div>
                        <div className="text-gray-700">
                          Santa Clarita, CA
                          <br />
                          <span className="text-sm text-gray-600">
                            Valencia, Newhall, Saugus, Canyon Country, Stevenson Ranch, Castaic
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Hours</div>
                        <div className="text-gray-700 text-sm space-y-1">
                          <div>Monday - Friday: 9am - 6pm</div>
                          <div>Saturday: 10am - 4pm</div>
                          <div>Sunday: By appointment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 p-6">
                  <h3 className="mb-4 font-bold text-lg text-gray-900">What Happens Next?</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </span>
                      <span className="text-gray-700 text-sm pt-1">
                        We review your information and match you with an affiliated real estate professional
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </span>
                      <span className="text-gray-700 text-sm pt-1">
                        A licensed agent will contact you within 24 hours
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </span>
                      <span className="text-gray-700 text-sm pt-1">
                        Schedule a consultation to discuss your home buying goals
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        4
                      </span>
                      <span className="text-gray-700 text-sm pt-1">
                        Start your journey to finding your perfect Santa Clarita home!
                      </span>
                    </li>
                  </ol>
                </Card>
              </AnimatedSection>

              {/* Map Placeholder */}
              <AnimatedSection delay={0.3}>
                <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
                  <h3 className="mb-4 font-bold text-lg text-gray-900">Our Service Area</h3>
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">Map Placeholder</p>
                      <p className="text-xs">Santa Clarita, CA</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Right Column - Lead Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <Card className="p-8 sm:p-10 bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-100 shadow-xl">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Tell Us About Your Home Search</h2>
                    <p className="text-gray-600">
                      Fill out the form below and one of our affiliated real estate professionals will get back to
                      you within 24 hours.
                    </p>
                  </div>
                  <LeadCaptureForm source="contact-page" />
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Prefer to Talk Now?</h2>
            <p className="text-xl text-white/90 mb-6">
              Our team is standing by to answer your questions
            </p>
            <a
              href="tel:6614517200"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl text-lg"
            >
              <Phone className="w-6 h-6" />
              Call (661) 451-7200
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
