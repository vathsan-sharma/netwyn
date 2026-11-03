import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'

const SHOW_AFTER_PX = 400

/** Floating square button that appears past 400px and smooth-scrolls to top. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center bg-ink text-white transition-colors duration-200 hover:bg-accent focus-visible:outline-accent sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
