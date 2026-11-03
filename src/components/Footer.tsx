import { CONTACT, FOOTER } from '../constants'
import Logo from './Logo'

const COLUMN_TITLE = 'mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-subtle'
const LINK = 'text-sm text-slate-300 transition-colors duration-200 hover:text-accent'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {/* Brand */}
        <div>
          <Logo wordmarkClassName="text-sm text-white" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-400">{FOOTER.description}</p>
          <address className="mt-8 flex flex-col gap-2 not-italic text-sm text-slate-300">
            {CONTACT.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a href={CONTACT.phoneHref} className={`mt-2 ${LINK}`}>
              {CONTACT.phone}
            </a>
          </address>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className={COLUMN_TITLE}>Quick Links</h3>
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

        {/* Spaces */}
        <div>
          <h3 className={COLUMN_TITLE}>Spaces</h3>
          <ul className="flex flex-col gap-3">
            {FOOTER.spaces.map((space) => (
              <li key={space}>
                <a href="#pricing" className={LINK}>
                  {space}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className={COLUMN_TITLE}>Hours of Operation</h3>
          <dl className="flex flex-col gap-5">
            {FOOTER.hours.map((hour) => (
              <div key={hour.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{hour.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-white">{hour.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Netwyn Place. All rights reserved.</p>
          <a href={CONTACT.emailHref} className="transition-colors hover:text-accent">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
