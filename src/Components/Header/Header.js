import React from "react";

import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
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
    </header>
  );
}

export default Header;
