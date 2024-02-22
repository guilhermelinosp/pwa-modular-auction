import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const DefaultPage = () => {
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