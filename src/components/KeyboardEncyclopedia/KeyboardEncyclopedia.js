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
        <HeaderSection>
          <HeaderSectionHeading>The Keyboard Encyclopedia</HeaderSectionHeading>
          <HeaderSectionText>
            Your comprehensive guide to all things related to mechanical
            keyboards.
          </HeaderSectionText>
        </HeaderSection>
        <Grid>
          <StickyNavbar>
            <StickyNavbarLink>Navlink 1</StickyNavbarLink>
          </StickyNavbar>
          <StickyNavbarBorder></StickyNavbarBorder>
          <Content>

          </Content>
        </Grid>
      </Container>
    );
  }
}

const Container = styled.div`
`;

const HeaderSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
  padding: 3vw;
  margin-top: -16px;
`;

const HeaderSectionHeading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 1rem;
`;

const HeaderSectionText = styled.p`
  font-size: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem 0;
`;

const GridItem = styled.div`
  margin: 1rem;
`;

const StickyNavbarBorder = styled.div`
  border: none;
  width: 1px;
  height: 100vh;
  color: black;
  background-color: black;
  background: radial-gradient(circle, black, white);
`;

const StickyNavbar = styled(GridItem)`
`;

const StickyNavbarLink = styled.div`
  padding: 1rem;
`;

const Content = styled(GridItem)`

`;