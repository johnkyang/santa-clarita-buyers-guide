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
        className="mt-1"
      />
      <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer">
        I acknowledge that I have read and agree to the disclosure above. I consent to being
        contacted by Santa Clarita Buyers Guide and affiliated real estate professionals via
        phone, email, and text message. I understand I can opt out at any time.
        <span className="text-red-600 ml-1">*</span>
      </label>
    </div>
  );
}
