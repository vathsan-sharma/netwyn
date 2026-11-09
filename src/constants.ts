import {
  Car,
  Coffee,
  Lock,
  PhoneCall,
  Presentation,
  Printer,
  Sofa,
  Wifi,
  type LucideIcon,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Brand & contact                                                     */
/* ------------------------------------------------------------------ */

export const BRAND = {
  name: 'Netwyn Place',
  wordmark: 'NETWYN.PLACE',
  url: 'https://netwyn.place',
} as const

export const CONTACT = {
  address: '10 Thornmount Drive, Scarborough, ON M1B 3J4',
  addressLines: ['10 Thornmount Drive', 'Scarborough, ON M1B 3J4'],
  phone: '416-906-1414',
  phoneHref: 'tel:+14169061414',
  email: 'hello@netwyn.place',
  emailHref: 'mailto:hello@netwyn.place',
  directionsHref:
    'https://www.google.com/maps/dir/?api=1&destination=10+Thornmount+Drive+Scarborough+ON+M1B+3J4',
} as const

/* ------------------------------------------------------------------ */
/* Videos. Served from /public/videos.                                 */
/* ------------------------------------------------------------------ */

export const VIDEOS = {
  hero: {
    src: '/videos/IMG_8746.mov',
    poster: '/posters/IMG_8746.jpg',
  },
  about: {
    src: '/videos/IMG_8744.mov',
    poster: '/posters/IMG_8744.jpg',
  },
  cta: {
    src: '/videos/IMG_8818.mov',
    poster: '/posters/IMG_8818.jpg',
  },
} as const

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export const NAV_CTA = { label: 'JOIN TODAY', href: '#contact' } as const

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const HERO = {
  headline: ['EDUCATE', 'EMPOWER', 'EXCEL.'],
  description:
    'A coworking space where ideas take shape, meaningful connections are built, and businesses thrive.',
  primaryCta: { label: 'EXPLORE SPACES', href: '#services' },
  secondaryCta: { label: 'SECURE AN OFFICE', href: '#contact' },
  scrollIndicator: 'SCROLL TO DISCOVER',
} as const

/* ------------------------------------------------------------------ */
/* Workplace essentials                                                */
/* ------------------------------------------------------------------ */

export interface Essential {
  icon: LucideIcon
  title: string
  description: string
}

export const AMENITIES_HEADING = 'WORKPLACE ESSENTIALS'

export const AMENITIES_DESCRIPTION =
  'At Netwyn Place, every detail has been thoughtfully considered to create an environment where you can focus on what matters most.'

export const ESSENTIALS: Essential[] = [
  {
    icon: Wifi,
    title: 'Super Fast Internet',
    description: 'Reliable, high-speed internet that keeps you connected without interruption.',
  },
  {
    icon: PhoneCall,
    title: 'Call Answering',
    description: 'Professional call answering services, ensuring you never miss an important opportunity.',
  },
  {
    icon: Car,
    title: 'Ample Free Parking',
    description: 'Convenient on-site parking for you, your team, and your clients.',
  },
  {
    icon: Coffee,
    title: 'Complimentary Coffee',
    description: 'Fresh coffee, available throughout the day to keep you refreshed and focused.',
  },
  {
    icon: Sofa,
    title: 'Member Lounge',
    description: 'A comfortable space to relax, connect, or enjoy an informal conversation.',
  },
  {
    icon: Printer,
    title: 'Printing & Scanning',
    description: 'Professional printing and scanning facilities whenever your business needs them.',
  },
  {
    icon: Lock,
    title: 'Secure Lockers',
    description: 'Safe and secure storage for your belongings, giving you complete peace of mind.',
  },
  {
    icon: Presentation,
    title: 'Boardroom Access',
    description: 'Professional meeting spaces equipped for presentations, collaboration, and client meetings.',
  },
]

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  eyebrow: 'ABOUT',
  badge: { value: '10K', caption: 'SQ. FT. SHARED SPACE' },
  headline: 'A COMMUNITY DESIGNED TO BREATHE.',
  paragraphs: [
    'At Netwyn Place, work feels different.',
    'We are a 10,000 sq. ft. coworking space in Scarborough designed for entrepreneurs, small businesses, professionals, and growing teams who want more than just a desk. Here, you get a bright, modern, and professional environment where you can focus, meet clients, build your business, and feel part of a real community.',
    'With natural light, flexible workspaces, high-end amenities, and a calm atmosphere away from the distractions of home, Netwyn Place gives you the space, support, and energy to do your best work every day. Whether you are starting something new or growing what you have already built, this is a place where your next step feels possible.',
  ],
  tagline: 'Your next big move starts here.',
} as const

/* ------------------------------------------------------------------ */
/* Services: physical spaces, membership plans, add-ons                */
/* ------------------------------------------------------------------ */

