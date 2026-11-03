import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../constants'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur transition-[border-color,box-shadow] duration-300 ${
        scrolled ? 'border-line shadow-[0_1px_0_0_#E2E8F0]' : 'border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <a href="#top" onClick={close} aria-label="Netwyn Place home" className="shrink-0">
          <Logo wordmarkClassName="text-sm tracking-[0.25em]" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-ink sm:inline-flex"
          >
            BOOK A TOUR
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <ul className="flex flex-col px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-line last:border-b-0">
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex items-center justify-between py-4 text-sm font-bold uppercase tracking-[0.15em] text-ink hover:text-accent"
                  >
                    {link.label}
                    <span className="h-[2px] w-4 bg-accent" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-6 sm:hidden sm:px-6">
              <a
                href="#contact"
                onClick={close}
                className="flex w-full items-center justify-center bg-accent py-4 text-xs font-bold uppercase tracking-[0.15em] text-white"
              >
                BOOK A TOUR
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
