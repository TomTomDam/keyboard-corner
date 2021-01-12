import React from "react";
import Keyboard from "./Keyboard";

export default class MyKeyboards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const keyboards = this.props.keyboards.map((keyboard) => (
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
  }
}
