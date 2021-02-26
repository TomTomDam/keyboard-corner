import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const User = (props) => {
  const user = props.loggedInUser;

  return (
    <li key={user.id}>
      <NavLink to={`${user.id}`}>
        <span>Hello, {user.username}</span>
      </NavLink>
    </li>
  );
};

export default User;

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
