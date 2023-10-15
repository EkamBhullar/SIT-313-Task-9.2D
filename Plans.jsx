// src/components/Plans.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Plans.css';

const Plans = () => {
 



  return (
    <div className='container'>
      <h1>Choose a Plan</h1>
      <div className="plan">
        <h2>Free Plan</h2>
        <p>Details of the Free Plan:</p>
        <ul>
          <li>Video Advertisements</li>
          <li>Basic Analytics</li>
        </ul>
      </div>
      <div className="plan">
        <h2>Premium Plan($10)</h2>
        
        <p>Details of the Premium Plan:</p>
        <ul>
          <li>Ad-Free Experience:</li>
          <li>Priority Customer Support:</li>
          <li>Advanced Analytics:</li>
        </ul>
        <Link to='/payment'>
        <button >Select Premium</button>
        </Link>
      </div>
    </div>
  );
};

export default Plans;
