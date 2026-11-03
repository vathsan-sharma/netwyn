import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { HERO, SPACES } from '../constants'
import Video from './Video'

/** Horizontal, snap-scrolling row of room cards with a progress track and a "view more" button. */
export function SpacesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
  }

  // Thumb is sized to the visible share of the track.
  const thumbWidth = 100 / Math.max(SPACES.length, 1)

  return (
    <section id="spaces" className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-sans text-3xl font-normal tracking-[-0.02em] text-ink sm:text-4xl">
            Our spaces<span className="text-accent">.</span>
          </h2>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="mt-10 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:scroll-px-8 sm:px-8 lg:scroll-px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] [&::-webkit-scrollbar]:hidden"
      >
        {SPACES.map((space) => (
          <article key={space.name} className="group w-[82%] shrink-0 snap-start sm:w-[44%] lg:w-[30%]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-charcoal">
              <Video
                src={space.video}
                poster={space.image}
                aria-label={`${space.name} preview`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-sans text-xl font-medium text-ink">{space.name}</h3>
                <p className="mt-1 text-sm text-muted">{space.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative h-px w-full bg-line" aria-hidden="true">
          <div
            className="absolute inset-y-0 bg-ink transition-[left] duration-300"
            style={{ width: `${thumbWidth}%`, left: `${progress * (100 - thumbWidth)}%`, height: '2px', top: '-0.5px' }}
          />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#footer-contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent"
        >
          View more spaces
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}

/** Three headline numbers under the spaces row. */
export function Stats() {
  const picks = [HERO.metrics[0], HERO.metrics[2], HERO.metrics[1]]
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
      <dl className="grid gap-12 lg:grid-cols-3 lg:gap-10">
        {picks.map((metric) => (
          <div key={metric.label}>
            <dt className="sr-only">{metric.label}</dt>
            <dd className="m-0">
              <p className="font-sans text-4xl font-normal tracking-[-0.03em] text-ink sm:text-6xl">
                {metric.value}
                {metric.unit && (
                  <span className="ml-2 whitespace-nowrap text-lg text-accent sm:text-3xl">{metric.unit}</span>
                )}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{metric.label}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
