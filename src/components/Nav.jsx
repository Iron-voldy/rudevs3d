import React from "react";
import Logo from "../assets/images/flag1.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <a href="#" target="_blank">
              <img id="nav_logo" src={Logo} className="logo_1" alt="Apple" />
            </a>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Road Map
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/developer-team" className="nav-link">
              Galary
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
