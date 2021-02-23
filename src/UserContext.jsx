import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const accountApi = "http://localhost:3000/api/account";

  useEffect(() => {
    //First get the token from .env file
    //Then send a post request to verify if token is valid
    //If token is valid, get user from response and pass to setUser() and setIsAuthenticated(true)

    //setUser();
    // axios
    //   .post(`${accountApi}/login`, {
    //     username: user.username,
    //     password: user.password,
    //   })
    //   .then(function (res) {
    //     //Get return url from location state or default to home page
    //     //const { from } = location.state || { from: { pathname: "/" } };
    //     setIsAuthenticated(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
