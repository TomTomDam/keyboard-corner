import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <CoverImageWrapper to={`/keyboard/${props.keyboard.Id}`}>
        <CoverImage style={{ backgroundImage: "url(" + `/src/assets/images/MyKeyboards/${props.keyboard.Image}` + ")" }}></CoverImage>
        <Title style={showTitle}>{props.keyboard.Title}</Title>
      </CoverImageWrapper>
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

const CoverImageWrapper = styled(Link)`
  position: relative;
  width: 700px;
  height: 600px;
`;

const CoverImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: black; /* fallback color */
  background-position: center;
  background-size: cover;
  transition: all .5s;

  &:hover, &:focus {
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  z-index: 9999;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  align-items: center;
  text-align: center;
  font-weight: bold;

  &:hover {
    transition: all 0.5s;
    letter-spacing: 1px;
  }
`;
