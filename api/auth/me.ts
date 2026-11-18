import { currentAdmin } from '../../server/auth'

type Res = { status: (code: number) => Res; json: (body: unknown) => void }
type Req = { headers: { cookie?: string } }

export default function handler(req: Req, res: Res) {
  const email = currentAdmin(req)
  if (!email) return res.status(401).json({ signedIn: false })
  return res.status(200).json({ signedIn: true, email })
}
