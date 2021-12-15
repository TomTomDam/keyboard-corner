import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Toast = (props) => {
    const { alertList, position } = props;

    return (
        <Container>
            <CloseButton>X</CloseButton>
            <Icon></Icon>
            <TextContainer>
                <Title></Title>
                <Message></Message>
            </TextContainer>
        </Container>
    )
}

export default Toast;

const Container = styled.div`
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;
    bottom: 12px;
    right: 12px;
    transition: transform .6s ease-in-out;
    animation: toast-in-right .7s;
`;

const CloseButton = styled.button``;

const Icon = styled.i``;

const TextContainer = styled.div`
`;

const Title = styled.h3`
`;

const Message = styled.p`
`;