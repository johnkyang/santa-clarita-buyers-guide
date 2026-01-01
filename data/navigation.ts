export interface NavItem {
  name: string
  href: string
  description?: string
}

export interface NavSection {
  name: string
  href: string
  children?: NavItem[]
}

export const mainNavigation: NavSection[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Neighborhoods',
    href: '/neighborhoods',
    children: [
      {
        name: 'Valencia',
        href: '/neighborhoods/valencia',
        description: 'Master-planned community with modern amenities',
      },
      {
        name: 'Newhall',
        href: '/neighborhoods/newhall',
        description: 'Historic charm meets modern living',
      },
      {
        name: 'Saugus',
        href: '/neighborhoods/saugus',
        description: 'Family-friendly living with excellent value',
      },
      {
        name: 'Canyon Country',
        href: '/neighborhoods/canyon-country',
        description: 'Spacious living with a rural feel',
      },
      {
        name: 'Stevenson Ranch',
        href: '/neighborhoods/stevenson-ranch',
        description: 'Upscale living in gated communities',
      },
      {
        name: 'Castaic',
        href: '/neighborhoods/castaic',
        description: 'Lakeside living with natural beauty',
      },
    ],
  },
  {
    name: 'Buyer Guides',
    href: '/guides',
    children: [
      {
        name: 'First-Time Home Buyer',
        href: '/guides/first-time-buyer',
        description: 'Complete guide with affordability calculator & assistance programs',
      },
      {
        name: 'Down Payment Assistance',
        href: '/down-payment-assistance',
        description: 'CalHFA, GSFA programs and funding options',
      },
      {
        name: 'Resale Homes',
        href: '/guides/resale',
        description: 'Navigate the existing home market',
      },
      {
        name: 'New Construction',
        href: '/guides/new-construction',
        description: 'Everything about buying brand-new homes',
      },
      {
        name: 'Senior 55+ Communities',
        href: '/guides/55-plus-communities',
        description: 'Active adult and retirement living',
      },
      {
        name: 'Reverse for Purchase',
        href: '/guides/reverse-mortgage',
        description: 'Financial options for seniors 62+',
      },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
    children: [
      {
        name: 'Market Updates',
        href: '/blog',
        description: 'Latest Santa Clarita housing market trends and analysis',
      },
      {
        name: 'Neighborhood Spotlights',
        href: '/blog',
        description: 'Deep dives into Santa Clarita communities',
      },
      {
        name: 'Buying Tips',
        href: '/blog',
        description: 'Expert advice for home buyers',
      },
      {
        name: 'Down Payment Assistance',
        href: '/blog',
        description: 'CalHFA and assistance program updates',
      },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    children: [
      {
        name: 'Free Checklists',
        href: '/resources',
        description: 'Step-by-step home buying checklists',
      },
      {
        name: 'Buyer Guides (PDF)',
        href: '/resources',
        description: 'Comprehensive downloadable guides',
      },
      {
        name: 'Worksheets & Calculators',
        href: '/resources',
        description: 'Budget and planning tools',
      },
      {
        name: 'Market Reports',
        href: '/resources',
        description: 'Monthly market data and trends',
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export const footerNavigation = {
  neighborhoods: [
    { name: 'Valencia', href: '/neighborhoods/valencia' },
    { name: 'Newhall', href: '/neighborhoods/newhall' },
    { name: 'Saugus', href: '/neighborhoods/saugus' },
    { name: 'Canyon Country', href: '/neighborhoods/canyon-country' },
    { name: 'Stevenson Ranch', href: '/neighborhoods/stevenson-ranch' },
    { name: 'Castaic', href: '/neighborhoods/castaic' },
  ],
  guides: [
    { name: 'First-Time Home Buyer Guide', href: '/guides/first-time-buyer' },
    { name: 'Down Payment Assistance', href: '/down-payment-assistance' },
    { name: 'Resale Home Guide', href: '/guides/resale' },
    { name: 'New Construction Guide', href: '/guides/new-construction' },
    { name: 'Senior 55+ Communities', href: '/guides/55-plus-communities' },
    { name: 'Reverse for Purchase', href: '/guides/reverse-mortgage' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Free Resources & Downloads', href: '/resources' },
    { name: 'Market Reports', href: '/blog' },
    { name: 'Neighborhood Guides', href: '/blog' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}
