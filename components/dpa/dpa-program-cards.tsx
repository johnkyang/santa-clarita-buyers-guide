'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, CheckCircle2, DollarSign, Users, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    id: 'calhfa',
    name: 'CalHFA Programs',
    icon: DollarSign,
    color: 'premium-blue',
    tagline: 'California&apos;s Premier DPA Programs',
    maxAssistance: '$110,000',
    programs: [
      {
        title: 'MyHome Assistance Program',
        assistance: 'Up to 3.5% of purchase price',
        rate: '0% interest, no monthly payment',
        repayment: 'Deferred until sale, refinance, or payoff',
        requirements: [
          'First-time buyer or haven&apos;t owned home in 3 years',
          'Income limits apply (varies by county)',
          'Must complete homebuyer education',
          'Combined with FHA, VA, USDA, or conventional loan'
        ],
        bestFor: 'Buyers who want to minimize out-of-pocket costs'
      },
      {
        title: 'CalPLUS Conventional with ZIP',
        assistance: 'Up to $110,000 down payment help',
        rate: '0% interest, deferred payment',
        repayment: 'Due when you sell, refinance, or pay off first mortgage',
        requirements: [
          'Moderate-income buyers',
          'Slightly higher interest rate on first mortgage',
          'Credit score 680+recommended',
          '30-year fixed rate conventional loan'
        ],
        bestFor: 'Buyers with good credit seeking maximum assistance'
      },
      {
        title: 'CalPLUS FHA',
        assistance: '3.5% minimum down payment assistance',
        rate: 'Combined with FHA loan benefits',
        repayment: 'Deferred payment structure',
        requirements: [
          'Credit scores as low as 640',
          'Lower down payment requirements',
          'FHA mortgage insurance required',
          'Income limits apply'
        ],
        bestFor: 'Buyers with lower credit scores or limited savings'
      },
      {
        title: 'Extra Credit Teacher Program (ECTP)',
        assistance: 'Up to $110,000 + special interest rates',
        rate: '0% interest on assistance, reduced mortgage rate',
        repayment: 'Deferred payment',
        requirements: [
          'Must be a credentialed teacher or education employee',
          'Working in California public school',
          'Income limits may be waived',
          'May have reduced mortgage insurance'
        ],
        bestFor: 'Teachers and education professionals'
      }
    ]
  },
  {
    id: 'accesszero',
    name: 'AccessZero FHA Program',
    icon: Users,
    color: 'premium-green',
    tagline: 'True Zero Down Payment Solution',
    maxAssistance: '7% Total (3.5% grant + 3.5% FHA)',
    programs: [
      {
        title: 'AccessZero FHA Grant',
        assistance: '3.5% grant + 3.5% FHA loan = 0% out of pocket',
        rate: 'Grant (no repayment if you stay 5+ years)',
        repayment: 'Forgiven after 5 years of occupancy',
        requirements: [
          'FHA loan approval (credit score 580+ minimum)',
          'Complete homebuyer education course (8 hours)',
          'Available in Los Angeles County (including Santa Clarita)',
          'Income limits apply',
          'Must be first-time buyer or not owned in 3 years'
        ],
        bestFor: 'First-time buyers with limited cash for down payment'
      }
    ]
  },
  {
    id: 'gsfa',
    name: 'GSFA (Golden State Finance Authority)',
    icon: GraduationCap,
    color: 'premium-orange',
    tagline: 'Flexible Assistance Options',
    maxAssistance: '3.5% or $15,000',
    programs: [
      {
        title: 'MyHome Assistance Program',
        assistance: '3.5% or $15,000 (whichever is less)',
        rate: '0% interest, no monthly payment',
        repayment: 'Silent second mortgage - due on sale, refinance, or title transfer',
        requirements: [
          'Combines with FHA, VA, USDA, or conventional loans',
          'First-time buyer or no ownership in 3 years',
          'Income and purchase price limits',
          'Complete 8-hour homebuyer education',
          'Must use approved lenders'
        ],
        bestFor: 'Buyers seeking moderate assistance with flexible loan options'
      }
    ]
  }
];

export function DPAProgramCards() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>('calhfa');

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-premium-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Available <span className="text-gradient-premium">DPA Programs</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Explore three major down payment assistance programs available to Santa Clarita home buyers
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((programGroup) => {
            const Icon = programGroup.icon;
            const isExpanded = expandedProgram === programGroup.id;

            return (
              <Card key={programGroup.id} className="overflow-hidden shadow-premium">
                {/* Header */}
                <div
                  className={`p-8 cursor-pointer bg-gradient-to-r from-${programGroup.color} to-${programGroup.color}-dark text-white`}
                  onClick={() => setExpandedProgram(isExpanded ? null : programGroup.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold mb-1">{programGroup.name}</h3>
                        <p className="text-white/80">{programGroup.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden md:block">
                        <div className="text-sm text-white/80">Maximum Assistance</div>
                        <div className="text-2xl font-bold">{programGroup.maxAssistance}</div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-8 w-8" />
                      ) : (
                        <ChevronDown className="h-8 w-8" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-8 bg-white space-y-8">
                    {programGroup.programs.map((program, idx) => (
                      <div key={idx} className={idx > 0 ? 'border-t pt-8' : ''}>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-display text-xl font-bold text-gray-900 mb-4">
                              {program.title}
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <div className="text-sm font-semibold text-gray-700 mb-1">Assistance Amount</div>
                                <div className="text-premium-blue font-semibold">{program.assistance}</div>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-700 mb-1">Interest Rate</div>
                                <div className="text-premium-green font-semibold">{program.rate}</div>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-700 mb-1">Repayment Terms</div>
                                <div className="text-gray-600">{program.repayment}</div>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-700 mb-1">Best For</div>
                                <div className="text-gray-600 italic">{program.bestFor}</div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="font-semibold text-gray-900 mb-4">Requirements</div>
                            <ul className="space-y-2">
                              {program.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-premium-green flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-gray-700">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-center pt-6">
                      <Link href="/contact">
                        <Button className={`bg-${programGroup.color} hover:bg-${programGroup.color}-dark`}>
                          Learn More About {programGroup.name}
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
