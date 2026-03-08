import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin,
  Home,
  CheckCircle2,
  Phone,
  Train,
  ShoppingBag,
  Mountain,
  ArrowRight,
  Calculator,
  Star,
} from 'lucide-react'
import { PelonaHillsLeadForm } from './pelona-hills-client'

export const metadata: Metadata = {
  title: 'Pelona Hills — New Homes in Sand Canyon, Santa Clarita | Pelona Hills',
  description:
    'Pelona Hills by Intracorp Homes: 119 new single-family homes in Sand Canyon, Santa Clarita. 1,830–2,191 sq ft · No Mello-Roos · 360° views · Grand Opening March 28, 2026. Get pre-approval info from John Yang.',
  keywords: [
    'Pelona Hills Santa Clarita',
    'new homes Sand Canyon Canyon Country',
    'Intracorp Homes Santa Clarita',
    'new construction Santa Clarita 2026',
    'Pelona Hills Canyon Country CA',
    'no mello roos Santa Clarita new homes',
  ],
  openGraph: {
    title: 'Pelona Hills — New Homes in Sand Canyon, Santa Clarita',
    description:
      '119 new single-family homes with 360° valley views, no Mello-Roos, and Metrolink access. Grand Opening March 28, 2026.',
    type: 'website',
  },
}

const highlights = [
  {
    icon: Mountain,
    title: '360° Valley Views',
    desc: 'Hilltop setting with spectacular panoramic views of the Santa Clarita Valley and Sierra Pelona foothills.',
  },
  {
    icon: Star,
    title: 'No Mello-Roos',
    desc: 'Save $300–$600/month versus comparable new construction communities that carry Mello-Roos assessments.',
  },
  {
    icon: ShoppingBag,
    title: 'Sand Canyon Village',
    desc: 'Walking distance to Sprouts Market, Starbucks, and Jersey Mike\'s at the Sand Canyon Village retail center.',
  },
  {
    icon: Train,
    title: 'Metrolink Access',
    desc: 'Close to Vista Canyon Transit Center — Metrolink commuter rail to downtown Los Angeles and the San Fernando Valley.',
  },
  {
    icon: Home,
    title: 'Early California Architecture',
    desc: 'Distinctive architectural character by Bassenian Lagoni Architects. Open-concept floor plans with modern finishes.',
  },
  {
    icon: MapPin,
    title: 'SR-14 Convenient',
    desc: 'Direct Sand Canyon Road on/off-ramp access to State Route 14 — fast connection to the San Fernando Valley.',
  },
]

const homeDetails = [
  { label: 'Total Homes', value: '119 Single-Family' },
  { label: 'Home Sizes', value: '1,830 – 2,191 sq ft' },
  { label: 'Bedrooms', value: '3 – 4 Bedrooms' },
  { label: 'Bathrooms', value: '2.5 – 3 Bathrooms' },
  { label: 'Garage', value: '2-Car Side-by-Side' },
  { label: 'Mello-Roos', value: 'None' },
  { label: 'HOA', value: 'Yes (private streets + landscaping)' },
  { label: 'Architecture', value: 'Early California Style' },
  { label: 'Builder', value: 'Intracorp Homes' },
  { label: 'Status', value: 'Under Construction — Opening Mar 28' },
]

const pros = [
  'No Mello-Roos — significant monthly savings vs. other new SCV communities',
  '360-degree views of the Santa Clarita Valley and Sierra Pelona Mountains',
  'Brand-new construction with California Title 24 energy efficiency standards',
  'Walking distance to Sand Canyon Village shops and dining',
  'Metrolink commuter rail access nearby at Vista Canyon station',
  'Private streets maintained by HOA — low traffic, safe environment',
  'Modern open-concept floor plans by Bassenian Lagoni Architects',
  'Adjacent neighborhood park for residents',
]

