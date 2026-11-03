import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../constants'
import { Reveal } from './shared'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/** Reviews: a horizontal, swipeable row of rounded review cards. */
export default function Testimonials() {
  return (
    <section id="reviews" className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2 className="font-sans text-3xl font-normal tracking-[-0.02em] text-ink sm:text-4xl">
            What members say<span className="text-accent">.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] [&::-webkit-scrollbar]:hidden">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.name}
            className="m-0 flex w-[84%] shrink-0 snap-start flex-col rounded-3xl bg-paper p-8 sm:w-[46%] lg:w-[38%] lg:p-10"
          >
            <Quote className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <blockquote className="mt-6 flex-1">
              <p className="font-serif text-lg italic leading-relaxed text-ink sm:text-xl">&ldquo;{item.quote}&rdquo;</p>
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
                <p className="mt-0.5 text-xs text-muted">
                  {item.role}
                  {item.company && <span> · {item.company}</span>}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
