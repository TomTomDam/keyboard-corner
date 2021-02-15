import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <FormRow>
          <FormLabel>Username</FormLabel>
          <UsernameInput type="text" />
        </FormRow>
        <FormRow>
          <FormLabel>Password</FormLabel>
          <PasswordInput type="password" />
        </FormRow>
        <FormRow>
          <RememberMe>
            <RememberMeCheckbox type="checkbox" />
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
