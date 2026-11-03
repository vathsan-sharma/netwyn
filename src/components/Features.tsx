import { ArrowRight, Presentation, Wifi, Coffee } from 'lucide-react'
import { VIDEOS } from '../constants'
import Video from './Video'
import { Reveal } from './shared'

const FEATURE_CARDS = [
  {
    icon: Wifi,
    title: 'Fully equipped workspaces',
    description: 'Fast Wi-Fi, ergonomic furniture and ready-to-use computer setups for productive work.',
  },
  {
    icon: Presentation,
    title: 'Meeting & collaboration rooms',
    description: 'Private rooms for calls, presentations, brainstorming sessions and team meetings.',
  },
  {
    icon: Coffee,
    title: 'Hospitality & amenities',
    description: 'A coffee and tea bar, soundproof phone booths and parking right at the entrance.',
  },
] as const

/** Dark feature panel: a headline and CTA on the left, the office video with three overlapping cards on the right. */
export default function Features() {
  return (
    <section id="features" className="bg-charcoal py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-12 lg:col-span-5">
          <div>
            <p className="text-xs font-normal uppercase tracking-[0.18em] text-white/55">Built for focus</p>
            <h2 className="mt-8 font-sans text-4xl font-normal leading-[1.1] tracking-[-0.03em] sm:text-5xl">
              Everything you need to work, meet and create<span className="text-accent">.</span>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/65">
              Flexible workspaces, modern equipment, cozy lounge areas and meeting rooms designed for freelancers, teams and creators.
            </p>
          </div>
          <a
            href="#footer-contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            Book a place
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink sm:aspect-[16/11]">
            <Video
              src={VIDEOS.features.src}
              poster={VIDEOS.features.poster}
              aria-label="Coworking floor at Netwyn Place"
              className="h-full w-full object-cover"
            />
          </div>

          <ul className="mt-6 flex flex-col gap-3 sm:-mt-24 sm:ml-8 sm:mr-auto sm:w-[78%] sm:gap-3 lg:ml-10">
            {FEATURE_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <li key={card.title} className="flex items-start gap-4 rounded-2xl bg-white p-5 text-ink shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)] sm:p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canvas">
                    <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-medium">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{card.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
