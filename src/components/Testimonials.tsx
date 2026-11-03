import { Quote } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../constants'
import { Reveal, SectionHeader } from './shared'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="group flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-mist sm:p-10">
      <Quote className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
      <blockquote className="mt-8 flex-1">
        <p className="font-serif text-lg italic leading-relaxed text-ink sm:text-xl">
          &ldquo;{item.quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-10 flex items-center gap-4 border-t border-line pt-6">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink font-sans text-sm font-black tracking-wide text-white transition-colors duration-300 group-hover:bg-accent"
        >
          {initials(item.name)}
        </span>
        <div>
          <p className="font-sans text-sm font-black uppercase tracking-[0.05em] text-ink">
            {item.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {item.role}
            {item.company && <span className="text-accent"> · {item.company}</span>}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="border-b border-line bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="REVIEWS"
            title="CLIENT VOICES."
            description="The greatest measure of our success isn't what we say. It's what our members, clients, and community have to say about their experience."
          />
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1} className="flex">
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
