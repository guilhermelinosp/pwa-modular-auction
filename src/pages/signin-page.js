import React, { useState } from 'react'
import { SignIn2faRequest } from '../services/apis/signin-2fa-request'
import { SignInRequest } from '../services/apis/signin-request'
import { LocalStorage } from '../services/storages/local-storage'

import { OneTimePasswordValidator } from '../services/validators/onetimepassword-validator'
import { SignInValidator } from '../services/validators/signin-validator'

import '../styles/signin-style.css'

export const SignInPage = () => {
  try {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [otp, setOtp] = useState('')
    const [showOtpInput, setShowOtpInput] = useState(false)

    const handleSignIn = async () => {
      try {
        await SignInValidator(email, password)
        const response = await SignInRequest(email, password)
        console.log(response.data)

        if (response.error) {
          throw new Error(response.error)
        }

        LocalStorage.setItem('accountId', response.data.accountId)

        setShowOtpInput(true)
      } catch (error) {
        console.error('handleSignIn failed:', error)
      }
    }

    const handleOTP = async () => {
      try {
        await OneTimePasswordValidator(otp)
        const accountId = LocalStorage.getItem('accountId')
        if (!accountId) {
          throw new Error('AccountId not found in localStorage')
        }

        var response = await SignIn2faRequest(accountId, otp)
        console.log(response.data)

        if (response.error) {
          throw new Error(response.error)
        }

        window.location.href = '/dashboard'
      } catch (error) {
        console.error('handleOTP failed:', error)
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
      <div className="SignInPage">
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
          <button onClick={handleSignIn}>signin</button>
          <a href="/forgot">forgot password?</a>
        </div>
      </div>
    )
  } catch (error) {
    throw new Error('SignInPage failed:', error)
  }
}
