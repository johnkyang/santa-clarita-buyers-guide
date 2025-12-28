export type Timeline =
  | 'immediately'
  | '1-3-months'
  | '3-6-months'
  | '6-12-months'
  | 'just-browsing'

export type BuyerType =
  | 'first-time'
  | 'investor'
  | 'relocating'
  | 'downsizing'
  | 'upsizing'
  | 'other'

export interface LeadFormData {
  // Basic Info
  firstName: string
  lastName: string
  email: string
  phone?: string

  // Property Preferences
  budgetMin?: number
  budgetMax?: number
  bedrooms?: number
  preferredNeighborhoods?: string[]
  timeline?: Timeline

  // Buyer Type
  buyerType?: BuyerType

  // Additional
  comments?: string

  // Metadata (added on submission)
  sourcePage?: string
}

export interface Lead extends LeadFormData {
  id: string
  createdAt: string
  updatedAt: string
  status: 'new' | 'contacted' | 'qualified' | 'unqualified'
}
