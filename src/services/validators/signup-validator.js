export async function SignUpValidator(email, password, confirmPassword) {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,16}$/

    if (!email || !password || !confirmPassword) {
      throw new Error('email and password are required')
    }

    if (password !== confirmPassword) {
      throw new Error('passwords do not match')
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
    new Error('SignUpValidator failed:', error)
  }
}
