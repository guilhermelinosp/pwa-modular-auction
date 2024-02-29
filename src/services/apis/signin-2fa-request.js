export async function SignIn2faRequest(accountId, otp) {
  try {
    const response = await fetch(
      `http://localhost:5023/api/auth/v1/signin/${accountId}/${otp}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    return await response.json()
  } catch (error) {
    new Error('SignIn2faRequest failed:', error)
  }
}
