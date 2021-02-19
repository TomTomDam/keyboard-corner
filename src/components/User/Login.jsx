import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import ValidationMessage from "./Validation/ValidationMessage";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const accountApi = "http://localhost:3000/api/account";
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    axios
      .post(`${accountApi}/login`, {
        username: inputs.username,
        password: inputs.password,
      })
      .then(function (res) {
        //Get return url from location state or default to home page
        //const { from } = location.state || { from: { pathname: "/" } };
        setLoginStatus("Successfully logged in!");
      })
      .catch((err) => {
        console.log(err);
        setLoginStatus("Could not log in. Please try again later.");
      });
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
            value={inputs.username}
            onChange={handleChange}
          />
          {!inputs.username && <ValidationMessage input={"Username"} />}
        </FormRow>
        <FormRow>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          {!inputs.password && <ValidationMessage input={"Password"} />}
        </FormRow>
        <FormRow>
          <RememberMe>
            <RememberMeCheckbox
              type="checkbox"
              name="rememberMe"
              value={inputs.rememberMe}
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
          <SignInButton type="button" onClick={handleSubmit}>
            Sign In
          </SignInButton>
        </FormRow>
        <RegisterLink to="/register">Join GameSource</RegisterLink>
        <div>{loginStatus}</div>
      </Form>
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
  padding: 5px 10px;
  margin: 0 auto;
`;

const RegisterLink = styled(Link)`
  margin-top: 1rem;
`;

const LoginStatus = styled.div`
  margin-top: 1rem;
`;
