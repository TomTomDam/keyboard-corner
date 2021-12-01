import React from "react";
import styled from "styled-components";
import { Header } from "../../assets/styles/Layout";

const Keyboard = (props) => {
  return (
    <Container>
      <CoverImage
        src={`./src/assets/images/MyKeyboards/${props.keyboard.Image}`}
      />
      <TextContainer>
        <Header>
          <Heading>{props.keyboard.Title}</Heading>
        </Header>
        <PartsList>
          <li>
            <Part>Layout</Part>
            {props.keyboard.Layout}
          </li>
          <li>
            <Part>Keycaps</Part>
            {props.keyboard.Keycaps}
          </li>
          <li>
            <Part>Switches</Part>
            {props.keyboard.Switches}
          </li>
          <li>
            <Part>Case</Part>
            {props.keyboard.Case}
          </li>
          <li>
            <Part>Plate</Part>
            {props.keyboard.Plate}
          </li>
          <li>
            <Part>Stabilizers</Part>
            {props.keyboard.Stabilizers}
          </li>
          <li>
            <Part>Other mods</Part>
            {props.keyboard.Mods}
          </li>
          <li>{props.keyboard.Description}</li>
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
  justify-content: flex-start;
  padding: 1rem;
  margin: auto 20%;
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
