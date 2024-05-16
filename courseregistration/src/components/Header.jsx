import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import '../css/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Example link to home page */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Example link to about page */}
          </li>
          <li>
            <Link to="">COE - Course addition</Link> {/* Example link to about page */}
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
