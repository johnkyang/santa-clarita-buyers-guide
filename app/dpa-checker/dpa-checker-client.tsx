'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight, ArrowLeft, CheckCircle, DollarSign, AlertCircle, HelpCircle } from 'lucide-react'
import {
  dpaQuestions,
  dpaPrograms,
  type DPAAnswers,
  type Eligibility,
} from '@/data/dpa/programs'

type Step = 'intro' | 'questions' | 'email' | 'results'

interface LeadData {
  name: string
  email: string
  phone: string
}

const eligibilityConfig: Record<
  Eligibility,
  { label: string; color: string; badgeColor: string; icon: React.ReactNode }
> = {
  likely: {
    label: 'Likely Eligible',
    color: 'border-green-300 bg-green-50',
    badgeColor: 'bg-green-100 text-green-800',
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
  },
  possibly: {
    label: 'Possibly Eligible',
    color: 'border-amber-300 bg-amber-50',
    badgeColor: 'bg-amber-100 text-amber-800',
    icon: <HelpCircle className="h-5 w-5 text-amber-600" />,
  },
  unlikely: {
    label: 'Likely Not Eligible',
    color: 'border-gray-200 bg-gray-50',
    badgeColor: 'bg-gray-100 text-gray-600',
    icon: <AlertCircle className="h-5 w-5 text-gray-400" />,
  },
}

