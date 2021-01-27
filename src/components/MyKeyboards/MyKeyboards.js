import React, { useState } from "react";
import Keyboard from "./Keyboard";
import styled from "styled-components";

const MyKeyboards = () => {
  const [keyboards, setKeyboards] = useState([
    {
      id: 1,
      image: "src\\assets\\images\\MyKeyboards\\Space65 ePBT Kuro Shiro 1.jpg",
      title: "Space65 CV - Black Gold",
      switches: "Massdrop Holy Panda - Krytox 203g0, 105 on springs",
      plate: "Carbon  fiber",
      keycaps: "ePBT Kuro Shiro",
      case: "Black and Gold",
      mods: "Case foam",
      layout: "65%",
      stabilizers: "Durock Clear",
      description: "",
    },
    {
      id: 2,
      image: "src\\assets\\images\\MyKeyboards\\FirstCustomKeyboard2.jpg",
      title: "KBDFans 5 Degree",
      switches: "Gateron Yellow - Krytox 205g0, 105 on springs",
      plate: "Aluminium",
      keycaps: "ePBT 9009",
      case: "Grey",
      mods: "Case foam",
      layout: "60%",
      stabilizers: "Cherry",
      description: "",
    },
    {
      id: 3,
      image:
        "src\\assets\\images\\MyKeyboards\\primus_keyboard_render_whitecyan.png",
      title: "Primus",
      switches:
        "Original Aspiration - Krytox 205g0, 105 on springs, white Deskey switch films",
      plate: "Polycarbonate",
      keycaps: "KAT Mizu",
      case: "White and Cyan, Stainless steel weight",
      mods: "N/A",
      layout: "75%",
      stabilizers: "c3Equalz Tiffany Blue",
      description: "",
    },
  ]);

  const Keyboards = keyboards.map((keyboard) => (
    <Keyboard key={keyboard.id} keyboard={keyboard} />
  ));

  return (
    <>
      <header>
        <h1>My Keyboards</h1>
        <p>This is a list of my keyboards that I've purchased or built.</p>
      </header>
      <Container>{Keyboards}</Container>
    </>
  );
};

export default MyKeyboards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 1rem;
`;
