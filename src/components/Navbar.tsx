import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../constants'
import Logo from './Logo'

/** Transparent over the hero card, then a white bar once the page scrolls. */
export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.5)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)
  const light = !solid && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        light ? 'text-white' : 'bg-paper/95 text-ink shadow-[0_1px_0_0_#E2E8F0] backdrop-blur'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <a href="#top" onClick={close} aria-label="Netwyn Place home" className="shrink-0">
          <Logo wordmarkClassName="text-xs tracking-[0.2em] sm:text-sm" />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium transition-opacity hover:opacity-70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#footer-contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 sm:inline-flex ${
              light ? 'bg-white text-ink hover:bg-accent hover:text-white' : 'bg-ink text-white hover:bg-accent'
            }`}
          >
            Contact us
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              light ? 'bg-white/15 text-white' : 'bg-canvas text-ink'
            }`}
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
            className="overflow-hidden bg-paper text-ink lg:hidden"
          >
            <ul className="flex flex-col px-5 py-2 sm:px-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-line last:border-b-0">
                  <a href={link.href} onClick={close} className="block py-4 text-base font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-6 sm:px-8">
              <a
                href="#footer-contact"
                onClick={close}
                className="flex w-full items-center justify-center rounded-full bg-ink py-4 text-sm font-medium text-white"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
