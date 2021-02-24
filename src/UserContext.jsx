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
    //First get the token from .env file
    //Then send a post request to verify if token is valid
    //If token is valid, get user from response and pass to setUser() and setIsAuthenticated(true)

    //Axios is making double request: one for OPTIONS and another for POST. 
    //POST request becomes invalid when calling setUser() for some reason.

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    return axios
      .post(
        `${accountApi}/login`,
        {
          username: user.username,
          password: user.password,
        },
        options
      )
      .then((res) => {
        //setUser(res.data);
        //setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
