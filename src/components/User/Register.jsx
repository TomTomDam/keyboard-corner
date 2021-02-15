import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <FormRow>
          <FormLabel>Username</FormLabel>
          <UsernameInput type="text" />
        </FormRow>
        <FormRow>
          <FormLabel>Email</FormLabel>
          <EmailInput type="email" />
        </FormRow>
        <FormRow>
          <FormLabel>Password</FormLabel>
          <PasswordInput type="password" />
        </FormRow>
        <FormRow>
          <RegisterButton type="button">Register</RegisterButton>
        </FormRow>
        <LoginLink to="/login">Already have an account?</LoginLink>
      </Form>
    </Container>
  );
};

export default Register;

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

const EmailInput = styled(Input)``;

const PasswordInput = styled(Input)``;

const RegisterButton = styled.button`
  width: 5vw;
  padding: 5px 10px;
  margin: 0 auto;
`;

const LoginLink = styled(Link)`
  margin-top: 1rem;
`;
