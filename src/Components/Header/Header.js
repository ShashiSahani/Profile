import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Header.scss";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const toggleOffcanvas = () => {
    setIsToggle(!isToggle);
  };
  return (
    <header>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        onClick={toggleOffcanvas}
      >
        <span className="navbar-toggler-icon"></span>
        {isToggle ? (
          <FaToggleOn className="icons" />
        ) : (
          <FaToggleOff className="icons" />
        )}
      </button>
      {window.innerWidth < 768 && (
        <div
          className={`offcanvas offcanvas-start ${isToggle ? "show" : ""}`}
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header canvas">
            
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <ul className="nav nav-underline navbar-custom">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/servies">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      
    </header>
  );
}

export default Header;
