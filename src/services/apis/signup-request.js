export async function SignUpRequest(email, password) {
  try {
    const response = await fetch('http://localhost:5023/api/auth/v1/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    return await response.json()
  } catch (error) {
    new Error('SignUpRequest failed:', error)
  }
}
