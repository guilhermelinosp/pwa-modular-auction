import React, {useState} from 'react'
import {SignUpRequest} from '../services/apis/signup-request'
import {SignUpValidator} from '../services/validators/signup-validator'

import '../styles/signup-style.css'

export const SignUpPage = () => {
  try {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [otp, setOtp] = useState('')
    const [showOtpInput, setShowOtpInput] = useState(false)

    const handleSignUp = async () => {
      try {
        await SignUpValidator(email, password, confirmPassword)
        const response = await SignUpRequest(email, password)
        console.log(response.data)

        StorageEvent.setItem('accountId', response.data.accountId)

        setShowOtpInput(true)
      } catch (error) {
        new Error('handleSignUp failed:', error)
      }
    }

    const handleOTP = async () => {
      try {
        console.log('handleOTP')
      } catch (error) {
        new Error('handleOTP failed:', error)
      }
    }

    if (showOtpInput) {
      return (
        <div className="OtpPage">
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
      <div className="SignUpPage">
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            value={password}
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <button onClick={handleSignUp}>signup</button>
        </div>
      </div>
    )
  } catch (error) {
    throw new Error('SignUpPage failed:', error)
  }
}
