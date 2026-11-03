import { Quote } from 'lucide-react'
import { CLIENT_VOICES, TESTIMONIALS } from '../constants'
import { Reveal } from './shared'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/** Client voices: a horizontal, swipeable row of rounded review cards. */
export default function Testimonials() {
  return (
    <section id="reviews" className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2 className="font-sans text-4xl font-normal uppercase tracking-[-0.03em] text-ink sm:text-5xl">
            {CLIENT_VOICES.heading.replace(/\.$/, '')}
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{CLIENT_VOICES.description}</p>
        </Reveal>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:scroll-px-8 sm:px-8 lg:scroll-px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] [&::-webkit-scrollbar]:hidden">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.name}
            className="m-0 flex w-[84%] shrink-0 snap-start flex-col rounded-3xl bg-paper p-8 sm:w-[46%] lg:w-[36%] lg:p-10"
          >
            <Quote className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <blockquote className="mt-6 flex-1">
              <p className="font-serif text-base italic leading-relaxed text-ink sm:text-lg">&ldquo;{item.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4 pt-2">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-medium tracking-wide text-white"
              >
                {initials(item.name)}
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{item.name}</p>
                <p className="mt-0.5 text-xs text-muted">{item.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
