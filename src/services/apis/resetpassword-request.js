export async function ResetPasswordRequest(email, otp, password) {
  try {
    const response = await fetch(
      'http://localhost:5023/api/auth/v1/reset-password',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          otp: otp,
          password: password
        })
      }
    )

    return await response.json()
  } catch (error) {
    new Error('ResetPasswordRequest failed:', error)
  }
}
