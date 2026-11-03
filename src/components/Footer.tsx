import { useState, type FormEvent } from 'react'
import { CONTACT, FOOTER } from '../constants'
import Logo from './Logo'

const COLUMN_TITLE = 'mb-5 text-xs font-normal text-muted'
const LINK = 'text-sm text-ink transition-colors duration-200 hover:text-accent'

/**
 * Footer: brand and email capture on the left, then link, contact and hours columns.
 * The email field opens a pre-filled message to the team; nothing is stored on the site.
 */
export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const body = encodeURIComponent(`Please get in touch. My email is ${email}.`)
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Website enquiry')}&body=${body}`
  }

  return (
    <footer id="footer-contact" className="scroll-mt-24 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-paper px-6 py-14 sm:rounded-[36px] sm:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo wordmarkClassName="text-sm tracking-[0.2em]" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">{FOOTER.description}</p>

            <form onSubmit={handleSubmit} className="mt-8 flex max-w-sm items-center rounded-full bg-canvas p-1.5">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-subtle focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
              >
                Talk to us
              </button>
            </form>
          </div>

          <nav aria-label="Essential links" className="lg:col-span-2 lg:col-start-6">
            <h3 className={COLUMN_TITLE}>Essential links</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={LINK}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className={COLUMN_TITLE}>Contact</h3>
            <address className="flex flex-col gap-3 not-italic text-sm text-ink">
              {CONTACT.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <a href={CONTACT.phoneHref} className={`mt-2 ${LINK}`}>
                {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className={LINK}>
                {CONTACT.email}
              </a>
            </address>
          </div>

          <div className="lg:col-span-2">
            <h3 className={COLUMN_TITLE}>Hours</h3>
            <dl className="flex flex-col gap-4">
              {FOOTER.hours.map((hour) => (
                <div key={hour.label}>
                  <dt className="text-xs text-muted">{hour.label}</dt>
                  <dd className="mt-1 text-sm text-ink">{hour.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Netwyn Place. All rights reserved.</p>
          <p>{CONTACT.address}</p>
        </div>
      </div>
    </footer>
  )
}
