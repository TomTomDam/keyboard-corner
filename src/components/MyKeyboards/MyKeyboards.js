import React from "react";
import Keyboard from "./Keyboard";
import styled from "styled-components";
import { Heading } from "../../assets/styles/Layout";
import AddNewKeyboard from "./AddNewKeyboard";

const MyKeyboards = () => {
  const keyboardsList = [
    {
      id: 1,
      image: "src\\assets\\images\\MyKeyboards\\space65_gmk_laser.jpg",
      title: "Space65 CV - Black Gold",
      switches: "Massdrop Holy Panda - Krytox 203g0, 105 on springs",
      plate: "Carbon fiber",
      keycaps: "GMK Laser",
      case: "Black and Gold",
      mods: "Case foam, Red LED badge",
      layout: "65%",
      stabilizers: "Durock Clear",
      description: "",
    },
    {
      id: 2,
      image:
        "src\\assets\\images\\MyKeyboards\\primus_with_shi_artisan.jpg",
      title: "Primus",
      switches:
        "Original Aspiration - Krytox 205g0, 105 on springs, white Deskey switch films",
      plate: "Polycarbonate",
      keycaps: "ePBT Kuro Shiro, Kyokuchi Kenban Shi Artisan",
      case: "White and Cyan, Stainless steel weight",
      mods: "N/A",
      layout: "75%",
      stabilizers: "c3Equalz Tiffany Blue",
      description: "",
    },
    {
      id: 3,
      image: "src\\assets\\images\\MyKeyboards\\mr_suit_tkl.jpg",
      title: "Mr Suit",
      switches: "Lavender - Stock",
      plate: "POM",
      keycaps: "GMK Blue Samurai",
      case: "Blue",
      mods: "PE foam, plate foam and case foam",
      layout: "TKL (WKL)",
      stabilizers: "Owlstabs",
      description: "",
    }
  ];

  const Keyboards = keyboardsList.map((keyboard) => (
    <Keyboard key={keyboard.id} keyboard={keyboard} />
  ));

  const [showNewKeyboardForm, setShowNewKeyboardForm] = React.useState(false);
  const addNewKeyboardClick = () => {
    if (showNewKeyboardForm === false) { setShowNewKeyboardForm(true); }
    else if (showNewKeyboardForm === true) { setShowNewKeyboardForm(false); }
  }

  return (
    <>
      <header>
        <Heading>My Keyboards</Heading>
        <p>This is a list of my keyboards that I've purchased or built.</p>
      </header>
      <ButtonRow onClick={addNewKeyboardClick}>
        <AddNewKeyboardButton>Add a new Keyboard</AddNewKeyboardButton>
      </ButtonRow>
      {showNewKeyboardForm ? <AddNewKeyboard showNewKeyboardForm={this.setShowNewKeyboardForm}></AddNewKeyboard> : false}
      <Container>{Keyboards}</Container>
    </>
  );
};

export default MyKeyboards;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const ButtonRow = styled.div`
  margin-top: 1rem;
`;

const AddNewKeyboardButton = styled.button`

`;
