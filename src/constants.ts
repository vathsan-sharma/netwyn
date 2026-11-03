import {
  Armchair,
  Car,
  Coffee,
  KeyRound,
  Mail,
  Phone,
  Presentation,
  Sun,
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
  tagline: 'Coworking & executive suites',
  city: 'Scarborough, ON',
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
/* Imagery                                                             */
/* Drop licensed photography URLs in here (e.g. files in /public). An  */
/* empty string renders the architectural grid placeholder instead.    */
/* ------------------------------------------------------------------ */

export const IMAGES = {
  hero: '',
  about: '',
  gettingHere: '',
} as const

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { label: 'Spaces', href: '#spaces' },
  { label: 'Features', href: '#features' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
] as const

/* ------------------------------------------------------------------ */
/* Wireframe sections                                                  */
/* Copy below is drawn from the facts in this brief. Review before     */
/* launch.                                                             */
/* ------------------------------------------------------------------ */

export const VIDEOS = {
  hero: {
    src: '/videos/IMG_8746.mov',
    poster: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400&h=900',
  },
  features: {
    src: '/videos/IMG_8744.mov',
    poster: 'https://picsum.photos/seed/netwyn-office/800/600',
  },
  cta: {
    src: '/videos/IMG_8818.mov',
    poster: 'https://picsum.photos/seed/netwyn-boardroom/800/600',
  },
} as const

export const HERO_BADGE = 'Scarborough, ON · Coworking & executive suites'

export const FEATURES = [
  {
    title: '1 Gbps symmetric fibre',
    description: 'Enterprise dedicated fibre with failover, so uploads are as fast as downloads.',
  },
  {
    title: 'Light-filled workspace',
    description: 'Floor-to-ceiling perimeter windows deliver natural daylight all day.',
  },
  {
    title: 'Keyless smartphone access',
    description: 'Open the door from your phone, with 24/7 security and on-site hospitality managers.',
  },
  {
    title: '100+ free parking spots',
    description: 'Parking right in front of the building entrance, with 401 access in two minutes.',
  },
] as const

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
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: 'COWORKING & EXECUTIVE SUITES • SCARBOROUGH, ON',
  headline: 'SPACE TO GROW.',
  subtitle:
    'A premium, light-filled workspace designed for founders, remote teams, and ambitious creators. Ultra-fast fibre internet, private executive suites, flexible day passes, and collaborative meeting rooms.',
  metrics: [
    { value: '15,000+', unit: 'SQ FT', label: 'Premium Workspace' },
    { value: '1 Gbps', unit: '', label: 'Symmetric Fibre Wi-Fi' },
    { value: '100+', unit: '', label: 'Free Parking Spaces' },
    { value: 'Hwy 401', unit: '', label: '2 Minutes Access' },
  ],
} as const

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  eyebrow: 'ABOUT NETWYN PLACE',
  headline: 'THE SANCTUARY FOR FOCUS.',
  mission:
    'More than just desks and Wi-Fi. Netwyn Place is designed from the floor up to stimulate productivity, comfort, and meaningful professional networking.',
  highlights: [
    {
      icon: Sun,
      title: 'Architectural Natural Light',
      description:
        'Floor-to-ceiling perimeter windows delivering natural daylight all day.',
    },
    {
      icon: Armchair,
      title: 'Executive Infrastructure',
      description:
        'Enterprise acoustic soundproofing, ergonomic Steelcase/Herman Miller seating, and redundant power.',
    },
    {
      icon: KeyRound,
      title: 'Frictionless Access',
      description:
        'Keyless smartphone door access, 24/7 security, and dedicated on-site hospitality managers.',
    },
  ],
} as const

/* ------------------------------------------------------------------ */
/* Amenities                                                           */
/* ------------------------------------------------------------------ */

export interface Amenity {
  icon: LucideIcon
  title: string
  description: string
}

