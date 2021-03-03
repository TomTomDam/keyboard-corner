import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ValidationMessage from "./Validation/ValidationMessage";
import { Form, FormRow, FormLabel, Input } from "../../assets/styles/Modules";
import { UserContext } from "../../UserContext";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const { register } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    register(user);
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <FormRow>
          <FormLabel>First Name</FormLabel>
          <NameInput
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
          {!user.firstName && <ValidationMessage input={"First Name"}/>}
        </FormRow>
        <FormRow>
          <FormLabel>Last Name</FormLabel>
          <NameInput
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
          {!user.lastName && <ValidationMessage input={"Last Name"}/>}
        </FormRow>
        <FormRow>
          <FormLabel>Username</FormLabel>
          <UsernameInput
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          {!user.username && <ValidationMessage input={"Username"}/>}
        </FormRow>
        <FormRow>
          <FormLabel>Email</FormLabel>
          <EmailInput
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {!user.email && <ValidationMessage input={"Email"}/>}
        </FormRow>
        <FormRow>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {!user.password && <ValidationMessage input={"Password"}/>}
        </FormRow>
        <FormRow>
          <RegisterButton type="button" onClick={handleSubmit}>
            Register
          </RegisterButton>
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

const NameInput = styled(Input)``;

const UsernameInput = styled(Input)``;

const EmailInput = styled(Input)``;

const PasswordInput = styled(Input)``;

const RegisterButton = styled.button`
  padding: 5px 10px;
  margin: 0 auto;
`;

const LoginLink = styled(Link)`
  margin-top: 1rem;
`;
