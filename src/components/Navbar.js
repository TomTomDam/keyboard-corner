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
  background-color: ${(props) => props.theme.colours.darkgray};
`;

const NavBarLogo = styled(Link)`
  font-weight: bold;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  color: ${(props) => props.theme.colours.white};
  &:hover {
    color: darkgray;
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
  position: relative;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  color: ${(props) => props.theme.colours.white};
  & .active {
    color: darkgray;
  }
  &:hover {
    color: darkgray;
  }
  &::before {
    transition: all 0.3s ease 0s;
  }
  &::after {
    transition: all 0.3s ease 0s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: ${(props) => props.theme.colours.blue};
    height: 5px;
    top: 65px;
  }
  &:hover:after {
    width: 100%;
  }
`;
