import bcrypt from 'bcrypt'

export const hash = (password: string) => bcrypt.hash(password, 12)
export const verify = (password: string, hash: string) => bcrypt.compare(password, hash)
