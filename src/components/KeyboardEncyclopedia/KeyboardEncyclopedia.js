import React from "react";
import styled from "styled-components";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import KeyboardEncyclopediaRoutes from "../../routes/KeyboardEncyclopediaRoutes";
import Introduction from "./Index/Introduction";

export default function KeyboardEncyclopedia() {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <HeaderSection>
        <HeaderSectionHeading>The Keyboard Encyclopedia</HeaderSectionHeading>
        <HeaderSectionText>
          Your comprehensive guide to all things related to mechanical
          keyboards.
        </HeaderSectionText>
      </HeaderSection>
      <ContentContainer>
        <StickyNavbar>
          <StickyNavbarSection>
            <StickyNavbarTitle>Getting Started</StickyNavbarTitle>
            <StickyNavbarLink to={`${url}/introduction`}>Introduction to Mechanical Keyboards</StickyNavbarLink>
            <StickyNavbarLink to={`${url}/switches`}>Switches</StickyNavbarLink>
            <StickyNavbarLink to={`${url}/layouts-and-sizes`}>Layouts and Sizes</StickyNavbarLink>
            <StickyNavbarLink to={`${url}/plates-and-pcbs`}>Plates and PCBs</StickyNavbarLink>
            <StickyNavbarLink to={`${url}/keycaps`}>Keycaps</StickyNavbarLink>
            <StickyNavbarLink to={`${url}/stabilizers`}>Stabilizers</StickyNavbarLink>
          </StickyNavbarSection>

          <StickyNavbarSection>
            <StickyNavbarTitle>Keyboard Modifications</StickyNavbarTitle>
            <StickyNavbarLink to={`${url}/switch-modifications`}>Switch Modifications</StickyNavbarLink>
          </StickyNavbarSection>

          <StickyNavbarSection>
            <StickyNavbarTitle>List of Switches</StickyNavbarTitle>
            <StickyNavbarLink to={`${url}/switches/cherry`}>Cherry</StickyNavbarLink>
            <StickyNavbarLink to={`${url}/switches/gateron`}>Gateron</StickyNavbarLink>
            <StickyNavbarLink to={`${url}/switches/kailh`}>Kailh</StickyNavbarLink>
            <StickyNavbarLink to={`${url}/switches/durock`}>Durock</StickyNavbarLink>
          </StickyNavbarSection>

          <StickyNavbarSection>
            <StickyNavbarTitle>Accessories</StickyNavbarTitle>
            <StickyNavbarLink to={`${url}/custom-cables`}>Custom Cables</StickyNavbarLink>
          </StickyNavbarSection>
        </StickyNavbar>
        <StickyNavbarBorder></StickyNavbarBorder>
        <Page>
          <Switch>
            <Route exact path={path} component={Introduction}/>
            <KeyboardEncyclopediaRoutes path={path}/>
          </Switch>
        </Page>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
`;

const HeaderSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colours.lightgray};
  color: ${(props) => props.theme.colours.white};
  padding: 3vw;
  margin-top: -16px;
`;

const HeaderSectionHeading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 1rem;
`;

const HeaderSectionText = styled.p`
  font-size: 1.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const StickyNavbar = styled.div`
  position: sticky;
  flex: 0 1 15%;
`;

const StickyNavbarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

const StickyNavbarTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const StickyNavbarLink = styled(Link)`
  margin-top: 5px;
  color: ${(props) => props.theme.colours.blue};
`;

const StickyNavbarBorder = styled.div`
  border: none;
  width: 1px;
  height: 100vh;
  color: black;
  background-color: black;
  background: radial-gradient(circle, black, white);
`;

const Page = styled.div`
  flex: 0 1 85%;
`;