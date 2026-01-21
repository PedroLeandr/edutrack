import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from './db'
import { verify } from './hash'

export const { handlers } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'database' },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        const email = credentials?.email as string
        const password = credentials?.password as string

        if (!email || !password) return null

        const user = await db.user.findUnique({ where: { email } })
        if (!user || !user.password) return null

        const isValid = await verify(password, user.password)
        if (!isValid) return null

        return user
      }
    })
  ]
})
