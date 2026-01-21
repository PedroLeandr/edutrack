import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import crypto from 'crypto'
import { sendResetEmail } from '@/lib/mail'

export async function POST(req: Request) {
  const { email } = await req.json()
  if (!email) return NextResponse.json({ error: 'Email obrigatório.' }, { status: 400 })

  const user = await db.user.findUnique({ where: { email } })
  if (!user) return NextResponse.json({ ok: true })

  const token = crypto.randomBytes(32).toString('hex')
  const expires = new Date(Date.now() + 3600_000)

  await db.user.update({
    where: { email },
    data: { resetToken: token, resetExpires: expires }
  })

  await sendResetEmail(email, token)
  return NextResponse.json({ ok: true })
}
