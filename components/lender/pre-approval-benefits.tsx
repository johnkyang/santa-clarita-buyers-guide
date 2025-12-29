'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2, TrendingUp, Shield, Clock, Home, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Stronger Negotiating Power',
    description: 'Pre-approval shows sellers you&apos;re a serious, qualified buyer, making your offer more competitive in Santa Clarita&apos;s market.',
    color: 'premium-blue',
  },
  {
    icon: DollarSign,
    title: 'Know Your True Budget',
    description: 'Understand exactly how much home you can afford, including down payment assistance programs that can add $50,000+ to your buying power.',
    color: 'premium-green',
  },
  {
    icon: Clock,
    title: 'Faster Closing Process',
    description: 'Pre-approval speeds up the final loan process, helping you close in 30-45 days and avoid losing your dream home to another buyer.',
    color: 'premium-orange',
  },
  {
    icon: Shield,
    title: 'Rate Lock Protection',
    description: 'Lock in today&apos;s interest rates while you shop, protecting you from potential rate increases during your home search.',
    color: 'premium-blue',
  },
  {
    icon: Home,
    title: 'Identify Issues Early',
    description: 'Discover and address any credit or documentation issues before you find your home, avoiding last-minute surprises.',
    color: 'premium-green',
  },
  {
    icon: CheckCircle2,
    title: 'DPA Program Qualification',
    description: 'Find out which down payment assistance programs you qualify for and how much help you can receive upfront.',
    color: 'premium-orange',
  },
];

export function PreApprovalBenefits() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-premium-cream/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Why Get <span className="text-gradient-premium">Pre-Approved</span>?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Pre-approval is your first critical step to homeownership. Here&apos;s how it helps you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-premium transition-shadow duration-300">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br from-${benefit.color} to-${benefit.color}-dark flex items-center justify-center mb-6`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* What You'll Need */}
        <Card className="max-w-4xl mx-auto p-8 bg-white shadow-premium">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            What You&apos;ll Need for Pre-Approval
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Documentation</h4>
              <ul className="space-y-2">
                {[
                  'Last 2 years of tax returns',
                  'Last 2 months of pay stubs',
                  'Last 2 months of bank statements',
                  'Photo ID (driver&apos;s license)',
                  'Social Security number',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-premium-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Information Needed</h4>
              <ul className="space-y-2">
                {[
                  'Current employment details',
                  'Income and assets information',
                  'Monthly debt payments',
                  'Desired home price range',
                  'Preferred neighborhoods',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-premium-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Don&apos;t have everything ready? No problem! John can help you understand what&apos;s needed and guide you through gathering the right documents.
            </p>
          </div>
        </Card>

        {/* Timeline */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center text-gray-900 mb-8">
            Pre-Approval Timeline
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-gradient-to-br from-premium-blue/5 to-premium-blue/10 border-premium-blue/20">
              <div className="text-4xl font-bold text-premium-blue mb-2">1-2 Days</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Initial Application</div>
              <p className="text-xs text-gray-600">
                Complete digital application online (15-20 minutes) and submit initial documents
              </p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-premium-green/5 to-premium-green/10 border-premium-green/20">
              <div className="text-4xl font-bold text-premium-green mb-2">24-48 Hours</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Credit Review</div>
              <p className="text-xs text-gray-600">
                Lender reviews your credit, income, and assets to determine loan amount
              </p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-premium-orange/5 to-premium-orange/10 border-premium-orange/20">
              <div className="text-4xl font-bold text-premium-orange mb-2">3-5 Days</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Pre-Approval Letter</div>
              <p className="text-xs text-gray-600">
                Receive official pre-approval letter to use when making offers
              </p>
            </Card>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            Total time from application to pre-approval letter: typically 5-7 days
          </p>
        </div>
      </div>
    </section>
  );
}
