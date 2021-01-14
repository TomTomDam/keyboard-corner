import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <header>
      <NavBar>
        <NavBarLogo to="/">Keyboard Corner</NavBarLogo>
        <NavLinkWrapper>
          <li>
            <NavLink to="/keyboard-encyclopedia">
              The Keyboard Encyclopedia
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mykeyboards">My Keyboards</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </NavLinkWrapper>
      </NavBar>
    </header>
  );
};

export default Navbar;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  color: white;
  background-color: #1e90ff;
`;

const NavBarLogo = styled(Link)`
  font-weight: bold;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  color: white;
  &:hover,
  :focus {
    color: lightgray;
  }
`;

const NavLinkWrapper = styled.ul`
  list-style: none;
  & > li {
    display: inline-block;
    padding: 0px 20px;
  }
`;

const NavLink = styled(Link)`
  transition: all 0.3s ease 0s;
  cursor: pointer;
  color: white;
  & .active {
    color: #fff;
  }
  & :hover,
  :focus {
    color: lightgray;
  }
`;
