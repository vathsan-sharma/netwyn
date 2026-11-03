import { INTRO } from '../constants'
import { Reveal } from './shared'

/** Two-column intro: a small lead on the left, a large statement on the right. */
export default function Intro() {
  return (
    <section id="intro" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 pt-24 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="max-w-xs text-sm leading-relaxed text-muted">{INTRO.lead}</p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <p className="font-sans text-3xl font-normal leading-[1.2] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.75rem]">
            {INTRO.statement}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
