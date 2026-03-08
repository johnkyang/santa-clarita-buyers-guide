'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ConsentCheckbox } from '@/components/legal/consent-checkbox'
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SubdivisionLeadFormProps {
  subdivisionName: string
  neighborhoodName: string
  sourcePage: string
}

export function SubdivisionLeadForm({
  subdivisionName,
  neighborhoodName,
  sourcePage,
}: SubdivisionLeadFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [timeline, setTimeline] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim() || name.trim().length < 2) e.name = 'Please enter your name'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email'
    if (!timeline) e.timeline = 'Please select a timeline'
    if (!consent) e.consent = 'You must agree to be contacted'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          interestedIn: [neighborhoodName],
          propertyType: 'any',
          timeline,
          source: 'subdivision-page',
          sourcePage,
          submittedAt: new Date().toISOString(),
          consent: true,
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
        }),
      })

      if (!res.ok) throw new Error('Submission failed')
      router.push(`/thank-you?name=${encodeURIComponent(name)}&source=subdivision-page`)
    } catch {
      alert('There was an error submitting your information. Please call us at (661) 451-7200.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Phone (Optional)
        </label>
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(661) 555-1234"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Your Timeline <span className="text-red-500">*</span>
        </label>
        <Select onValueChange={setTimeline}>
          <SelectTrigger>
            <SelectValue placeholder="When are you looking to buy?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-3-months">0–3 Months</SelectItem>
            <SelectItem value="3-6-months">3–6 Months</SelectItem>
            <SelectItem value="6-12-months">6–12 Months</SelectItem>
            <SelectItem value="just-browsing">Just Browsing</SelectItem>
          </SelectContent>
        </Select>
        {errors.timeline && <p className="mt-1 text-xs text-red-600">{errors.timeline}</p>}
      </div>

      <ConsentCheckbox
        checked={consent}
        onCheckedChange={setConsent}
      />
      {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-premium-orange hover:bg-premium-rust text-white font-bold py-5 text-base rounded-xl shadow-md disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Get Help With {subdivisionName}
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  )
}
