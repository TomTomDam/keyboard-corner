import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  //Hide navbar on scroll down, show on scroll up
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = -navbar.clientHeight;
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header>
      <NavBarBackground></NavBarBackground>
      <NavBar id="navbar">
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

const NavBarBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;
  background: ${(props) => props.theme.colours.darkgray};
  z-index: -1;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  color: white;
  background-color: ${(props) => props.theme.colours.darkgray};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
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
