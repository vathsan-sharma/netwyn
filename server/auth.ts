import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const COOKIE_NAME = 'newtyn_admin'
const MAX_AGE_SECONDS = 7 * 24 * 60 * 60

type Req = { headers: { cookie?: string } }

function secret(): string {
  const value = process.env.JWT_SECRET
  if (!value) throw new Error('JWT_SECRET is not set')
  return value
}

export function signSession(email: string): string {
  return jwt.sign({ sub: email, role: 'admin' }, secret(), { expiresIn: MAX_AGE_SECONDS })
}

export function sessionCookie(token: string): string {
  const secure = process.env.VERCEL_ENV === 'development' ? '' : '; Secure'
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${MAX_AGE_SECONDS}${secure}`
}

export function clearCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; Secure`
}

function readCookie(req: Req, name: string): string | undefined {
  const raw = req.headers.cookie ?? ''
  for (const part of raw.split(';')) {
    const [key, ...rest] = part.trim().split('=')
    if (key === name) return rest.join('=')
  }
  return undefined
}

/** Returns the signed-in admin email, or null when there is no valid session. */
export function currentAdmin(req: Req): string | null {
  const token = readCookie(req, COOKIE_NAME)
  if (!token) return null
  try {
    const payload = jwt.verify(token, secret()) as { sub?: string; role?: string }
    if (payload.role !== 'admin' || !payload.sub) return null
    return payload.sub
  } catch {
    return null
  }
}

/** Checks an email and password against the single admin account set in environment variables. */
export async function checkCredentials(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL
  const hash = process.env.ADMIN_PASSWORD_HASH
  if (!adminEmail || !hash) return false
  if (email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) {
    // Still run a compare so timing does not reveal whether the email exists.
    await bcrypt.compare(password, hash)
    return false
  }
  return bcrypt.compare(password, hash)
}
