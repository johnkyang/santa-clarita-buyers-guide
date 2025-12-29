'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, FileText, UserCheck, Home, Key, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Complete Homebuyer Education',
    icon: GraduationCap,
    color: 'premium-blue',
    description: 'Take an approved 8-hour homebuyer education course (available online)',
    details: [
      'Required for all DPA programs',
      'Online courses available ($50-$99)',
      'Can be completed in one day or over several sessions',
      'Receive certificate of completion',
    ],
    timeline: '1-2 days',
    resources: [
      'Framework Homeownership',
      'eHome America',
      'Homeownership Preservation Foundation',
    ],
  },
  {
    number: 2,
    title: 'Choose Your DPA Program',
    icon: FileText,
    color: 'premium-green',
    description: 'Work with us to determine which program(s) best fit your situation',
    details: [
      'Review your income, credit score, and savings',
      'Identify qualifying programs',
      'Compare assistance amounts and terms',
      'Get pre-qualified with approved lender',
    ],
    timeline: '3-5 days',
    tip: 'You can apply for multiple programs simultaneously to maximize your options',
  },
  {
    number: 3,
    title: 'Get Pre-Approved with DPA Lender',
    icon: UserCheck,
    color: 'premium-orange',
    description: 'Work with a lender approved to process your chosen DPA program',
    details: [
      'Not all lenders are approved for all DPA programs',
      'Provide income documentation and credit authorization',
      'Lender verifies your eligibility and calculates assistance',
      'Receive pre-approval letter with DPA included',
    ],
    timeline: '7-14 days',
    tip: 'We can connect you with experienced DPA-approved lenders who specialize in Santa Clarita',
  },
  {
    number: 4,
    title: 'Find Your Home & Make an Offer',
    icon: Home,
    color: 'premium-blue',
    description: 'Search for homes within your budget and submit competitive offers',
    details: [
      'Your offer is just as competitive as any other qualified buyer',
      'Sellers don&apos;t see your financing details',
      'Your pre-approval letter shows you&apos;re a serious buyer',
      'DPA programs work with all property types (within limits)',
    ],
    timeline: '2-8 weeks',
    tip: 'Most Santa Clarita sellers care about price and closing timeline, not your financing method',
  },
  {
    number: 5,
    title: 'Complete Loan Processing',
    icon: FileText,
    color: 'premium-green',
    description: 'Your lender processes both your primary mortgage and DPA loan',
    details: [
      'Submit full documentation (pay stubs, tax returns, bank statements)',
      'Complete home appraisal and inspection',
      'Underwriter reviews and approves both loans',
      'Sign final DPA program documents',
    ],
    timeline: '30-45 days',
    note: 'DPA loans are processed alongside your primary mortgage - it&apos;s all part of one closing',
  },
  {
    number: 6,
    title: 'Close & Move In!',
    icon: Key,
    color: 'premium-orange',
    description: 'Sign final documents, receive your keys, and become a homeowner',
    details: [
      'Review Closing Disclosure 3 days before closing',
      'Attend closing appointment (1-2 hours)',
      'Sign loan documents for primary mortgage and DPA',
      'Receive keys to your new home!',
    ],
    timeline: 'Closing day',
    celebration: 'Congratulations - you&apos;re now a homeowner with significantly reduced out-of-pocket costs!',
  },
];

