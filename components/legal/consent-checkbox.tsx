import { Checkbox } from '@/components/ui/checkbox';

export function ConsentCheckbox({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <Checkbox
        id="consent"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-1 flex-shrink-0"
      />
      <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
        I acknowledge that <strong>Santa Clarita Buyers Guide</strong> (operated by <strong>Kailei Media</strong>) is <strong>NOT a real estate agent or licensed brokerage</strong>. I consent to being contacted by Santa Clarita Buyers Guide and affiliated real estate professionals via phone, email, and text message. I understand my information will be shared with partners who can assist with my home search. I can opt out at any time by replying &ldquo;STOP&rdquo; to texts, clicking &ldquo;unsubscribe&rdquo; in emails, or calling <a href="tel:6614517200" className="text-blue-600 hover:underline">(661) 451-7200</a>. Standard message and data rates may apply. See our{' '}
        <a href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline">Privacy Policy</a>
        {' '}and{' '}
        <a href="/terms-of-service" target="_blank" className="text-blue-600 hover:underline">Terms of Service</a>.
        <span className="text-red-600 ml-1">*</span>
      </label>
    </div>
  );
}
