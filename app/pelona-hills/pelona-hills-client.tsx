'use client'

import { useState } from 'react'
import { Phone, CheckCircle, Loader2 } from 'lucide-react'

export function PelonaHillsLeadForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.')
      return
    }
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          interestedIn: ['Canyon Country'],
          source: 'pelona-hills',
          sourcePage: 'Pelona Hills - New Construction',
          submittedAt: new Date().toISOString(),
          consent: true,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or call (818) 445-6354.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-14 h-14 text-editorial-gold mx-auto mb-4" />
        <h3 className="font-display text-2xl font-semibold text-slate-900 mb-2">
          Got it, {name.split(' ')[0]}!
        </h3>
        <p className="text-slate-600 mb-6">
          John Yang will reach out within 24 hours to walk you through your pre-approval options and answer any Pelona Hills questions.
        </p>
        <a
          href="tel:8184456354"
          className="inline-flex items-center gap-2 text-editorial-gold font-bold hover:underline"
        >
          <Phone className="w-4 h-4" />
          Or call now: (818) 445-6354
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="ph-name">
          Full Name *
        </label>
        <input
          id="ph-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Jane Smith"
          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-editorial-gold/50 focus:border-editorial-gold transition"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="ph-email">
          Email Address *
        </label>
        <input
          id="ph-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="jane@email.com"
          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-editorial-gold/50 focus:border-editorial-gold transition"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="ph-phone">
          Phone Number
        </label>
        <input
          id="ph-phone"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="(661) 555-0000"
          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-editorial-gold/50 focus:border-editorial-gold transition"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-editorial-gold text-editorial-dark font-bold py-4 rounded-lg hover:brightness-110 hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Get Pre-Approval Info from John Yang'
        )}
      </button>

      <p className="text-xs text-slate-400 text-center leading-relaxed">
        By submitting, you agree to be contacted about Pelona Hills and Santa Clarita home buying resources.
        Your information is never sold or shared.
      </p>
    </form>
  )
}
