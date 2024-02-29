import React from 'react'
import {createRoot} from 'react-dom/client'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './styles/global.css'

import {DashboardPage} from './pages/dashboard'
import {DefaultPage} from './pages/default'
import {ForgotPasswordPage} from './pages/forgotpassword-page'
import {HomePage} from './pages/home-page'
import {ResetPasswordPage} from './pages/resetpassword-page'
import {SignInPage} from './pages/signin-page'
import {SignUpPage} from './pages/signup-page'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
