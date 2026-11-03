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
  { label: 'ABOUT', href: '#about' },
  { label: 'AMENITIES', href: '#amenities' },
  { label: 'PLANS', href: '#pricing' },
  { label: 'SHOWCASE', href: '#showcase' },
  { label: 'REVIEWS', href: '#reviews' },
  { label: 'CONTACT', href: '#contact' },
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
    { label: 'About', href: '#about' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Plans', href: '#pricing' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Book a Tour', href: '#contact' },
  ],
  spaces: ['Hot Desks', 'Dedicated Desks', 'Executive Suites', 'Boardrooms', 'Event Rentals'],
  hours: [
    { label: 'Day guests', value: 'Mon–Fri, 8:00 AM – 6:00 PM' },
    { label: 'Dedicated members', value: '24/7/365' },
  ],
} as const
