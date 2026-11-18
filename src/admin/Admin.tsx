import { useEffect, useState, type FormEvent } from 'react'
import { DEFAULT_PRICING } from '../lib/pricing'
import type { MembershipPlan, ModuleService, Pricing } from '../lib/pricing-types'

type Status = 'checking' | 'signed-out' | 'signed-in'

const FIELD = 'w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none'
const LABEL = 'flex flex-col gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-muted'
const BUTTON = 'rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200'

/** One item per line in the textareas. Blank lines are dropped when saving. */
const toLines = (items: string[]) => items.join('\n')

export default function Admin() {
  const [status, setStatus] = useState<Status>('checking')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pricing, setPricing] = useState<Pricing>(DEFAULT_PRICING)
  const [saving, setSaving] = useState(false)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    let cancelled = false
    fetch('/api/auth/me')
      .then((r) => (r.ok ? r.json() : null))
      .then(async (data) => {
        if (cancelled) return
        if (!data?.signedIn) return setStatus('signed-out')
        const current = await fetch('/api/pricing').then((r) => (r.ok ? r.json() : null))
        if (cancelled) return
        if (current) setPricing(current)
        setStatus('signed-in')
      })
      .catch(() => !cancelled && setStatus('signed-out'))
    return () => {
      cancelled = true
    }
  }, [])

  async function signIn(event: FormEvent) {
    event.preventDefault()
    setError('')
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      setError(data.error ?? 'Sign in failed')
      return
    }
    setPassword('')
    const current = await fetch('/api/pricing').then((r) => (r.ok ? r.json() : null))
    if (current) setPricing(current)
    setStatus('signed-in')
  }

  async function signOut() {
    await fetch('/api/auth/logout', { method: 'POST' })
    setStatus('signed-out')
  }

  async function save() {
    setSaving(true)
    setNotice('')
    const cleaned: Pricing = {
      membership: { ...pricing.membership, benefits: pricing.membership.benefits.map((b) => b.trim()).filter(Boolean) },
      plans: pricing.plans.map((p) => ({ ...p, features: p.features.map((f) => f.trim()).filter(Boolean) })),
      modules: pricing.modules.map((m) => ({ ...m, features: m.features.map((f) => f.trim()).filter(Boolean) })),
    }
    const response = await fetch('/api/pricing', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cleaned),
    })
    setSaving(false)
    if (response.status === 401) return setStatus('signed-out')
    const data = await response.json().catch(() => ({}))
    setNotice(response.ok ? 'Saved. The pricing section on the site is updated.' : data.error ?? 'Save failed')
    if (response.ok) setPricing(cleaned)
  }

  function updatePlan(index: number, patch: Partial<MembershipPlan>) {
    setPricing((c) => ({ ...c, plans: c.plans.map((p, i) => (i === index ? { ...p, ...patch } : p)) }))
  }
  function updateModule(index: number, patch: Partial<ModuleService>) {
    setPricing((c) => ({ ...c, modules: c.modules.map((m, i) => (i === index ? { ...m, ...patch } : m)) }))
  }

  if (status === 'checking') {
    return <div className="flex min-h-screen items-center justify-center font-sans text-muted">Loading…</div>
  }

  if (status === 'signed-out') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas px-5 font-sans">
        <form onSubmit={signIn} className="w-full max-w-sm rounded-3xl bg-paper p-8 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Admin</p>
          <h1 className="mt-3 text-3xl font-normal uppercase tracking-[-0.02em] text-ink">Sign in</h1>
          <div className="mt-8 flex flex-col gap-4">
            <label className={LABEL}>
              Email
              <input className={FIELD} type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label className={LABEL}>
              Password
              <input className={FIELD} type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
          </div>
          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          <button type="submit" className={`${BUTTON} mt-8 w-full bg-ink text-white hover:bg-accent`}>Sign in</button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-canvas px-5 py-10 font-sans text-ink sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Admin</p>
            <h1 className="mt-2 text-3xl font-normal uppercase tracking-[-0.02em]">Pricing</h1>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={signOut} className={`${BUTTON} border border-ink text-ink hover:bg-ink hover:text-white`}>Sign out</button>
            <button type="button" onClick={save} disabled={saving} className={`${BUTTON} bg-accent text-white disabled:opacity-60`}>
              {saving ? 'Saving…' : 'Save changes'}
            </button>
          </div>
        </div>
        {notice && <p className="mt-4 text-sm text-ink">{notice}</p>}

        <Section title="Annual membership fee">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className={LABEL}>Label<input className={FIELD} value={pricing.membership.label} onChange={(e) => setPricing((c) => ({ ...c, membership: { ...c.membership, label: e.target.value } }))} /></label>
            <label className={LABEL}>Price<input className={FIELD} value={pricing.membership.price} onChange={(e) => setPricing((c) => ({ ...c, membership: { ...c.membership, price: e.target.value } }))} /></label>
            <label className={LABEL}>Tax text<input className={FIELD} value={pricing.membership.tax} onChange={(e) => setPricing((c) => ({ ...c, membership: { ...c.membership, tax: e.target.value } }))} /></label>
          </div>
          <label className={`${LABEL} mt-4`}>Benefits (one per line)
            <textarea className={`${FIELD} min-h-28`} value={toLines(pricing.membership.benefits)} onChange={(e) => setPricing((c) => ({ ...c, membership: { ...c.membership, benefits: e.target.value.split('\n') } }))} />
          </label>
        </Section>

        <Section title="Monthly membership plans" onAdd={() => setPricing((c) => ({ ...c, plans: [...c.plans, { name: 'New plan', price: '$0', priceUnit: 'CAD / mo', features: [] }] }))}>
          {pricing.plans.map((plan, index) => (
            <Card key={index} onRemove={() => setPricing((c) => ({ ...c, plans: c.plans.filter((_, i) => i !== index) }))}>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className={LABEL}>Name<input className={FIELD} value={plan.name} onChange={(e) => updatePlan(index, { name: e.target.value })} /></label>
                <label className={LABEL}>Price<input className={FIELD} value={plan.price} onChange={(e) => updatePlan(index, { price: e.target.value })} /></label>
                <label className={LABEL}>Unit<input className={FIELD} value={plan.priceUnit} onChange={(e) => updatePlan(index, { priceUnit: e.target.value })} /></label>
              </div>
              <div className="mt-4 flex gap-6 text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!plan.from} onChange={(e) => updatePlan(index, { from: e.target.checked })} /> Show “From”</label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!plan.featured} onChange={(e) => updatePlan(index, { featured: e.target.checked })} /> Most popular</label>
              </div>
              <label className={`${LABEL} mt-4`}>Features (one per line)
                <textarea className={`${FIELD} min-h-28`} value={toLines(plan.features)} onChange={(e) => updatePlan(index, { features: e.target.value.split('\n') })} />
              </label>
            </Card>
          ))}
        </Section>

        <Section title="Additional services & modules" onAdd={() => setPricing((c) => ({ ...c, modules: [...c.modules, { name: 'New service', price: '$0', priceUnit: 'CAD / hr', features: [] }] }))}>
          {pricing.modules.map((service, index) => (
            <Card key={index} onRemove={() => setPricing((c) => ({ ...c, modules: c.modules.filter((_, i) => i !== index) }))}>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className={LABEL}>Name<input className={FIELD} value={service.name} onChange={(e) => updateModule(index, { name: e.target.value })} /></label>
                <label className={LABEL}>Price<input className={FIELD} value={service.price} onChange={(e) => updateModule(index, { price: e.target.value })} /></label>
                <label className={LABEL}>Unit<input className={FIELD} value={service.priceUnit} onChange={(e) => updateModule(index, { priceUnit: e.target.value })} /></label>
              </div>
              <label className="mt-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={!!service.from} onChange={(e) => updateModule(index, { from: e.target.checked })} /> Show “From”</label>
              <label className={`${LABEL} mt-4`}>Features (one per line)
                <textarea className={`${FIELD} min-h-24`} value={toLines(service.features)} onChange={(e) => updateModule(index, { features: e.target.value.split('\n') })} />
              </label>
            </Card>
          ))}
        </Section>
      </div>
    </div>
  )
}

function Section({ title, onAdd, children }: { title: string; onAdd?: () => void; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium uppercase tracking-[0.04em]">{title}</h2>
        {onAdd && <button type="button" onClick={onAdd} className={`${BUTTON} border border-ink text-ink hover:bg-ink hover:text-white`}>Add</button>}
      </div>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  )
}

function Card({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <div className="rounded-3xl bg-paper p-6">
      {children}
      <div className="mt-5 flex justify-end">
        <button type="button" onClick={onRemove} className="text-xs font-medium uppercase tracking-[0.12em] text-muted hover:text-accent">Remove</button>
      </div>
    </div>
  )
}