const considerations = [
  'Sand Canyon area carries elevated wildland fire risk — verify insurance costs before committing',
  'School district is Canyon Country / Hart Union (Canyon High School, 7/10)',
  'HOA fees apply (amount TBD — confirm with builder)',
  'Pricing not yet publicly listed — contact John Yang for current availability and pricing details',
  'Community is under construction — move-in timeline dependent on build phase',
]

export default function PelonaHillsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-editorial-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,179,25,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

          {/* Badge */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-editorial-gold/20 border border-editorial-gold/40 text-editorial-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-gold animate-pulse" />
              Grand Opening — March 28, 2026
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full">
              <MapPin className="w-3 h-3" />
              Sand Canyon · Canyon Country · Santa Clarita
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: headline */}
            <div>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-6">
                Pelona Hills<br />
                <em className="not-italic text-editorial-gold">by Intracorp Homes</em>
              </h1>
              <p className="text-xl text-white/75 font-light leading-relaxed mb-8 max-w-lg">
                119 new single-family homes with 360° valley views, no Mello-Roos, and early California architecture — on a hilltop perch in Santa Clarita&apos;s sought-after Sand Canyon.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: '119', label: 'New Homes' },
                  { value: '1,830–2,191', label: 'Sq Ft' },
                  { value: '$0', label: 'Mello-Roos' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/8 border border-white/10 rounded-xl p-4 text-center">
                    <p className="font-display text-2xl font-bold text-editorial-gold">{stat.value}</p>
                    <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-editorial-gold px-7 py-4 rounded-full text-editorial-dark font-bold hover:brightness-110 hover:scale-105 transition-all"
                >
                  Get Pre-Approval Info
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:8184456354"
                  className="flex items-center gap-2 border border-white/30 px-7 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  (818) 445-6354
                </a>
              </div>
            </div>

            {/* Right: feature list */}
            <div className="hidden lg:block">
              <div className="bg-white/6 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-white/50 text-xs uppercase tracking-widest font-bold mb-6">Community Highlights</h2>
                <ul className="space-y-4">
                  {[
                    'No Mello-Roos — rare for SCV new construction',
                    '360° views of Santa Clarita Valley',
                    '1,830–2,191 sq ft · 3–4 bed · 2.5–3 bath',
                    'Walking distance to Sand Canyon Village (Sprouts, Starbucks)',
                    'Near Vista Canyon Metrolink station',
                    'Bassenian Lagoni architectural design',
                    'Private streets with HOA landscaping',
                    'Adjacent neighborhood park',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-editorial-gold mt-0.5 shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Details Strip */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {homeDetails.slice(0, 5).map(d => (
              <div key={d.label} className="text-center">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">{d.label}</p>
                <p className="font-display text-lg font-semibold text-slate-900">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="mb-12">
          <p className="text-editorial-gold font-bold tracking-widest uppercase text-xs mb-3">Why Pelona Hills</p>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-slate-900">
            What Makes This Community Special
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map(h => (
            <div key={h.title} className="group p-8 rounded-2xl border border-slate-100 hover:border-editorial-gold/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-editorial-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-editorial-gold/20 transition-colors">
                <h.icon className="w-6 h-6 text-editorial-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">{h.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Details Table */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl font-medium text-slate-900 mb-8">Home Specifications</h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            {homeDetails.map((d, i) => (
              <div
                key={d.label}
                className={`flex items-center justify-between px-8 py-4 ${i < homeDetails.length - 1 ? 'border-b border-slate-50' : ''} ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
              >
                <span className="text-slate-500 text-sm font-medium">{d.label}</span>
                <span className={`text-sm font-bold ${d.label === 'Mello-Roos' ? 'text-green-600' : 'text-slate-900'}`}>
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Considerations */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <h2 className="font-display text-4xl font-medium text-slate-900 mb-12">Honest Assessment</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Why Buyers Love Pelona Hills
            </h3>
            <ul className="space-y-3">
              {pros.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold text-amber-800 mb-6">
              What to Know Before You Buy
            </h3>
            <ul className="space-y-3">
              {considerations.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="text-amber-500 mt-0.5 shrink-0 font-bold">→</span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-amber-200">
              <p className="text-xs text-amber-700 leading-relaxed">
                <strong>Fire zone note:</strong> Sand Canyon is in a High Fire Hazard Severity Zone.
                Get insurance quotes before removing contingencies.{' '}
                <Link href="/blog/fire-risk-santa-clarita-neighborhoods" className="underline">
                  See our full fire risk guide.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture — Contact John Yang */}
      <section id="contact" className="bg-gradient-to-br from-slate-900 to-editorial-dark py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: copy */}
            <div>
              <p className="text-editorial-gold font-bold tracking-widest uppercase text-xs mb-4">Get Pre-Approved</p>
              <h2 className="font-display text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                Ready to Buy at<br />Pelona Hills?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Contact John Yang — a local Santa Clarita buyer specialist — to walk through your pre-approval options, understand total monthly costs with HOA included, and get the details you need before the Grand Opening on March 28.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Know your exact buying power before you tour',
                  'Understand total monthly cost with HOA factored in',
                  'Get independent advice — not the builder\'s sales pitch',
                  'Free, no obligation — always on your side',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-editorial-gold mt-0.5 shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="tel:8184456354"
                className="inline-flex items-center gap-3 text-editorial-gold font-bold text-lg hover:underline"
              >
                <Phone className="w-5 h-5" />
                Call John: (818) 445-6354
              </a>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="font-display text-2xl font-semibold text-slate-900 mb-2">
                Get Pre-Approval Info
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                John Yang will respond within 24 hours with your pre-approval options and Pelona Hills buying details.
              </p>
              <PelonaHillsLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-editorial-gold font-bold tracking-widest uppercase text-xs mb-3">Location</p>
            <h2 className="font-display text-4xl font-medium text-slate-900 mb-6">
              Sand Canyon,<br />Canyon Country
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Pelona Hills sits in the Sand Canyon area of Canyon Country — one of Santa Clarita&apos;s most scenic addresses. The hilltop setting provides the 360-degree views that define this community, while SR-14 access keeps Los Angeles and the San Fernando Valley within reach.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <MapPin className="w-4 h-4 text-editorial-gold shrink-0" />
                28926 Sand Canyon Rd, Santa Clarita, CA 91387
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Train className="w-4 h-4 text-editorial-gold shrink-0" />
                Vista Canyon Metrolink station — commuter rail to downtown LA
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <ShoppingBag className="w-4 h-4 text-editorial-gold shrink-0" />
                Sand Canyon Village: Sprouts, Starbucks, Jersey Mike&apos;s
              </div>
            </div>
            <Link
              href="/neighborhoods/canyon-country"
              className="inline-flex items-center gap-2 text-editorial-gold font-semibold hover:underline"
            >
              Explore Canyon Country Neighborhood
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center text-slate-400 p-8">
              <MapPin className="w-12 h-12 mx-auto mb-3 text-slate-300" />
              <p className="font-semibold text-slate-500">Sand Canyon · Canyon Country</p>
              <p className="text-sm mt-1">Santa Clarita, CA 91387</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — Buying Power */}
      <section className="bg-editorial-gold/8 border-t border-editorial-gold/15 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Calculator className="w-10 h-10 text-editorial-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl font-medium text-slate-900 mb-4">
            Know Your Numbers Before You Tour
          </h2>
          <p className="text-slate-600 mb-8">
            Run your exact buying power in 2 minutes — factoring in your income, down payment, and HOA fees. Walk into the Grand Opening knowing your real price range.
          </p>
          <Link
            href="/buying-power"
            className="inline-flex items-center gap-2 bg-editorial-gold px-8 py-4 rounded-full text-editorial-dark font-bold hover:brightness-110 hover:scale-105 transition-all"
          >
            <Calculator className="w-5 h-5" />
            Calculate My Buying Power — Free
          </Link>
          <p className="text-slate-400 text-sm mt-4">No sign-up required. Instant results.</p>
        </div>
      </section>

    </div>
  )
}
