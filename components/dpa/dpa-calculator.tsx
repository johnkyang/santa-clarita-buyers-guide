'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calculator, CheckCircle2, AlertCircle, Phone } from 'lucide-react';

type QualifiedProgram = {
  name: string;
  provider: string;
  color: string;
  estimatedAssistance: string;
  reason: string;
};

export function DPACalculator() {
  const [homePrice, setHomePrice] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [isFirstTime, setIsFirstTime] = useState('');
  const [isTeacher, setIsTeacher] = useState('');
  const [income, setIncome] = useState('');
  const [results, setResults] = useState<QualifiedProgram[] | null>(null);

  const calculateEligibility = () => {
    const price = parseInt(homePrice);
    const credit = parseInt(creditScore);
    const annualIncome = parseInt(income);
    const qualified: QualifiedProgram[] = [];

    // CalHFA MyHome Assistance
    if (isFirstTime === 'yes' && credit >= 640 && annualIncome <= 150000) {
      qualified.push({
        name: 'CalHFA MyHome',
        provider: 'CalHFA',
        color: 'premium-blue',
        estimatedAssistance: `$${Math.round(price * 0.035).toLocaleString()}`,
        reason: 'Up to 3.5% of purchase price',
      });
    }

    // CalPLUS Conventional with ZIP
    if (credit >= 680 && annualIncome <= 175000) {
      const assistance = Math.min(110000, price * 0.1);
      qualified.push({
        name: 'CalPLUS with ZIP',
        provider: 'CalHFA',
        color: 'premium-blue',
        estimatedAssistance: `Up to $${Math.round(assistance).toLocaleString()}`,
        reason: 'Maximum $110,000 down payment help',
      });
    }

    // CalPLUS FHA
    if (isFirstTime === 'yes' && credit >= 640 && annualIncome <= 140000) {
      qualified.push({
        name: 'CalPLUS FHA',
        provider: 'CalHFA',
        color: 'premium-blue',
        estimatedAssistance: `$${Math.round(price * 0.035).toLocaleString()}`,
        reason: '3.5% minimum down payment assistance',
      });
    }

    // Extra Credit Teacher Program
    if (isTeacher === 'yes' && credit >= 640) {
      qualified.push({
        name: 'Extra Credit Teacher',
        provider: 'CalHFA',
        color: 'premium-blue',
        estimatedAssistance: 'Up to $110,000',
        reason: 'Special program for education professionals',
      });
    }

    // AccessZero FHA
    if (isFirstTime === 'yes' && credit >= 580 && annualIncome <= 135000) {
      qualified.push({
        name: 'AccessZero FHA',
        provider: 'AccessZero',
        color: 'premium-green',
        estimatedAssistance: `$${Math.round(price * 0.07).toLocaleString()}`,
        reason: '3.5% grant + 3.5% FHA = True zero down',
      });
    }

    // GSFA MyHome
    if (isFirstTime === 'yes' && credit >= 640 && annualIncome <= 145000) {
      const assistance = Math.min(15000, price * 0.035);
      qualified.push({
        name: 'GSFA MyHome',
        provider: 'GSFA',
        color: 'premium-orange',
        estimatedAssistance: `$${Math.round(assistance).toLocaleString()}`,
        reason: '3.5% or $15,000 (whichever is less)',
      });
    }

    setResults(qualified);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateEligibility();
  };

  const resetCalculator = () => {
    setHomePrice('');
    setCreditScore('');
    setIsFirstTime('');
    setIsTeacher('');
    setIncome('');
    setResults(null);
  };

  return (
    <section id="dpa-calculator" className="py-20 sm:py-32 bg-gradient-to-b from-premium-cream/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Check Your <span className="text-gradient-premium">Eligibility</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Answer a few quick questions to see which DPA programs you may qualify for
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-premium">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-premium-blue to-premium-blue-dark flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-gray-900">DPA Eligibility Calculator</h3>
                <p className="text-sm text-gray-600">Get instant results based on your situation</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="homePrice">Expected Home Price *</Label>
                  <Input
                    id="homePrice"
                    type="number"
                    placeholder="e.g., 650000"
                    value={homePrice}
                    onChange={(e) => setHomePrice(e.target.value)}
                    required
                    className="mt-2"
                  />
                  <p className="text-xs text-gray-500 mt-1">Average Santa Clarita home: $650,000 - $850,000</p>
                </div>

                <div>
                  <Label htmlFor="creditScore">Credit Score *</Label>
                  <Select value={creditScore} onValueChange={setCreditScore} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your credit score range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="580">580-639 (Fair)</SelectItem>
                      <SelectItem value="640">640-679 (Good)</SelectItem>
                      <SelectItem value="680">680-719 (Very Good)</SelectItem>
                      <SelectItem value="720">720+ (Excellent)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="income">Annual Household Income *</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="e.g., 95000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    required
                    className="mt-2"
                  />
                  <p className="text-xs text-gray-500 mt-1">Combined gross annual income</p>
                </div>

                <div>
                  <Label htmlFor="firstTime">First-Time Home Buyer? *</Label>
                  <Select value={isFirstTime} onValueChange={setIsFirstTime} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No (or haven&apos;t owned in 3+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="teacher">Are you a teacher or education employee?</Label>
                  <Select value={isTeacher} onValueChange={setIsTeacher}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1 h-14 text-lg font-semibold">
                  Calculate My Eligibility
                </Button>
                {results && (
                  <Button type="button" variant="outline" onClick={resetCalculator} className="h-14">
                    Reset
                  </Button>
                )}
              </div>
            </form>

            {/* Results */}
            {results !== null && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                {results.length > 0 ? (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <CheckCircle2 className="h-6 w-6 text-premium-green" />
                      <h4 className="font-display text-xl font-bold text-gray-900">
                        You may qualify for {results.length} program{results.length !== 1 ? 's' : ''}!
                      </h4>
                    </div>

                    <div className="space-y-4 mb-8">
                      {results.map((program, index) => (
                        <Card key={index} className="p-6 bg-gradient-to-r from-white to-premium-cream/30 border-2 border-premium-gold/30">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-display text-lg font-bold text-gray-900 mb-1">{program.name}</h5>
                              <Badge className={`bg-${program.color} text-white`}>
                                {program.provider}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-600">Estimated Assistance</div>
                              <div className="text-2xl font-bold text-premium-green">{program.estimatedAssistance}</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700">{program.reason}</p>
                        </Card>
                      ))}
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                      <h5 className="font-semibold text-gray-900 mb-2">Next Steps:</h5>
                      <ul className="space-y-2 text-sm text-gray-700 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-premium-green flex-shrink-0 mt-0.5" />
                          <span>Complete homebuyer education course (8 hours, online available)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-premium-green flex-shrink-0 mt-0.5" />
                          <span>Get pre-approved with a DPA-approved lender</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-premium-green flex-shrink-0 mt-0.5" />
                          <span>Contact us for personalized guidance and lender recommendations</span>
                        </li>
                      </ul>
                      <a href="tel:6614517200">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                          <Phone className="mr-2 h-5 w-5" />
                          Call (661) 451-7200 for Expert Guidance
                        </Button>
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h4 className="font-display text-xl font-bold text-gray-900 mb-2">
                      You may not qualify for these programs based on the information provided
                    </h4>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                      Don&apos;t worry! There may be other options available, and income/credit requirements can vary.
                      Let&apos;s discuss your specific situation.
                    </p>
                    <a href="tel:6614517200">
                      <Button size="lg" className="bg-gradient-to-r from-premium-blue to-premium-blue-dark">
                        <Phone className="mr-2 h-5 w-5" />
                        Call (661) 451-7200 to Explore Options
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            )}

            <p className="text-xs text-gray-500 mt-6 text-center">
              * This calculator provides estimates only. Actual eligibility depends on many factors including specific county limits,
              property type, and lender requirements. Contact us for a detailed qualification assessment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
