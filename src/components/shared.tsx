import type { ReactNode } from 'react'
import { motion } from 'motion/react'

/** Brutalist section title: uppercase, tight tracking, orange trailing dot. */
export function Headline({ text, className = '' }: { text: string; className?: string }) {
  const hasDot = text.endsWith('.')
  const body = hasDot ? text.slice(0, -1) : text
  return (
    <h2
      className={`font-sans text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl ${className}`}
    >
      {body}
      {hasDot && <span className="text-accent">.</span>}
    </h2>
  )
}

/** Centred section title with a short underline bar, as in the wireframe. */
export function SectionTitle({ title, align = 'center' }: { title: string; align?: 'center' | 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <Headline text={title} className="text-3xl sm:text-5xl" />
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-[3px] w-16 bg-accent" />
        <span className="h-[3px] w-6 bg-line" />
      </span>
    </div>
  )
}

/** Eyebrow label with a short orange accent bar. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-8 bg-accent" aria-hidden="true" />
      <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-muted">
        {children}
      </span>
    </div>
  )
}

/** Standard section header: eyebrow, headline, optional description. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Headline text={title} className={eyebrow ? 'mt-6' : ''} />
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

/** Fades and lifts children into view once. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Image slot. Renders the photograph when `src` is set, otherwise a
 * brutalist architectural grid so the layout holds before photography lands.
 */
export function Photo({
  src,
  alt,
  className = '',
}: {
  src?: string
  alt: string
  className?: string
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative h-full w-full overflow-hidden bg-mist ${className}`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-[10%] border border-line" />
      <div className="absolute inset-y-[10%] left-1/3 w-px bg-line" />
      <div className="absolute inset-y-[10%] right-1/3 w-px bg-line" />
      <div className="absolute inset-x-[10%] top-1/2 h-px bg-line" />
      <div className="absolute bottom-0 left-0 h-1 w-1/4 bg-accent" />
    </div>
  )
}
