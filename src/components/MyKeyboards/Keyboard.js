import React from "react";
import styled from "styled-components";
import {Header} from "../../assets/styles/Layout";

const Keyboard = (props) => {
  return (
    <Card>
      <Header>
        <h2>{props.keyboard.title}</h2>
      </Header>
      <PartsList>
        <CoverImage src={props.keyboard.image} />
        <li>
          <b>Layout: </b>
          {props.keyboard.layout}
        </li>
        <li>
          <b>Keycaps: </b>
          {props.keyboard.keycaps}
        </li>
        <li>
          <b>Switches: </b>
          {props.keyboard.switches}
        </li>
        <li>
          <b>Case: </b>
          {props.keyboard.case}
        </li>
        <li>
          <b>Plate: </b>
          {props.keyboard.plate}
        </li>
        <li>
          <b>Stabilizers: </b>
          {props.keyboard.stabilizers}
        </li>
        <li>
          <b>Other mods: </b>
          {props.keyboard.mods}
        </li>
        <li>{props.keyboard.description}</li>
      </PartsList>
    </Card>
  );
};

export default Keyboard;

const Card = styled.div`
  flex: 1 0 33%;
  padding: 1rem;
`;

const CoverImage = styled.img`
  width: 600px;
  height: 400px;
  padding-bottom: 1rem;
`;

const PartsList = styled.ul`
  list-style-type: none;
`;
