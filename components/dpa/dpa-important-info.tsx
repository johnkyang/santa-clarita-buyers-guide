'use client';

import { Card } from '@/components/ui/card';
import { AlertCircle, Info, TrendingUp, Shield, Clock, DollarSign } from 'lucide-react';

const importantItems = [
  {
    icon: DollarSign,
    title: 'Income Limits Vary by County',
    color: 'premium-blue',
    description:
      'Los Angeles County (including Santa Clarita) has specific income limits that vary by household size and program. These limits are typically higher than you might expect.',
    details: [
      'Limits range from ~$135,000 to $175,000+ depending on program and household size',
      'Teachers and certain professions may have waived income limits',
      'Limits are based on gross household income (before taxes)',
      'Updated annually based on Area Median Income (AMI)',
    ],
    important: 'Even if you think you earn "too much," you may still qualify - always check current limits!',
  },
  {
    icon: Info,
    title: 'Property Type Restrictions',
    color: 'premium-green',
    description:
      'DPA programs can be used on most property types, but there are some restrictions to be aware of.',
    details: [
      'Primary residence only (must live in the home)',
      'Single-family homes, townhomes, and condos typically approved',
      'Manufactured homes may be eligible with certain programs',
      'Investment properties and second homes NOT eligible',
      'Property must meet minimum property standards',
    ],
    important: 'The home must be your primary residence - you cannot use DPA for rental or vacation properties.',
  },
  {
    icon: Clock,
    title: 'Repayment Timing Matters',
    color: 'premium-orange',
    description:
      'Understanding when and how you repay DPA funds is crucial to long-term planning.',
    details: [
      'Most programs: Deferred payment (due when you sell, refinance, or pay off mortgage)',
      'AccessZero: Grant forgiven after 5 years of occupancy',
      'If you refinance, you may need to repay the DPA or refinance it into your new loan',
      'Selling within a few years means you&apos;ll need to repay from sale proceeds',
      'No monthly payment on DPA portion (except some specialized programs)',
    ],
    important:
      'Plan to stay in your home for at least 3-5 years to maximize the benefit of DPA programs.',
  },
  {
    icon: TrendingUp,
    title: 'Interest Rates May Be Slightly Higher',
    color: 'premium-blue',
    description:
      'Some DPA programs (like CalPLUS) come with a slightly higher interest rate on your primary mortgage.',
    details: [
      'Rate increase typically 0.125% to 0.375% higher than standard rates',
      'This premium allows the program to fund the down payment assistance',
      'You can often refinance to a lower rate once you have 20% equity',
      'The small rate increase is usually worth it for the significant down payment help',
      'Some programs (like MyHome) don&apos;t increase your rate at all',
    ],
    important:
      'Example: On a $700,000 loan, a 0.25% rate increase = ~$100/month, but you got $25,000+ in down payment help.',
  },
  {
    icon: Shield,
    title: 'Mortgage Insurance Requirements',
    color: 'premium-green',
    description:
      'DPA programs combined with different loan types have varying mortgage insurance requirements.',
    details: [
      'FHA loans: Mortgage insurance required for life of loan (if down payment < 10%)',
      'Conventional loans: PMI required until 20% equity, then can be removed',
      'VA loans: No mortgage insurance, only VA funding fee',
      'Some programs offer reduced mortgage insurance rates for teachers/public servants',
      'Factor MI costs into your monthly budget calculations',
    ],
    important:
      'Budget for mortgage insurance - it can add $200-$400/month to your payment depending on loan type and down payment.',
  },
  {
    icon: AlertCircle,
    title: 'Homebuyer Education is Mandatory',
    color: 'premium-orange',
    description:
      'All DPA programs require completion of an approved homebuyer education course before closing.',
    details: [
      '8-hour course covering budgeting, mortgages, home maintenance, and more',
      'Online courses available ($50-$99) - can complete at your own pace',
      'In-person classes also available (often free or low-cost)',
      'Must be completed BEFORE closing (ideally before making an offer)',
      'Certificate valid for 1-2 years depending on program',
    ],
    important:
      'Complete your homebuyer education early! It&apos;s required and actually provides valuable information.',
  },
];

export function DPAImportantInfo() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Important Things <span className="text-gradient-premium">to Know</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Critical information every DPA applicant should understand before getting started
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {importantItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-8 shadow-premium hover:shadow-premium-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br from-${item.color} to-${item.color}-dark flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{item.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Points:</h4>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-${item.color} flex-shrink-0`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Remember:</p>
                      <p className="text-sm text-gray-700">{item.important}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Considerations */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Additional Considerations
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Program Funding</h4>
              <p className="text-gray-700">
                DPA programs have limited funding and can run out. Apply early in the year when programs are
                replenished, and work with experienced lenders who can reserve funds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Combining Programs</h4>
              <p className="text-gray-700">
                You generally cannot combine multiple DPA programs for the same purchase. However, you can combine DPA
                with VA benefits, USDA loans, and other loan types.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Documentation Requirements</h4>
              <p className="text-gray-700">
                Be prepared to provide extensive documentation: 2 years tax returns, 2 months pay stubs, 2 months bank
                statements, proof of assets, employment verification, and more.
              </p>
            </div>
          </div>
        </Card>

        {/* Myths vs Reality */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-premium-cream to-white border-2 border-premium-gold">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">
            Common Misconceptions Debunked
          </h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="font-semibold text-gray-900 mb-1">❌ Myth:</p>
                <p className="text-sm text-gray-700">
                  &quot;I make too much money to qualify for DPA.&quot;
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="font-semibold text-gray-900 mb-1">✅ Reality:</p>
                <p className="text-sm text-gray-700">
                  Many programs serve moderate and middle-income families. Income limits in LA County can exceed
                  $170,000+ for some programs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="font-semibold text-gray-900 mb-1">❌ Myth:</p>
                <p className="text-sm text-gray-700">
                  &quot;Sellers won&apos;t accept offers using DPA.&quot;
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="font-semibold text-gray-900 mb-1">✅ Reality:</p>
                <p className="text-sm text-gray-700">
                  Sellers don&apos;t know (or care) about your financing source. They see a qualified buyer with a
                  pre-approval letter - that&apos;s all that matters.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="font-semibold text-gray-900 mb-1">❌ Myth:</p>
                <p className="text-sm text-gray-700">
                  &quot;DPA takes forever and will delay my closing.&quot;
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="font-semibold text-gray-900 mb-1">✅ Reality:</p>
                <p className="text-sm text-gray-700">
                  With an experienced DPA lender, timelines are the same as conventional financing. Most close in 30-45
                  days with no issues.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
