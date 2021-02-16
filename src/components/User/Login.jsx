import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password, rememberMe } = inputs;
  //TODO: LoggedIn state
  //const [loggedIn, setLoggedIn] = useState(isLoggedIn function using JWT token);
  const accountApi = "http://localhost:3000/api/account";

  useEffect(() => {});

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      //TODO: If login is successful, redirect to home page and change state to LoggedIn = true
      axios
        .get(`${accountApi}/login`)
        .then((res) => {
          //Get return url from location state or default to home page
          const { from } = location.state || { from: { pathname: "/" } };
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FormLabel>Username</FormLabel>
          <UsernameInput type="text" value={username} onChange={handleChange} />
          {/* TODO: Split out validation message to a component */}
          {submitted && !username && (
            <ValidationMessage>Username is required.</ValidationMessage>
          )}
        </FormRow>
        <FormRow>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            type="password"
            value={password}
            onChange={handleChange}
          />
          {submitted && !password && (
            <ValidationMessage>Password is required.</ValidationMessage>
          )}
        </FormRow>
        <FormRow>
          <RememberMe>
            <RememberMeCheckbox
              type="checkbox"
              value={rememberMe}
              onChange={handleChange}
            />
            <RememberMeLabel>Remember me on this computer</RememberMeLabel>
          </RememberMe>
        </FormRow>
        <FormRow>
          <SignInButton type="button">Sign In</SignInButton>
        </FormRow>
        <RegisterLink to="/register">Join GameSource</RegisterLink>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  max-width: 10%;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormRow = styled.div`
  margin-top: 1rem;
`;

const FormLabel = styled.label`
  text-align: left;
`;

const Input = styled.input``;

const UsernameInput = styled(Input)``;

const PasswordInput = styled(Input)``;

const RememberMe = styled.div``;

const RememberMeCheckbox = styled.input`
  margin-right: 5px;
`;

const RememberMeLabel = styled.div`
  display: inline;
`;

const SignInButton = styled.button`
  width: 5vw;
  padding: 5px 10px;
  margin: 0 auto;
`;

const RegisterLink = styled(Link)`
  margin-top: 1rem;
`;

const ValidationMessage = styled.div`
  color: red;
`;
