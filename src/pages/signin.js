import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signin.css';

export const SignInPage = () => {
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