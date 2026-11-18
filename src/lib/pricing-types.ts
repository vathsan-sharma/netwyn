export interface MembershipPlan {
  name: string
  price: string
  priceUnit: string
  from?: boolean
  featured?: boolean
  features: string[]
}

export interface ModuleService {
  name: string
  price: string
  priceUnit: string
  from?: boolean
  features: string[]
}

export interface MembershipFee {
  label: string
  price: string
  tax: string
  benefits: string[]
}

export interface Pricing {
  membership: MembershipFee
  plans: MembershipPlan[]
  modules: ModuleService[]
}

const isString = (value: unknown): value is string => typeof value === 'string'
const isStringArray = (value: unknown): value is string[] => Array.isArray(value) && value.every(isString)

/** Checks the shape of pricing data before it is saved. Returns an error message, or null when valid. */
export function validatePricing(value: unknown): string | null {
  if (!value || typeof value !== 'object') return 'Pricing must be an object'
  const data = value as Partial<Pricing>

  const m = data.membership as Partial<MembershipFee> | undefined
  if (!m || !isString(m.label) || !isString(m.price) || !isString(m.tax) || !isStringArray(m.benefits)) {
    return 'Membership fee is incomplete'
  }
  if (!Array.isArray(data.plans) || data.plans.length === 0) return 'At least one membership plan is required'
  for (const p of data.plans as Partial<MembershipPlan>[]) {
    if (!isString(p.name) || !isString(p.price) || !isString(p.priceUnit) || !isStringArray(p.features)) {
      return 'Each membership plan needs a name, price, unit and features'
    }
  }
  if (!Array.isArray(data.modules)) return 'Modules must be a list'
  for (const s of data.modules as Partial<ModuleService>[]) {
    if (!isString(s.name) || !isString(s.price) || !isString(s.priceUnit) || !isStringArray(s.features)) {
      return 'Each module needs a name, price, unit and features'
    }
  }
  return null
}
