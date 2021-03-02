import React, { useState, useContext } from "react";
import styled from "styled-components";
import ValidationMessage from "../Validation/ValidationMessage";

const Create = () => {
  const [users, setUsers] = useContext(users);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const accountApi = "http://localhost:3000/api/account";

  useEffect(() => {
    
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    axios
      .post(`${accountApi}/register`, {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        // //Get return url from location state or default to home page
        // const { from } = location.state || { from: { pathname: "/" } };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <h1>Admin - Create New User</h1>
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

export default Create;

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
  padding: 5px 10px;
  margin: 0 auto;
`;