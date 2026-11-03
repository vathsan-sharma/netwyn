import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { HERO } from '../constants'
import Video from './Video'

const HERO_VIDEO = {
  src: 'https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8746.mov',
  poster: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400&h=900',
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Ambient architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E2E8F0 1px, transparent 1px)',
          backgroundSize: 'calc(100% / 12) 100%',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-28 sm:px-6 sm:pt-36 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-44">
        <div className="flex flex-col justify-center lg:col-span-7">
          <motion.div {...rise(0.1)} className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted sm:text-xs">
              {HERO.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.2)}
            className="mt-8 font-sans text-[3.25rem] font-black uppercase leading-[0.88] tracking-[-0.045em] text-ink sm:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem]"
          >
            SPACE
            <br />
            TO GROW
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            {...rise(0.35)}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div {...rise(0.45)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-accent"
            >
              EXPLORE MEMBERSHIPS
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              SCHEDULE A TOUR
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[320px] border border-line sm:min-h-[440px] lg:col-span-5 lg:min-h-[560px]"
        >
          <Video
            src={HERO_VIDEO.src}
            poster={HERO_VIDEO.poster}
            aria-label="Walkthrough of the sunlit Netwyn Place workspace"
            className="h-full w-full object-cover object-center lg:object-[center_right]"
          />
          {/* Soft white fade on the text-facing edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-paper to-transparent"
          />
          <div className="absolute -bottom-px -left-px bg-accent px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Scarborough, ON
          </div>
        </motion.div>
      </div>

      {/* Key metrics strip */}
      <div className="relative grid grid-cols-2 border-t border-line lg:grid-cols-4">
        {HERO.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 + index * 0.08 }}
            className={`px-5 py-6 sm:px-8 sm:py-8 ${
              index % 2 === 0 ? 'border-r border-line' : ''
            } ${index < 2 ? 'border-b border-line lg:border-b-0' : ''} lg:border-r lg:last:border-r-0`}
          >
            <p className="font-sans text-2xl font-black tracking-[-0.03em] text-ink sm:text-3xl">
              {metric.value}
              {metric.unit && (
                <span className="ml-2 text-xs font-bold tracking-[0.15em] text-accent">
                  {metric.unit}
                </span>
              )}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
