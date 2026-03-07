import type { Metadata } from 'next'
import { QuizClient } from './quiz-client'

export const metadata: Metadata = {
  title: 'Find Your Perfect Santa Clarita Neighborhood | Free 2-Min Quiz',
  description:
    'Answer 5 quick questions about your budget, lifestyle, and priorities — we\'ll match you to your ideal Santa Clarita neighborhood. Free, no sign-up required.',
  keywords: [
    'santa clarita neighborhood quiz',
    'best neighborhood santa clarita',
    'which neighborhood santa clarita',
    'santa clarita neighborhood match',
    'where to live santa clarita',
  ],
  openGraph: {
    title: 'Find Your Perfect Santa Clarita Neighborhood | Free Quiz',
    description:
      'Not sure which Santa Clarita neighborhood is right for you? Take our free 2-minute quiz and get a personalized recommendation.',
  },
}

export default function NeighborhoodQuizPage() {
  return <QuizClient />
}
