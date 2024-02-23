import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export const HomePage = () => (
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