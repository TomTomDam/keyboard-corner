import React, { useState } from "react";
import styled from "styled-components";

const KeyboardPreview = (props) => {
  const [showTitle, setShowTitle] = useState({ display: "none" });

  return (
    <Container
      onMouseEnter={(e) => {
        setShowTitle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setShowTitle({ display: "none" });
      }}
    >
      <Title style={showTitle}>{props.keyboard.Title}</Title>
      <CoverImage
        src={`./src/assets/images/MyKeyboards/${props.keyboard.Image}`}
      />
    </Container>
  );
};

export default KeyboardPreview;

const Container = styled.div`
  display: flex;
  flex-basis: calc(35% - 40px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const CoverImage = styled.img`
  width: 700px;
  height: 600px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
`;
