import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hash } from '@/lib/hash'

export async function POST(req: Request) {
  const { email, password, name } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const hashedPassword = await hash(password)

  const user = await db.user.create({
    data: {
      email: String(email),
      password: hashedPassword,
      name: name ? String(name) : null
    } as any
  })

  return NextResponse.json(user)
}
