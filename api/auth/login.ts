import { checkCredentials, sessionCookie, signSession } from '../../server/auth'

type Res = {
  status: (code: number) => Res
  json: (body: unknown) => void
  setHeader: (name: string, value: string) => void
}
type Req = { method?: string; body?: unknown; headers: { cookie?: string } }

export default async function handler(req: Req, res: Res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const body = (req.body ?? {}) as { email?: unknown; password?: unknown }
  const email = typeof body.email === 'string' ? body.email : ''
  const password = typeof body.password === 'string' ? body.password : ''
  if (!email || !password) return res.status(400).json({ error: 'Email and password are required' })

  const ok = await checkCredentials(email, password)
  if (!ok) return res.status(401).json({ error: 'Incorrect email or password' })

  res.setHeader('Set-Cookie', sessionCookie(signSession(email.trim().toLowerCase())))
  return res.status(200).json({ ok: true })
}
