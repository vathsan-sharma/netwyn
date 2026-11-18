import { put, list } from '@vercel/blob'
import { currentAdmin } from '../server/auth'
import { validatePricing } from '../src/lib/pricing-types'

const FILE = 'pricing.json'

type Res = {
  status: (code: number) => Res
  json: (body: unknown) => void
  setHeader: (name: string, value: string) => void
}
type Req = { method?: string; body?: unknown; headers: { cookie?: string } }

async function readPricing(): Promise<unknown | null> {
  const { blobs } = await list({ prefix: FILE, limit: 1 })
  const match = blobs.find((b) => b.pathname === FILE)
  if (!match) return null
  const response = await fetch(match.url, { cache: 'no-store' })
  if (!response.ok) return null
  return response.json()
}

export default async function handler(req: Req, res: Res) {
  if (req.method === 'GET') {
    try {
      const data = await readPricing()
      res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
      if (!data) return res.status(404).json({ error: 'No saved pricing yet' })
      return res.status(200).json(data)
    } catch {
      return res.status(500).json({ error: 'Could not load pricing' })
    }
  }

  if (req.method === 'PUT') {
    if (!currentAdmin(req)) return res.status(401).json({ error: 'Please sign in' })
    const problem = validatePricing(req.body)
    if (problem) return res.status(400).json({ error: problem })
    try {
      await put(FILE, JSON.stringify(req.body), {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
        cacheControlMaxAge: 60,
      })
      return res.status(200).json({ ok: true })
    } catch {
      return res.status(500).json({ error: 'Could not save pricing' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
