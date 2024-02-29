import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home-style.css'

export const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="button-container">
        <Link to="/signin">
          <button className="signin-button">signin</button>
        </Link>
        <Link to="/signup">
          <button className="signup-button">signup</button>
        </Link>
      </div>
    </div>
  )
}
