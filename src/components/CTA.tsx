import { ArrowRight } from 'lucide-react'
import { CONTACT, VIDEOS } from '../constants'
import Video from './Video'
import { Reveal } from './shared'

/** Closing call to action: a rounded dark card with copy and a button on the left, boardroom video on the right. */
export default function CTA() {
  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <Reveal>
        <div className="grid overflow-hidden rounded-[28px] bg-charcoal text-white sm:rounded-[36px] lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <h2 className="font-sans text-4xl font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Ready to find your space<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              Book a tour, try a day pass, or talk to us about a dedicated desk or private office.
            </p>
            <div className="mt-10">
              <a
                href={CONTACT.emailHref}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[300px] bg-ink lg:min-h-[420px]">
            <Video
              src={VIDEOS.cta.src}
              poster={VIDEOS.cta.poster}
              aria-label="Boardroom at Netwyn Place"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
