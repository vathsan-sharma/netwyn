import { useState, type FormEvent, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { CONTACT, HERO, VIDEOS } from '../constants'
import Video from './Video'

const ROOM_TYPES = ['Boardroom', 'Private office', 'Event space', 'Coworking lounge'] as const
const VISITOR_OPTIONS = ['1', '2–4', '5–8', '9–20', '20+'] as const

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function SelectField({
  label,
  name,
  value,
  onChange,
  children,
}: {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  children: ReactNode
}) {
  return (
    <label className="relative flex min-w-0 flex-1 items-center justify-between gap-3 px-4 py-3 text-sm text-ink xl:px-6">
      <span className="sr-only">{label}</span>
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full min-w-0 appearance-none truncate bg-transparent pr-5 text-sm text-ink focus:outline-none"
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-muted xl:right-6" aria-hidden="true" />
    </label>
  )
}

/** Rounded video hero: one-line headline, description, and a booking bar with dropdowns. */
export default function Hero() {
  const [date, setDate] = useState('')
  const [visitors, setVisitors] = useState<string>(VISITOR_OPTIONS[0])
  const [room, setRoom] = useState<string>(ROOM_TYPES[0])

  const handleBook = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const body = encodeURIComponent(
      `Booking request\nDate & time: ${date || 'Not set'}\nVisitors: ${visitors}\nRoom type: ${room}`,
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Booking request')}&body=${body}`
  }

  return (
    <section id="top" className="px-3 pb-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-charcoal text-white sm:rounded-[36px]">
        <Video
          src={VIDEOS.hero.src}
          poster={VIDEOS.hero.poster}
          aria-label="Walkthrough of the sunlit Netwyn Place workspace"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />

        <div className="mx-auto flex min-h-[680px] max-w-7xl flex-col px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:min-h-[780px] lg:px-10 lg:pt-32">
          <motion.h1
            {...rise(0.1)}
            className="whitespace-nowrap text-center font-sans text-[clamp(1.4rem,6vw,7rem)] font-light uppercase leading-[1] tracking-[-0.02em] drop-shadow-[0_6px_30px_rgba(0,0,0,0.25)]"
          >
            {HERO.headline.map((word, index) => (
              <span key={word}>
                {index > 0 && ' '}
                {word === 'EMPOWER' ? <span className="text-accent">{word}</span> : word}
              </span>
            ))}
          </motion.h1>

          <motion.div {...rise(0.25)} className="mt-auto grid gap-6 pt-20 lg:grid-cols-2 lg:items-end">
            <div />
            <p className="max-w-md text-center text-sm leading-relaxed text-white/80 lg:justify-self-end">{HERO.description}</p>
          </motion.div>

          <motion.form
            {...rise(0.4)}
            onSubmit={handleBook}
            aria-label="Book a space"
            className="mt-10 flex flex-col gap-2 rounded-full bg-white p-2 text-ink shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] sm:flex-row sm:items-stretch"
          >
            <label className="relative flex min-w-0 flex-1 items-center px-4 py-3 text-sm text-ink sm:border-r sm:border-line xl:px-6">
              <span className="sr-only">Date and time</span>
              <input
                type="datetime-local"
                name="datetime"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="w-full bg-transparent text-sm text-ink focus:outline-none"
              />
            </label>
            <SelectField label="Visitors number" name="visitors" value={visitors} onChange={setVisitors}>
              {VISITOR_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  Visitors: {option}
                </option>
              ))}
            </SelectField>
            <SelectField label="Room type" name="room" value={room} onChange={setRoom}>
              {ROOM_TYPES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectField>
            <button
              type="submit"
              className="rounded-full bg-ink px-9 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent"
            >
              Book now
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
