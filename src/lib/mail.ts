export async function sendResetEmail(email: string, token: string) {
  console.log(`Link de reset para ${email}: http://localhost:3000/reset-password?token=${token}`)
}
