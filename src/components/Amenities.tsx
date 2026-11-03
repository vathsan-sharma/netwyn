import { AMENITIES_DESCRIPTION, AMENITIES_HEADING, ESSENTIALS } from '../constants'
import { Reveal } from './shared'

/** Workplace essentials: eight rounded cards in a grid. */
export default function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-24 bg-paper px-3 py-24 sm:px-5 lg:py-32">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-canvas px-5 py-16 sm:rounded-[36px] sm:px-10 lg:px-14 lg:py-20">
        <Reveal>
          <h2 className="font-sans text-4xl font-normal uppercase tracking-[-0.03em] text-ink sm:text-5xl">
            {AMENITIES_HEADING}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{AMENITIES_DESCRIPTION}</p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ESSENTIALS.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={(index % 4) * 0.05} className="flex">
                <li className="flex w-full flex-col rounded-3xl bg-paper p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.35)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-canvas text-ink">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-10 font-sans text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
