export async function ForgotPasswordRequest(email) {
  try {
    const response = await fetch(
      'http://localhost:5023/api/auth/v1/forgot-password',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        })
      }
    )

    return await response.json()
  } catch (error) {
    new Error('ForgotPasswordRequest failed:', error)
  }
}
