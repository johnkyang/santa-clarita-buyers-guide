'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'Can I use DPA if I&apos;m not a first-time home buyer?',
    answer:
      'Yes! While many programs prioritize first-time buyers, several options are available for repeat buyers. CalPLUS Conventional with ZIP and the Extra Credit Teacher Program don&apos;t require first-time buyer status. Additionally, you&apos;re considered a "first-time buyer" if you haven&apos;t owned a home in the past 3 years.',
  },
  {
    question: 'How much money do I need to have saved?',
    answer:
      'This varies by program and loan type, but generally you&apos;ll need funds for: closing costs (2-3% of purchase price), inspections/appraisals ($500-$1,000), and reserves (some programs require 2-6 months of mortgage payments in savings). Some DPA programs can help with closing costs too. Budget for $8,000-$15,000 in total out-of-pocket costs even with maximum DPA.',
  },
  {
    question: 'Will using DPA affect my mortgage interest rate?',
    answer:
      'It depends on the program. CalPLUS programs typically have an interest rate premium of 0.125% to 0.375% higher than standard rates - this is how they fund the assistance. However, programs like MyHome Assistance and AccessZero FHA don&apos;t increase your base rate. The small rate increase is usually worth it for tens of thousands in down payment help.',
  },
  {
    question: 'Can I combine DPA with a VA loan?',
    answer:
      'Yes! VA-eligible buyers can combine certain DPA programs with VA loans. This is especially beneficial because VA loans already offer zero down payment - adding DPA can help cover closing costs or allow you to put money down to reduce your loan amount and monthly payment. CalHFA MyHome and GSFA programs work with VA loans.',
  },
  {
    question: 'What happens if I sell my home before the DPA is forgiven?',
    answer:
      'You&apos;ll need to repay the DPA from your sale proceeds. For example, if you received $25,000 in DPA and sell after 2 years, you owe the full $25,000 back. However, if your home appreciated, this comes from your equity. With AccessZero, the grant is forgiven after 5 years - if you sell before then, you repay a prorated amount.',
  },
  {
    question: 'Do I have to pay back the down payment assistance?',
    answer:
      'Most programs use deferred payment loans - you repay when you sell, refinance, or pay off your mortgage. There&apos;s typically no monthly payment and no interest. AccessZero FHA is a grant that&apos;s forgiven after 5 years of occupancy. Think of it as a "silent second" that sits behind your primary mortgage.',
  },
  {
    question: 'Will sellers know I&apos;m using down payment assistance?',
    answer:
      'No. Your pre-approval letter shows you as a qualified buyer with a specific loan amount - it doesn&apos;t detail your financing structure or whether you&apos;re using DPA. To the seller, you look the same as any other pre-approved buyer. Your offer is just as competitive.',
  },
  {
    question: 'What credit score do I need to qualify?',
    answer:
      'Minimum credit scores vary by program: AccessZero FHA (580+), CalHFA MyHome/CalPLUS FHA (640+), CalPLUS Conventional with ZIP (680+ recommended), GSFA MyHome (640+). However, higher scores may qualify you for better rates. If your score is below these thresholds, work on improving it before applying - even a few months can make a difference.',
  },
  {
    question: 'Can I use DPA to buy a condo or townhome?',
    answer:
      'Yes! DPA programs work with single-family homes, townhomes, and condos. The condo must be in an approved complex (most are), and the building must meet FHA/conventional financing standards. Your lender will verify the property qualifies during the approval process.',
  },
  {
    question: 'How long does the DPA approval process take?',
    answer:
      'The timeline is similar to conventional financing: Pre-approval with DPA lender (7-14 days), homebuyer education course (1-2 days if done online), home search and offer (varies), loan processing and underwriting (30-45 days from accepted offer to closing). Total timeline from starting the process to closing is typically 45-75 days.',
  },
  {
    question: 'Can I refinance later if I use DPA?',
    answer:
      'Yes, but you&apos;ll typically need to either: (1) Pay off the DPA loan as part of the refinance, or (2) Refinance the DPA loan into your new mortgage (subordination - not all programs allow this). Once you have 20% equity, you can refinance to remove mortgage insurance and potentially get a lower rate, but you&apos;ll need to factor in the DPA payoff.',
  },
  {
    question: 'Are there geographic restrictions in Santa Clarita?',
    answer:
      'No! All Santa Clarita neighborhoods are eligible - Valencia, Newhall, Saugus, Canyon Country, Stevenson Ranch, and Castaic all qualify. Some programs have purchase price limits (typically $750,000-$850,000+ in LA County), but most Santa Clarita properties fall within these limits. Rural properties may have additional options through USDA programs.',
  },
  {
    question: 'What is the homebuyer education requirement?',
    answer:
      'All DPA programs require an 8-hour homebuyer education course from an approved provider. This can be completed online ($50-$99) or in-person (often free). The course covers budgeting, mortgages, shopping for a home, closing process, and home maintenance. You must complete it before closing and receive a certificate. It&apos;s actually quite valuable, especially for first-time buyers!',
  },
  {
    question: 'Can both my spouse and I have income for qualification?',
    answer:
      'Yes! DPA programs consider total household income when determining eligibility and assistance amounts. If both you and your spouse/partner work, you&apos;ll combine your incomes. This can help you qualify for a larger loan, but also make sure you stay within any income limits for the specific program.',
  },
  {
    question: 'What if I&apos;m self-employed or have non-traditional income?',
    answer:
      'Self-employed buyers can absolutely use DPA programs! You&apos;ll need to provide 2 years of tax returns and possibly a year-to-date profit & loss statement. Lenders will average your income over 2 years. Other income sources like bonuses, commissions, rental income, and disability can also count if properly documented and shown to be stable.',
  },
  {
    question: 'Do DPA programs run out of money?',
    answer:
      'Yes, some programs have limited annual funding and can be depleted. CalHFA programs typically have the most funding and rarely run out, but smaller programs like AccessZero can exhaust funds by late in the calendar year. This is why it&apos;s important to: (1) Start early in the year if possible, (2) Work with experienced DPA lenders who can reserve funds, and (3) Have a backup plan.',
  },
];

export function DPAFAQ() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-premium-cream/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Frequently Asked <span className="text-gradient-premium">Questions</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Get answers to the most common questions about down payment assistance programs
          </p>
        </div>

        <Card className="p-8 shadow-premium mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-premium-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Still Have Questions CTA */}
        <Card className="p-8 bg-gradient-to-r from-premium-blue via-premium-blue-dark to-blue-900 text-white text-center shadow-premium-lg">
          <MessageSquare className="h-12 w-12 text-white mx-auto mb-4 opacity-80" />
          <h3 className="font-display text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            DPA programs can be complex, and every situation is unique. We&apos;re here to answer your specific
            questions and help you determine which programs you qualify for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6614517200">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 bg-white text-premium-blue hover:bg-premium-cream font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (661) 451-7200
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-premium-blue font-bold"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Us a Message
              </Button>
            </a>
          </div>
        </Card>

        {/* Quick Reference */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-premium-blue mb-2">$110,000+</div>
            <div className="text-sm text-gray-600">Maximum DPA Available</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-premium-green mb-2">0%</div>
            <div className="text-sm text-gray-600">Interest Rate on Most DPA</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-premium-orange mb-2">30-45</div>
            <div className="text-sm text-gray-600">Days to Close (Average)</div>
          </Card>
        </div>
      </div>
    </section>
  );
}
