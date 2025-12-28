import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Santa Clarita Buyers Guide',
  description: 'Privacy policy for Santa Clarita Buyers Guide',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <p className="text-gray-600">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Who We Are</h2>
          <p>
            Santa Clarita Buyers Guide is operated by <strong>Kailei Media</strong>, a marketing firm.
            We are NOT a licensed real estate agent or brokerage. Our website provides educational resources
            and connects prospective home buyers with affiliated real estate professionals in Santa Clarita, California.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          <p>When you submit a form on our website, we collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Neighborhoods of interest</li>
            <li>Property type preferences</li>
            <li>Buyer type and timeline</li>
            <li>Any additional information you provide in the message field</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Connect you with affiliated real estate agents and professionals in Santa Clarita</li>
            <li>Provide you with home buying guidance and resources</li>
            <li>Send you relevant market updates and property information</li>
            <li>Improve our website and services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
          <p>
            <strong>By submitting your information, you acknowledge and agree that:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Your information will be shared with affiliated real estate agents and/or real estate companies
              in Santa Clarita who can provide professional home buying assistance
            </li>
            <li>
              These affiliated partners may contact you via phone, email, and text message
            </li>
            <li>
              We may share your information with service providers who help us operate our website
              (e.g., email service providers, CRM systems)
            </li>
          </ul>
          <p className="mt-4">
            We do NOT sell your personal information to third parties for their marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Communication Consent</h2>
          <p>
            By providing your contact information and checking the consent box, you grant Santa Clarita Buyers Guide
            and our affiliated real estate partners the right to contact you via:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Phone calls</strong> - to discuss your home buying needs</li>
            <li><strong>Email</strong> - to send property information, market updates, and resources</li>
            <li><strong>Text messages</strong> - for quick updates and scheduling (standard message rates may apply)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Opt-Out</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Opt out of communications at any time</strong> by:
              <ul className="list-circle pl-6 mt-2">
                <li>Replying &quot;STOP&quot; to any text message</li>
                <li>Clicking &quot;Unsubscribe&quot; in any email</li>
                <li>Calling us at (661) 451-7200</li>
              </ul>
            </li>
            <li>Request access to your personal information</li>
            <li>Request correction or deletion of your information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However,
            no internet transmission is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. California Privacy Rights (CCPA)</h2>
          <p>
            California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to know what personal information we collect</li>
            <li>Right to request deletion of your personal information</li>
            <li>Right to opt-out of the sale of personal information (we do not sell your information)</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact us at (661) 451-7200 or jyang@loandepot.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any material
            changes by posting the new policy on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2"><strong>Kailei Media</strong></p>
            <p className="mb-2">Santa Clarita Buyers Guide</p>
            <p className="mb-2">Phone: (661) 451-7200</p>
            <p className="mb-2">Email: jyang@loandepot.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
