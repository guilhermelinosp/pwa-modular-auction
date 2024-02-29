export async function SignInValidator(email, password) {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,16}$/

    if (!email || !password) {
      throw new Error('email and password are required')
    }

    if (!passwordRegex.test(password)) {
      throw new Error(
        'password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
    }

    if (!emailRegex.test(email)) {
      throw new Error('invalid email')
    }
  } catch (error) {
    new Error('SignInValidator failed:', error)
  }
}
