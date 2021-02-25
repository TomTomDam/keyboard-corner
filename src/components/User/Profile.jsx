import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../UserContext";

const Profile = (props) => {
    const user = props.user;
    
    return (
        <Container>
            <h1>Profile</h1>
        </Container>
    )
}

export default Profile;

const Container = styled.div`

`;
