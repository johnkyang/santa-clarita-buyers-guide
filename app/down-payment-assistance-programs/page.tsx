import { Metadata } from 'next';
import { DPAHero } from '@/components/dpa/dpa-hero';
import { DPAOverview } from '@/components/dpa/dpa-overview';
import { DPAProgramCards } from '@/components/dpa/dpa-program-cards';
import { DPAComparison } from '@/components/dpa/dpa-comparison';
import { DPACalculator } from '@/components/dpa/dpa-calculator';
import { DPAExamples } from '@/components/dpa/dpa-examples';
import { DPAProcess } from '@/components/dpa/dpa-process';
import { DPAImportantInfo } from '@/components/dpa/dpa-important-info';
import { DPAFAQ } from '@/components/dpa/dpa-faq';
import { DPAResources } from '@/components/dpa/dpa-resources';
import { DPACTA } from '@/components/dpa/dpa-cta';

export const metadata: Metadata = {
  title: 'Down Payment Assistance Programs in Santa Clarita | Get Up to $110,000+ in Help',
  description: 'Discover CalHFA, AccessZero FHA, and GSFA down payment assistance programs for Santa Clarita home buyers. Get up to $110,000+ in grants and deferred loans. Free consultation: (661) 451-7200',
  keywords: [
    'down payment assistance Santa Clarita',
    'CalHFA programs',
    'first-time buyer help California',
    'zero down payment Santa Clarita',
    'home buyer grants California',
    'AccessZero FHA',
    'GSFA assistance',
    'teacher home buying program',
    'down payment grants Los Angeles County'
  ],
  openGraph: {
    title: 'Down Payment Assistance Programs | Santa Clarita Buyers Guide',
    description: 'Get up to $110,000+ in down payment help for your Santa Clarita home',
    type: 'website',
  },
};

export default function DownPaymentAssistancePage() {
  return (
    <div className="min-h-screen">
      <DPAHero />
      <DPAOverview />
      <DPAProgramCards />
      <DPAComparison />
      <DPACalculator />
      <DPAExamples />
      <DPAProcess />
      <DPAImportantInfo />
      <DPAFAQ />
      <DPAResources />
      <DPACTA />
    </div>
  );
}
