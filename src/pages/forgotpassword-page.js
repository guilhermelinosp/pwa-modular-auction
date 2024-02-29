import React, {useState} from 'react'
import {ForgotPasswordRequest} from '../services/apis/forgotpassword-request'
import {ForgotPasswordValidator} from '../services/validators/forgotpassword-validator'
import {OneTimePasswordValidator} from '../services/validators/onetimepassword-validator'

import '../styles/forgotpassword-style.css'

export const ForgotPasswordPage = () => {
  try {
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [showOtpInput, setShowOtpInput] = useState(false)

    const handleForgot = async () => {
      try {
        await ForgotPasswordValidator(email)
        const response = await ForgotPasswordRequest(email)
        console.log(response.data)

        setShowOtpInput(true)
      } catch (error) {
        console.error('handleForgot failed:', error)
      }
    }

    const handleOTP = async () => {
      try {
        await OneTimePasswordValidator(otp)

        window.location.href = '/reset/'

        console.log('handleOTP')
      } catch (error) {
        console.error('handleOTP failed:', error)
      }
    }

    if (showOtpInput) {
      return (
        <div className="ForgotPage">
          <div className="input-container">
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
            />
            <button onClick={handleOTP}>submit otp</button>
          </div>
        </div>
      )
    }

    return (
      <div className="ForgotPage">
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={handleForgot}>submit otp</button>
        </div>
      </div>
    )
  } catch (error) {
    throw new Error('ForgotPasswordPage failed:', error)
  }
}
