import { motion } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HERO, VIDEOS } from '../constants'
import Video from './Video'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

/** Rounded video hero: headline, description, two CTAs, and a scroll indicator. */
export default function Hero() {
  return (
    <section id="top" className="px-3 pb-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-charcoal text-white sm:rounded-[36px]">
        <Video
          src={VIDEOS.hero.src}
          poster={VIDEOS.hero.poster}
          aria-label="Walkthrough of the sunlit Netwyn Place workspace"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />

        <div className="mx-auto flex min-h-[680px] max-w-7xl flex-col px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:min-h-[780px] lg:px-10 lg:pt-32">
          <motion.h1
            {...rise(0.1)}
            className="text-center font-sans text-[clamp(1.4rem,6vw,7rem)] font-light uppercase leading-[1] whitespace-nowrap tracking-[-0.02em] drop-shadow-[0_6px_30px_rgba(0,0,0,0.25)]"
          >
            {HERO.headline.map((word, index) => (
              <span key={word}>
                {index > 0 && ' '}
                {word === 'EMPOWER' ? <span className="text-accent">{word}</span> : word}
              </span>
            ))}
          </motion.h1>

          <motion.div {...rise(0.25)} className="mt-auto flex flex-col gap-8 pt-16 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-center font-sans text-xl font-light leading-snug sm:text-2xl">{HERO.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <a
                href={HERO.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
              >
                {HERO.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-medium text-white transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {HERO.secondaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <a
            href="#amenities"
            className="mt-10 hidden flex-col items-center gap-2 self-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white sm:flex"
          >
            {HERO.scrollIndicator}
            <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
