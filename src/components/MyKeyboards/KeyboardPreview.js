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
  transform: translate(-50%, 15vh);
  color: white;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.large};
  text-shadow: 5px 5px 4px black;

  &:hover {
    transition: all 0.5s;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: ${(props) => props.theme.media.phone}) {
    top: -8vh;
    width: 80vw;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.phone}) {
    top: -8vh;
    width: 80vw;
  }

  @media only screen and (min-width: ${(props) =>
      props.theme.media.tablet}) and (min-width: ${(props) =>
      props.theme.media.laptop}) and (min-width: ${(props) =>
      props.theme.media.desktop}) {
      top: 50%;
  }

  @media only screen and (min-width: 1700px) {
    top: 50%;
  }

  @media only screen and (min-width: 2100px) {
    top: 50%;
  }
`;
