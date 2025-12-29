'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X, Filter } from 'lucide-react';

const programs = [
  {
    id: 'calhfa-myhome',
    name: 'CalHFA MyHome',
    provider: 'CalHFA',
    color: 'premium-blue',
    maxAssistance: 'Up to 3.5%',
    interestRate: '0%',
    repayment: 'Deferred (due on sale/refinance)',
    minCreditScore: '640',
    incomeLimits: 'Yes (varies by county)',
    firstTimeBuyer: true,
    educationRequired: true,
    bestFor: 'Minimize out-of-pocket costs',
  },
  {
    id: 'calhfa-calplus-zip',
    name: 'CalPLUS with ZIP',
    provider: 'CalHFA',
    color: 'premium-blue',
    maxAssistance: 'Up to $110,000',
    interestRate: '0%',
    repayment: 'Deferred (due on sale/refinance)',
    minCreditScore: '680',
    incomeLimits: 'Yes (moderate income)',
    firstTimeBuyer: false,
    educationRequired: true,
    bestFor: 'Maximum assistance seekers',
  },
  {
    id: 'calhfa-calplus-fha',
    name: 'CalPLUS FHA',
    provider: 'CalHFA',
    color: 'premium-blue',
    maxAssistance: '3.5% minimum',
    interestRate: '0%',
    repayment: 'Deferred payment',
    minCreditScore: '640',
    incomeLimits: 'Yes',
    firstTimeBuyer: true,
    educationRequired: true,
    bestFor: 'Lower credit scores',
  },
  {
    id: 'calhfa-ectp',
    name: 'Extra Credit Teacher',
    provider: 'CalHFA',
    color: 'premium-blue',
    maxAssistance: 'Up to $110,000',
    interestRate: '0% + reduced mortgage rate',
    repayment: 'Deferred payment',
    minCreditScore: '640',
    incomeLimits: 'May be waived',
    firstTimeBuyer: false,
    educationRequired: true,
    bestFor: 'Teachers & education staff',
  },
  {
    id: 'accesszero',
    name: 'AccessZero FHA',
    provider: 'AccessZero',
    color: 'premium-green',
    maxAssistance: '3.5% grant + 3.5% FHA',
    interestRate: 'Grant (no repayment)',
    repayment: 'Forgiven after 5 years',
    minCreditScore: '580',
    incomeLimits: 'Yes (LA County limits)',
    firstTimeBuyer: true,
    educationRequired: true,
    bestFor: 'True zero down payment',
  },
  {
    id: 'gsfa',
    name: 'GSFA MyHome',
    provider: 'GSFA',
    color: 'premium-orange',
    maxAssistance: '3.5% or $15,000 max',
    interestRate: '0%',
    repayment: 'Silent second (due on sale)',
    minCreditScore: '640',
    incomeLimits: 'Yes (varies)',
    firstTimeBuyer: true,
    educationRequired: true,
    bestFor: 'Moderate assistance seekers',
  },
];

export function DPAComparison() {
  const [filterFirstTime, setFilterFirstTime] = useState(false);
  const [filterNoEducation, setFilterNoEducation] = useState(false);

  const filteredPrograms = programs.filter((program) => {
    if (filterFirstTime && !program.firstTimeBuyer) return false;
    if (filterNoEducation && program.educationRequired) return false;
    return true;
  });

  const resetFilters = () => {
    setFilterFirstTime(false);
    setFilterNoEducation(false);
  };

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Compare <span className="text-gradient-premium">DPA Programs</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Side-by-side comparison of all available down payment assistance programs
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <Button
            variant={filterFirstTime ? 'default' : 'outline'}
            onClick={() => setFilterFirstTime(!filterFirstTime)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            First-Time Buyers Only
          </Button>
          <Button
            variant={filterNoEducation ? 'default' : 'outline'}
            onClick={() => setFilterNoEducation(!filterNoEducation)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            No Education Requirement
          </Button>
          {(filterFirstTime || filterNoEducation) && (
            <Button variant="ghost" onClick={resetFilters} className="gap-2">
              <X className="h-4 w-4" />
              Reset Filters
            </Button>
          )}
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <Card className="overflow-hidden">
            <table className="w-full">
              <thead className="bg-premium-cream">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Program</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Max Assistance</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Interest Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Repayment</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Min Credit</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">First-Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Education</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPrograms.map((program) => (
                  <tr key={program.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-gray-900">{program.name}</span>
                        <Badge
                          className={`w-fit bg-${program.color} text-white`}
                          variant="secondary"
                        >
                          {program.provider}
                        </Badge>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-semibold">{program.maxAssistance}</td>
                    <td className="px-6 py-4 text-sm text-premium-green font-semibold">{program.interestRate}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{program.repayment}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{program.minCreditScore}</td>
                    <td className="px-6 py-4">
                      {program.firstTimeBuyer ? (
                        <Check className="h-5 w-5 text-premium-green" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {program.educationRequired ? (
                        <Check className="h-5 w-5 text-premium-green" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 italic">{program.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="p-6">
              <div className="mb-4">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                <Badge className={`bg-${program.color} text-white`} variant="secondary">
                  {program.provider}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Max Assistance:</span>
                  <span className="text-sm text-gray-900 font-semibold text-right">{program.maxAssistance}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Interest Rate:</span>
                  <span className="text-sm text-premium-green font-semibold text-right">{program.interestRate}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Repayment:</span>
                  <span className="text-sm text-gray-600 text-right">{program.repayment}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Min Credit Score:</span>
                  <span className="text-sm text-gray-600 text-right">{program.minCreditScore}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">First-Time Buyer:</span>
                  {program.firstTimeBuyer ? (
                    <Check className="h-5 w-5 text-premium-green" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Education Required:</span>
                  {program.educationRequired ? (
                    <Check className="h-5 w-5 text-premium-green" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Best For:</span>
                  <p className="text-sm text-gray-600 italic mt-1">{program.bestFor}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-gray-600 mb-4">No programs match your current filters.</p>
            <Button onClick={resetFilters}>Reset Filters</Button>
          </Card>
        )}
      </div>
    </section>
  );
}
