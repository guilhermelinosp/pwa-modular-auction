export async function OneTimePasswordValidator(otp) {
  try {
    const otpRegex = /^[0-9]{6}$/

    if (!otp) {
      throw new Error('otp is required')
    }

    if (!otpRegex.test(otp)) {
      throw new Error('otp must be 6 characters long and include only numbers')
    }
  } catch (error) {
    new Error('OneTimePasswordValidator failed:', error)
  }
}
