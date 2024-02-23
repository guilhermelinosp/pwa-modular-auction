import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/global.css';

import { DefaultPage } from './pages/default';
import { ForgotPasswordPage } from './pages/forgotpassword';
import { HomePage } from './pages/home';
import { SignInPage } from './pages/signin';
import { SignUpPage } from './pages/signup';


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
