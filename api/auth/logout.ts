import { clearCookie } from '../../server/auth.js'

type Res = {
  status: (code: number) => Res
  json: (body: unknown) => void
  setHeader: (name: string, value: string) => void
}

export default function handler(_req: unknown, res: Res) {
  res.setHeader('Set-Cookie', clearCookie())
  return res.status(200).json({ ok: true })
}
