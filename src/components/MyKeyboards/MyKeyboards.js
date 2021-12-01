import React, { useState, useEffect } from "react";
import KeyboardPreview from "./KeyboardPreview"
import styled from "styled-components";
import { Heading } from "../../assets/styles/Layout";
import AddNewKeyboard from "./AddNewKeyboard";
import axios from "axios";

const MyKeyboards = () => {
  const keyboardApi = "http://localhost:3000/api/keyboard";
  const [keyboardsList, setKeyboardsList] = useState([]);

  useEffect(async () => {
    const data = await axios
      .get(keyboardApi)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    if (data === null || data === undefined) {
      setKeyboardsList([]);
    } else {
      setKeyboardsList(data);
    }
  }, []);

  const Keyboards = keyboardsList.map((keyboard) => (
    <KeyboardPreview key={keyboard.Id} keyboard={keyboard} />
  ));

  //Add new keyboard
  const [showNewKeyboardForm, setShowNewKeyboardForm] = useState(false);
  const addNewKeyboardClick = () => {
    showNewKeyboardForm === false
      ? setShowNewKeyboardForm(true)
      : setShowNewKeyboardForm(false);
  };

  //Update keyboard
  const [showUpdateKeyboardForm, setShowUpdateNewKeyboardForm] =
    useState(false);
  const updateKeyboardClick = () => {
    showUpdateKeyboardForm === false
      ? setShowUpdateNewKeyboardForm(true)
      : setShowUpdateNewKeyboardForm(false);
  };

  //Delete keyboard
  const [showDeleteKeyboardForm, setShowDeleteKeyboardForm] = useState(false);
  const deleteKeyboardClick = () => {
    showDeleteKeyboardForm === false
      ? setShowDeleteKeyboardForm(true)
      : setShowDeleteKeyboardForm(false);
  };

  return (
    <>
      <header>
        <Heading>My Keyboards</Heading>
        <p>This is a list of my keyboards that I've purchased or built.</p>
      </header>
      <ButtonRow onClick={addNewKeyboardClick}>
        <AddNewKeyboardButton>Add a new Keyboard</AddNewKeyboardButton>
      </ButtonRow>
      {showNewKeyboardForm ? (
        <AddNewKeyboard
          setShowNewKeyboardForm={setShowNewKeyboardForm}
          keyboardsList={keyboardsList}
        ></AddNewKeyboard>
      ) : null}
      <Container>{Keyboards}</Container>
    </>
  );
};

export default MyKeyboards;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  min-height: 100%;
`;

const ButtonRow = styled.div`
  margin-top: 1rem;
`;

const AddNewKeyboardButton = styled.button``;
