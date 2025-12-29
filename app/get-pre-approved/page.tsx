import { Metadata } from 'next';
import { LenderHero } from '@/components/lender/lender-hero';
import { LenderInfo } from '@/components/lender/lender-info';
import { PreApprovalBenefits } from '@/components/lender/pre-approval-benefits';
import { LenderCTA } from '@/components/lender/lender-cta';

export const metadata: Metadata = {
  title: 'Get Pre-Approved for Your Santa Clarita Home | $500 Closing Credit',
  description: 'Get pre-approved with John Yang at loanDepot. Expert mortgage guidance for Santa Clarita home buyers. Receive $500 closing costs credit when you mention SantaClaritaBuyersGuide.com',
  keywords: [
    'mortgage pre-approval Santa Clarita',
    'home loan pre-approval',
    'FHA loans Santa Clarita',
    'VA loans California',
    'CalHFA approved lender',
    'down payment assistance lender',
    'loanDepot Santa Clarita',
    'first-time buyer mortgage'
  ],
  openGraph: {
    title: 'Get Pre-Approved | Santa Clarita Buyers Guide',
    description: 'Expert mortgage pre-approval with $500 closing costs credit',
    type: 'website',
  },
};

export default function GetPreApprovedPage() {
  return (
    <div className="min-h-screen">
      <LenderHero />
      <LenderInfo />
      <PreApprovalBenefits />
      <LenderCTA />
    </div>
  );
}
