import type { FAQ } from '@/types/guide'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FAQSchema } from '@/components/shared/faq-schema'

interface GuideFAQsProps {
  faqs: FAQ[]
}

export function GuideFAQs({ faqs }: GuideFAQsProps) {
  if (!faqs || faqs.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
