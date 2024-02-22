import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';

const DefaultPage = () => {
  return (
    <div className='DefaultPage'>
      <div className='title-component'>
        <p>
          edit <code>src/index.js</code> and save to reload.
        </p>
      </div>

      <div className='button-container'>
        <Link to="/home">
          <button className='button-default'>
            home
          </button>
        </Link>
      </div>
    </div>
  );
};

const HomePage = () => (
  <div className='HomePage'>
    <div className="button-container">
      <Link to="/signin">
        <button className="signin-button">signin</button>
      </Link>
      <Link to="/signup">
        <button className="signup-button">signup</button>
      </Link>
    </div>
  </div>
);

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div className='SignInPage'>
      <div className="input-container">
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="button-container">
        <button onClick={handleLogin}>signin</button>
        <Link to="/forgotpassword">
          <button>forgot password</button>
        </Link>
      </div>
    </div>
  );
};

const SignUpPage = () => (
  <div className='SignUpPage'>
    <h2>Sign Up</h2>
  </div>
);


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = () => {
    // Logic to send OTP to the provided email address
    // For demonstration purposes, we'll just set showOtpInput to true
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

const DashboardPage = () => (
  <div className='DashboardPage'>
    <h2>Dashboard</h2>
  </div>
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
