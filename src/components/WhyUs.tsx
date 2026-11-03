import { HelpCircle } from 'lucide-react'
import { WHY_US } from '../constants'
import { Reveal } from './shared'

/** Why-us cards: four rounded tiles giving reasons to choose Netwyn Place. */
export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <Reveal>
        <h2 className="font-sans text-3xl font-normal tracking-[-0.02em] text-ink sm:text-4xl">
          Why choose us<span className="text-accent">.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_US.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className="flex">
            <article className="flex w-full flex-col rounded-3xl bg-paper p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.35)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-canvas text-ink">
                <HelpCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-12 font-sans text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
