'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

export function DPAOverview() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            What is Down Payment Assistance?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Down Payment Assistance (DPA) programs help California home buyers cover the upfront costs of purchasing a home.
            These programs provide grants, deferred loans, or forgivable loans to make homeownership more accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h3 className="font-display text-2xl font-bold mb-6">Why DPA Programs Exist</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-premium-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Help first-time buyers overcome the down payment barrier</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-premium-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Support moderate-income families in high-cost areas like Santa Clarita</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-premium-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Encourage homeownership in California communities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-premium-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Provide special assistance for teachers, veterans, and public servants</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <h3 className="font-display text-2xl font-bold mb-6">How DPA Programs Work</h3>
            <div className="space-y-6">
              <div>
                <div className="font-semibold text-premium-blue mb-2">Grants</div>
                <p className="text-sm text-gray-600">Free money that doesn&apos;t need to be repaid (like AccessZero)</p>
              </div>
              <div>
                <div className="font-semibold text-premium-orange mb-2">Deferred Payment Loans</div>
                <p className="text-sm text-gray-600">0% interest loans with no monthly payment, due when you sell or refinance</p>
              </div>
              <div>
                <div className="font-semibold text-premium-green mb-2">Forgivable Loans</div>
                <p className="text-sm text-gray-600">Loans that are forgiven if you stay in the home for a certain period</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Common Myths */}
        <Card className="p-8 bg-premium-cream border-premium-gold">
          <h3 className="font-display text-2xl font-bold mb-6 text-center">Common Myths Debunked</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                <p className="font-semibold">&quot;DPA programs are only for low-income buyers&quot;</p>
              </div>
              <p className="text-sm text-gray-600 ml-9">Many programs serve moderate and even middle-income families, especially in high-cost areas like Santa Clarita.</p>
            </div>
            <div>
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                <p className="font-semibold">&quot;Using DPA makes my offer less competitive&quot;</p>
              </div>
              <p className="text-sm text-gray-600 ml-9">Sellers typically don&apos;t know or care about your financing details—they just want a qualified buyer.</p>
            </div>
            <div>
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                <p className="font-semibold">&quot;I have to pay back DPA immediately&quot;</p>
              </div>
              <p className="text-sm text-gray-600 ml-9">Most programs offer deferred payment (due only when you sell) or are fully forgivable after a few years.</p>
            </div>
            <div>
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                <p className="font-semibold">&quot;DPA programs are too complicated&quot;</p>
              </div>
              <p className="text-sm text-gray-600 ml-9">With the right lender, the process is streamlined. We&apos;ll guide you through every step.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
