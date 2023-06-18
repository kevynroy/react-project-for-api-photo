// Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Website</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item"><a href="/">Home</a></li>
          <li className="header-nav-item"><a href="/about">About</a></li>
          <li className="header-nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;