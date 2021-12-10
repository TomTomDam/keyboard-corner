import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../assets/styles/Layout";
import axios from "axios";

const Keyboard = (props) => {
  const keyboardApi = "http://localhost:3000/api/keyboard";
  const [keyboard, setKeyboard] = useState({});
  const [editable, setEditable] = useState(false);

  useEffect(async () => {
    const data = await axios
      .get(`${keyboardApi}/${props.match.params.id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    if (data === null || data === undefined) {
      setKeyboard({});
    } else {
      setKeyboard(data);
    }
  }, []);

  return (
    <>
      {editable && <></>}
      {!editable && (
        <ButtonContainer>
          <Button onClick={() => setEditable(!editable)}>Edit</Button>
          <Button>Delete</Button>
        </ButtonContainer>
      )}
      <Container>
        <CoverImage src={`/src/assets/images/MyKeyboards/${keyboard.image}`} />
        <TextContainer>
          <Header>
            <Heading>{keyboard.title}</Heading>
          </Header>
          <PartsList>
            <li>
              <Part>Layout</Part>
              {!editable && keyboard.layout}
              {editable && <EditableInput value={keyboard.layout} />}
            </li>
            <li>
              <Part>Keycaps</Part>
              {!editable && keyboard.keycaps}
              {editable && <EditableInput value={keyboard.keycaps} />}
            </li>
            <li>
              <Part>Switches</Part>
              {!editable && keyboard.switches}
              {editable && <EditableInput value={keyboard.switches} />}
            </li>
            <li>
              <Part>Case</Part>
              {!editable && keyboard.case}
              {editable && <EditableInput value={keyboard.case} />}
            </li>
            <li>
              <Part>Plate</Part>
              {!editable && keyboard.plate}
              {editable && <EditableInput value={keyboard.switches} />}
            </li>
            <li>
              <Part>Stabilizers</Part>
              {!editable && keyboard.stabilizers}
              {editable && <EditableInput value={keyboard.stabilizers} />}
            </li>
            <li>
              <Part>Other mods</Part>
              {!editable && keyboard.modifications}
              {editable && <EditableInput value={keyboard.modifications} />}
            </li>
            <li>
              <Part>Description</Part>
              {!editable && keyboard.description}
              {editable && <EditableInput value={keyboard.description} />}
            </li>
          </PartsList>
        </TextContainer>
      </Container>
      {!editable && <></>}
      {editable && (
        <ButtonContainer>
          <Button>Save</Button>
          <Button onClick={() => setEditable(!editable)}>Discard</Button>
        </ButtonContainer>
      )}
    </>
  );
};

export default Keyboard;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  text-align: left;
  justify-content: center;
  padding: 1rem;
`;

const CoverImage = styled.img`
  width: 700px;
  height: 600px;
`;

const TextContainer = styled.div`
  margin-left: 2rem;
`;

const Heading = styled.h1`
  margin-top: 0rem;
  padding-bottom: 0.5rem;
`;

const PartsList = styled.ul`
  list-style-type: none;
`;

const Part = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.125rem;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0.5rem;
`;

const EditableInput = styled.input`
  display: block;
`;
