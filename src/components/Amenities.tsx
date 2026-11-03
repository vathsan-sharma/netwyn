import { AMENITIES } from '../constants'
import { Reveal, SectionHeader } from './shared'

export default function Amenities() {
  return (
    <section id="amenities" className="border-b border-line bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader eyebrow="AMENITIES" title="BUILT FOR PEAK WORK." />
        </Reveal>

        <div className="mt-16 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <Reveal key={amenity.title} delay={(index % 3) * 0.08}>
                <article className="group relative flex h-full flex-col border-b border-r border-line bg-paper p-8 transition-colors duration-300 hover:bg-ink sm:p-10">
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-7 w-7 text-ink transition-colors duration-300 group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs font-bold tracking-[0.2em] text-subtle transition-colors duration-300 group-hover:text-slate-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-12 font-sans text-lg font-black uppercase leading-tight tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-white">
                    {amenity.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-slate-300">
                    {amenity.description}
                  </p>
                  <span className="mt-auto block h-[2px] w-10 bg-accent pt-8 transition-all duration-300 group-hover:w-20" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
