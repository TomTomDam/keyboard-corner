import React from "react";
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Heading } from "../../assets/styles/Layout";
import KeyboardEncyclopediaNavbar from "./KeyboardEncyclopediaNavbar";

import Introduction from "./Index/Introduction";
import KeyboardEncyclopediaRoutes from "../../routes/KeyboardEncyclopediaRoutes";

export default function KeyboardEncyclopedia() {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <HeaderSection>
        <Heading>The Keyboard Encyclopedia</Heading>
        <HeaderSectionText>
          Your comprehensive guide to all things related to mechanical
          keyboards.
        </HeaderSectionText>
      </HeaderSection>
      <ContentContainer>
        <KeyboardEncyclopediaNavbar url={url} />
        <NavbarBorder></NavbarBorder>
        <Page>
          <Switch>
            <Route exact path={path} component={Introduction} />
            <KeyboardEncyclopediaRoutes path={path} />
          </Switch>
        </Page>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div``;

const HeaderSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colours.lightgray};
  color: ${(props) => props.theme.colours.white};
  padding: 3vw;
  margin-top: -2rem;
`;

const HeaderSectionText = styled.p`
  font-size: 1.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NavbarBorder = styled.div`
  border: none;
  width: 1px;
  color: black;
  background-color: #dddddd;
`;

const Page = styled.div`
  flex: 0 1 85%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background: white;
`;
