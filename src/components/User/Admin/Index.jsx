import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../../../UserContext";

const Index = () => {
  let users = [];
  const usersApi = "http://localhost:3000/api/users";

  useEffect(() => {
    axios
      .get(`${usersApi}/`)
      .then((res) => {
        users = res.data.data;
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        //Can split this into a component once I see if this works
        <Container key={user.id}>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div>{user.email}</div>
          <div>{user.username}</div>
        </Container>
      ))}
    </div>
  );
};

export default Index;

const Container = styled.div`
  margin-top: 1rem;
`;
