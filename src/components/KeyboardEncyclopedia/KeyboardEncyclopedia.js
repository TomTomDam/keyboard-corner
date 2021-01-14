import React from "react";
import styled from "styled-components";
import KeyboardEncyclopediaCard from "./KeyboardEncyclopediaCard";

export default class KeyboardEncyclopedia extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    gettingStarted: [
      {
        id: 1,
        title: "Introduction to Mechanical Keyboards",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/introduction",
        icon: "",
      },
      {
        id: 2,
        title: "Layouts and Sizes",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/layouts-and-sizes",
        icon: "",
      },
      {
        id: 3,
        title: "Switches",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/switches",
        icon: "",
      },
    ],
    listOfSwitches: [
      {
        id: 1,
        title: "Cherry",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/switches/cherry",
        icon: "",
      },
      {
        id: 2,
        title: "Gateron",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/switches/gateron",
        icon: "",
      },
      {
        id: 3,
        title: "Durock/JWK",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/switches/durock",
        icon: "",
      },
      {
        id: 4,
        title: "Kailh",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/switches/kailh",
        icon: "",
      },
    ],
    keyboardModifications: [
      {
        id: 1,
        title: "Switch Modifications",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/switch-modifications",
        icon: "",
      },
    ],
    accessories: [
      {
        id: 1,
        title: "Custom Cables",
        subtitle: "",
        image: "",
        link: "/keyboard-encyclopedia/custom-cables",
        icon: "",
      },
    ],
  };

  render() {
    const GettingStarted = this.state.gettingStarted.map((article) => (
      <div className="col-md-2" key={article.id}>
        <KeyboardEncyclopediaCard key={article.id} article={article} />
      </div>
    ));

    const ListOfSwitches = this.state.listOfSwitches.map((article) => (
      <div className="col-md-2" key={article.id}>
        <KeyboardEncyclopediaCard key={article.id} article={article} />
      </div>
    ));

    const KeyboardModifications = this.state.keyboardModifications.map(
      (article) => (
        <div className="col-md-2" key={article.id}>
          <KeyboardEncyclopediaCard key={article.id} article={article} />
        </div>
      )
    );

    const Accessories = this.state.accessories.map((article) => (
      <div className="col-md-2" key={article.id}>
        <KeyboardEncyclopediaCard key={article.id} article={article} />
      </div>
    ));

    return (
      <Container>
        <header>
          <h1>The Keyboard Encyclopedia</h1>
          <p>
            Your comprehensive guide to all things related to mechanical
            keyboards.
          </p>
        </header>
        <Section>
          <Heading>Getting Started</Heading>
          <div className="row justify-content-center">{GettingStarted}</div>
        </Section>
        <Section>
          <Heading>List of Switches</Heading>
          <div className="row justify-content-center">{ListOfSwitches}</div>
        </Section>
        <Section>
          <Heading>Keyboard Modifications</Heading>
          <div className="row justify-content-center">
            {KeyboardModifications}
          </div>
        </Section>
        <Section>
          <Heading>Accessories</Heading>
          <div className="row justify-content-center">{Accessories}</div>
        </Section>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 1600px;
  margin: 0 auto;
`;

const Section = styled.div`
  text-align: left;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Heading = styled.h1`
  text-align: left;
`;
