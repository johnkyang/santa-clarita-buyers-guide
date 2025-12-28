import type { Timeline, BuyerType } from '@/types/lead'

export const TIMELINES: { value: Timeline; label: string }[] = [
  { value: 'immediately', label: 'Immediately (0-30 days)' },
  { value: '1-3-months', label: '1-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: '6-12-months', label: '6-12 Months' },
  { value: 'just-browsing', label: 'Just Browsing' },
]

export const BUYER_TYPES: { value: BuyerType; label: string; description: string }[] = [
  {
    value: 'first-time',
    label: 'First-Time Buyer',
    description: 'Purchasing your first home',
  },
  {
    value: 'investor',
    label: 'Investor',
    description: 'Looking for investment properties',
  },
  {
    value: 'relocating',
    label: 'Relocating',
    description: 'Moving to Santa Clarita from another area',
  },
  {
    value: 'downsizing',
    label: 'Downsizing',
    description: 'Moving to a smaller home',
  },
  {
    value: 'upsizing',
    label: 'Upsizing',
    description: 'Moving to a larger home',
  },
  {
    value: 'other',
    label: 'Other',
    description: 'Other buying situation',
  },
]

export const BEDROOM_OPTIONS = [
  { value: 1, label: '1 Bedroom' },
  { value: 2, label: '2 Bedrooms' },
  { value: 3, label: '3 Bedrooms' },
  { value: 4, label: '4 Bedrooms' },
  { value: 5, label: '5+ Bedrooms' },
]

export const BUDGET_RANGES = [
  { min: 0, max: 500000, label: 'Under $500K' },
  { min: 500000, max: 750000, label: '$500K - $750K' },
  { min: 750000, max: 1000000, label: '$750K - $1M' },
  { min: 1000000, max: 1500000, label: '$1M - $1.5M' },
  { min: 1500000, max: 2000000, label: '$1.5M - $2M' },
  { min: 2000000, max: 999999999, label: '$2M+' },
]

export const NEIGHBORHOODS = [
  { value: 'valencia', label: 'Valencia' },
  { value: 'newhall', label: 'Newhall' },
  { value: 'saugus', label: 'Saugus' },
  { value: 'canyon-country', label: 'Canyon Country' },
  { value: 'stevenson-ranch', label: 'Stevenson Ranch' },
  { value: 'castaic', label: 'Castaic' },
]
