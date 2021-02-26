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
        //Save token as httpOnly cookie here

        const authConfig = {
          headers: {
            authorization: `Bearer ${res.data.token}`,
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
