/**
 * School Schema Component
 *
 * Uses the centralized schema generator from lib/schema.ts
 */

import type { School } from '@/types/neighborhood'
import { generateSchoolSchema } from '@/lib/schema'
import { JsonLd } from './json-ld'

interface SchoolSchemaProps {
  schools: School[]
  neighborhoodName: string
}

export function SchoolSchema({ schools, neighborhoodName }: SchoolSchemaProps) {
  // Convert School[] to SchoolItem[] format expected by generator
  const schoolItems = schools.map((school) => ({
    name: school.name,
    rating: school.rating,
  }))

  const schemas = generateSchoolSchema({
    schools: schoolItems,
    neighborhoodName,
  })

  return <JsonLd schema={schemas} />
}
