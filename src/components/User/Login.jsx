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
  const { username, password, rememberMe } = inputs;
  const accountApi = "http://localhost:3000/api/account";

  //TESTING IF API WORKS
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log("You are in handleSubmit()");
    if (username && password) {
      axios
        .get(`${accountApi}/login`)
        .then((res) => {
          //Get return url from location state or default to home page
          //const { from } = location.state || { from: { pathname: "/" } };

          //TESTING IF API WORKS
          if (res.data.message) {
            setLoginStatus(alert("User successfully logged in!"));
          } else {
            setLoginStatus(alert(response.data.msg));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <FormRow>
          <FormLabel>Username</FormLabel>
          <UsernameInput
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {/* TODO: Split out validation message to a component */}
          {/* {!username && (
            <ValidationMessage>Username is required.</ValidationMessage>
          )} */}
        </FormRow>
        <FormRow>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {/* {!password && (
            <ValidationMessage>Password is required.</ValidationMessage>
          )} */}
        </FormRow>
        <FormRow>
          <RememberMe>
            <RememberMeCheckbox
              type="checkbox"
              name="rememberMe"
              value={rememberMe}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: e.target.name,
                    value: e.target.checked,
                  },
                });
              }}
            />
            <RememberMeLabel>Remember me on this computer</RememberMeLabel>
          </RememberMe>
        </FormRow>
        <FormRow>
          <SignInButton type="button" onClick={handleSubmit}>Sign In</SignInButton>
        </FormRow>
        <RegisterLink to="/register">Join GameSource</RegisterLink>
      </Form>
      <div>{inputs.username}</div>
      <div>{inputs.password}</div>
      <div>{inputs.rememberMe ? "True!" : "False!"}</div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  max-width: 20%;
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
