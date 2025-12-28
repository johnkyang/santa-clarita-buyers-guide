import type { GuideSection as GuideSectionType } from '@/types/guide'

interface GuideSectionProps {
  section: GuideSectionType
  index: number
}

export function GuideSection({ section, index }: GuideSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-20">
      <h2 className="text-2xl font-bold">
        {index + 1}. {section.title}
      </h2>

      <div className="prose prose-slate mt-4 max-w-none dark:prose-invert">
        {section.content.split('\n\n').map((paragraph, pIndex) => {
          // Check if paragraph is a heading (starts with **)
          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
            const heading = paragraph.replace(/\*\*/g, '')
            return (
              <h3 key={pIndex} className="mt-6 text-lg font-semibold">
                {heading}
              </h3>
            )
          }

          // Check if paragraph is a list
          if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('•')) {
            const items = paragraph.split('\n')
            return (
              <ul key={pIndex} className="my-4 space-y-2">
                {items.map((item, iIndex) => {
                  const cleanItem = item.replace(/^[-•]\s*/, '').trim()
                  if (!cleanItem) return null

                  // Handle bold items (**: text**)
                  const parts = cleanItem.split(/\*\*([^*]+)\*\*/)
                  return (
                    <li key={iIndex} className="ml-4">
                      {parts.map((part, partIndex) =>
                        partIndex % 2 === 1 ? (
                          <strong key={partIndex}>{part}</strong>
                        ) : (
                          <span key={partIndex}>{part}</span>
                        )
                      )}
                    </li>
                  )
                })}
              </ul>
            )
          }

          // Handle numbered lists
          if (/^\d+\./.test(paragraph.trim())) {
            const items = paragraph.split(/\n(?=\d+\.)/)
            return (
              <ol key={pIndex} className="my-4 list-decimal space-y-2 pl-6">
                {items.map((item, iIndex) => {
                  const cleanItem = item.replace(/^\d+\.\s*/, '').trim()
                  if (!cleanItem) return null
                  return <li key={iIndex}>{cleanItem}</li>
                })}
              </ol>
            )
          }

          // Regular paragraph with bold support
          const parts = paragraph.split(/\*\*([^*]+)\*\*/)
          return (
            <p key={pIndex} className="my-4 leading-relaxed text-muted-foreground">
              {parts.map((part, partIndex) =>
                partIndex % 2 === 1 ? (
                  <strong key={partIndex} className="font-semibold text-foreground">
                    {part}
                  </strong>
                ) : (
                  <span key={partIndex}>{part}</span>
                )
              )}
            </p>
          )
        })}
      </div>

      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-8 space-y-8">
          {section.subsections.map((subsection, subIndex) => (
            <GuideSection key={subIndex} section={subsection} index={subIndex} />
          ))}
        </div>
      )}
    </section>
  )
}
