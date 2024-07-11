import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <section>
      <Nav>
        <div className="containter">
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
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navbar-link">
                  Sitemap
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </section>
  );
};
export default Footer;

const Nav = styled.section`
  background: black;
  padding: 30px 0;
  bottom: 0;
  width: 100%;

  .navbar-list {
    display: flex;
    gap: 1rem;

    li {
      list-style: none;
      border-right: solid 1px white;
      padding-right: 10px;
    }
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 700;
        text-transform: uppercase;
        transition: color 0.3s linear;
        // color: ${({ theme }) => theme.colors.white};
      }

      &:hover,
      &:active {
        color: red;
      }
    }
  }
`;
