import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertCircle, FileText, Users } from 'lucide-react'
import { CountyIncomeLimits } from './county-income-limits'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { FAQSchema } from './faq-schema'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface CalHFADFASectionProps {
  showFAQ?: boolean
}

export function CalHFADFASection({ showFAQ = true }: CalHFADFASectionProps) {
  return (
    <div id="calhfa-dream-for-all" className="scroll-mt-20">
      <h2 className="mb-6 text-3xl font-bold">CalHFA Dream For All</h2>

      {/* Important Callout */}
      <Alert className="mb-8 border-l-4 border-l-orange-500 bg-orange-50">
        <AlertCircle className="h-5 w-5 text-orange-600" />
        <AlertDescription className="text-base">
          <strong className="text-orange-900">Important:</strong> Voucher registration will open again in early 2026. Start preparing now.
        </AlertDescription>
      </Alert>

      {/* Program Highlights */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-premium-green to-emerald-600 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">Program Highlights</h3>
        </div>

        <Card className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-green flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>Up to 20% assistance</strong> for down payment or closing costs, not to exceed $150,000
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-green flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>No interest rate and no monthly payment</strong> on the down payment assistance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-green flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>Appreciation share requirement:</strong> CalHFA shares in the appreciation when you sell or refinance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-green flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>Voucher system:</strong> Homebuyers must register for a voucher. A randomized drawing will select registrants who receive the voucher. This is <strong>not first come, first served</strong>.
              </span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Eligibility Requirements */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-premium-blue-dark rounded-lg flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">Eligibility Requirements</h3>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-6 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-blue flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>First-generation homebuyer:</strong> At least one borrower must be a first-generation homebuyer (neither parent has owned a home)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-blue flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>California resident:</strong> One borrower must be a current resident of California
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-blue flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>First-time homebuyers:</strong> All borrowers must be first-time homebuyers
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-blue flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>Income requirements:</strong> Income must meet CalHFA Income Limits for the county you are purchasing in
              </span>
            </li>
          </ul>
        </Card>

        {/* County Income Limits Component */}
        <CountyIncomeLimits />
      </div>

      {/* Documents Needed */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-premium-orange to-premium-rust rounded-lg flex items-center justify-center">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">Documents Needed</h3>
        </div>

        <Card className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-orange flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                California Dream For All Lender Pre-Approval Letter
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-orange flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>Government ID:</strong> Passports, driver&apos;s license, state-issued ID, military ID, permanent residence cards, visas, or employment authorization documents
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-orange flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">
                <strong>Foster care documentation</strong> (if applicable): Foster Care Verification Form/Letter or court documents
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-premium-orange flex-shrink-0" />
              <div className="text-gray-700 leading-relaxed">
                <strong>Parent information</strong> for designated first-generation borrower(s):
                <ul className="mt-2 ml-4 space-y-1 text-sm">
                  <li>• Name</li>
                  <li>• Date of birth</li>
                  <li>• Date of death (if applicable)</li>
                  <li>• Current address</li>
                  <li>• Proof of parent relationship (Birth Certificate, Adoption papers)</li>
                </ul>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      {/* CTA Button */}
      <div className="mb-12">
        <Link href="/get-pre-approved">
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-gradient-to-r from-premium-orange to-premium-rust hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            See If You Qualify
          </Button>
        </Link>
        {/* TODO: Update link to quiz/pre-approval route when available */}
      </div>

      {/* FAQ Section */}
      {showFAQ && (
        <div className="mb-8">
          <FAQSchema
            faqs={[
              {
                question: 'When does Dream For All open again?',
                answer: 'Voucher registration is expected to open again in early 2026. Unlike previous rounds, this is not a first come, first served program. Instead, homebuyers must register for a voucher during the registration period, and a randomized drawing will select registrants who receive vouchers. We recommend starting your preparation now by getting pre-approved and understanding the requirements.',
              },
              {
                question: 'How much assistance can I get?',
                answer: 'The CalHFA Dream For All program provides up to 20% of the purchase price for down payment or closing costs, with a maximum of $150,000. For example, on a $750,000 home, you could receive the full $150,000 in assistance (which is 20% of the purchase price).',
              },
              {
                question: 'What does "first-generation homebuyer" mean?',
                answer: 'A first-generation homebuyer is someone whose parents have never owned a home. This is different from being a "first-time homebuyer" (someone who hasn\'t owned a home themselves). For the Dream For All program, at least one borrower must meet this first-generation requirement. You\'ll need to provide documentation about your parents\' homeownership history. If you have questions about whether you qualify, we encourage you to contact a Dream For All-approved lender who can help determine your eligibility.',
              },
            ]}
          />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-3 px-4">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                When does Dream For All open again?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Voucher registration is expected to open again in early 2026. Unlike previous rounds, this is <strong>not a first come, first served program</strong>. Instead, homebuyers must register for a voucher during the registration period, and a randomized drawing will select registrants who receive vouchers. We recommend starting your preparation now by getting pre-approved and understanding the requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-3 px-4">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How much assistance can I get?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                The CalHFA Dream For All program provides up to 20% of the purchase price for down payment or closing costs, with a maximum of $150,000. For example, on a $750,000 home, you could receive the full $150,000 in assistance (which is 20% of the purchase price).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-3 px-4">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What does &quot;first-generation homebuyer&quot; mean?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                A first-generation homebuyer is someone whose parents have never owned a home. This is different from being a &quot;first-time homebuyer&quot; (someone who hasn&apos;t owned a home themselves). For the Dream For All program, at least one borrower must meet this first-generation requirement. You&apos;ll need to provide documentation about your parents&apos; homeownership history. If you have questions about whether you qualify, we encourage you to contact a Dream For All-approved lender who can help determine your eligibility.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  )
}
