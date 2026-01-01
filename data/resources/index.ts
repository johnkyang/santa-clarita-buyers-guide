import type { DownloadableResource, ResourceCategoryInfo } from '@/types/resource'

export const resourceCategories: ResourceCategoryInfo[] = [
  {
    slug: 'checklists',
    name: 'Checklists',
    description: 'Step-by-step checklists for your home buying journey',
    icon: 'CheckSquare',
  },
  {
    slug: 'guides',
    name: 'Buyer Guides',
    description: 'Comprehensive guides covering every aspect of buying a home',
    icon: 'BookOpen',
  },
  {
    slug: 'worksheets',
    name: 'Worksheets',
    description: 'Interactive worksheets to help you plan and budget',
    icon: 'FileSpreadsheet',
  },
  {
    slug: 'market-reports',
    name: 'Market Reports',
    description: 'Monthly market data and trends for Santa Clarita',
    icon: 'TrendingUp',
  },
  {
    slug: 'neighborhood-profiles',
    name: 'Neighborhood Profiles',
    description: 'Detailed profiles of Santa Clarita neighborhoods',
    icon: 'MapPin',
  },
]

export const resources: DownloadableResource[] = [
  {
    id: 'home-buyer-checklist',
    title: 'Complete Home Buyer Checklist',
    description: 'A comprehensive 12-page checklist covering every step from pre-approval to closing. Track your progress through the entire home buying process.',
    category: 'checklists',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    downloadUrl: '/downloads/home-buyer-checklist.pdf',
    featured: true,
    downloadCount: 1247,
    createdDate: '2025-01-15',
    tags: ['first-time buyer', 'checklist', 'process'],
  },
  {
    id: 'first-time-buyer-guide',
    title: 'First-Time Home Buyer Guide 2025',
    description: 'Everything you need to know about buying your first home in Santa Clarita, including down payment assistance programs, loan options, and neighborhood comparisons.',
    category: 'guides',
    fileType: 'PDF',
    fileSize: '4.8 MB',
    downloadUrl: '/downloads/first-time-buyer-guide-2025.pdf',
    featured: true,
    downloadCount: 2891,
    createdDate: '2025-01-01',
    tags: ['first-time buyer', 'guide', 'down payment assistance'],
  },
  {
    id: 'budget-worksheet',
    title: 'Home Buying Budget Worksheet',
    description: 'Calculate exactly how much home you can afford with this interactive Excel worksheet. Includes fields for income, debts, down payment, and estimated monthly costs.',
    category: 'worksheets',
    fileType: 'Excel',
    fileSize: '856 KB',
    downloadUrl: '/downloads/budget-worksheet.xlsx',
    featured: true,
    downloadCount: 1653,
    createdDate: '2025-01-10',
    tags: ['budget', 'calculator', 'affordability'],
  },
  {
    id: 'january-2025-market-report',
    title: 'Santa Clarita Market Report - January 2025',
    description: 'Detailed market analysis including median prices, inventory levels, days on market, and trends by neighborhood. Updated monthly.',
    category: 'market-reports',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    downloadUrl: '/downloads/market-report-january-2025.pdf',
    featured: true,
    downloadCount: 987,
    createdDate: '2025-01-31',
    tags: ['market data', 'statistics', 'trends'],
  },
  {
    id: 'neighborhood-comparison',
    title: 'Santa Clarita Neighborhood Comparison Chart',
    description: 'Side-by-side comparison of all 6 major Santa Clarita neighborhoods including price ranges, schools, commute times, and amenities.',
    category: 'neighborhood-profiles',
    fileType: 'PDF',
    fileSize: '1.9 MB',
    downloadUrl: '/downloads/neighborhood-comparison.pdf',
    featured: false,
    downloadCount: 743,
    createdDate: '2025-01-05',
    tags: ['neighborhoods', 'comparison', 'schools'],
  },
  {
    id: 'offer-strategy-guide',
    title: 'How to Write a Winning Offer',
    description: 'Strategic guide to crafting competitive offers in a seller\'s market, including contingencies, earnest money, and negotiation tactics.',
    category: 'guides',
    fileType: 'PDF',
    fileSize: '2.7 MB',
    downloadUrl: '/downloads/offer-strategy-guide.pdf',
    featured: false,
    downloadCount: 891,
    createdDate: '2025-01-12',
    tags: ['offers', 'negotiation', 'strategy'],
  },
  {
    id: 'home-inspection-checklist',
    title: 'Home Inspection Checklist',
    description: 'Know what to look for during your home inspection. This checklist covers structural, electrical, plumbing, and cosmetic items to evaluate.',
    category: 'checklists',
    fileType: 'PDF',
    fileSize: '1.4 MB',
    downloadUrl: '/downloads/home-inspection-checklist.pdf',
    featured: false,
    downloadCount: 1129,
    createdDate: '2025-01-08',
    tags: ['inspection', 'due diligence', 'checklist'],
  },
  {
    id: 'closing-costs-worksheet',
    title: 'Closing Costs Calculator',
    description: 'Estimate your closing costs with this detailed worksheet. Includes lender fees, title insurance, escrow, and other typical expenses.',
    category: 'worksheets',
    fileType: 'Excel',
    fileSize: '624 KB',
    downloadUrl: '/downloads/closing-costs-worksheet.xlsx',
    featured: false,
    downloadCount: 1342,
    createdDate: '2025-01-06',
    tags: ['closing costs', 'calculator', 'budget'],
  },
  {
    id: 'valencia-neighborhood-profile',
    title: 'Valencia Neighborhood Deep Dive',
    description: 'Complete profile of Valencia including schools, subdivisions, amenities, price trends, and demographics. Perfect for families considering Valencia.',
    category: 'neighborhood-profiles',
    fileType: 'PDF',
    fileSize: '5.3 MB',
    downloadUrl: '/downloads/valencia-profile.pdf',
    featured: false,
    downloadCount: 623,
    createdDate: '2025-01-18',
    tags: ['Valencia', 'schools', 'neighborhoods'],
  },
  {
    id: 'down-payment-assistance-guide',
    title: 'Complete Guide to Down Payment Assistance',
    description: 'Detailed overview of all available down payment assistance programs in California including CalHFA Dream For All, MyHome, GSFA, and local programs.',
    category: 'guides',
    fileType: 'PDF',
    fileSize: '3.9 MB',
    downloadUrl: '/downloads/down-payment-assistance-guide.pdf',
    featured: true,
    downloadCount: 2156,
    createdDate: '2025-01-14',
    tags: ['down payment assistance', 'CalHFA', 'programs'],
  },
]

export function getAllResources(): DownloadableResource[] {
  return resources
}

export function getFeaturedResources(): DownloadableResource[] {
  return resources.filter((r) => r.featured)
}

export function getResourcesByCategory(category: string): DownloadableResource[] {
  return resources.filter((r) => r.category === category)
}

export function getResourceById(id: string): DownloadableResource | undefined {
  return resources.find((r) => r.id === id)
}

export function getCategoryBySlug(slug: string): ResourceCategoryInfo | undefined {
  return resourceCategories.find((cat) => cat.slug === slug)
}
