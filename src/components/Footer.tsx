import { FOOTER } from '../constants'
import Logo from './Logo'

const COLUMN_TITLE = 'mb-5 text-xs font-medium text-muted'
const LINK = 'text-sm text-ink transition-colors duration-200 hover:text-accent'

/** Footer: brand stamp, social and legal links, copyright and motto. */
export default function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-paper px-6 py-14 sm:rounded-[36px] sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <Logo wordmarkClassName="text-sm tracking-[0.25em]" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className={COLUMN_TITLE}>Social</h3>
              <ul className="flex flex-col gap-3">
                {FOOTER.social.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={LINK}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={COLUMN_TITLE}>Legal</h3>
              <ul className="flex flex-col gap-3">
                {FOOTER.legal.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={LINK}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} Netwyn Place • {FOOTER.motto}
          </p>
        </div>
      </div>
    </footer>
  )
}
