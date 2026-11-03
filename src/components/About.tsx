import { ABOUT, IMAGES } from '../constants'
import { Photo, Reveal, SectionHeader } from './shared'

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.headline} />
            <p className="mt-8 max-w-xl border-l-2 border-accent pl-6 font-serif text-xl italic leading-relaxed text-muted sm:text-2xl">
              {ABOUT.mission}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative aspect-[4/3] border border-line">
              <Photo src={IMAGES.about} alt="Floor-to-ceiling windows filling the workspace with daylight" />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid border-l border-t border-line md:grid-cols-3">
          {ABOUT.highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <article className="group relative h-full border-b border-r border-line p-8 transition-colors duration-300 hover:bg-mist sm:p-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-ink text-ink transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-sans text-xs font-bold tracking-[0.2em] text-subtle">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-10 font-sans text-xl font-black uppercase tracking-[-0.01em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
