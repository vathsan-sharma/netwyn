import { ABOUT, VIDEOS } from '../constants'
import Video from './Video'
import { Reveal } from './shared'

/** Dark about section: 10K badge, the heading, three paragraphs, the tagline, and the office video. */
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-charcoal py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <Reveal className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-accent" aria-hidden="true" />
            <span className="text-[11px] font-normal uppercase tracking-[0.22em] text-white/60">{ABOUT.eyebrow}</span>
          </div>

          <div className="mt-10 flex items-end gap-5">
            <span className="font-sans text-7xl font-light leading-none tracking-[-0.04em] text-accent sm:text-8xl">
              {ABOUT.badge.value}
            </span>
            <span className="mb-2 max-w-[9rem] text-[11px] font-medium uppercase leading-snug tracking-[0.14em] text-white/70">
              {ABOUT.badge.caption}
            </span>
          </div>

          <h2 className="mt-12 font-sans text-4xl font-normal uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            {ABOUT.headline.replace(/\.$/, '')}
            <span className="text-accent">.</span>
          </h2>

          <div className="mt-8 space-y-5">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-white/70 sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-10 border-l-2 border-accent pl-5 font-sans text-xl font-light text-white sm:text-2xl">
            {ABOUT.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink lg:aspect-[4/5] lg:sticky lg:top-28">
            <Video
              src={VIDEOS.about.src}
              poster={VIDEOS.about.poster}
              aria-label="Inside the Netwyn Place coworking floor"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
