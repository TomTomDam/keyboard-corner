import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../assets/styles/Layout";
import axios from "axios";

const Keyboard = (props) => {
  const keyboardApi = "http://localhost:3000/api/keyboard";
  const [keyboard, setKeyboard] = useState({});

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
    <Container>
      <CoverImage src={`src/assets/images/MyKeyboards/${keyboard.Image}`} />
      <TextContainer>
        <Header>
          <Heading>{keyboard.title}</Heading>
        </Header>
        <PartsList>
          <li>
            <Part>Layout</Part>
            {keyboard.layout}
          </li>
          <li>
            <Part>Keycaps</Part>
            {keyboard.keycaps}
          </li>
          <li>
            <Part>Switches</Part>
            {keyboard.switches}
          </li>
          <li>
            <Part>Case</Part>
            {keyboard.case}
          </li>
          <li>
            <Part>Plate</Part>
            {keyboard.plate}
          </li>
          <li>
            <Part>Stabilizers</Part>
            {keyboard.stabilizers}
          </li>
          <li>
            <Part>Other mods</Part>
            {keyboard.modifications}
          </li>
          <li>{keyboard.description}</li>
        </PartsList>
      </TextContainer>
    </Container>
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
  width: 600px;
  height: 500px;
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
