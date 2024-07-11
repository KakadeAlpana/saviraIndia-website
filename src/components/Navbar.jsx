import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4rem;
      li {
        list-style: none;
      }
      .navbar-link{
        &:active,
        &:hover {
          color:red;
        }
      }
      .navbar-link {
        &:link,
        &:visited{
          display:inline-block;
          text-decoration:none;
          font-size:1.5rem;
          font-weight:700;
          text-transform:uppercase;
          transition:color 0.3s linear;
          color:{({theme})=> theme.colors.black}
        }
      }
    }
  `;
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link">
              AboutUs
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/quality" className="navbar-link">
              Quality
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
