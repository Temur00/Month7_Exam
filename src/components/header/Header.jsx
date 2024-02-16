import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { curt, darkLight, forkKnife } from "../../assets/index";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="container nav-items">
        <div className="left-nav-items">
          <img src={forkKnife} alt="logo" />
          <p>eatly</p>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/dishes">Dishes</NavLink>
        </div>
        <div className="right-nav-items">
          <img className="curt" src={curt} alt="curt" />
          <button className="log">Login</button>
          <button className="log">Sign Up</button>
          <div className="mode-border">
            <img src={darkLight} alt="darkLight" />
          </div>
          <div className="hamburger-menu">
            <button
              className={`menu-btn ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <div className="menu-btn-burger"></div>
              <div className="menu-btn-burger"></div>
              <div className="menu-btn-burger"></div>
            </button>
            <div className={`menu-items ${isOpen ? "open" : ""}`}>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/dishes">Dishes</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Sign Up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;