export const AMENITIES: Amenity[] = [
  {
    icon: Wifi,
    title: 'Ultra-Fast 1 Gbps Wi-Fi',
    description: 'Enterprise dedicated fibre with failover.',
  },
  {
    icon: Phone,
    title: 'Soundproof Phone Booths',
    description: 'Private acoustic pods for Zoom & client calls.',
  },
  {
    icon: Presentation,
    title: '4K Conference Boardrooms',
    description:
      'Polycom conference tech, high-lumen projectors & digital whiteboards.',
  },
  {
    icon: Coffee,
    title: 'Artisan Coffee & Tea Bar',
    description:
      'Complimentary locally-roasted espresso, cold brew, and herbal teas.',
  },
  {
    icon: Car,
    title: '100+ Free Dedicated Parking Spots',
    description: 'Hassle-free parking right in front of the building entrance.',
  },
  {
    icon: Mail,
    title: 'Secure Parcel & Mail Handling',
    description:
      'Commercial business address, package reception, and notification.',
  },
]

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

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
    price: '$199',
    priceUnit: '/ mo',
    features: [
      'Flexible open lounge & hot desk seating',
      'High-speed fibre Wi-Fi',
      '2 hours meeting room credits / mo',
      'Free coffee, tea & lounge access',
      'Business hours access',
    ],
  },
  {
    name: 'Dedicated Desk',
    price: '$349',
    priceUnit: '/ mo',
    featured: true,
    features: [
      'Reserved personal desk with ergonomic chair & lockable filing cabinet',
      '5 hours boardroom credits / mo',
      '24/7 keyless secure building access',
      'Business mailing address & mail handling included',
      'Free parking & guest passes',
    ],
  },
  {
    name: 'Private Office Suite',
    price: 'From $899',
    priceUnit: '/ mo',
    features: [
      'Fully furnished private lockable executive office (1 to 8 persons)',
      '10 hours boardroom credits / mo',
      '24/7 keycard access with private lock',
      'Company signage at office door',
      'Included high-speed ethernet ports + all building amenities',
    ],
  },
]

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
    priceUnit: '8 hrs',
    features: [
      'Full day open hot desk access',
      'Super fast Wi-Fi & lounge access',
      'Complimentary coffee & tea',
      'Quiet phone booths & free parking',
    ],
  },
  {
    name: 'Mailing Address',
    price: '$47',
    priceUnit: '/ mo',
    features: [
      'Prestigious business mailing address',
      'Secure mail & parcel reception',
      'Immediate delivery notifications',
      'Easy pickup during business hours',
    ],
  },
  {
    name: 'Private Meeting Room',
    price: '$25.50',
    priceUnit: '/ hr',
    features: [
      'Seating for 4 to 6 attendees',
      'High-definition screen & HDMI setup',
      'Super fast Wi-Fi & whiteboard',
      'Complimentary refreshments & parking',
    ],
  },
  {
    name: 'General Meeting Space',
    price: '$175',
    priceUnit: '/ hr',
    features: [
      'Spacious open multi-use layout',
      'Ideal for workshops & seminars',
      'Integrated AV & microphone system',
      'On-site coordinator support',
    ],
  },
  {
    name: 'Training Room',
    price: '$180',
    priceUnit: '/ hr',
    features: [
      'Flexible classroom or pod seating',
      'High-lumen projector & sound system',
      'Whiteboards & marker sets included',
      'High-speed multi-device bandwidth',
    ],
  },
  {
    name: 'Conference Room + Event Space',
    price: '$1,400',
    priceUnit: '/ day',
    features: [
      'Exclusive full-day space access',
      'Accommodates large corporate events',
      'Comprehensive AV & production tech',
      'Ample free parking for all guests',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Spaces (pricing section cards)                                      */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Showcase gallery                                                    */
/* capacity / sqft values are PLACEHOLDERS: confirm before launch.     */
/* ------------------------------------------------------------------ */

export const GALLERY_FILTERS = [
  'All Spaces',
  'Private Offices',
  'Coworking Lounge',
  'Meeting Rooms',
  'Café & Breakout',
] as const

export type GalleryFilter = (typeof GALLERY_FILTERS)[number]

export interface GalleryItem {
  title: string
  category: Exclude<GalleryFilter, 'All Spaces'>
  capacity: string
  sqft: string
  image: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Executive Suite',
    category: 'Private Offices',
    capacity: 'Up to 8 people',
    sqft: '320 SQ FT',
    image: '',
  },
  {
    title: 'Sunlit Coworking Lounge',
    category: 'Coworking Lounge',
    capacity: 'Open seating',
    sqft: '4,200 SQ FT',
    image: '',
  },
  {
    title: 'Boardroom',
    category: 'Meeting Rooms',
    capacity: 'Up to 12 people',
    sqft: '420 SQ FT',
    image: '',
  },
  {
    title: 'Training Room',
    category: 'Meeting Rooms',
    capacity: 'Up to 30 people',
    sqft: '900 SQ FT',
    image: '',
  },
  {
    title: 'Café & Breakout',
    category: 'Café & Breakout',
    capacity: 'Up to 20 people',
    sqft: '1,100 SQ FT',
    image: '',
  },
  {
    title: 'Private Office',
    category: 'Private Offices',
    capacity: 'Up to 4 people',
    sqft: '180 SQ FT',
    image: '',
  },
]

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Netwyn Place provided our startup the exact executive atmosphere we needed to host enterprise clients. The natural lighting and high-speed fibre are unmatched in the East GTA.',
    name: 'David K.',
    role: 'Founder',
    company: 'CloudScale Tech',
  },
  {
    quote:
      'Switching from working from home to a dedicated desk here tripled my daily focus. The free parking and easy 401 access save me 45 minutes of commute every single day.',
    name: 'Sarah M.',
    role: 'Senior Product Designer',
  },
  {
    quote:
      'The meeting spaces and AV setups are pristine. Whenever we host quarterly training sessions, everything works without friction and the on-site team is top-notch.',
    name: 'Marcus Chen',
    role: 'Operations Director',
  },
]

/* ------------------------------------------------------------------ */
/* Contact form                                                        */
/* ------------------------------------------------------------------ */

export const INTEREST_OPTIONS = [
  'Coworking Space',
  'Dedicated Desk',
  'Private Office',
  'Virtual Office',
  'Meeting Room / Boardroom',
  'Event Space',
  'Day Pass',
  'Other',
] as const

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const FOOTER = {
  description:
    'A premium coworking and collaborative office hub on Thornmount Drive, minutes from Highway 401 in Scarborough.',
  quickLinks: [
    { label: 'Features', href: '#features' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Book a Tour', href: '#footer-contact' },
  ],
  spaces: ['Hot Desks', 'Dedicated Desks', 'Executive Suites', 'Boardrooms', 'Event Rentals'],
  hours: [
    { label: 'Day guests', value: 'Mon–Fri, 8:00 AM – 6:00 PM' },
    { label: 'Dedicated members', value: '24/7/365' },
  ],
} as const
