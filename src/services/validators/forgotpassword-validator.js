export async function ForgotPasswordValidator(email) {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!email) {
      throw new Error('email are required')
    }

    if (!emailRegex.test(email)) {
      throw new Error('invalid email')
    }
  } catch (error) {
    new Error('ForgotPasswordValidator failed:', error)
  }
}
