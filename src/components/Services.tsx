import { Check } from 'lucide-react'
import { MEMBERSHIP_PLANS, MODULE_SERVICES } from '../constants'
import { Reveal, SectionHeader } from './shared'

export default function Services() {
  return (
    <section id="pricing" className="border-b border-line bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="PLANS & MODULES"
            title="PRICING PLANS."
            description="Choose the membership that best fits your business, then customise your experience with additional services whenever you need them."
          />
        </Reveal>

        {/* Membership plans */}
        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1} className="flex">
              <article
                className={`relative flex w-full flex-col p-8 sm:p-10 ${
                  plan.featured ? 'bg-ink text-white' : 'bg-paper text-ink'
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-0 top-0 bg-accent px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  {plan.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-sans text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className={`text-sm font-semibold ${plan.featured ? 'text-slate-400' : 'text-muted'}`}>
                    {plan.priceUnit}
                  </span>
                </div>
                <div className={`my-8 h-px ${plan.featured ? 'bg-slate-700' : 'bg-line'}`} />
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                      <span className={plan.featured ? 'text-slate-300' : 'text-muted'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-auto flex w-full items-center justify-center py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    plan.featured
                      ? 'bg-accent text-white hover:bg-white hover:text-ink'
                      : 'border border-ink text-ink hover:border-accent hover:bg-accent hover:text-white'
                  }`}
                  style={{ marginTop: '2.5rem' }}
                >
                  Get Started
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Additional services & modules */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-sans text-2xl font-black uppercase tracking-[-0.02em] text-ink sm:text-3xl">
              Additional Services & Modules
              <span className="text-accent">.</span>
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {MODULE_SERVICES.map((service, index) => (
              <Reveal key={service.name} delay={(index % 3) * 0.08} className="flex">
                <article className="group flex w-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-mist">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-sans text-lg font-black uppercase leading-tight tracking-[-0.01em] text-ink">
                      {service.name}
                    </h4>
                    <span className="shrink-0 text-xs font-bold tracking-[0.2em] text-subtle">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-sans text-3xl font-black tracking-[-0.03em] text-ink">
                      {service.price}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                      {service.priceUnit}
                    </span>
                  </div>
                  <div className="my-6 h-px bg-line" />
                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto block h-[3px] w-0 bg-accent pt-8 transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
