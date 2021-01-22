import React from "react";
import styled from "styled-components";
import {Header} from "../../assets/styles/Layout";

const Keyboard = (props) => {
  return (
    <Container>
      <Header>
        <h2>{props.keyboard.title}</h2>
      </Header>
      <PartsList>
        <CoverImage src={props.keyboard.image} />
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
    </Container>
  );
};

export default Keyboard;

const Container = styled.div`
  flex: 1 0 33%;
  padding: 1rem;
`;

const CoverImage = styled.img`
  width: 600px;
  height: 500px;
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