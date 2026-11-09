import { ArrowRight, Check } from 'lucide-react'
import { ADDITIONAL_SERVICES, MEMBERSHIP_PLANS, MODULE_SERVICES, SERVICES, SPACES } from '../constants'
import Video from './Video'
import { Reveal } from './shared'

/** Services: physical spaces, monthly membership plans, and additional services and modules. */
export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper px-3 py-24 sm:px-5 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-sans text-4xl font-normal uppercase tracking-[-0.03em] text-ink sm:text-5xl">
            {SERVICES.heading.replace(/\.$/, '')}
            <span className="inline-block animate-dot-pulse text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{SERVICES.description}</p>
        </Reveal>

        {/* Physical space highlights */}
        <div className="mt-16">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Physical Space Highlights</p>
          </Reveal>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {SPACES.map((space, index) => (
              <Reveal key={space.name} delay={index * 0.08} className="flex">
                <li className="group flex w-full flex-col overflow-hidden rounded-3xl bg-canvas">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <Video
                      src={space.video}
                      poster={space.image}
                      aria-label={`${space.name} preview`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-sans text-lg font-medium text-ink">{space.name}</h3>
                    <p className="mt-1 text-sm text-muted">{space.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Monthly membership plans */}
        <div className="mt-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Monthly Membership Plans</p>
          </Reveal>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {MEMBERSHIP_PLANS.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08} className="flex">
                <li
                  className={`relative flex w-full flex-col rounded-3xl p-8 ${
                    plan.featured ? 'bg-ink text-white' : 'bg-canvas text-ink'
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 animate-glow rounded-full bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-sans text-lg font-medium">{plan.name}</h3>
                  <p className="mt-6 flex items-baseline gap-2">
                    {plan.from && <span className={`text-xs font-medium uppercase tracking-[0.1em] ${plan.featured ? 'text-white/60' : 'text-muted'}`}>From</span>}
                    <span className="font-sans text-4xl font-normal tracking-[-0.03em]">{plan.price}</span>
                    <span className={`text-xs font-medium uppercase tracking-[0.1em] ${plan.featured ? 'text-white/60' : 'text-muted'}`}>
                      {plan.priceUnit}
                    </span>
                  </p>
                  <ul className="mt-8 flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                        <span className={plan.featured ? 'text-white/80' : 'text-muted'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-10 flex w-full items-center justify-center rounded-full py-3.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                      plan.featured ? 'bg-accent text-white hover:bg-white hover:text-ink' : 'bg-ink text-white hover:bg-accent'
                    }`}
                  >
                    JOIN TIER
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

          <div className="mt-12 flex flex-col gap-6 overflow-hidden rounded-[28px] bg-ink p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
                <span className="h-[2px] w-8 bg-accent" aria-hidden="true" />
                {SERVICES.membership.label}
              </p>
              <p className="mt-4 flex items-baseline gap-3">
                <span className="font-sans text-6xl font-light tracking-[-0.04em] sm:text-7xl">{SERVICES.membership.price}</span>
                <span className="font-sans text-lg font-medium text-white/70">{SERVICES.membership.tax}</span>
              </p>
            </div>
          </div>

        {/* Additional services & modules */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-sans text-3xl font-normal uppercase tracking-[-0.02em] text-ink sm:text-4xl">
              {ADDITIONAL_SERVICES.heading}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{ADDITIONAL_SERVICES.description}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {MODULE_SERVICES.map((service, index) => (
              <Reveal key={service.name} delay={(index % 3) * 0.06} className="flex">
                <li className="flex w-full flex-col rounded-3xl bg-canvas p-8">
                  <h4 className="font-sans text-lg font-medium text-ink">{service.name}</h4>
                  <p className="mt-5 flex items-baseline gap-2">
                    {service.from && <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted">From</span>}
                    <span className="font-sans text-3xl font-normal tracking-[-0.02em] text-ink">{service.price}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-accent">{service.priceUnit}</span>
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-ink py-3 text-xs font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    BOOK SERVICE
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
