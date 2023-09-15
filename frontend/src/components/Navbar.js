import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Restro Mania</a>
        <button
          className={`navbar-toggler ${collapsed ? '' : 'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${collapsed ? 'collapse' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AddRestro">Add Restaurant</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/RestroTable">View Restaurant</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/RestroTable">Edit Restaurant</Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
