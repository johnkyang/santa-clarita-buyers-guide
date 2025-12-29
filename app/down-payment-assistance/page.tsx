import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { CheckCircle2, DollarSign, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Down Payment Assistance Programs Santa Clarita (2025) | CalHFA, GSFA & More',
  description:
    'Complete guide to down payment assistance programs for Santa Clarita home buyers. CalHFA MyHome, CalHFA ZIP, GSFA DPA, GSFA AccessZero programs explained with examples.',
  keywords: [
    'down payment assistance santa clarita',
    'calhfa santa clarita',
    'down payment help california',
    'first time buyer programs santa clarita',
    'gsfa santa clarita',
  ],
}

export default function DownPaymentAssistancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Down Payment Assistance Programs for Santa Clarita Home Buyers 2025',
            description: 'Complete guide to CalHFA and GSFA down payment assistance programs',
            author: {
              '@type': 'Organization',
              name: 'Santa Clarita Buyers Guide',
            },
            datePublished: '2025-01-01',
            dateModified: new Date().toISOString(),
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">
            Down Payment Assistance Programs for Santa Clarita Home Buyers
          </h1>

          <p className="mb-8 text-xl text-muted-foreground">
            Buying a home in Santa Clarita is more affordable than you think with down payment
            assistance (DPA) programs. Whether you&apos;re a first-time home buyer or moving up,
            programs like CalHFA MyHome, CalHFA ZIP, GSFA DPA, and GSFA AccessZero can help you buy
            a home with as little as 3% down—or even 0% down in some cases.
          </p>

          <Card className="mb-8 border-l-4 border-l-green-500 bg-green-50 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              💰 Quick Summary: Down Payment Assistance in Santa Clarita
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <span>Buy with as little as 3% down (or 0% with some programs)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <span>Get up to $100,000+ in down payment assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <span>Available for first-time AND repeat buyers (income limits apply)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <span>Can be combined with FHA, VA, USDA, or conventional loans</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <span>
                  Santa Clarita median price $850K = need $25,500-$170K down (3-20%)
                </span>
              </li>
            </ul>
          </Card>

          <Separator className="my-8" />

          <h2 className="mb-6 text-3xl font-bold">
            4 Main Down Payment Assistance Programs for Santa Clarita
          </h2>

          {/* CalHFA MyHome */}
          <Card className="mb-8 border-2 border-blue-200 p-6">
            <h3 className="mb-4 text-2xl font-semibold text-blue-700">
              1. CalHFA MyHome Assistance Program
            </h3>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold">Program Type:</p>
                <p className="text-muted-foreground">
                  Deferred-payment junior loan (3.5% of purchase price)
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Interest Rate:</p>
                <p className="text-muted-foreground">0% interest, no monthly payments</p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Repayment:</p>
                <p className="text-muted-foreground">
                  Due when you sell, refinance, or pay off first mortgage
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold">First-Time Buyer?</p>
                <p className="text-muted-foreground">Yes (or haven&apos;t owned in 3 years)</p>
              </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">How CalHFA MyHome Works:</h4>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>Get a second loan for 3.5% of the purchase price (down payment help)</li>
              <li>This loan has 0% interest and no monthly payment</li>
              <li>Only repaid when you sell, refinance, or pay off your mortgage</li>
              <li>Can be combined with FHA (3.5% down) or conventional (3% down) loans</li>
              <li>Maximum loan limits: Up to $100,000 in DPA for Santa Clarita</li>
            </ul>

            <div className="mb-4 rounded bg-blue-50 p-4">
              <h4 className="mb-3 text-xl font-semibold">
                Real Example: Buying in Saugus with CalHFA MyHome
              </h4>
              <div className="space-y-2">
                <p>
                  <strong>Home price:</strong> $700,000 (Saugus)
                </p>
                <p>
                  <strong>CalHFA MyHome assistance:</strong> $24,500 (3.5% of price)
                </p>
                <p>
                  <strong>Your down payment:</strong> $500 (FHA minimum 3.5% - $24,500 assistance)
                </p>
                <p>
                  <strong>First mortgage:</strong> $675,500 (FHA loan)
                </p>
                <p>
                  <strong>Total out of pocket:</strong> ~$15,000 (includes closing costs)
                </p>
                <p className="font-semibold text-blue-700">
                  You just bought a $700K home with $15K!
                </p>
              </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">CalHFA MyHome Requirements:</h4>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>First-time home buyer</strong> (or haven&apos;t owned in 3 years)
              </li>
              <li>
                <strong>Income limits:</strong> LA County: $184,300 for 1-2 person household
              </li>
              <li>
                <strong>Credit score:</strong> Minimum 660 for conventional, 640 for FHA
              </li>
              <li>
                <strong>Homebuyer education:</strong> Required course (online available)
              </li>
              <li>
                <strong>Owner-occupied:</strong> Must be your primary residence
              </li>
              <li>
                <strong>Property types:</strong> Single-family, condos, townhomes (no investment
                properties)
              </li>
            </ul>
          </Card>

          {/* CalHFA ZIP */}
          <Card className="mb-8 border-2 border-purple-200 p-6">
            <h3 className="mb-4 text-2xl font-semibold text-purple-700">
              2. CalHFA Zero Interest Program (ZIP)
            </h3>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold">Program Type:</p>
                <p className="text-muted-foreground">
                  Deferred-payment junior loan (up to $30,000)
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Interest Rate:</p>
                <p className="text-muted-foreground">0% interest, no monthly payments</p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Repayment:</p>
                <p className="text-muted-foreground">
                  Due when you sell, refinance, or pay off first mortgage
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold">First-Time Buyer?</p>
                <p className="text-muted-foreground">No - repeat buyers OK!</p>
              </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">How CalHFA ZIP Works:</h4>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                Get up to $30,000 in down payment assistance (fixed amount, not percentage)
              </li>
              <li>0% interest, no monthly payment (same as MyHome)</li>
              <li>
                <strong>KEY DIFFERENCE:</strong> You don&apos;t have to be a first-time buyer!
              </li>
              <li>Can use for down payment and/or closing costs</li>
              <li>Combined with conventional, FHA, VA, or USDA loans</li>
            </ul>

            <div className="mb-4 rounded bg-purple-50 p-4">
              <h4 className="mb-3 text-xl font-semibold">
                Real Example: Buying in Canyon Country with CalHFA ZIP
              </h4>
              <div className="space-y-2">
                <p>
                  <strong>Home price:</strong> $650,000 (Canyon Country)
                </p>
                <p>
                  <strong>CalHFA ZIP assistance:</strong> $30,000
                </p>
                <p>
                  <strong>Down payment needed (5%):</strong> $32,500
                </p>
                <p>
                  <strong>Your down payment:</strong> $2,500 ($32,500 - $30,000 DPA)
                </p>
                <p>
                  <strong>First mortgage:</strong> $617,500 (conventional)
                </p>
                <p>
                  <strong>Total out of pocket:</strong> ~$12,000 (includes closing costs)
                </p>
              </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">CalHFA ZIP Requirements:</h4>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>First-time buyer:</strong> NOT required (repeat buyers OK!)
              </li>
              <li>
                <strong>Income limits:</strong> Same as MyHome - LA County: $184,300
              </li>
              <li>
                <strong>Credit score:</strong> Minimum 660 (conventional), 640 (FHA)
              </li>
              <li>
                <strong>Homebuyer education:</strong> Required
              </li>
              <li>
                <strong>Owner-occupied:</strong> Primary residence only
              </li>
            </ul>
          </Card>

          {/* GSFA DPA */}
          <Card className="mb-8 border-2 border-green-200 p-6">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              3. GSFA Down Payment Assistance (DPA) Program
            </h3>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold">Program Type:</p>
                <p className="text-muted-foreground">
                  Grant (3.5% of purchase price - does NOT have to be repaid!)
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Repayment:</p>
                <p className="text-muted-foreground">NONE - it&apos;s a grant, not a loan</p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Catch:</p>
                <p className="text-muted-foreground">
                  Slightly higher interest rate on first mortgage (+0.375%)
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold">First-Time Buyer?</p>
                <p className="text-muted-foreground">Yes (or haven&apos;t owned in 3 years)</p>
              </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">How GSFA DPA Works:</h4>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>You get 3.5% of purchase price as a GRANT (free money - never repaid)</li>
              <li>Trade-off: Your mortgage interest rate is 0.375% higher</li>
              <li>Works with FHA, VA, USDA, and conventional loans</li>
              <li>No income limits (unlike CalHFA)</li>
              <li>Can be used for down payment and/or closing costs</li>
            </ul>

            <div className="mb-4 rounded bg-green-50 p-4">
              <h4 className="mb-3 text-xl font-semibold">
                Real Example: Buying in Newhall with GSFA DPA
              </h4>
              <div className="space-y-2">
                <p>
                  <strong>Home price:</strong> $725,000 (Newhall)
                </p>
                <p>
                  <strong>GSFA DPA grant:</strong> $25,375 (3.5% - NEVER repaid!)
                </p>
                <p>
                  <strong>Your down payment:</strong> $0 (FHA 3.5% covered by grant)
                </p>
                <p>
                  <strong>First mortgage:</strong> $725,000 (FHA)
                </p>
                <p>
                  <strong>Interest rate:</strong> 7.125% (vs 6.75% without DPA)
                </p>
                <p>
                  <strong>Total out of pocket:</strong> ~$10,000 (closing costs only)
                </p>
                <p className="font-semibold text-green-700">
                  Free $25K grant, but higher rate = $150/month more
                </p>
              </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">GSFA DPA Requirements:</h4>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>First-time buyer:</strong> Required (or 3 years without ownership)
              </li>
              <li>
                <strong>Income limits:</strong> NONE (major advantage over CalHFA)
              </li>
              <li>
                <strong>Credit score:</strong> Minimum 620
              </li>
              <li>
                <strong>Homebuyer education:</strong> Required
              </li>
              <li>
                <strong>Owner-occupied:</strong> Primary residence only
              </li>
            </ul>
          </Card>

          {/* GSFA AccessZero */}
          <Card className="mb-8 border-2 border-orange-200 p-6">
            <h3 className="mb-4 text-2xl font-semibold text-orange-700">
              4. GSFA AccessZero Program (0% Down!)
            </h3>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold">Down Payment:</p>
                <p className="text-muted-foreground">0% - Buy with NO down payment</p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Program Type:</p>
                <p className="text-muted-foreground">Piggyback loan (covers 3% down payment)</p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Repayment:</p>
                <p className="text-muted-foreground">
                  Repaid when you sell or refinance (silent second)
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold">First-Time Buyer?</p>
                <p className="text-muted-foreground">Yes</p>
              </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">How GSFA AccessZero Works:</h4>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>0% down payment required - buy with ZERO money down</li>
              <li>GSFA provides 3% of purchase price as silent second mortgage</li>
              <li>No monthly payment on the 3% loan</li>
              <li>Repaid when you sell, refinance, or after 30 years</li>
              <li>Conventional 97% LTV first mortgage</li>
            </ul>

            <div className="mb-4 rounded bg-orange-50 p-4">
              <h4 className="mb-3 text-xl font-semibold">
                Real Example: Buying in Castaic with AccessZero
              </h4>
              <div className="space-y-2">
                <p>
                  <strong>Home price:</strong> $750,000 (Castaic)
                </p>
                <p>
                  <strong>GSFA AccessZero covers:</strong> $22,500 (3%)
                </p>
                <p>
                  <strong>Your down payment:</strong> $0
                </p>
                <p>
                  <strong>First mortgage (97%):</strong> $727,500
                </p>
                <p>
                  <strong>Second mortgage (3%):</strong> $22,500 (no monthly payment)
                </p>
                <p>
                  <strong>Total out of pocket:</strong> ~$12,000 (closing costs only)
                </p>
                <p className="font-semibold text-orange-700">Buy a $750K home with $0 down!</p>
              </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">GSFA AccessZero Requirements:</h4>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>First-time buyer:</strong> Required
              </li>
              <li>
                <strong>Income limits:</strong> NONE
              </li>
              <li>
                <strong>Credit score:</strong> Minimum 680
              </li>
              <li>
                <strong>Debt-to-income:</strong> Max 45%
              </li>
              <li>
                <strong>Reserves:</strong> May need 2-6 months reserves
              </li>
              <li>
                <strong>Homebuyer education:</strong> Required
              </li>
            </ul>
          </Card>

          <Separator className="my-8" />

          {/* Comparison Table */}
          <h2 className="mb-6 text-3xl font-bold">
            Down Payment Assistance Programs Comparison
          </h2>
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-left">CalHFA MyHome</th>
                  <th className="border p-3 text-left">CalHFA ZIP</th>
                  <th className="border p-3 text-left">GSFA DPA</th>
                  <th className="border p-3 text-left">GSFA AccessZero</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Assistance Amount</td>
                  <td className="border p-3">3.5% of price</td>
                  <td className="border p-3">Up to $30,000</td>
                  <td className="border p-3">3.5% of price</td>
                  <td className="border p-3">3% of price</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Must Repay?</td>
                  <td className="border p-3">Yes (when sell/refi)</td>
                  <td className="border p-3">Yes (when sell/refi)</td>
                  <td className="border p-3">NO - it&apos;s a grant!</td>
                  <td className="border p-3">Yes (when sell/refi)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Monthly Payment?</td>
                  <td className="border p-3">No</td>
                  <td className="border p-3">No</td>
                  <td className="border p-3">No</td>
                  <td className="border p-3">No</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Interest Rate</td>
                  <td className="border p-3">0%</td>
                  <td className="border p-3">0%</td>
                  <td className="border p-3">N/A (grant) but +0.375% on mortgage</td>
                  <td className="border p-3">0%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">First-Time Buyer?</td>
                  <td className="border p-3">Yes</td>
                  <td className="border p-3">NO</td>
                  <td className="border p-3">Yes</td>
                  <td className="border p-3">Yes</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Income Limits?</td>
                  <td className="border p-3">Yes ($184K)</td>
                  <td className="border p-3">Yes ($184K)</td>
                  <td className="border p-3">NO</td>
                  <td className="border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Min Credit Score</td>
                  <td className="border p-3">640-660</td>
                  <td className="border p-3">640-660</td>
                  <td className="border p-3">620</td>
                  <td className="border p-3">680</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Best For</td>
                  <td className="border p-3">First-time buyers under income limits</td>
                  <td className="border p-3">Repeat buyers or fixed $30K need</td>
                  <td className="border p-3">Higher income buyers</td>
                  <td className="border p-3">Zero down purchase</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Which Program to Choose */}
          <h2 className="mb-6 text-3xl font-bold">
            Which Down Payment Assistance Program Should You Choose?
          </h2>

          <div className="mb-12 space-y-6">
            <Card className="bg-blue-50 p-6">
              <h4 className="mb-3 text-xl font-semibold">Choose CalHFA MyHome if:</h4>
              <ul className="list-disc space-y-2 pl-6">
                <li>You&apos;re a first-time buyer</li>
                <li>Your income is under $184,300</li>
                <li>You want the lowest interest rate possible</li>
                <li>You&apos;re OK repaying when you sell (which most people do anyway)</li>
              </ul>
            </Card>

            <Card className="bg-purple-50 p-6">
              <h4 className="mb-3 text-xl font-semibold">Choose CalHFA ZIP if:</h4>
              <ul className="list-disc space-y-2 pl-6">
                <li>You&apos;ve owned a home before (not first-time buyer)</li>
                <li>You need a fixed $30,000 in help</li>
                <li>Your income is under $184,300</li>
                <li>Buying a lower-priced home where $30K is enough</li>
              </ul>
            </Card>

            <Card className="bg-green-50 p-6">
              <h4 className="mb-3 text-xl font-semibold">Choose GSFA DPA if:</h4>
              <ul className="list-disc space-y-2 pl-6">
                <li>Your income EXCEEDS $184,300 (no income limits!)</li>
                <li>You want FREE money you never repay</li>
                <li>You plan to stay in the home 5+ years (higher rate worth it)</li>
                <li>You don&apos;t mind 0.375% higher interest rate</li>
              </ul>
            </Card>

            <Card className="bg-orange-50 p-6">
              <h4 className="mb-3 text-xl font-semibold">Choose GSFA AccessZero if:</h4>
              <ul className="list-disc space-y-2 pl-6">
                <li>You have good credit (680+) but little cash</li>
                <li>You want 0% down</li>
                <li>You have stable income and can afford the payment</li>
                <li>Your income exceeds CalHFA limits</li>
              </ul>
            </Card>
          </div>

          {/* CTAs */}
          <div className="rounded-lg bg-gradient-to-r from-primary to-primary/60 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Buy a Home in Santa Clarita with Down Payment Assistance?
            </h3>
            <p className="mb-6 text-lg">
              Don&apos;t let a small down payment hold you back. With these programs, you can buy a
              home in Santa Clarita with as little as $10,000-$15,000 total out of pocket.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/neighborhoods">
                <Button size="lg" variant="secondary">
                  <Home className="mr-2 h-5 w-5" />
                  Explore Neighborhoods
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Get Pre-Approved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
