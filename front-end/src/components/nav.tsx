import React from 'react';
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <>
    <div className="nav">
        <nav className="navbar">
          <div className="navbar-container">
          <div className="navbar-left">
            <div className='logo'>
              <Link to="/" className="navbar-logo"><img /><p>Logo</p></Link>
            </div>
            <div className='nav-link'>
              <Link to="/" className="navbar-link">Home</Link>
              <Link to="/" className="navbar-link">Feature</Link>
            </div>
          </div>
          <div className="navbar-right">
            <p><a href="/login" className="navbar-link">Login</a> <span>/</span>
            <a href="/register" className="navbar-link">Register</a></p>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}
