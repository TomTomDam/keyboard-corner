import React from "react";
import styled from "styled-components";

const KeyboardPreview = (props) => {
  return (
    <Container>
      <CoverImage
        src={`./src/assets/images/MyKeyboards/${props.keyboard.Image}`}
      />
    </Container>
  );
};

export default KeyboardPreview;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const CoverImage = styled.img`
  width: 600px;
  height: 500px;
`;
