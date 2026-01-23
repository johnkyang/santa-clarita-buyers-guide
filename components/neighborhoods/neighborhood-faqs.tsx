import type { FAQ } from '@/types/neighborhood'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MessageCircleQuestion } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'
import { generateFAQSchema, renderJsonLd } from '@/lib/schema'

interface NeighborhoodFAQsProps {
  faqs: FAQ[]
  neighborhoodName: string
}

export function NeighborhoodFAQs({ faqs, neighborhoodName }: NeighborhoodFAQsProps) {
  if (!faqs || faqs.length === 0) return null

  const faqSchema = generateFAQSchema({ faqs })

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20">
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-premium-blue to-premium-blue-dark rounded-2xl flex items-center justify-center">
                <MessageCircleQuestion className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Get answers to common questions about buying a home in {neighborhoodName}.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-2 border-gray-100 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 bg-gradient-to-r from-premium-blue/10 to-premium-orange/10 rounded-2xl p-8 border-2 border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
              <p className="text-gray-700 mb-4">
                I&apos;m here to help you find the perfect home in {neighborhoodName}. Get in touch for personalized guidance.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-premium-blue to-premium-blue-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Contact Me
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
