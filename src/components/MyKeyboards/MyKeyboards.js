import React, { useState, useEffect } from "react";
import KeyboardPreview from "./KeyboardPreview"
import styled from "styled-components";
import { Button, ButtonInfo } from "../../assets/styles/Modules";
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
  const handleAddNewKeyboard = () => {
    showNewKeyboardForm === false
      ? setShowNewKeyboardForm(true)
      : setShowNewKeyboardForm(false);
  };

  return (
    <>
      <header>
        <Heading>My Keyboards</Heading>
        <p>This is a list of my keyboards that I've purchased or built.</p>
      </header>
      <ButtonRow>
        <Button onClick={handleAddNewKeyboard}>Add a new Keyboard</Button>
      </ButtonRow>
      {showNewKeyboardForm ? (
        <AddNewKeyboard
          setShowNewKeyboardForm={setShowNewKeyboardForm}
          keyboardsList={keyboardsList}
        ></AddNewKeyboard>) : <></>}
      <KeyboardContainer>
        {Keyboards}
      </KeyboardContainer>
    </>
  );
};

export default MyKeyboards;

const KeyboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  min-height: 100%;
  width: 90vw;
  margin: 0 auto;

  @media only screen and (max-width: ${(props) => props.theme.media.phone}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.phone}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: ${(props) =>
      props.theme.media.tablet}) and (min-width: ${(props) =>
      props.theme.media.laptop}) and (min-width: ${(props) =>
      props.theme.media.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 2100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ButtonRow = styled.div`
  margin-top: 1rem;
`;