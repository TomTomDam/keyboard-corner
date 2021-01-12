import React from "react";
import styled from "styled-components";

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section>
        <h2>{this.props.keyboard.title}</h2>
        <h3>Parts list:</h3>
        <PartsList>
          <li>
            <b>Layout: </b>
            {this.props.keyboard.layout}
          </li>
          <CoverImage src={this.props.keyboard.image} />
          <li>
            <b>Keycaps: </b>
            {this.props.keyboard.keycaps}
          </li>
          <li>
            <b>Switches: </b>
            {this.props.keyboard.switches}
          </li>
          <li>
            <b>Case: </b>
            {this.props.keyboard.case}
          </li>
          <li>
            <b>Plate: </b>
            {this.props.keyboard.plate}
          </li>
          <li>
            <b>Stabilizers: </b>
            {this.props.keyboard.stabilizers}
          </li>
          <li>
            <b>Other mods: </b>
            {this.props.keyboard.mods}
          </li>
          <li>{this.props.keyboard.description}</li>
        </PartsList>
        <Gallery></Gallery>
      </Section>
    );
  }
}

const Section = styled.div``;

const CoverImage = styled.img`
  height: 900px;
  width: 1200px;
`;

const PartsList = styled.ul`
  list-style-type: none;
`;

const Gallery = styled.div``;
