import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../../../UserContext";

const Index = () => {
  const [users, setUsers] = useState([]);
  const usersApi = "http://localhost:3000/api/users";

  useEffect(() => {
    axios
      .get(`${usersApi}/`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  const usersList = users.map((user) => (
    <Container key={user.id}>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.email}</div>
      <div>{user.username}</div>
    </Container>
  ));

  return (
    <div>
      <h1>Users</h1>
      {usersList}
    </div>
  );
};

export default Index;

const Container = styled.div`
  margin-top: 1rem;
`;
