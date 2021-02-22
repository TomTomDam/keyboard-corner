import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = (props) => {
  const link = props.link;

  return (
    <li key={link.id}>
      <NavLink to={`${link.path}`}>
        <span>{link.title}</span>
      </NavLink>
    </li>
  );
};

export default Login;

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
