'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Home, ArrowRight, CheckCircle, DollarSign, CreditCard,
  Calculator, FileText, ShieldCheck, AlertCircle,
  MapPin, Award, Info
} from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function FirstTimeBuyerGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-blue-300" />
              <span className="text-white/90 text-sm font-medium">Complete First-Time Buyer Resource</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              First-Time Home Buyer Guide: Santa Clarita 2025
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mb-8">
              Everything you need to buy your first home in Santa Clarita Valley—from pre-approval to closing, down payment assistance programs to avoiding common mistakes. Your complete roadmap to homeownership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#calculator">
                <Button size="lg" className="px-8 py-6 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl text-lg h-auto">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Affordability
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="px-8 py-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 hover:scale-105 transition-all shadow-xl text-lg h-auto border-2 border-white/20">
                  Get Pre-Approved Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedSection className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3.5%</div>
              <div className="text-sm text-gray-600">Min Down Payment (FHA)</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">520</div>
              <div className="text-sm text-gray-600">Min Credit Score (FHA)</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$15K+</div>
              <div className="text-sm text-gray-600">Available Down Payment Assistance</div>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30-45</div>
              <div className="text-sm text-gray-600">Days to Close</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What You&apos;ll Learn in This Guide</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Are You Ready to Buy?', anchor: '#ready' },
                { title: 'How Much Home Can You Afford?', anchor: '#afford' },
                { title: 'Credit Score Requirements', anchor: '#credit' },
                { title: 'Down Payment Options', anchor: '#down-payment' },
                { title: 'First-Time Buyer Programs', anchor: '#programs' },
                { title: 'Common Mistakes to Avoid', anchor: '#mistakes' },
              ].map((item, idx) => (
                <a key={idx} href={item.anchor} className="flex items-center gap-3 p-4 bg-white border border-blue-100 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium">{item.title}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Are You Ready? */}
          <div id="ready">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Are You Ready to Buy Your First Home?</h2>
                  <p className="text-gray-600">Financial and personal readiness checklist</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Buying your first home is one of life&apos;s biggest financial decisions. Before you start touring homes in Santa Clarita Valley, assess whether you&apos;re truly ready for homeownership—both financially and personally.
                </p>

                <Alert className="mb-6 border-blue-200 bg-blue-50">
                  <Info className="h-5 w-5 text-blue-600" />
                  <AlertDescription className="text-gray-700 ml-2">
                    <strong>Key Insight:</strong> Financial readiness isn&apos;t just about having enough for a down payment—it&apos;s about sustainable homeownership including maintenance, repairs, property taxes, insurance, and HOA fees (common in Santa Clarita).
                  </AlertDescription>
                </Alert>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Financial Readiness Checklist</h3>

                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 mb-6">
                  <ul className="space-y-4">
                    {[
                      {
                        item: 'Stable Employment & Income',
                        detail: 'Lenders typically want to see 2+ years of consistent employment history.'
                      },
                      {
                        item: 'Emergency Fund Beyond Down Payment',
                        detail: 'You need 3-6 months of expenses AFTER buying. Don&apos;t drain savings entirely.'
                      },
                      {
                        item: 'Good Credit Score (520+ FHA, no minimum for Conventional per DU, 700+ ideal)',
                        detail: 'Higher credit scores unlock better interest rates. A 680 vs 740 score can cost you $100+ monthly.'
                      },
                      {
                        item: 'Low Debt-to-Income Ratio (DTI under 43%)',
                        detail: 'Your total monthly debt payments should be under 43% of gross monthly income.'
                      },
                      {
                        item: 'Down Payment Saved (3.5%-20%)',
                        detail: 'FHA loans allow 3.5% down. Conventional: 3-5%. 20% avoids PMI but isn&apos;t required.'
                      },
                      {
                        item: 'Closing Cost Reserves (2-5% of purchase price)',
                        detail: 'Expect $10,000-$25,000 in closing costs on a $500K-$700K Santa Clarita home.'
                      }
                    ].map((check, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900">{check.item}</strong>
                          <p className="text-sm text-gray-600 mt-1">{check.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* How Much Can You Afford */}
          <div id="afford">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">How Much Home Can You Afford in Santa Clarita?</h2>
                  <p className="text-gray-600">Calculate your realistic budget using the 28/36 rule</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Understanding your true home affordability is critical before you start shopping. Just because a lender approves you for $800,000 doesn&apos;t mean you should spend that much.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">The 28/36 Rule</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">28%</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Front-End Ratio</h4>
                    </div>
                    <p className="text-gray-700 mb-4">Your housing payment (PITI + HOA) should not exceed <strong>28% of gross monthly income</strong>.</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">36%</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Back-End Ratio</h4>
                    </div>
                    <p className="text-gray-700 mb-4">Your total debt payments should not exceed <strong>36% of gross monthly income</strong>.</p>
                  </div>
                </div>

                {/* Calculator Placeholder */}
                <div id="calculator" className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 mb-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-8 h-8" />
                    <h4 className="text-2xl font-bold">Interactive Affordability Calculator</h4>
                  </div>
                  <p className="text-blue-100 mb-6">Calculate exactly how much home you can afford based on your income, debts, down payment, and current interest rates.</p>

                  <Link href="/contact">
                    <Button size="lg" className="w-full bg-white text-blue-600 font-semibold hover:bg-gray-50 h-auto py-4">
                      <Calculator className="w-5 h-5 mr-2" />
                      Get Your Personalized Affordability Report
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Santa Clarita Home Affordability by Income</h3>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-semibold">Annual Income</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Max Purchase Price</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Best Santa Clarita Options</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-blue-50">
                        <td className="px-6 py-4 font-medium text-gray-900">$75,000</td>
                        <td className="px-6 py-4 text-gray-700">$300K-$375K</td>
                        <td className="px-6 py-4 text-gray-600">Newhall condos, Canyon Country townhomes</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="px-6 py-4 font-medium text-gray-900">$100,000</td>
                        <td className="px-6 py-4 text-gray-700">$400K-$500K</td>
                        <td className="px-6 py-4 text-gray-600">Saugus condos, Canyon Country homes</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="px-6 py-4 font-medium text-gray-900">$125,000</td>
                        <td className="px-6 py-4 text-gray-700">$500K-$625K</td>
                        <td className="px-6 py-4 text-gray-600">Saugus homes, Newhall homes</td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="px-6 py-4 font-medium text-gray-900">$150,000</td>
                        <td className="px-6 py-4 text-gray-700">$600K-$750K</td>
                        <td className="px-6 py-4 text-gray-600">Valencia townhomes, Saugus single-family</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Credit Score */}
          <div id="credit">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Credit Score Requirements for First-Time Buyers</h2>
                  <p className="text-gray-600">What you need and how to improve your score</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your credit score is one of the most important factors in mortgage approval and determines your interest rate. A strong credit score can save you tens of thousands of dollars.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Minimum Credit Scores by Loan Type</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">FHA Loans</h4>
                    <div className="bg-white rounded-lg p-4 border border-blue-100 mb-3">
                      <p className="text-sm text-gray-600 mb-1">Minimum Score</p>
                      <p className="text-3xl font-bold text-blue-600">520</p>
                      <p className="text-xs text-gray-500 mt-1">3.5% down payment required</p>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Best for:</strong> First-time buyers with limited down payment</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Conventional Loans</h4>
                    <div className="bg-white rounded-lg p-4 border border-green-100 mb-3">
                      <p className="text-sm text-gray-600 mb-1">Minimum Score</p>
                      <p className="text-2xl font-bold text-green-600">Per DU</p>
                      <p className="text-xs text-gray-500 mt-1">No minimum - Desktop Underwriter approved</p>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Best for:</strong> Buyers with good credit seeking lower costs</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Improve Your Credit Score Fast</h3>

                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                  <ul className="space-y-4">
                    {[
                      {
                        action: 'Pay Down Credit Card Balances',
                        detail: 'Get utilization under 30% on all cards. This is the fastest way to boost your score.'
                      },
                      {
                        action: 'Dispute Credit Report Errors',
                        detail: 'Check all 3 bureaus for errors. 1 in 5 reports have errors affecting scores.'
                      },
                      {
                        action: 'Pay All Bills On Time',
                        detail: 'Payment history is 35% of score. Even one late payment can drop score 100+ points.'
                      },
                      {
                        action: 'Don&apos;t Close Old Credit Cards',
                        detail: 'Keep old accounts open. Length of credit history is 15% of score.'
                      }
                    ].map((tip, idx) => (
                      <li key={idx} className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-bold text-gray-900 mb-2">{tip.action}</h5>
                        <p className="text-sm text-gray-600">{tip.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Down Payment */}
          <div id="down-payment">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Down Payment Options: You Don&apos;t Need 20%</h2>
                  <p className="text-gray-600">Low down payment programs available</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The biggest myth: &quot;I need 20% down.&quot; Most first-time buyers in Santa Clarita put down 3-5%. Here&apos;s every down payment option available.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Down Payment Options</h3>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">3% Down - Conventional 97</h4>
                    <p className="text-gray-700 mb-3"><strong>Example:</strong> $600K home = $18,000 down</p>
                    <p className="text-sm text-gray-600"><strong>Best for:</strong> First-time buyers with good credit (680+)</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">3.5% Down - FHA Loan</h4>
                    <p className="text-gray-700 mb-3"><strong>Example:</strong> $600K home = $21,000 down</p>
                    <p className="text-sm text-gray-600"><strong>Best for:</strong> Lower credit scores (520+) or limited savings</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* First-Time Buyer Programs */}
          <div id="programs">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">First-Time Buyer Programs & Down Payment Assistance</h2>
                  <p className="text-gray-600">Access thousands in assistance for your purchase</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  California and Los Angeles County offer generous down payment assistance programs providing $15,000-$30,000 toward your home purchase.
                </p>

                <Alert className="mb-6 border-green-200 bg-green-50">
                  <Info className="h-5 w-5 text-green-600" />
                  <AlertDescription className="text-gray-700 ml-2">
                    <strong>Important:</strong> &quot;First-time buyer&quot; in California means you haven&apos;t owned a home in the past 3 years—not that you&apos;ve never owned a home!
                  </AlertDescription>
                </Alert>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">CalHFA MyHome Assistance Program</h3>

                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6 mb-8">
                  <div className="bg-white rounded-lg p-4 border border-blue-100 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Down Payment Assistance</p>
                    <p className="text-4xl font-bold text-blue-600">Up to 3.5%</p>
                    <p className="text-sm text-gray-500 mt-1">typically $15,000-$25,000</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Deferred-Payment Junior Loan</p>
                        <p className="text-sm text-gray-600">No monthly payments, no interest for 30 years</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Income Limits Apply</p>
                        <p className="text-sm text-gray-600">LA County: $204,000 for 1-2 people, $233,640 for 3+ (2024)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-orange-600" />
                    How to Apply
                  </h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li className="text-gray-700"><strong>Complete Homebuyer Education Course</strong> - Required 8-hour online course</li>
                    <li className="text-gray-700"><strong>Find CalHFA-Approved Lender</strong> - We can connect you</li>
                    <li className="text-gray-700"><strong>Get Pre-Approved</strong> - Lender verifies income, credit, employment</li>
                    <li className="text-gray-700"><strong>Submit CalHFA Application</strong> - Processed with mortgage application</li>
                  </ol>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white h-auto py-4">
                        <Award className="w-5 h-5 mr-2" />
                        Get Connected with CalHFA-Approved Lender
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Common Mistakes */}
          <div id="mistakes">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Common First-Time Buyer Mistakes to Avoid</h2>
                  <p className="text-gray-600">Learn from others&apos; experiences</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                  <ul className="space-y-4">
                    {[
                      {
                        mistake: 'Not Getting Pre-Approved First',
                        consequence: 'You waste time looking at homes you can&apos;t afford and lose out to pre-approved buyers.'
                      },
                      {
                        mistake: 'Draining All Savings for Down Payment',
                        consequence: 'First repair or emergency leaves you in debt. Keep 3-6 months expenses after closing.'
                      },
                      {
                        mistake: 'Skipping the Home Inspection',
                        consequence: 'You inherit expensive hidden problems. Always get independent inspection ($400-$600).'
                      },
                      {
                        mistake: 'Making Major Purchases Before Closing',
                        consequence: 'New car loan or furniture on credit can kill your mortgage approval at the last minute.'
                      },
                      {
                        mistake: 'Ignoring Total Monthly Costs',
                        consequence: 'HOA fees, Mello-Roos, insurance, utilities add $400-$800+ monthly beyond mortgage payment.'
                      },
                      {
                        mistake: 'Buying at Maximum Approval Amount',
                        consequence: 'You become house-poor with no flexibility for life, savings, or emergencies.'
                      }
                    ].map((item, idx) => (
                      <li key={idx} className="border-l-4 border-red-500 pl-4">
                        <h5 className="font-bold text-gray-900 mb-2">{item.mistake}</h5>
                        <p className="text-sm text-gray-600"><strong>Why it&apos;s bad:</strong> {item.consequence}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your First-Time Buyer Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get connected with CalHFA-approved lenders, access down payment assistance, and receive personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-6 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl text-lg h-auto"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Pre-Approved Today
                </Button>
              </Link>
              <Link href="/neighborhoods">
                <Button
                  size="lg"
                  className="px-8 py-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 hover:scale-105 transition-all shadow-xl text-lg h-auto border-2 border-white/20"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Explore Santa Clarita Neighborhoods
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
