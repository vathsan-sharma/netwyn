// Usage: node scripts/hash-password.mjs "your-password"
// Prints a bcrypt hash to paste into the ADMIN_PASSWORD_HASH environment variable on Vercel.
import bcrypt from 'bcryptjs'

const password = process.argv[2]
if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "your-password"')
  process.exit(1)
}
console.log(await bcrypt.hash(password, 12))
