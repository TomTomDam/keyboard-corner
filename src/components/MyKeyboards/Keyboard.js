import React from "react";
import styled from "styled-components";

const Keyboard = (props) => {
  return (
    <Section>
      <h2>{props.keyboard.title}</h2>
      <h3>Parts list:</h3>
      <PartsList>
        <li>
          <b>Layout: </b>
          {props.keyboard.layout}
        </li>
        <CoverImage src={props.keyboard.image} />
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
      <Gallery></Gallery>
    </Section>
  );
};

export default Keyboard;

const Section = styled.div``;

const CoverImage = styled.img`
  height: 900px;
  width: 1200px;
`;

const PartsList = styled.ul`
  list-style-type: none;
`;

const Gallery = styled.div``;
