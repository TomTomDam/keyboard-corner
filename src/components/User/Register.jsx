import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const api = "http://localhost:3000/api/users";

  useEffect(() => {});

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (user.firstName && user.lastName && user.username && user.password) {
    }
  }

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FormLabel>First Name</FormLabel>
          <NameInput
            type="text"
            value={user.firstName}
            onChange={handleChange}
          />
          {submitted && !user.firstName && <div>First Name is required.</div>}
        </FormRow>
        <FormRow>
          <FormLabel>Last Name</FormLabel>
          <NameInput
            type="text"
            value={user.lastName}
            onChange={handleChange}
          />
          {submitted && !user.lastName && <div>Last Name is required.</div>}
        </FormRow>
        <FormRow>
          <FormLabel>Username</FormLabel>
          <UsernameInput
            type="text"
            value={user.username}
            onChange={handleChange}
          />
          {submitted && !user.username && <div>Username is required.</div>}
        </FormRow>
        <FormRow>
          <FormLabel>Email</FormLabel>
          <EmailInput type="email" value={user.email} onChange={handleChange} />
          {submitted && !user.email && <div>Email is required.</div>}
        </FormRow>
        <FormRow>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          {submitted && !user.password && <div>Password is required.</div>}
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

const NameInput = styled(Input)``;

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
