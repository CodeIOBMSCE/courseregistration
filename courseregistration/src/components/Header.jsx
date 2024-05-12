// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Header.css"; // Import header styles

function Header() {
  return (
    <header className="header-container">
      <nav>
        <ul className="nav-links">
        <h1>COE page -Course addition</h1>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/coe">COE Page</Link></li> */}
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
