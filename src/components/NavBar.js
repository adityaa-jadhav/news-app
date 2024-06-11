import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.png"; 

const NavBar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand me-auto" to="/">
          <img src={logo} alt="NewsMonkey Logo" width="30" height="30" className="d-inline-block align-top mx-2" />
            NewsRocket
          </Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to="/health">Health</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="/science">Science</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sports">Sports</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/technology">Technology</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
