import { HERO } from '../constants'

/** Headline numbers under the intro. */
export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
      <dl className="grid gap-12 lg:grid-cols-3 lg:gap-10">
        {HERO.metrics.map((metric) => (
          <div key={metric.label}>
            <dt className="sr-only">{metric.label}</dt>
            <dd className="m-0">
              <p className="font-sans text-4xl font-normal tracking-[-0.03em] text-ink sm:text-6xl">
                {metric.value}
                {metric.unit && (
                  <span className="ml-2 whitespace-nowrap text-lg text-accent sm:text-3xl">{metric.unit}</span>
                )}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{metric.label}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
