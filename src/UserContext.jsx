import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    username: "jwt",
    password: "jwt",
    rememberMe: false,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const accountApi = "http://localhost:3000/api/account";

  useEffect(() => {
    //If login is successful, create new access token as HttpOnly cookie
    //If user is not logged in and trying to access authorized route, redirect them to login page
    const loginConfig = {
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
        loginConfig
      )
      .then((res) => {
        //Since httpOnly cookie cannot be read in front-end,
        //it must be read and validated in the back-end
        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {isAuthenticated ? props.children : null}
    </UserContext.Provider>
  );
};
