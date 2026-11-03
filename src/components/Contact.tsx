import { useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, CheckCircle2, ChevronDown, Lock, Mail, MapPin, Pencil, Phone, User } from 'lucide-react'
import { CONTACT, IMAGES, INTEREST_OPTIONS } from '../constants'
import { Eyebrow, Headline, Reveal } from './shared'
import { LogoMark } from './Logo'

type FormState = {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', interest: '', message: '' }

const FIELD_CLASS =
  'w-full border border-line bg-paper py-4 pl-12 pr-4 text-sm text-ink placeholder:text-subtle transition-colors duration-200 focus:border-accent focus:outline-none'

function Field({
  label,
  icon,
  children,
}: {
  label: string
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink">{label}</span>
      <span className="relative block">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-subtle">
          {icon}
        </span>
        {children}
      </span>
    </label>
  )
}

/** Stylised road map with a pin on Thornmount Drive and the 401 running past. */
function RoadMap() {
  return (
    <svg viewBox="0 0 400 180" className="h-auto w-full" role="img" aria-label="Map showing Thornmount Drive and Highway 401">
      <rect width="400" height="180" fill="#FAFAFA" />
      {/* Highway 401 */}
      <rect x="-10" y="58" width="420" height="34" fill="#E2E8F0" />
      <line x1="-10" y1="75" x2="410" y2="75" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="14 10" />
      <text x="26" y="52" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="800" fill="#0F172A" letterSpacing="2">
        HWY 401
      </text>
      {/* Thornmount Drive */}
      <rect x="236" y="92" width="22" height="110" fill="#E2E8F0" />
      <line x1="247" y1="92" x2="247" y2="202" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 8" />
      <text x="264" y="150" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#475569" letterSpacing="1.5" transform="rotate(90 264 150)">
        THORNMOUNT DR
      </text>
      {/* Parking block */}
      <rect x="90" y="110" width="110" height="56" fill="none" stroke="#94A3B8" strokeWidth="1" />
      <text x="145" y="142" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#94A3B8" letterSpacing="1.5">
        100+ PARKING
      </text>
      {/* Pin on Thornmount Dr */}
      <g transform="translate(247 96)">
        <circle r="14" fill="#FF5A00" fillOpacity="0.15" />
        <rect x="-6" y="-6" width="12" height="12" fill="#FF5A00" />
        <rect x="-2" y="-2" width="4" height="4" fill="#FFFFFF" />
      </g>
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState) => (event: { target: { value: string } }) =>
    setForm((current) => ({ ...current, [field]: event.target.value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    // Client-side handoff only: wire this to your CRM or email endpoint.
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(EMPTY_FORM)
    }, 700)
  }

  return (
    <section id="contact" className="border-b border-line bg-mist py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left column */}
        <Reveal className="lg:col-span-5">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <Headline text="LET'S CONNECT." className="mt-6" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Whether you're exploring membership options, booking a tour, or simply have a question, we'd love to hear from you.
          </p>

          <ul className="mt-12 flex flex-col gap-6">
            <li className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-accent">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-subtle">Location</p>
                <address className="mt-1 not-italic text-base font-semibold text-ink">
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-accent">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-subtle">Phone</p>
                <a href={CONTACT.phoneHref} className="mt-1 inline-block text-base font-semibold text-ink transition-colors hover:text-accent">
                  {CONTACT.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-accent">
                <Mail className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-subtle">Email</p>
                <a href={CONTACT.emailHref} className="mt-1 inline-block break-all text-base font-semibold text-ink transition-colors hover:text-accent">
                  {CONTACT.email}
                </a>
              </div>
            </li>
          </ul>

          {/* Getting here card */}
          <div className="mt-12 border border-line bg-paper">
            <div className="relative border-b border-line">
              {IMAGES.gettingHere ? (
                <img src={IMAGES.gettingHere} alt="Map of the Netwyn Place location" loading="lazy" className="h-44 w-full object-cover" />
              ) : (
                <RoadMap />
              )}
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-sans text-sm font-black uppercase tracking-[0.15em] text-ink">Getting Here</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Conveniently located with ample free parking and easy access from Highway 401.
              </p>
              <a
                href={CONTACT.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
              >
                VIEW DIRECTIONS
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right column: form card */}
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative border border-line bg-paper p-6 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-accent" aria-hidden="true" />
              <h3 className="font-sans text-xl font-black uppercase tracking-[-0.01em] text-ink sm:text-2xl">
                Send us a message
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  role="status"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-12 flex flex-col items-start gap-5 border border-ink p-8"
                >
                  <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
                  <h4 className="font-sans text-2xl font-black uppercase tracking-[-0.02em] text-ink">
                    Thank you<span className="text-accent">.</span>
                  </h4>
                  <p className="text-sm leading-relaxed text-muted">
                    Your message has been received. A member of our team will be in touch within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-ink underline decoration-accent decoration-2 underline-offset-8 hover:text-accent"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-10 grid gap-6 sm:grid-cols-2"
                >
                  <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-6">
                    <Field label="Full Name" icon={<User className="h-4 w-4" />}>
                      <input
                        required
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Jane Doe"
                        className={FIELD_CLASS}
                      />
                    </Field>
                    <Field label="Email Address" icon={<Mail className="h-4 w-4" />}>
                      <input
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="jane@company.com"
                        className={FIELD_CLASS}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-6">
                    <Field label="Phone Number" icon={<Phone className="h-4 w-4" />}>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="416-000-0000"
                        className={FIELD_CLASS}
                      />
                    </Field>
                    <Field label="Interest" icon={<ChevronDown className="h-4 w-4" />}>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={update('interest')}
                        className={`${FIELD_CLASS} appearance-none pr-10 ${form.interest ? 'text-ink' : 'text-subtle'}`}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {INTEREST_OPTIONS.map((option) => (
                          <option key={option} value={option} className="text-ink">
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Your Message" icon={<Pencil className="h-4 w-4" />}>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell us a little about what you need..."
                        className={`${FIELD_CLASS} resize-y pt-4`}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex w-full items-center justify-center gap-3 bg-accent py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-ink disabled:cursor-wait disabled:opacity-70"
                    >
                      {submitting ? 'SENDING…' : 'SEND MESSAGE'}
                      {!submitting && <ArrowRight className="h-4 w-4" />}
                    </button>
                    <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-muted">
                      <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      Your information is safe with us. We will never share your details.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <LogoMark className="h-6 w-6 text-ink" />
            <span className="font-sans text-xs font-black uppercase tracking-[0.3em] text-ink">NETWYN.PLACE</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
