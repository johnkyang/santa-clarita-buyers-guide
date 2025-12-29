'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, DollarSign, TrendingDown, CheckCircle2 } from 'lucide-react';

const examples = [
  {
    title: 'First-Time Buyer in Valencia',
    icon: Home,
    buyer: {
      profile: 'Young professional couple, first-time buyers',
      income: '$115,000/year',
      creditScore: '690',
      savings: '$15,000',
    },
    property: {
      neighborhood: 'Valencia',
      price: '$725,000',
      type: 'Single-family home, 3BR/2.5BA',
    },
    program: {
      name: 'CalHFA MyHome Assistance',
      color: 'premium-blue',
    },
    breakdown: [
      { label: 'Home Price', amount: '$725,000' },
      { label: 'DPA Amount (3.5%)', amount: '$25,375', highlight: true },
      { label: 'Buyer Savings Used', amount: '$10,000' },
      { label: 'Total Down Payment (5%)', amount: '$36,250' },
      { label: 'Monthly Payment Estimate', amount: '$4,850/mo' },
    ],
    benefits: [
      'Zero interest on DPA loan',
      'No monthly payment on $25,375',
      'Only paid back when selling or refinancing',
      'Kept $5,000 in reserves for moving costs',
    ],
    result: 'Successfully purchased their dream home with minimal cash out-of-pocket',
  },
  {
    title: 'Teacher Buying in Stevenson Ranch',
    icon: Home,
    buyer: {
      profile: 'Elementary school teacher, single buyer',
      income: '$78,000/year',
      creditScore: '715',
      savings: '$20,000',
    },
    property: {
      neighborhood: 'Stevenson Ranch',
      price: '$650,000',
      type: 'Townhome, 2BR/2.5BA',
    },
    program: {
      name: 'Extra Credit Teacher Program (ECTP)',
      color: 'premium-blue',
    },
    breakdown: [
      { label: 'Home Price', amount: '$650,000' },
      { label: 'DPA Amount', amount: '$65,000', highlight: true },
      { label: 'Buyer Savings Used', amount: '$0' },
      { label: 'Total Down Payment (10%)', amount: '$65,000' },
      { label: 'Monthly Payment Estimate', amount: '$3,950/mo' },
      { label: 'Reduced Interest Rate Savings', amount: '$150/mo', highlight: true },
    ],
    benefits: [
      'Received maximum DPA as credentialed teacher',
      'Qualified for reduced mortgage interest rate',
      'Kept all $20,000 savings for furniture and reserves',
      'Income limits waived for education professionals',
    ],
    result: 'Became a homeowner with zero down payment and lower monthly costs',
  },
  {
    title: 'Zero Down with AccessZero in Newhall',
    icon: Home,
    buyer: {
      profile: 'First-time buyer, city employee',
      income: '$92,000/year',
      creditScore: '625',
      savings: '$8,500',
    },
    property: {
      neighborhood: 'Newhall',
      price: '$580,000',
      type: 'Condo, 2BR/2BA',
    },
    program: {
      name: 'AccessZero FHA Grant',
      color: 'premium-green',
    },
    breakdown: [
      { label: 'Home Price', amount: '$580,000' },
      { label: 'AccessZero Grant (3.5%)', amount: '$20,300', highlight: true },
      { label: 'FHA Loan Portion (3.5%)', amount: '$20,300' },
      { label: 'Buyer Cash Required', amount: '$0', highlight: true },
      { label: 'Total Down Payment (7%)', amount: '$40,600' },
      { label: 'Monthly Payment Estimate', amount: '$3,750/mo' },
    ],
    benefits: [
      'True zero down payment solution',
      '$20,300 grant forgiven after 5 years',
      'Lower credit score accepted (580+ minimum)',
      'Kept all savings for closing costs and reserves',
    ],
    result: 'Achieved homeownership with literally $0 down payment',
  },
  {
    title: 'Move-Up Buyer in Canyon Country',
    icon: Home,
    buyer: {
      profile: 'Family selling smaller home, moving up',
      income: '$165,000/year',
      creditScore: '730',
      savings: '$45,000 (from sale proceeds)',
    },
    property: {
      neighborhood: 'Canyon Country',
      price: '$775,000',
      type: 'Single-family home, 4BR/3BA',
    },
    program: {
      name: 'CalPLUS Conventional with ZIP',
      color: 'premium-blue',
    },
    breakdown: [
      { label: 'Home Price', amount: '$775,000' },
      { label: 'DPA Amount (ZIP)', amount: '$77,500', highlight: true },
      { label: 'Buyer Funds Used', amount: '$0' },
      { label: 'Total Down Payment (10%)', amount: '$77,500' },
      { label: 'Monthly Payment Estimate', amount: '$5,150/mo' },
    ],
    benefits: [
      'Received maximum ZIP assistance despite not being first-time buyer',
      'Zero interest, deferred payment structure',
      'Kept $45,000 for home improvements and reserves',
      'Conventional loan (no FHA mortgage insurance after 20% equity)',
    ],
    result: 'Upgraded to larger home while preserving cash for renovations',
  },
];