export function DPACheckerClient() {
  const [step, setStep] = useState<Step>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Partial<DPAAnswers>>({})
  const [lead, setLead] = useState<LeadData>({ name: '', email: '', phone: '' })
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const totalQuestions = dpaQuestions.length
  const currentQuestion = dpaQuestions[currentQ]
  const progress = ((currentQ + 1) / totalQuestions) * 100

  const eligibilityResults = dpaPrograms.map((program) => ({
    program,
    eligibility: program.getEligibility(answers as DPAAnswers),
  }))

  const likelyCount = eligibilityResults.filter((r) => r.eligibility === 'likely').length

  function handleAnswer(optionId: string) {
    const newAnswers = { ...answers, [currentQuestion.id]: optionId }
    setAnswers(newAnswers)

    if (currentQ < totalQuestions - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setStep('email')
    }
  }

  function handleBack() {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1)
    } else {
      setStep('intro')
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!lead.name.trim() || !lead.email.trim()) {
      setError('Please enter your name and email.')
      return
    }
    if (!consent) {
      setError('Please accept the terms to continue.')
      return
    }
    setError('')
    setSubmitting(true)

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          phone: lead.phone || undefined,
          source: 'dpa-checker',
          sourcePage: '/dpa-checker',
          submittedAt: new Date().toISOString(),
          message: `DPA checker answers: ${JSON.stringify(answers)}. Likely eligible for ${likelyCount} program(s).`,
          consent: true,
        }),
      })
    } catch {
      // Non-blocking
    }

    setSubmitting(false)
    setStep('results')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-premium-cream to-white">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {/* INTRO */}
            {step === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-premium-green/10">
                  <DollarSign className="h-10 w-10 text-premium-green" />
                </div>
                <h1 className="font-display text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                  Do You Qualify for Down Payment Assistance?
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Most Santa Clarita buyers don&apos;t know they may qualify for <strong>$15,000 to $150,000</strong> in assistance. Answer 4 questions to find out.
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  This checks your eligibility for CalHFA Dream For All, CalHFA MyHome, GSFA Platinum, and CalHFA ZIP.
                </p>
                <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 text-left space-y-3">
                  {[
                    'Takes less than 2 minutes',
                    'Covers all major California DPA programs',
                    'Free — no obligation',
                    'Your results are instant',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-premium-green" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  onClick={() => setStep('questions')}
                  className="group h-14 w-full bg-gradient-to-r from-premium-green to-emerald-600 px-8 text-lg font-bold text-white hover:opacity-90 transition-all duration-300 hover:scale-105 sm:w-auto"
                >
                  Check My Eligibility
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            )}

            {/* QUESTIONS */}
            {step === 'questions' && (
              <motion.div
                key={`question-${currentQ}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>Question {currentQ + 1} of {totalQuestions}</span>
                    <span>{Math.round(progress)}% complete</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-premium-green to-emerald-600 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl mb-6">
                  {currentQuestion.question}
                </h2>

                <div className="grid gap-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option.id)}
                      className={`w-full rounded-xl border-2 p-4 text-left font-medium transition-all duration-200 hover:scale-[1.01] hover:border-premium-green hover:bg-green-50 ${
                        answers[currentQuestion.id] === option.id
                          ? 'border-premium-green bg-green-50 text-emerald-900'
                          : 'border-gray-200 bg-white text-gray-800'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleBack}
                  className="mt-6 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              </motion.div>
            )}

            {/* EMAIL GATE */}
            {step === 'email' && (
              <motion.div
                key="email"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-premium-green/10">
                    <CheckCircle className="h-6 w-6 text-premium-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Assessment complete!</p>
                    <h2 className="font-display text-2xl font-bold text-gray-900">
                      Your eligibility results are ready
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Enter your info to see which programs you may qualify for and get next steps for each one.
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={lead.name}
                      onChange={(e) => setLead({ ...lead, name: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={lead.email}
                      onChange={(e) => setLead({ ...lead, email: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(661) 555-0000"
                      value={lead.phone}
                      onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 accent-premium-green"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                      I agree to receive my DPA eligibility results and helpful home buying information from Santa Clarita Buyers Guide. No spam, unsubscribe anytime.
                    </label>
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="group h-14 w-full bg-gradient-to-r from-premium-green to-emerald-600 text-lg font-bold text-white hover:opacity-90 transition-all duration-300"
                  >
                    {submitting ? 'Loading...' : 'Show My DPA Eligibility'}
                    {!submitting && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                  </Button>

                  <p className="text-center text-xs text-gray-400">
                    Your information is never sold or shared.
                  </p>
                </form>
              </motion.div>
            )}

            {/* RESULTS */}
            {step === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
                    Your DPA Eligibility Results
                  </h2>
                  {likelyCount > 0 ? (
                    <p className="text-gray-600">
                      Based on your answers, you appear to be <strong className="text-premium-green">likely eligible for {likelyCount} program{likelyCount > 1 ? 's' : ''}</strong>. A CalHFA-approved lender can confirm exact eligibility.
                    </p>
                  ) : (
                    <p className="text-gray-600">
                      Based on your answers, eligibility may be limited — but there may still be options. Review each program below and connect with a lender to confirm.
                    </p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {eligibilityResults
                    .sort((a, b) => {
                      const order = { likely: 0, possibly: 1, unlikely: 2 }
                      return order[a.eligibility] - order[b.eligibility]
                    })
                    .map(({ program, eligibility }, index) => {
                      const config = eligibilityConfig[eligibility]
                      return (
                        <motion.div
                          key={program.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`rounded-2xl border-2 p-5 ${config.color}`}
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              {config.icon}
                              <h3 className="font-bold text-gray-900">{program.name}</h3>
                            </div>
                            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${config.badgeColor}`}>
                              {config.label}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-3">{program.description}</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="rounded-lg bg-white/60 p-2">
                              <p className="text-xs text-gray-500">Potential Benefit</p>
                              <p className="font-semibold text-gray-900">{program.benefit}</p>
                            </div>
                            <div className="rounded-lg bg-white/60 p-2">
                              <p className="text-xs text-gray-500">Repayment</p>
                              <p className="font-semibold text-gray-900">{program.repayment}</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                </div>

                <div className="rounded-2xl bg-premium-blue/5 border border-premium-blue/20 p-6 text-center mb-4">
                  <p className="font-semibold text-gray-900 mb-1">Ready to take the next step?</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Connect with a CalHFA-approved lender in Santa Clarita to verify your eligibility and start your pre-approval.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-premium-blue to-premium-blue-dark text-white hover:opacity-90">
                      Connect with a DPA Specialist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <p className="text-center text-xs text-gray-400">
                  This is an estimate only. Actual eligibility depends on current program guidelines, lender requirements, and income verification. Program availability and limits are subject to change.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
