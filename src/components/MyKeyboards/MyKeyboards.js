import React from "react";
import Keyboard from "./Keyboard";
import styled from "styled-components";

const MyKeyboards = (props) => {
  const Keyboards = props.keyboards.map((keyboard) => (
    <Keyboard key={keyboard.id} keyboard={keyboard} />
  ));

  return (
    <>
      <header>
        <h1>My Keyboards</h1>
        <p>This is a list of my keyboards that I've purchased or built.</p>
      </header>
      <Container>
        {Keyboards}
      </Container>
    </>
  );
};

export default MyKeyboards;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
`;