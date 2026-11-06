import { useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, CheckCircle2, ChevronDown, Lock, Mail, MapPin, Pencil, Phone, User } from 'lucide-react'
import { CONTACT_SECTION } from '../constants'
import { Reveal } from './shared'

type FormState = {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', interest: '', message: '' }

const FIELD_CLASS =
  'w-full rounded-2xl border border-line bg-paper py-4 pl-12 pr-4 text-sm text-ink placeholder:text-subtle transition-colors duration-200 focus:border-accent focus:outline-none'

const CARD_ICONS = { location: MapPin, phone: Phone, mail: Mail } as const

function Field({ label, icon, children }: { label: string; icon: ReactNode; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium text-ink">{label}</span>
      <span className="relative block">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-subtle">{icon}</span>
        {children}
      </span>
    </label>
  )
}

/** Contact: details and directions on the left, the message form on the right. */
export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const f = CONTACT_SECTION.fields

  const update = (field: keyof FormState) => (event: { target: { value: string } }) =>
    setForm((current) => ({ ...current, [field]: event.target.value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    // Client-side handoff only: connect this to your CRM or email endpoint.
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(EMPTY_FORM)
    }, 700)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-canvas px-3 py-24 sm:px-5 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-2 sm:px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="lg:col-span-5">
          <h2 className="font-sans text-4xl font-normal uppercase tracking-[-0.03em] text-ink sm:text-5xl">
            {CONTACT_SECTION.heading.replace(/\.$/, '')}
            <span className="inline-block animate-dot-pulse text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{CONTACT_SECTION.description}</p>

          <ul className="mt-12 flex flex-col gap-5">
            {CONTACT_SECTION.cards.map((card) => {
              const Icon = CARD_ICONS[card.icon]
              return (
                <li key={card.label} className="flex items-start gap-5 rounded-3xl bg-paper p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canvas text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">{card.label}</p>
                    {'href' in card ? (
                      <a href={card.href} className="mt-1 inline-block break-all text-base font-medium text-ink transition-colors hover:text-accent">
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-ink">{card.value}</p>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-6 rounded-3xl bg-paper p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">{CONTACT_SECTION.gettingHere.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{CONTACT_SECTION.gettingHere.value}</p>
            <ol className="mt-5 flex flex-col gap-2 text-sm text-ink">
              {CONTACT_SECTION.gettingHere.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="text-accent">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <a
              href={CONTACT_SECTION.gettingHere.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-accent"
            >
              {CONTACT_SECTION.gettingHere.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-[28px] bg-paper p-6 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12">
            <h3 className="font-sans text-xl font-medium uppercase tracking-[-0.01em] text-ink sm:text-2xl">
              {CONTACT_SECTION.formHeading}
            </h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  role="status"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-10 flex flex-col items-start gap-5 rounded-3xl bg-canvas p-8"
                >
                  <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <h4 className="font-sans text-2xl font-normal text-ink">{CONTACT_SECTION.success.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{CONTACT_SECTION.success.body}</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-ink underline decoration-accent decoration-2 underline-offset-8 hover:text-accent"
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
                    <Field label={f.name} icon={<User className="h-4 w-4" />}>
                      <input required name="name" autoComplete="name" value={form.name} onChange={update('name')} placeholder={f.name} className={FIELD_CLASS} />
                    </Field>
                    <Field label={f.email} icon={<Mail className="h-4 w-4" />}>
                      <input required type="email" name="email" autoComplete="email" value={form.email} onChange={update('email')} placeholder={f.email} className={FIELD_CLASS} />
                    </Field>
                  </div>

                  <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-6">
                    <Field label={f.phone} icon={<Phone className="h-4 w-4" />}>
                      <input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={update('phone')} placeholder={f.phone} className={FIELD_CLASS} />
                    </Field>
                    <Field label={f.interest} icon={<ChevronDown className="h-4 w-4" />}>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={update('interest')}
                        className={`${FIELD_CLASS} appearance-none pr-10 ${form.interest ? 'text-ink' : 'text-subtle'}`}
                      >
                        <option value="" disabled>
                          {f.interest}
                        </option>
                        {CONTACT_SECTION.interestOptions.map((option) => (
                          <option key={option} value={option} className="text-ink">
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label={f.message} icon={<Pencil className="h-4 w-4" />}>
                      <textarea required name="message" rows={5} value={form.message} onChange={update('message')} placeholder={f.message} className={`${FIELD_CLASS} resize-y pt-4`} />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex w-full items-center justify-center gap-3 rounded-full bg-accent py-4 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-ink disabled:cursor-wait disabled:opacity-70"
                    >
                      {submitting ? 'SENDING…' : CONTACT_SECTION.submit}
                      {!submitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                    </button>
                    <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-muted">
                      <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {CONTACT_SECTION.security}
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