export function DPAExamples() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Real-World <span className="text-gradient-premium">Success Stories</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            See how real Santa Clarita home buyers used DPA programs to achieve homeownership
          </p>
        </div>

        <div className="space-y-12">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-premium">
                {/* Header */}
                <div className={`bg-gradient-to-r from-${example.program.color} to-${example.program.color}-dark text-white p-6 sm:p-8`}>
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold mb-2">{example.title}</h3>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {example.program.name}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Buyer Profile */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-premium-cream flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-premium-blue" />
                        </div>
                        Buyer Profile
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Profile:</span>
                          <span className="font-medium text-gray-900">{example.buyer.profile}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Income:</span>
                          <span className="font-medium text-gray-900">{example.buyer.income}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Credit Score:</span>
                          <span className="font-medium text-gray-900">{example.buyer.creditScore}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Savings:</span>
                          <span className="font-medium text-gray-900">{example.buyer.savings}</span>
                        </div>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-premium-cream flex items-center justify-center">
                          <Home className="h-5 w-5 text-premium-blue" />
                        </div>
                        Property Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Neighborhood:</span>
                          <span className="font-medium text-gray-900">{example.property.neighborhood}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price:</span>
                          <span className="font-medium text-gray-900">{example.property.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Type:</span>
                          <span className="font-medium text-gray-900">{example.property.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-premium-cream flex items-center justify-center">
                        <TrendingDown className="h-5 w-5 text-premium-blue" />
                      </div>
                      Financial Breakdown
                    </h4>
                    <div className="bg-premium-cream rounded-xl p-6">
                      <div className="space-y-3">
                        {example.breakdown.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex justify-between items-center pb-3 ${
                              idx < example.breakdown.length - 1 ? 'border-b border-gray-200' : ''
                            } ${item.highlight ? 'font-bold' : ''}`}
                          >
                            <span className={item.highlight ? 'text-gray-900' : 'text-gray-700'}>
                              {item.label}
                            </span>
                            <span
                              className={`text-lg ${
                                item.highlight
                                  ? 'text-premium-green font-bold'
                                  : 'text-gray-900 font-semibold'
                              }`}
                            >
                              {item.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {example.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-premium-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-premium-green flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Result:</h5>
                        <p className="text-gray-700">{example.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer */}
        <Card className="mt-12 p-6 bg-gray-50 border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            <strong className="text-gray-900">Note:</strong> These examples are based on typical scenarios and are for
            illustrative purposes only. Actual down payment assistance amounts, interest rates, monthly payments, and
            eligibility requirements vary based on individual circumstances, lender requirements, current market rates,
            and program availability. All buyers completed required homebuyer education courses. Contact us for a
            personalized assessment based on your specific situation.
          </p>
        </Card>
      </div>
    </section>
  );
}
