import React from 'react';
import styled from "styled-components";

const ValidationMessage = (props) => {
  const input = props.input;

    return (
        <Container>
            {input} is required.
        </Container>
    )
}

export default ValidationMessage;

const Container = styled.div`
  color: red;
`;