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
    poster: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400&h=900',
  },
  about: {
    src: '/videos/IMG_8744.mov',
    poster: 'https://picsum.photos/seed/netwyn-office/800/600',
  },
  cta: {
    src: '/videos/IMG_8818.mov',
    poster: 'https://picsum.photos/seed/netwyn-boardroom/800/600',
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
  headline: 'SPACE TO GROW.',
  description:
    'A coworking space where ideas take shape, meaningful connections are built, and businesses thrive.',
  primaryCta: { label: 'EXPLORE SPACES', href: '#services' },
  secondaryCta: { label: 'SECURE AN OFFICE', href: '#contact' },
  scrollIndicator: 'SCROLL TO DISCOVER',
  metrics: [
    { value: '10,000', unit: 'SQ FT', label: 'Shared Space' },
    { value: '100+', unit: '', label: 'Free Parking Spaces' },
    { value: '1 Gbps', unit: '', label: 'Symmetric Fibre Wi-Fi' },
  ],
} as const

/* ------------------------------------------------------------------ */
/* Intro (lead copy, unchanged from wireframe build)                  */
/* ------------------------------------------------------------------ */

export const INTRO = {
  lead: 'We provide everything you need to work, create, and grow in one place.',
  statement:
    'From private meeting rooms to open coworking areas and creator-ready spaces, we bring together everything you need for productive work in one modern environment.',
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
    image: 'https://picsum.photos/seed/netwyn-event/800/600',
    description: 'A versatile space for large gatherings and presentations.',
  },
  {
    name: 'Private Office',
    video: '/videos/IMG_8744.mov',
    image: 'https://picsum.photos/seed/netwyn-office/800/600',
    description: 'Quiet, professional environment for focused work.',
  },
  {
    name: 'Boardroom',
    video: '/videos/IMG_8818.mov',
    image: 'https://picsum.photos/seed/netwyn-boardroom/800/600',
    description: 'Equipped with latest audio and video features.',
  },
]

export interface MembershipPlan {
  name: string
  price: string
  priceUnit: string
  featured?: boolean
  features: string[]
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: 'Hot Desk',
    price: '$397',
    priceUnit: 'CAD / mo',
    features: [
      'Unlimited Internet',
      'Business Address',
      'Mail & Parcel Handling',
      'Telephone Answering',
      'Message Forwarding',
      'Boardroom Access (3 hrs/mo)',
    ],
  },
  {
    name: 'Dedicated Desk',
    price: '$547',
    priceUnit: 'CAD / mo',
    featured: true,
    features: [
      'Everything in Hot Desk',
      'Dedicated Reserved Spot',
      'Boardroom Access (5 hrs/mo)',
    ],
  },
  {
    name: 'Private Office Room',
    price: '$987',
    priceUnit: 'CAD / mo',
    features: [
      'Everything in Dedicated Desk',
      'Private Locked Office',
      'Boardroom Access (7 hrs/mo)',
      '24/7/365 Access',
    ],
  },
  {
    name: 'Virtual Office',
    price: '$247',
    priceUnit: 'CAD / mo',
    features: [
      'Business Address',
      'Mail & Parcel Handling',
      'Telephone Answering',
      'Message Forwarding',
      'Hot Desk or Boardroom Access (2 hrs/mo)',
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
  features: string[]
}

export const MODULE_SERVICES: ModuleService[] = [
  {
    name: 'Day Pass',
    price: '$27',
    priceUnit: 'CAD / 8 hrs',
    features: [
      'Full Day Open Hot Desk Access',
      'Super Fast Wi-Fi & Lounge Access',
      'Complimentary Coffee & Tea',
      'Quiet Phone Booths & Free Parking',
    ],
  },
  {
    name: 'Mailing Address',
    price: '$47',
    priceUnit: 'CAD / mo',
    features: [
      'Prestigious Business Mailing Address',
      'Secure Mail & Parcel Reception',
      'Immediate Delivery Notifications',
      'Easy Pickup During Business Hours',
    ],
  },
  {
    name: 'Private Meeting Room',
    price: '$25.50',
    priceUnit: 'CAD / hr',
    features: [
      'Seating for 4 to 6 Attendees',
      'High-Definition Screen & HDMI Setup',
      'Super Fast Wi-Fi & Whiteboard',
      'Complimentary Refreshments & Parking',
    ],
  },
  {
    name: 'General Meeting Space',
    price: '$175',
    priceUnit: 'CAD / hr',
    features: [
      'Spacious Open Multi-Use Layout',
      'Ideal for Workshops & Seminars',
      'Integrated AV & Microphone System',
      'On-Site Coordinator Support',
    ],
  },
  {
    name: 'Training Room',
    price: '$180',
    priceUnit: 'CAD / hr',
    features: [
      'Flexible Classroom or Pod Seating',
      'High-Lumen Projector & Sound System',
      'Whiteboards & Marker Sets Included',
      'High-Speed Multi-Device Bandwidth',
    ],
  },
  {
    name: 'Conference Room + Event Space',
    price: '$1,400',
    priceUnit: 'CAD / day',
    features: [
      'Exclusive Full-Day Space Access',
      'Accommodates Large Corporate Events',
      'Comprehensive AV & Production Tech',
      'Ample Free Parking for All Guests',
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
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=675',
    },
    {
      id: 'lounge',
      tab: 'THE WORKPLACE ATMO',
      tag: 'ATMOSPHERE • COLLABORATIVE',
      description:
        'Witness the natural light, the curated coffee-fueled lounges, and the collaborative synergy of our community.',
      videoUrl: '/videos/IMG_8744.mov',
      posterUrl:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=675',
    },
  ],
} as const

/* ------------------------------------------------------------------ */
/* Why us & FAQ (unchanged from wireframe build)                       */
/* ------------------------------------------------------------------ */

export const WHY_US = [
  {
    title: 'Dedicated bandwidth',
    description: 'Fibre you do not share with neighbours, built for calls, uploads and client demos.',
  },
  {
    title: 'Minutes from Hwy 401',
    description: 'Easy to reach from across the East GTA, with free parking when you arrive.',
  },
  {
    title: 'Flexible membership',
    description: 'Day passes, hot desks, dedicated desks and private offices, so you can scale as you grow.',
  },
  {
    title: 'Real hospitality',
    description: 'Dedicated on-site managers and a coffee and tea bar, so the team can focus on work.',
  },
] as const

export const FAQS = [
  {
    question: 'What are your hours?',
    answer:
      'Day guests can use the space Monday to Friday, 8:00 AM to 6:00 PM. Dedicated members have 24/7/365 access.',
  },
  {
    question: 'Is parking free?',
    answer: 'Yes. We have 100+ free dedicated parking spots right in front of the building entrance.',
  },
  {
    question: 'Do you offer day passes?',
    answer:
      'Yes. An 8-hour day pass includes open hot desk access, fast Wi-Fi, complimentary coffee and tea, and free parking.',
  },
  {
    question: 'How do I book a tour?',
    answer: `Call ${CONTACT.phone} or email ${CONTACT.email} and we will arrange a time that suits you.`,
  },
] as const

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
  description:
    'A premium coworking and collaborative office hub on Thornmount Drive, minutes from Highway 401 in Scarborough.',
  quickLinks: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
  hours: [
    { label: 'Day guests', value: 'Mon–Fri, 8:00 AM – 6:00 PM' },
    { label: 'Dedicated members', value: '24/7/365' },
  ],
  motto: 'Reduction is Sophistication',
} as const
