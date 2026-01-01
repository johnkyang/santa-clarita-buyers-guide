import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Santa Clarita Buyers Guide',
  description: 'Terms of Service for Santa Clarita Buyers Guide',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <p className="text-gray-600">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using SantaClaritaBuyersGuide.com, you accept and agree to be bound by the terms
            and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Nature of Service</h2>
          <p>
            Santa Clarita Buyers Guide is a marketing resource operated by <strong>Kailei Media</strong>.
          </p>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 my-4">
            <p className="font-semibold text-gray-900 mb-2">Important Disclosure:</p>
            <p>
              We are <strong>NOT</strong> a licensed real estate agent, real estate brokerage, or real estate service provider.
              We provide educational information and marketing services that connect prospective home buyers with
              affiliated licensed real estate professionals.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Consent</h2>
          <p>By submitting your information through our website, you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consent to having your information shared with affiliated real estate professionals</li>
            <li>Agree to be contacted via phone, email, and text message</li>
            <li>Acknowledge that you understand you are not entering into a direct relationship with Kailei Media for real estate services</li>
            <li>Confirm that all information you provide is accurate and truthful</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. No Professional Advice</h2>
          <p>
            The content on this website is for informational purposes only. We do not provide legal, financial,
            or real estate advice. You should consult with licensed professionals (real estate agents, attorneys,
            financial advisors) before making any real estate decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Relationships</h2>
          <p>
            When you are connected with a real estate agent through our service:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You are entering into a separate relationship with that licensed real estate professional</li>
            <li>Kailei Media is not responsible for the actions, advice, or services of affiliated agents</li>
            <li>Any agreements, transactions, or disputes are between you and the real estate professional</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information about Santa Clarita neighborhoods
            and the home buying process, we make no guarantees about:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Property availability, prices, or details</li>
            <li>School ratings or boundaries (which may change)</li>
            <li>Market conditions or trends</li>
            <li>Local regulations or requirements</li>
          </ul>
          <p className="mt-4">
            Always verify critical information with licensed professionals and official sources.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
          <p>
            Kailei Media and Santa Clarita Buyers Guide shall not be liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any decisions you make based on information from this website</li>
            <li>Actions or omissions of affiliated real estate professionals</li>
            <li>Inaccuracies in property information or market data</li>
            <li>Technical issues or website downtime</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of
            Kailei Media or its content suppliers and is protected by copyright laws. You may not reproduce,
            distribute, or create derivative works without express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately
            upon posting to this page. Your continued use of the website after changes constitutes acceptance
            of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of California. Any disputes shall be
            resolved in the courts of Los Angeles County, California.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2"><strong>Kailei Media</strong></p>
            <p className="mb-2">Santa Clarita Buyers Guide</p>
            <p className="mb-2">Phone: (661) 451-7200</p>
          </div>
        </section>
      </div>
    </div>
  );
}
