import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { HERO, VIDEOS } from '../constants'
import Video from './Video'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

/** Rounded video hero: centered headline, description, and two CTAs. */
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

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col px-5 pb-10 pt-28 sm:px-8 sm:pb-12 lg:min-h-[780px] lg:px-10 lg:pt-32">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-5">
            <motion.h1
              {...rise(0.1)}
              className="whitespace-nowrap text-center font-sans text-[clamp(1.4rem,6vw,7rem)] font-semibold uppercase leading-[1] tracking-[-0.01em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
            >
              {HERO.headline.map((word, index) => (
                <span key={word} className={`inline-block overflow-hidden align-top ${index > 0 ? 'ml-[0.25em]' : ''}`}>
                  <span
                    className="inline-block animate-word-reveal"
                    style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                  >
                    {word === 'EMPOWER' ? <span className="text-accent">{word}</span> : word}
                  </span>
                </span>
              ))}
            </motion.h1>
          </div>

          <motion.div {...rise(0.25)} className="mt-auto flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-center font-sans text-xl font-light leading-snug sm:text-2xl lg:max-w-md">
              {HERO.description}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:shrink-0">
              <a
                href={HERO.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
              >
                {HERO.primaryCta.label}
                <ArrowRight className="h-4 w-4 animate-nudge transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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
        </div>
      </div>
    </section>
  )
}
