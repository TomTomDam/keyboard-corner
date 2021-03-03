import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import LoginNavbar from "./Login";
import UserNavbar from "./User";
import { UserContext } from "../../UserContext";

const Navbar = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const showMobileMenu = () => setMobileMenu(!mobileMenu);
  //const [user, setUser] = useContext(UserContext);

  const links = [
    {
      id: 1,
      title: "The Keyboard Encyclopedia",
      path: "/keyboard-encyclopedia",
    },
    {
      id: 2,
      title: "My Keyboards",
      path: "/my-keyboards",
    },
    {
      id: 3,
      title: "About",
      path: "/about",
    },
    {
      id: 4,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      title: "Login",
      path: "/login",
    },
  ];

  const linksMap = links
    .filter((x) => x.id !== 5)
    .map((link) => {
      return (
        <li key={link.id}>
          <NavLink to={`${link.path}`}>
            <span>{link.title}</span>
          </NavLink>
        </li>
      );
    });
  const loginLink = links.find((x) => x.id === 5);

  let toggleIcon;
  mobileMenu
    ? (toggleIcon = <AiIcons.AiOutlineClose onClick={showMobileMenu} />)
    : (toggleIcon = <FaIcons.FaBars onClick={showMobileMenu} />);

  //Hide navbar on scroll down, show on scroll up
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let navbar = document.getElementById("navbar");
    let currentScrollPos = window.pageYOffset;
    prevScrollPos > currentScrollPos
      ? (navbar.style.top = "0")
      : (navbar.style.top = -navbar.clientHeight);

    prevScrollPos = currentScrollPos;
  };

  return (
    <header>
      <NavBarBackground></NavBarBackground>
      <NavBar id="navbar">
        <NavBarLogo to="/">Keyboard Corner</NavBarLogo>
        <NavBarToggle>{toggleIcon}</NavBarToggle>
        <NavMenu mobileMenu={mobileMenu}>
          {linksMap}
          {/* {user !== null ? (
            <UserNavbar loggedInUser={user} />
          ) : (
            <LoginNavbar link={loginLink} />
          )} */}
        </NavMenu>
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

const NavBarToggle = styled.div`
  display: none;
  margin-left: 2rem;
  font-size: 2rem;
  background: none;

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;

const NavBarLogo = styled(Link)`
  display: inline-block;
  font-weight: bold;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  color: ${(props) => props.theme.colours.white};
  &:hover {
    color: darkgray;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  & > li {
    display: inline-block;
    padding: 0px 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    margin-top: -16px;
    padding-top: 1rem;
    position: absolute;
    top: ${(props) => (props.mobileMenu ? "70px" : "-100vh")};
    left: 0;
    opacity: 1;
    transition: all 0.3s ease;

    & > li {
      text-align: center;
      background: ${(props) => props.theme.colours.darkgray};
      padding: 1.8rem;
    }
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
