import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar-nav">
    <nav className ="navbar-title">
      UniBookExchange
    </nav>
  
    <div>
      
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/browse"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/browse" className="nav-link">
            Browse
          </Link>
        </li>
      </ul>
    </div>
    
  </nav>
);

export default Navbar;
