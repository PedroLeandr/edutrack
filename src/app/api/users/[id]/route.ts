import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

interface Params {
  params: { id: string }
}

export async function GET(req: Request, { params }: Params) {
  const { id } = params
  const user = await db.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true
    }
  })

  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json(user)
}
