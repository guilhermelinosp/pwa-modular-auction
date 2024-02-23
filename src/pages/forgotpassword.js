import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/forgotpassword.css';

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = () => {
    // Logic to send OTP
    setShowOtpInput(true);
  };

  const handleVerifyOtp = () => {
    // Logic to verify the OTP
  };

  return (
    <div className='ForgotPasswordPage'>
      {!showOtpInput && (
        <div className="input-container">
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      )}

      {showOtpInput && (
        <div className="input-container">
          <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}

      <div className="button-container">
        <Link to="/signin">Back to Sign In</Link>
      </div>
    </div>
  );
};