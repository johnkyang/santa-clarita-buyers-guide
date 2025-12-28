'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LegalDisclosure } from '@/components/legal/disclosure';
import { ConsentCheckbox } from '@/components/legal/consent-checkbox';
import { Loader2, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional(),
  interestedIn: z.array(z.string()).min(1, 'Please select at least one neighborhood'),
  propertyType: z.string().min(1, 'Please select a property type'),
  buyerType: z.string().optional(),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to be contacted to submit this form',
  }),
});

type FormData = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  source?: string;
  defaultNeighborhood?: string;
  defaultPropertyType?: string;
}

export function LeadCaptureForm({
  source = 'homepage',
  defaultNeighborhood,
  defaultPropertyType
}: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>(
    defaultNeighborhood ? [defaultNeighborhood] : []
  );
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interestedIn: defaultNeighborhood ? [defaultNeighborhood] : [],
      propertyType: defaultPropertyType || '',
      consent: false,
    },
  });

  const toggleNeighborhood = (neighborhood: string) => {
    const updated = selectedNeighborhoods.includes(neighborhood)
      ? selectedNeighborhoods.filter(n => n !== neighborhood)
      : [...selectedNeighborhoods, neighborhood];
    setSelectedNeighborhoods(updated);
    setValue('interestedIn', updated);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source,
          submittedAt: new Date().toISOString(),
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      router.push(`/thank-you?name=${encodeURIComponent(data.name)}&source=${source}`);

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your information. Please call us at (661) 451-7200.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Legal Disclosure */}
      <LegalDisclosure />

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name <span className="text-red-600">*</span>
        </label>
        <Input
          id="name"
          {...register('name')}
          placeholder="John Smith"
          className="w-full"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address <span className="text-red-600">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="john@example.com"
          className="w-full"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number (Optional)
        </label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="(661) 555-1234"
          className="w-full"
        />
        <p className="mt-1 text-xs text-gray-500">
          We&apos;ll use this to provide personalized assistance via call or text
        </p>
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Interested In */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Interested In (Select all that apply) <span className="text-red-600">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Valencia', 'Stevenson Ranch', 'Saugus', 'Canyon Country', 'Newhall', 'Castaic', 'Not Sure Yet'].map((neighborhood) => (
            <label
              key={neighborhood}
              className={`flex items-center gap-2 cursor-pointer p-3 border rounded-lg transition-colors ${
                selectedNeighborhoods.includes(neighborhood)
                  ? 'bg-blue-50 border-blue-500'
                  : 'hover:bg-gray-50'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedNeighborhoods.includes(neighborhood)}
                onChange={() => toggleNeighborhood(neighborhood)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">{neighborhood}</span>
            </label>
          ))}
        </div>
        {errors.interestedIn && (
          <p className="mt-1 text-sm text-red-600">{errors.interestedIn.message}</p>
        )}
      </div>

      {/* Property Type */}
      <div>
        <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2">
          Looking For <span className="text-red-600">*</span>
        </label>
        <Select onValueChange={(value) => setValue('propertyType', value)} defaultValue={defaultPropertyType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new-construction">New Construction</SelectItem>
            <SelectItem value="resale">Resale Home</SelectItem>
            <SelectItem value="55-plus">55+ Community</SelectItem>
            <SelectItem value="any">Any Type</SelectItem>
          </SelectContent>
        </Select>
        {errors.propertyType && (
          <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
        )}
      </div>

      {/* Buyer Type */}
      <div>
        <label htmlFor="buyerType" className="block text-sm font-semibold text-gray-700 mb-2">
          I Am A (Optional)
        </label>
        <Select onValueChange={(value) => setValue('buyerType', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select buyer type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first-time">First-Time Buyer</SelectItem>
            <SelectItem value="move-up">Move-Up Buyer</SelectItem>
            <SelectItem value="senior">Senior/55+</SelectItem>
            <SelectItem value="investor">Investor</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
          Timeline <span className="text-red-600">*</span>
        </label>
        <Select onValueChange={(value) => setValue('timeline', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="When are you looking to buy?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-3-months">0-3 Months</SelectItem>
            <SelectItem value="3-6-months">3-6 Months</SelectItem>
            <SelectItem value="6-12-months">6-12 Months</SelectItem>
            <SelectItem value="just-browsing">Just Browsing</SelectItem>
          </SelectContent>
        </Select>
        {errors.timeline && (
          <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Additional Information (Optional)
        </label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us more about what you're looking for..."
          rows={4}
          className="w-full"
        />
      </div>

      {/* Consent Checkbox */}
      <ConsentCheckbox
        checked={consent}
        onCheckedChange={(checked) => {
          setConsent(checked);
          setValue('consent', checked);
        }}
      />
      {errors.consent && (
        <p className="text-sm text-red-600">{errors.consent.message}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || !consent}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 text-lg rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            Get Started
          </>
        )}
      </Button>

      <p className="text-xs text-center text-gray-500">
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
        {' '}and{' '}
        <a href="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</a>
      </p>
    </form>
  );
}
