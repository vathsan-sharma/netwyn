import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { SHOWCASE } from '../constants'
import Video from './Video'
import { Reveal } from './shared'

/** Atmosphere showcase: a large 16:9 player with two tabs and a mute/unmute control. */
export default function MediaShowcase() {
  const [tabIndex, setTabIndex] = useState(0)
  const [muted, setMuted] = useState(true)
  const clip = SHOWCASE.clips[tabIndex]

  return (
    <section id="showcase" className="scroll-mt-24 bg-ink px-3 py-24 text-white sm:px-5 lg:py-32">
      <div className="mx-auto max-w-7xl px-2 sm:px-5 lg:px-8">
        <Reveal>
          <h2 className="font-sans text-4xl font-normal uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            {SHOWCASE.heading.replace(/\.$/, '')}
            <span className="inline-block animate-dot-pulse text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{SHOWCASE.description}</p>
        </Reveal>

        <Reveal className="mt-12">
          <div role="tablist" aria-label="Video walkthroughs" className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            {SHOWCASE.clips.map((video, index) => {
              const selected = index === tabIndex
              return (
                <button
                  key={video.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setTabIndex(index)}
                  className={`rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                    selected ? 'bg-paper text-ink' : 'border border-white/20 text-white/70 hover:text-white'
                  }`}
                >
                  {video.tab}
                </button>
              )
            })}
          </div>

          <div className="relative mt-6 aspect-video overflow-hidden rounded-3xl bg-[#0B1120]">
            <Video
              key={clip.id}
              src={clip.videoUrl}
              poster={clip.posterUrl}
              muted={muted}
              aria-label={clip.tab}
              className={`h-full w-full ${'fit' in clip ? 'object-contain' : 'object-cover'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              {clip.tag && (
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">{clip.tag}</span>
              )}
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">{clip.description}</p>
            </div>
            <button
              type="button"
              onClick={() => setMuted((value) => !value)}
              aria-label={muted ? 'Unmute' : 'Mute'}
              className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-paper px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:bg-accent hover:text-white sm:right-6 sm:top-6"
            >
              {muted ? <VolumeX className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
              {muted ? 'Unmute' : 'Mute'}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
