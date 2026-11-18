import { useEffect, useState } from 'react'
import { MEMBERSHIP_PLANS, MODULE_SERVICES, SERVICES } from '../constants'
import type { Pricing } from './pricing-types'

/** The pricing shipped with the site. Used until a saved version is loaded from the API. */
export const DEFAULT_PRICING: Pricing = {
  membership: {
    label: SERVICES.membership.label,
    price: SERVICES.membership.price,
    tax: SERVICES.membership.tax,
    benefits: [...SERVICES.membership.benefits],
  },
  plans: MEMBERSHIP_PLANS.map((plan) => ({ ...plan, features: [...plan.features] })),
  modules: MODULE_SERVICES.map((service) => ({ ...service, features: [...service.features] })),
}

/** Loads pricing from the API, falling back to the built-in defaults if nothing is saved yet. */
export function usePricing(): Pricing {
  const [pricing, setPricing] = useState<Pricing>(DEFAULT_PRICING)

  useEffect(() => {
    let cancelled = false
    fetch('/api/pricing')
      .then((response) => (response.ok ? response.json() : null))
      .then((data: Pricing | null) => {
        if (!cancelled && data) setPricing(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return pricing
}
