import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '../constants'
import { Reveal } from './shared'

/** FAQ: a title on the left, a single-open accordion of rounded rows on the right. */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="font-sans text-3xl font-normal tracking-[-0.02em] text-ink sm:text-4xl">
            Frequently asked<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Quick answers about hours, parking and booking. Anything else, just get in touch.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ul className="flex flex-col gap-3">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <li key={item.question} className="overflow-hidden rounded-3xl bg-paper">
                  <h3 className="m-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-button-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                    >
                      <span className="font-sans text-base font-medium text-ink sm:text-lg">{item.question}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-canvas text-ink">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-button-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-7 pr-16 text-sm leading-relaxed text-muted sm:text-base">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
