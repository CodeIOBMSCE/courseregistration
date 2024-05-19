import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import '../css/Header.css'; // Ensure this path is correct

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/assets/bms_logo.png" alt="Logo" /> 
        </div>
        <ul>
         
          <li className="center-item">
            <span>COE - Course addition</span>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
