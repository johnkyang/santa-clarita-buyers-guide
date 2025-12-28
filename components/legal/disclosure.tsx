import { AlertCircle } from 'lucide-react';

export function LegalDisclosure() {
  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
      <div className="flex gap-3">
        <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700 space-y-3">
          <p className="font-semibold text-gray-900">Important Disclosure:</p>

          <p>
            <strong>Santa Clarita Buyers Guide</strong> is a marketing resource operated by <strong>Kailei Media</strong>.
            We are <strong>NOT</strong> a real estate agent or licensed real estate brokerage.
          </p>

          <p>
            By submitting your information, you acknowledge and agree that:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              Your information will be shared with affiliated real estate agents and/or companies
              in Santa Clarita who can provide professional home buying assistance.
            </li>
            <li>
              You grant us and our affiliated partners the right to contact you via phone, email,
              and text message to provide home buying guidance and assistance.
            </li>
            <li>
              You have the right to opt out of communications at any time by replying &quot;STOP&quot; to
              text messages, clicking &quot;unsubscribe&quot; in emails, or calling (661) 451-7200.
            </li>
            <li>
              Standard message and data rates may apply for text messages.
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            For more information, please see our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
