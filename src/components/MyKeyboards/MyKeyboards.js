import React from "react";
import Keyboard from "./Keyboard";

const MyKeyboards = (props) => {
  const keyboards = props.keyboards.map((keyboard) => (
    <Keyboard key={keyboard.id} keyboard={keyboard} />
  ));

  return (
    <>
      <header>
        <h1>My Keyboards</h1>
        <p>This is a list of my keyboards that I've purchased or built.</p>
      </header>
      {keyboards}
    </>
  );
};

export default MyKeyboards;