export const SERVICES = {
  heading: 'PRICING PLANS.',
  description:
    'Choose the membership that best fits your business, then customise your experience with additional services whenever you need them.',
  membership: {
    label: 'Annual Membership',
    price: '$499+',
    tax: '+ Tax',
    benefits: [
      'Unlimited Internet',
      'Use of Common Facilities',
      'Complimentary Coffee/Tea',
      'Use of Co-working Space',
    ],
  },
} as const

export interface Space {
  name: string
  video: string
  image: string
  description: string
}

export const SPACES: Space[] = [
  {
    name: 'Event Space',
    video: '/videos/IMG_8838.mov',
    image: '/posters/IMG_8838.jpg',
    description: 'A versatile space for large gatherings and presentations.',
  },
  {
    name: 'Private Office',
    video: '/videos/IMG_8744.mov',
    image: '/posters/IMG_8744.jpg',
    description: 'Quiet, professional environment for focused work.',
  },
  {
    name: 'Boardroom',
    video: '/videos/IMG_8818.mov',
    image: '/posters/IMG_8818.jpg',
    description: 'Equipped with latest audio and video features.',
  },
]

export interface MembershipPlan {
  name: string
  price: string
  priceUnit: string
  from?: boolean
  featured?: boolean
  features: string[]
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: 'Virtual Office',
    price: '$247',
    priceUnit: 'CAD / mo',
    from: true,
    features: [
      'Unlimited Internet',
      'Use of Business Address',
      'Mail & Parcel Handling',
      'Telephone Answering & Message Forwarding',
      'Hot Desk or Board Room Access (2 hrs/mo)',
    ],
  },
  {
    name: 'Hot Desk',
    price: '$397',
    priceUnit: 'CAD / mo',
    from: true,
    features: [
      'Unlimited Internet',
      'Use of Business Address',
      'Mail & Parcel Handling',
      'Telephone Answering',
      'Message Forwarding',
      'Board Room Access (3 hrs/mo)',
    ],
  },
  {
    name: 'Dedicated Desk',
    price: '$547',
    priceUnit: 'CAD / mo',
    from: true,
    featured: true,
    features: [
      'Unlimited Internet',
      'Use of Business Address',
      'Mail & Parcel Handling',
      'Telephone Answering',
      'Message Forwarding',
      'Board Room Access (5 hrs/mo)',
    ],
  },
  {
    name: 'Private Office Room',
    price: '$987',
    priceUnit: 'CAD / mo',
    from: true,
    features: [
      'Unlimited Internet',
      'Use of Business Address',
      'Mail & Parcel Handling',
      'Telephone Answering',
      'Message Forwarding',
      'Board Room Access (7 hrs/mo)',
      'Dedicated Room or Co-working Space (24/7/365 Access)',
    ],
  },
]

export const ADDITIONAL_SERVICES = {
  heading: 'ADDITIONAL SERVICES & MODULES',
  description:
    'Flexible day passes, hourly rentals, and business services to expand your workspace on demand.',
} as const

export interface ModuleService {
  name: string
  price: string
  priceUnit: string
  from?: boolean
  features: string[]
}

