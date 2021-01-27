import React from "react";
import styled from "styled-components";
import { Header } from "../../assets/styles/Layout";

const Keyboard = (props) => {
  return (
    <Container>
      <CoverImage src={props.keyboard.image} />
      <TextContainer>
        <Header>
          <Heading>{props.keyboard.title}</Heading>
        </Header>
        <PartsList>
          <li>
            <Part>Layout</Part>
            {props.keyboard.layout}
          </li>
          <li>
            <Part>Keycaps</Part>
            {props.keyboard.keycaps}
          </li>
          <li>
            <Part>Switches</Part>
            {props.keyboard.switches}
          </li>
          <li>
            <Part>Case</Part>
            {props.keyboard.case}
          </li>
          <li>
            <Part>Plate</Part>
            {props.keyboard.plate}
          </li>
          <li>
            <Part>Stabilizers</Part>
            {props.keyboard.stabilizers}
          </li>
          <li>
            <Part>Other mods</Part>
            {props.keyboard.mods}
          </li>
          <li>{props.keyboard.description}</li>
        </PartsList>
      </TextContainer>
    </Container>
  );
};

export default Keyboard;

const Container = styled.div`
  display: flex;
  flex: 1 0 50%;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
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
  flex: 1 0 50%;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.125rem;
  margin-top: 1rem;
`;
