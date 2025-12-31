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
        name: 'New Construction',
        href: '/guides/new-construction',
        description: 'Everything about buying brand-new homes',
      },
      {
        name: 'Resale Homes',
        href: '/guides/resale',
        description: 'Navigate the existing home market',
      },
      {
        name: '55+ Communities',
        href: '/guides/55-plus-communities',
        description: 'Active adult and retirement living',
      },
      {
        name: 'Reverse Mortgage',
        href: '/guides/reverse-mortgage',
        description: 'Financial options for seniors 62+',
      },
      {
        name: 'Down Payment Assistance',
        href: '/down-payment-assistance',
        description: 'CalHFA, GSFA programs and funding options',
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
    { name: 'New Construction Guide', href: '/guides/new-construction' },
    { name: 'Resale Home Guide', href: '/guides/resale' },
    { name: '55+ Communities', href: '/guides/55-plus-communities' },
    { name: 'Reverse Mortgage Info', href: '/guides/reverse-mortgage' },
    { name: 'Down Payment Assistance', href: '/down-payment-assistance' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}
