import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const INTERACTIVE = 'a, button, input, select, textarea, label, [role="button"]'

/**
 * Minimalist cursor: a solid orange dot that tracks the pointer exactly,
 * with a hairline ring trailing behind it. Mounted only on fine pointers.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.5 })

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!finePointer.matches) return

    const root = document.documentElement
    root.classList.add('has-custom-cursor')
    setEnabled(true)

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null
      setHovering(Boolean(target?.closest(INTERACTIVE)))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      root.classList.remove('has-custom-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] -ml-1 -mt-1 h-2 w-2 bg-accent"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] -ml-4 -mt-4 h-8 w-8 border border-ink/60"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.6 : 1, borderColor: hovering ? '#FF5A00' : 'rgba(15,23,42,0.6)' }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
    </>
  )
}
