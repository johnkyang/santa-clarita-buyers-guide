'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, ExternalLink, Award, Building2, GraduationCap, BadgeDollarSign } from 'lucide-react';

export function LenderInfo() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Meet Your <span className="text-gradient-premium">Mortgage Specialist</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Get expert guidance from a local lender who understands Santa Clarita and specializes in helping first-time buyers
          </p>
        </div>

        {/* Main Lender Card */}
        <Card className="max-w-5xl mx-auto overflow-hidden shadow-premium-lg mb-12">
          <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
            {/* Left Column - Photo and Basic Info */}
            <div className="md:col-span-2 text-center md:text-left">
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-premium-blue to-premium-blue-dark flex items-center justify-center mb-4">
                  <span className="text-6xl font-bold text-white">JY</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-2">John Yang</h3>
                <p className="text-xl text-gray-600 mb-4">Senior Loan Officer</p>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <Building2 className="h-5 w-5 text-premium-blue" />
                  <span className="font-semibold text-gray-900">loanDepot</span>
                </div>
                <div className="space-y-3">
                  <a href="tel:8184456354">
                    <Button className="w-full bg-gradient-to-r from-premium-blue to-premium-blue-dark hover:from-premium-blue-dark hover:to-blue-900">
                      <Phone className="mr-2 h-5 w-5" />
                      (818) 445-6354
                    </Button>
                  </a>
                  <a href="mailto:jyang@loandepot.com">
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-5 w-5" />
                      jyang@loandepot.com
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-3">
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-premium-orange" />
                  Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-premium-blue text-white">CalHFA Programs</Badge>
                  <Badge className="bg-premium-green text-white">AccessZero FHA</Badge>
                  <Badge className="bg-premium-orange text-white">GSFA</Badge>
                  <Badge className="bg-blue-600 text-white">FHA Loans</Badge>
                  <Badge className="bg-green-600 text-white">VA Loans</Badge>
                  <Badge className="bg-purple-600 text-white">Conventional</Badge>
                  <Badge className="bg-orange-600 text-white">USDA Loans</Badge>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-premium-orange" />
                  Experience & Expertise
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-premium-blue flex-shrink-0" />
                    <span>15+ years helping Santa Clarita families achieve homeownership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-premium-blue flex-shrink-0" />
                    <span>Certified in all major down payment assistance programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-premium-blue flex-shrink-0" />
                    <span>Specializes in first-time home buyers and complex financing scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-premium-blue flex-shrink-0" />
                    <span>Deep knowledge of Valencia, Stevenson Ranch, and all Santa Clarita neighborhoods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-premium-blue flex-shrink-0" />
                    <span>Bilingual service available</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <BadgeDollarSign className="h-8 w-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 text-lg">Exclusive $500 Closing Costs Credit</h5>
                    <p className="text-gray-700 mb-3">
                      When you apply with John Yang and mention <strong>SantaClaritaBuyersGuide.com</strong>,
                      you&apos;ll receive a <strong>$500 credit toward your closing costs</strong>.*
                    </p>
                    <p className="text-xs text-gray-600">
                      * Credit applied at closing. Subject to loan approval and program eligibility. Cannot be combined with all promotions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Digital Application CTA */}
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-premium-blue via-premium-blue-dark to-blue-900 text-white text-center shadow-premium-lg">
          <h3 className="font-display text-3xl font-bold mb-4">
            Start Your Pre-Approval Application Online
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Complete your mortgage application digitally at your convenience. The process takes about 15-20 minutes,
            and you&apos;ll receive a response within 24-48 hours.
          </p>
          <a href="https://www.loandepot.com/jyang" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="h-16 px-10 text-lg font-bold bg-white text-premium-blue hover:bg-premium-cream shadow-lg"
            >
              Apply Now at www.loanDepot.com/jyang
              <ExternalLink className="ml-3 h-6 w-6" />
            </Button>
          </a>
          <p className="text-white/70 text-sm mt-6">
            Secure application • No impact to credit score for initial inquiry • Free consultation
          </p>
        </Card>

        {/* Why loanDepot */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose loanDepot?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="h-16 w-16 rounded-2xl bg-premium-blue/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-premium-blue" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Top-Rated Lender</h4>
              <p className="text-sm text-gray-600">
                One of America&apos;s largest retail mortgage lenders with proven track record and competitive rates
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="h-16 w-16 rounded-2xl bg-premium-green/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-premium-green" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Technology-Driven</h4>
              <p className="text-sm text-gray-600">
                Modern digital platform makes the application and approval process fast, transparent, and convenient
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="h-16 w-16 rounded-2xl bg-premium-orange/10 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-premium-orange" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Local Expertise</h4>
              <p className="text-sm text-gray-600">
                Combined power of a national lender with John&apos;s local Santa Clarita market knowledge and relationships
              </p>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-12 max-w-5xl mx-auto p-6 bg-blue-50 border-blue-200">
          <p className="text-sm text-gray-700 text-center">
            <strong className="text-gray-900">Affiliate Disclosure:</strong> Santa Clarita Buyers Guide (operated by Kailei Media)
            may receive compensation for referrals to John Yang at loanDepot. This relationship does not affect the terms,
            rates, or services you receive. John Yang is a licensed loan officer with loanDepot.com, LLC.
            NMLS ID [License Number]. loanDepot.com, LLC NMLS ID 174457. Licensed by the Department of Financial Protection and Innovation
            under the California Residential Mortgage Lending Act. Equal Housing Opportunity.
          </p>
        </Card>
      </div>
    </section>
  );
}
