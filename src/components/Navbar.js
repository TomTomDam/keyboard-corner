import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <header>
      <NavBar className="navbar navbar-expand-lg navbar-toggleable-sm box-shadow mb-3">
        <NavBarBrand to="/" className="navbar-brand">
          Keyboard Corner
        </NavBarBrand>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto my-2">
            <li>
              <NavLink to="/keyboard-encyclopedia" className="nav-link mx-4">
                The Keyboard Encyclopedia
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link mx-4">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/mykeyboards" className="nav-link mx-4">
                My Keyboards
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link mx-4">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link mx-4">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </NavBar>
    </header>
  );
};

export default Navbar;

const NavBar = styled.nav`
  color: white;
  background-color: #1e90ff;
`;

const NavBarBrand = styled(Link)`
  color: white;
  white-space: normal;
  text-align: center;
  word-break: break-all;
`;

const NavLink = styled(Link)`
  color: white;
`;
