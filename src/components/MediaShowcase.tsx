import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { GALLERY_FILTERS, GALLERY_ITEMS, type GalleryFilter } from '../constants'
import { Photo, Reveal, SectionHeader } from './shared'

export default function MediaShowcase() {
  const [active, setActive] = useState<GalleryFilter>('All Spaces')

  const items = GALLERY_ITEMS.filter(
    (item) => active === 'All Spaces' || item.category === active,
  )

  return (
    <section id="showcase" className="border-b border-line bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="SHOWCASE"
              title="EXPLORE NETWYN PLACE."
              description="Experience the natural lighting, thoughtfully designed workspaces, and premium amenities that define the Netwyn Place experience."
            />
          </div>
        </Reveal>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter spaces"
          className="mt-12 flex gap-px overflow-x-auto border border-line bg-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {GALLERY_FILTERS.map((filter) => {
            const selected = filter === active
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(filter)}
                className={`shrink-0 flex-1 whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 sm:text-[13px] ${
                  selected ? 'bg-ink text-white' : 'bg-paper text-muted hover:text-ink'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Gallery */}
        <motion.div layout className="mt-px grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.figure
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="group relative m-0 flex flex-col overflow-hidden bg-paper"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <Photo src={item.image} alt={item.title} />
                  </div>
                  <span className="absolute left-4 top-4 bg-paper px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-ink">
                    {item.category}
                  </span>
                </div>
                <figcaption className="flex items-start justify-between gap-4 border-t border-line p-6">
                  <div>
                    <h3 className="font-sans text-lg font-black uppercase tracking-[-0.01em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.capacity}</p>
                  </div>
                  <span className="shrink-0 border-l-2 border-accent pl-3 text-xs font-bold tracking-[0.12em] text-ink">
                    {item.sqft}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
