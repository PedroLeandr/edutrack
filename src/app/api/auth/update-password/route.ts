import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hash } from '@/lib/hash'

export async function POST(req: Request) {
  const { token, password } = await req.json()
  if (!token || !password) return NextResponse.json({ error: 'Token e senha obrigatórios.' }, { status: 400 })

  const user = await db.user.findFirst({
    where: { resetToken: token, resetExpires: { gt: new Date() } }
  })
  if (!user) return NextResponse.json({ error: 'Token inválido ou expirado.' }, { status: 400 })

  await db.user.update({
    where: { id: user.id },
    data: { password: await hash(password), resetToken: null, resetExpires: null }
  })

  return NextResponse.json({ ok: true })
}