export function DPAProcess() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-premium-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Your Path to <span className="text-gradient-premium">DPA Success</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Follow these 6 steps to successfully use down payment assistance for your Santa Clarita home
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-premium-blue via-premium-green to-premium-orange transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.number} className="relative">
                  {/* Desktop layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    {isEven ? (
                      <>
                        {/* Content on left */}
                        <div className="text-right">
                          <Card className="inline-block text-left p-8 shadow-premium max-w-lg">
                            <div className="mb-4">
                              <div className="inline-flex items-center gap-3 mb-2">
                                <span className="text-sm font-bold text-gray-500">STEP {step.number}</span>
                                <Badge className="bg-premium-cream text-gray-700">
                                  {step.timeline}
                                </Badge>
                              </div>
                              <h3 className="font-display text-2xl font-bold text-gray-900">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 mb-4">{step.description}</p>
                            <ul className="space-y-2 mb-4">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle2 className="h-4 w-4 text-premium-green flex-shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                            {step.tip && (
                              <div className="bg-blue-50 border-l-4 border-premium-blue p-4 text-sm">
                                <p className="font-semibold text-gray-900 mb-1">Pro Tip:</p>
                                <p className="text-gray-700">{step.tip}</p>
                              </div>
                            )}
                            {step.note && (
                              <div className="bg-orange-50 border-l-4 border-premium-orange p-4 text-sm">
                                <p className="font-semibold text-gray-900 mb-1">Important:</p>
                                <p className="text-gray-700">{step.note}</p>
                              </div>
                            )}
                            {step.celebration && (
                              <div className="bg-green-50 border-l-4 border-premium-green p-4 text-sm">
                                <p className="font-semibold text-gray-900 mb-1">🎉 Success!</p>
                                <p className="text-gray-700">{step.celebration}</p>
                              </div>
                            )}
                            {step.resources && (
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-xs font-semibold text-gray-700 mb-2">Approved Providers:</p>
                                <div className="flex flex-wrap gap-2">
                                  {step.resources.map((resource, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {resource}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </Card>
                        </div>
                        {/* Icon in center */}
                        <div className="flex justify-start">
                          <div className={`relative h-20 w-20 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color}-dark flex items-center justify-center shadow-lg`}>
                            <Icon className="h-10 w-10 text-white" />
                            <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white border-4 border-premium-cream flex items-center justify-center">
                              <span className="text-sm font-bold text-gray-900">{step.number}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Icon in center */}
                        <div className="flex justify-end">
                          <div className={`relative h-20 w-20 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color}-dark flex items-center justify-center shadow-lg`}>
                            <Icon className="h-10 w-10 text-white" />
                            <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white border-4 border-premium-cream flex items-center justify-center">
                              <span className="text-sm font-bold text-gray-900">{step.number}</span>
                            </div>
                          </div>
                        </div>
                        {/* Content on right */}
                        <div className="text-left">
                          <Card className="inline-block p-8 shadow-premium max-w-lg">
                            <div className="mb-4">
                              <div className="inline-flex items-center gap-3 mb-2">
                                <span className="text-sm font-bold text-gray-500">STEP {step.number}</span>
                                <Badge className="bg-premium-cream text-gray-700">
                                  {step.timeline}
                                </Badge>
                              </div>
                              <h3 className="font-display text-2xl font-bold text-gray-900">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 mb-4">{step.description}</p>
                            <ul className="space-y-2 mb-4">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle2 className="h-4 w-4 text-premium-green flex-shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                            {step.tip && (
                              <div className="bg-blue-50 border-l-4 border-premium-blue p-4 text-sm">
                                <p className="font-semibold text-gray-900 mb-1">Pro Tip:</p>
                                <p className="text-gray-700">{step.tip}</p>
                              </div>
                            )}
                            {step.note && (
                              <div className="bg-orange-50 border-l-4 border-premium-orange p-4 text-sm">
                                <p className="font-semibold text-gray-900 mb-1">Important:</p>
                                <p className="text-gray-700">{step.note}</p>
                              </div>
                            )}
                            {step.celebration && (
                              <div className="bg-green-50 border-l-4 border-premium-green p-4 text-sm">
                                <p className="font-semibold text-gray-900 mb-1">🎉 Success!</p>
                                <p className="text-gray-700">{step.celebration}</p>
                              </div>
                            )}
                            {step.resources && (
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-xs font-semibold text-gray-700 mb-2">Approved Providers:</p>
                                <div className="flex flex-wrap gap-2">
                                  {step.resources.map((resource, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {resource}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </Card>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color}-dark flex items-center justify-center shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                          <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-white border-4 border-premium-cream flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-900">{step.number}</span>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <Card className="flex-1 p-6 shadow-premium">
                        <div className="mb-4">
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold text-gray-500">STEP {step.number}</span>
                            <Badge className="bg-premium-cream text-gray-700 text-xs">
                              {step.timeline}
                            </Badge>
                          </div>
                          <h3 className="font-display text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="h-4 w-4 text-premium-green flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        {step.tip && (
                          <div className="bg-blue-50 border-l-4 border-premium-blue p-3 text-sm">
                            <p className="font-semibold text-gray-900 mb-1">Pro Tip:</p>
                            <p className="text-gray-700">{step.tip}</p>
                          </div>
                        )}
                        {step.note && (
                          <div className="bg-orange-50 border-l-4 border-premium-orange p-3 text-sm">
                            <p className="font-semibold text-gray-900 mb-1">Important:</p>
                            <p className="text-gray-700">{step.note}</p>
                          </div>
                        )}
                        {step.celebration && (
                          <div className="bg-green-50 border-l-4 border-premium-green p-3 text-sm">
                            <p className="font-semibold text-gray-900 mb-1">🎉 Success!</p>
                            <p className="text-gray-700">{step.celebration}</p>
                          </div>
                        )}
                        {step.resources && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-xs font-semibold text-gray-700 mb-2">Approved Providers:</p>
                            <div className="flex flex-wrap gap-2">
                              {step.resources.map((resource, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {resource}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </Card>
                    </div>
                  </div>

                  {/* Arrow connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-16 p-8 bg-gradient-to-r from-premium-blue via-premium-blue-dark to-blue-900 text-white text-center">
          <h3 className="font-display text-3xl font-bold mb-4">
            Ready to Start Your DPA Journey?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Let us guide you through every step of the process. We&apos;ll connect you with approved lenders,
            education providers, and help you navigate the entire DPA application.
          </p>
          <a href="tel:6614517200">
            <Button size="lg" className="h-16 px-10 text-lg font-bold bg-white text-premium-blue hover:bg-premium-cream">
              <Phone className="mr-3 h-6 w-6" />
              Call (661) 451-7200 - Let&apos;s Get Started
            </Button>
          </a>
        </Card>
      </div>
    </section>
  );
}
