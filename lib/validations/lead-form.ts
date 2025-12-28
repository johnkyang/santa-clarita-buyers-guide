import { z } from 'zod'

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

export const leadFormSchema = z.object({
  // Basic Info
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(100, 'First name must be less than 100 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(100, 'Last name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(phoneRegex, 'Please enter a valid phone number (e.g., 555-555-5555)')
    .optional()
    .or(z.literal('')),

  // Property Preferences
  budgetMin: z.number().min(0).optional(),
  budgetMax: z.number().min(0).optional(),
  bedrooms: z.number().min(1).max(10).optional(),
  preferredNeighborhoods: z.array(z.string()).optional(),
  timeline: z
    .enum(['immediately', '1-3-months', '3-6-months', '6-12-months', 'just-browsing'])
    .optional(),

  // Buyer Type
  buyerType: z
    .enum(['first-time', 'investor', 'relocating', 'downsizing', 'upsizing', 'other'])
    .optional(),

  // Additional
  comments: z.string().max(1000, 'Comments must be less than 1000 characters').optional(),
}).refine(
  (data) => {
    // If both budgets are provided, max should be greater than min
    if (data.budgetMin && data.budgetMax) {
      return data.budgetMax >= data.budgetMin
    }
    return true
  },
  {
    message: 'Maximum budget must be greater than or equal to minimum budget',
    path: ['budgetMax'],
  }
)

export type LeadFormData = z.infer<typeof leadFormSchema>
