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
    //First get a new token when logging in
    //When entering an authorized route, send:
    //header: { "authorization": Bearer ${accessToken}" } to auth.verifyToken()
    //auth.verifyToken() checks if token is valid
    //If token is valid, get user from response and pass to setUser() and setIsAuthenticated(true)

    //Axios is making double request: one for OPTIONS and another for POST.
    //POST request becomes invalid when calling setUser() for some reason.
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
        //localStorage.setItem("token", res.data.token);

        const authConfig = {
          headers: {
            "authorization": `Bearer ${res.data.token}`,
          },
        };

        axios
        .get(`${accountApi}/verifyToken`, authConfig)
        .then((res) => {
        setIsAuthenticated(true);
        setUser(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
