export async function ResetPasswordValidator(password, confirmPassword) {
  try {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,16}$/

    if (!password || !confirmPassword) {
      throw new Error('password are required')
    }

    if (password !== confirmPassword) {
      throw new Error('passwords do not match')
    }

    if (!passwordRegex.test(password)) {
      throw new Error(
        'password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
    }
  } catch (error) {
    new Error('ResetPasswordValidator failed:', error)
  }
}
