import React, { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    rememberMe: false,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const accountApi = "http://localhost:3000/api/account";
  const authApi = "http://localhost:3000/api/auth";

  //If user is not logged in and trying to access authorized route, redirect them to login page
  const login = (user) => {
    setUser(user);

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(
        `${accountApi}/login`,
        {
          username: user.username,
          password: user.password,
        },
        options
      )
      .then((res) => {
        //Redirect to previous page or homepage
        if (res.data.statusCode === 200) {
          toast.success("Successfully logged in!", { theme: "colored" });
          window.location = "/";
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = (user) => {
  };

  const register = (user) => {
    setUser(user);

    axios
      .post(`${accountApi}/register`, {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        // //Get return url from location state or default to home page
        // const { from } = location.state || { from: { pathname: "/" } };
        toast.success("Successfully created a User!", { theme: "colored" });
        window.location = "/";
        setIsAuthenticated(true);
      })
      .catch((err) => {
        toast.error("Could not create a User.", { theme: "colored" });
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={
        ([user, setUser],
        [isAuthenticated, setIsAuthenticated],
        { login, logout, register })
      }
    >
      {/* {isAuthenticated ? props.children : null} */}
      {props.children}
    </UserContext.Provider>
  );
};
