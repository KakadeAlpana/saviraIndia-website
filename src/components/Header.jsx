import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="Main-contianer">
      <div className="container  header-container">
        <div className="header-content">
          <NavLink to="/" className="logoContainer">
            <img src="./images/logo.png" alt="logo" className="logo" />
          </NavLink>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
