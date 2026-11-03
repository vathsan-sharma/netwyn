import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Volume2, VolumeX } from 'lucide-react'
import { GALLERY_FILTERS, GALLERY_ITEMS, type GalleryFilter } from '../constants'
import Video from './Video'
import { Photo, Reveal, SectionHeader } from './shared'

const CHROMATIC_VIDEOS = [
  {
    id: 'tour',
    tag: 'SPACES • WALKTHROUGH',
    title: 'THE VIRTUAL TOUR',
    description:
      'A complete guided walk through of our 10,000 sq. ft. high-performance environment in Scarborough.',
    videoUrl: 'https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8746.mov',
    posterUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=675',
  },
  {
    id: 'lounge',
    tag: 'ATMOSPHERE • COLLABORATIVE',
    title: 'THE WORKPLACE ATMO',
    description:
      'Witness the natural light, the curated coffee-fueled lounges, and the collaborative synergy of our community.',
    videoUrl: 'https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8744.mov',
    posterUrl:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=675',
  },
] as const

export default function MediaShowcase() {
  const [active, setActive] = useState<GalleryFilter>('All Spaces')
  const [tabIndex, setTabIndex] = useState(0)
  const [muted, setMuted] = useState(true)
  const clip = CHROMATIC_VIDEOS[tabIndex]

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

        {/* Cinematic video player */}
        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label="Video walkthroughs"
            className="flex gap-px border border-line bg-line"
          >
            {CHROMATIC_VIDEOS.map((video, index) => {
              const selected = index === tabIndex
              return (
                <button
                  key={video.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setTabIndex(index)}
                  className={`flex-1 px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 sm:text-[13px] ${
                    selected ? 'bg-ink text-white' : 'bg-paper text-muted hover:text-ink'
                  }`}
                >
                  {video.title}
                </button>
              )
            })}
          </div>

          <div className="grid border-x border-b border-line bg-paper lg:grid-cols-12">
            <div className="relative aspect-video overflow-hidden bg-ink lg:col-span-8">
              <Video
                key={clip.id}
                src={clip.videoUrl}
                poster={clip.posterUrl}
                muted={muted}
                aria-label={clip.title}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setMuted((value) => !value)}
                aria-label={muted ? 'Unmute video' : 'Mute video'}
                className="absolute right-4 top-4 flex items-center gap-2 bg-paper px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-accent hover:text-white"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                {muted ? 'Unmute' : 'Mute'}
              </button>
            </div>

            <div className="flex flex-col justify-center gap-5 border-t border-line p-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:p-10">
              <span className="w-fit border-l-2 border-accent pl-3 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                {clip.tag}
              </span>
              <h3 className="font-sans text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-ink">
                {clip.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted sm:text-base">{clip.description}</p>
            </div>
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