export const MODULE_SERVICES: ModuleService[] = [
  {
    name: 'Day Pass',
    price: '$27',
    priceUnit: 'CAD / 8 hrs + Membership',
    features: ['Unlimited Internet', 'Use of Co-working Space', 'Complimentary Coffee/Tea'],
  },
  {
    name: 'Mailing Address',
    price: '$47',
    priceUnit: 'CAD / mo',
    features: ['Use of Business Address', 'Mail Handling & Parcel Handling'],
  },
  {
    name: 'Private Meeting Room',
    price: '$22.50',
    priceUnit: 'CAD / hr or $100 / day',
    features: ['Unlimited Internet', 'Complimentary Coffee/Tea'],
  },
  {
    name: 'Board Room',
    price: '$40',
    priceUnit: 'CAD / hr or $300 / 8 hrs',
    features: ['Unlimited Internet', 'Conference Calls'],
  },
  {
    name: 'Training Room',
    price: '$180',
    priceUnit: 'CAD / hr or $750 / day',
    from: true,
    features: ['Unlimited Internet', 'Use of Common Facilities'],
  },
  {
    name: 'General Meeting Space',
    price: '$175',
    priceUnit: 'CAD / hr + Membership',
    from: true,
    features: ['Unlimited Internet', 'Use of Common Facilities', 'Complimentary Coffee/Tea'],
  },
  {
    name: 'Conference Room + General Meeting Space',
    price: '$1,400',
    priceUnit: 'CAD / day',
    from: true,
    features: [
      'Mandatory Membership',
      'Unlimited Internet',
      'Use of Common Facilities',
      'Complimentary Coffee/Tea',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Showcase                                                            */
/* ------------------------------------------------------------------ */

export const SHOWCASE = {
  heading: 'EXPLORE NETWYN PLACE.',
  description:
    'Experience the natural lighting, thoughtfully designed workspaces, and premium amenities that define the Netwyn Place experience.',
  clips: [
    {
      id: 'tour',
      tab: 'THE VIRTUAL TOUR',
      tag: 'SPACES • WALKTHROUGH',
      description:
        'A complete guided walk through of our 10,000 sq. ft. high-performance environment in Scarborough.',
      videoUrl: '/videos/IMG_8746.mov',
      posterUrl:
        '/posters/IMG_8746.jpg',
    },
    {
      id: 'lounge',
      tab: 'THE WORKPLACE ATMO',
      tag: '',
      description:
        'Witness the natural light, the curated coffee-fueled lounges, and the collaborative synergy of our community.',
      videoUrl: '/videos/IMG_8744.mov',
      posterUrl:
        '/posters/IMG_8744.jpg',
    },
    {
      id: 'entrance',
      tab: 'THE ENTRANCE',
      tag: 'ENTRANCE • FIRST IMPRESSION',
      fit: 'contain',
      description: 'Step inside through our welcoming entrance, featuring the Netwyn.Place brand wall.',
      videoUrl: '/videos/IMG_6608.mov',
      posterUrl: '/posters/IMG_6608.jpg',
    },
  ],
} as const

/* ------------------------------------------------------------------ */
/* Why us & FAQ (unchanged from wireframe build)                       */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Client voices                                                       */
/* ------------------------------------------------------------------ */

export const CLIENT_VOICES = {
  heading: 'CLIENT VOICES.',
  description:
    "The greatest measure of our success isn't what we say. It's what our members, clients, and community have to say about their experience.",
} as const

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I have attended six or seven business events at Netwyn Place in the past several months. I have always enjoyed the first rate hospitality of the staff and the quality of the events and presenters. Plus the food has always been very good. I look forward to attending more events in the very near future.',
    name: 'Michael Ballard',
    role: 'Business Attendee',
  },
  {
    quote:
      'Awesome facility to conduct seminars, workshops, conferences, tv shows etc. The IT professionals are the best. They did an excellent job with my website... Monfriese Rum Cakes.',
    name: 'Christine Monfriese',
    role: 'Owner, Monfriese Rum Cakes',
  },
  {
    quote:
      'Great shared office space. Also a perfect space for a mid sized event. The management is super accommodating and professional.',
    name: 'Shahzad Gidwani',
    role: 'Event Organizer',
  },
  {
    quote:
      'This place is awesome for entrepreneurs. They have seminars and temporary office rentals. If you haven’t checked it out - you should !',
    name: 'Tony Ning',
    role: 'Entrepreneur',
  },
  {
    quote:
      'Great place to network. I got great business leads through networking events at Netwyn Center.',
    name: 'Shahbaz Anjum',
    role: 'Leads Networker',
  },
  {
    quote:
      'Professional space, excellent board room and very kind and generous owner. Highly recommended .',
    name: 'Linda Ross',
    role: 'Consultant / Member',
  },
  {
    quote:
      'Fantastic co working place. Everyone needs to check this place out. Glad to be one of the original members here.',
    name: 'Jorge Solorzano',
    role: 'Original Member',
  },
]

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const CONTACT_SECTION = {
  eyebrow: 'GET IN TOUCH',
  heading: "LET'S CONNECT.",
  description:
    "Whether you're exploring membership options, booking a tour, or simply have a question, we'd love to hear from you.",
  cards: [
    { label: 'LOCATION', value: CONTACT.address, icon: 'location' },
    { label: 'PHONE', value: CONTACT.phone, href: CONTACT.phoneHref, icon: 'phone' },
    { label: 'EMAIL', value: CONTACT.email, href: CONTACT.emailHref, icon: 'mail' },
  ],
  gettingHere: {
    label: 'GETTING HERE',
    value: 'Conveniently located with ample free parking and easy access from Highway 401.',
    cta: 'VIEW DIRECTIONS',
    href: CONTACT.directionsHref,
    steps: [
      'Take the Morningside Rd North exit.',
      'Turn right onto Casebridge Ct.',
      'Turn right onto Venture Dr, the building will be on your left hand side.',
    ],
  },
  formHeading: 'SEND US A MESSAGE',
  fields: {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    interest: "I'm interested in",
    message: 'Your Message',
  },
  interestOptions: [
    'Coworking Space',
    'Dedicated Desk',
    'Private Office',
    'Virtual Office',
    'Meeting Room / Boardroom',
    'Event Space',
    'Day Pass',
    'Other Inquiry',
  ],
  submit: 'SEND MESSAGE',
  success: {
    title: 'Message Transmitted',
    body: 'Thank you for reaching out. Our team will contact you shortly.',
  },
  security: 'Your information is safe with us. We will never share your details.',
} as const

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const FOOTER = {
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
  motto: 'Reduction is Sophistication',
} as const
