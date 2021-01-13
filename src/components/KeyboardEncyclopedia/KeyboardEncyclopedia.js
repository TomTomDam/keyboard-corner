import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KeyboardEncyclopediaCard from "./KeyboardEncyclopediaCard";

const KeyboardEncyclopedia = () => {
  return (
    <Container>
      <header>
        <h1 className="">The Keyboard Encyclopedia</h1>
        <p className="">
          Your comprehensive guide to all things related to mechanical
          keyboards.
        </p>
      </header>
      <Section>
        <h2 className="">Index</h2>
        <hr />
        <List>
          <li>
            <Link to="/keyboard-encyclopedia/introduction">
              Introduction to Mechanical Keyboards
            </Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/layouts-and-sizes">
              Layouts And Sizes
            </Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/switches">Switches</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/plates-and-pcbs">
              Plates and PCBs
            </Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/keycaps">Keycaps</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/stabilizers">Stabilizers</Link>
          </li>
        </List>
      </Section>
      <Section>
        <Heading>List of Switches</Heading>
        <hr />
        <List>
          <li>
            <Link to="/keyboard-encyclopedia/switches/cherry">Cherry</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/switches/gateron">Gateron</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/switches/kailh">Kailh</Link>
          </li>
          <li>
            <Link to="/keyboard-encyclopedia/switches/durock">Durock</Link>
          </li>
        </List>
      </Section>
      <Section>
        <Heading>Mechanical Keyboard Modifications</Heading>
        <hr />
        <List>
          <li>
            <Link to="/keyboard-encyclopedia/switch-modifications">
              Switch Modifications
            </Link>
          </li>
        </List>
      </Section>
      <Section>
        <Heading>Accessories</Heading>
        <hr />
        <List>
          <li>
            <Link to="/keyboard-encyclopedia/custom-cables">Custom Cables</Link>
          </li>
        </List>
      </Section>
    </Container>
  );
};

export default KeyboardEncyclopedia;

const Container = styled.div`
  width: 1600px;
  margin: 0 auto;
`;

const Section = styled.div`
  text-align: left;
`;

const Heading = styled.div`
  text-align: left;
`;

const List = styled.ul`
  & > li {
    list-style-type: none;
  }
`;
