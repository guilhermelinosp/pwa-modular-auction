import React, {useState} from 'react'
import {ResetPasswordRequest} from '../services/apis/resetpassword-request'
import {ResetPasswordValidator} from '../services/validators/resetpassword-validator'
import '../styles/resetpassword-style.css'

export const ResetPasswordPage = () => {
  try {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleReset = async () => {
      try {
        await ResetPasswordValidator(password, confirmPassword)
        const response = await ResetPasswordRequest(password, confirmPassword)
        console.log(response.data)
      } catch (error) {
        console.error('handleReset failed:', error)
      }
    }

    return (
      <div className="ResetPage">
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    )
  } catch (error) {
    throw new Error('ResetPasswordPage failed:', error)
  }
}
