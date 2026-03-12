'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight, ArrowLeft, MapPin, CheckCircle, Compass } from 'lucide-react'
import {
  quizQuestions,
  calculateNeighborhoodScores,
  neighborhoodMeta,
  type NeighborhoodSlug,
} from '@/data/quiz/neighborhood-scores'

type Step = 'intro' | 'questions' | 'email' | 'results'

interface LeadData {
  name: string
  email: string
  phone: string
}

export function QuizClient() {
  const [step, setStep] = useState<Step>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [lead, setLead] = useState<LeadData>({ name: '', email: '', phone: '' })
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [results, setResults] = useState<Array<{ slug: NeighborhoodSlug; score: number }>>([])

  const totalQuestions = quizQuestions.length
  const currentQuestion = quizQuestions[currentQ]
  const progress = ((currentQ + 1) / totalQuestions) * 100

  function handleAnswer(optionId: string) {
    const newAnswers = { ...answers, [currentQuestion.id]: optionId }
    setAnswers(newAnswers)

    if (currentQ < totalQuestions - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const scored = calculateNeighborhoodScores(newAnswers)
      setResults(scored)
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

    const top3 = results.slice(0, 3).map((r) => neighborhoodMeta[r.slug].name)

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          phone: lead.phone || undefined,
          interestedIn: top3,
          source: 'neighborhood-quiz',
          sourcePage: '/neighborhood-quiz',
          submittedAt: new Date().toISOString(),
          message: `Quiz answers: ${JSON.stringify(answers)}`,
          consent: true,
        }),
      })
    } catch {
      // Non-blocking — show results regardless
    }

    setSubmitting(false)
    setStep('results')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
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
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-navy-700/10">
                  <Compass className="h-10 w-10 text-navy-700" />
                </div>
                <h1 className="font-display text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                  Find Your Perfect Santa Clarita Neighborhood
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Answer 5 quick questions about your budget, lifestyle, and priorities. We&apos;ll match you to the Santa Clarita community that fits your family best.
                </p>
                <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 text-left space-y-3">
                  {['Takes 2 minutes', 'Personalized to your priorities', 'No sign-up until you see results', 'Free — always'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-[#10b981]" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  onClick={() => setStep('questions')}
                  className="group h-14 w-full bg-gradient-to-r from-navy-700 to-navy-800 px-8 text-lg font-bold text-white hover:opacity-90 transition-all duration-300 hover:scale-105 sm:w-auto"
                >
                  Start the Quiz
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
                      className="h-2 rounded-full bg-gradient-to-r from-navy-700 to-navy-800 transition-all duration-500"
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
                      className={`w-full rounded-xl border-2 p-4 text-left font-medium transition-all duration-200 hover:scale-[1.01] hover:border-navy-700 hover:bg-blue-50 ${
                        answers[currentQuestion.id] === option.id
                          ? 'border-navy-700 bg-blue-50 text-navy-800'
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10b981]/10">
                    <CheckCircle className="h-6 w-6 text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Quiz complete!</p>
                    <h2 className="font-display text-2xl font-bold text-gray-900">
                      Your neighborhood matches are ready
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Enter your info below and we&apos;ll show your personalized top 3 neighborhood recommendations plus key details for each.
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
                      className="mt-1 h-4 w-4 rounded border-gray-300 accent-navy-700"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                      I agree to receive my neighborhood recommendations and occasional helpful home buying information from Santa Clarita Buyers Guide. No spam, unsubscribe anytime.
                    </label>
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="group h-14 w-full bg-gradient-to-r from-navy-700 to-navy-800 text-lg font-bold text-white hover:opacity-90 transition-all duration-300"
                  >
                    {submitting ? 'Loading...' : 'Show My Neighborhood Matches'}
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
                <div className="mb-8 text-center">
                  <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
                    Your Top Neighborhood Matches
                  </h2>
                  <p className="text-gray-600">Based on your answers, here are the Santa Clarita neighborhoods that fit your family best.</p>
                </div>

                <div className="space-y-4 mb-8">
                  {results.slice(0, 3).map((result, index) => {
                    const meta = neighborhoodMeta[result.slug]
                    const medals = ['#1 Best Match', '#2 Great Fit', '#3 Worth Exploring']
                    const colors = [
                      'border-amber-400 bg-amber-50',
                      'border-gray-300 bg-gray-50',
                      'border-orange-300 bg-orange-50',
                    ]
                    const badgeColors = [
                      'bg-amber-400 text-amber-900',
                      'bg-gray-300 text-gray-700',
                      'bg-orange-300 text-orange-900',
                    ]
                    return (
                      <motion.div
                        key={result.slug}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.12 }}
                        className={`rounded-2xl border-2 p-5 ${colors[index]}`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold mb-1 ${badgeColors[index]}`}>
                              {medals[index]}
                            </span>
                            <h3 className="font-display text-xl font-bold text-gray-900">{meta.name}</h3>
                            <p className="text-sm text-gray-600">{meta.tagline}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-sm font-medium text-gray-500">Price Range</p>
                            <p className="font-bold text-gray-900 text-sm">{meta.priceRange}</p>
                          </div>
                        </div>
                        <ul className="space-y-1 mb-4">
                          {meta.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 shrink-0 text-[#10b981]" />
                              {h}
                            </li>
                          ))}
                        </ul>
                        <Link href={`/neighborhoods/${result.slug}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="group gap-2 border-gray-400 text-gray-700 hover:border-navy-700 hover:text-navy-700"
                          >
                            <MapPin className="h-4 w-4" />
                            Explore {meta.name}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="rounded-2xl bg-navy-700/5 border border-navy-700/20 p-6 text-center">
                  <p className="font-semibold text-gray-900 mb-1">Know your budget before you tour</p>
                  <p className="text-sm text-gray-600 mb-4">Use our free Buying Power Calculator to see your maximum purchase price in 60 seconds.</p>
                  <Link href="/buying-power">
                    <Button className="bg-gradient-to-r from-navy-700 to-navy-800 text-white hover:opacity-90">
                      Calculate My Buying Power
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
