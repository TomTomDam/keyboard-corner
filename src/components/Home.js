import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from "../assets/styles/Layout";

const Home = () => {
  return (
    <>
      <Jumbotron>
        <JumbotronHeader>Keyboard Corner</JumbotronHeader>
        <p>
          A centralised resource for all things related to mechanical keyboards.
        </p>
      </Jumbotron>
      <Wrapper>
        <WrapperRow>
          <WrapperRowCol>
            <Link to="/keyboard-encyclopedia/introduction" className="">
              {/* <img src="" /> */}
              <h4>Introduction to Mechanical Keyboards</h4>
            </Link>
            <p>What's the big deal about mechanical keyboards?</p>
          </WrapperRowCol>
          <WrapperRowCol>
            <Link to="/keyboard-encyclopedia/layouts-and-sizes" className="">
              {/* <img src="" /> */}
              <h4>Layouts and Sizes</h4>
            </Link>
            <p>Keyboards come in all shapes and sizes.</p>
          </WrapperRowCol>
          <WrapperRowCol>
            <Link to="/keyboard-encyclopedia/switches" className="">
              {/* <img src="" /> */}
              <h4>Switches</h4>
            </Link>
            <p>
              The very nature of mechanical keyboards is powered by mechanical
              switches. See what switches are right for you.
            </p>
          </WrapperRowCol>
        </WrapperRow>
        <WrapperRow>
          <WrapperRowCol>
            <Link to="/keyboard-encyclopedia/keycaps" className="">
              {/* <img src="" /> */}
              <h4>Keycaps</h4>
            </Link>
            <p>
              Keycaps can make or break the look of a keyboard, as well as the
              sound and typing feel. Learn the varieties of keycaps there are.
            </p>
          </WrapperRowCol>
          <WrapperRowCol>
            <Link to="/keyboard-encyclopedia/plates-and-pcbs" className="">
              {/* <img src="" /> */}
              <h4>Plates and PCBs</h4>
            </Link>
            <p>
              The plate provides structural rigidity and the PCB is what allows
              your keyboard to electronically work.
            </p>
          </WrapperRowCol>
          <WrapperRowCol>
            <Link to="/keyboard-encyclopedia/stabilizers" className="">
              {/* <img src="" /> */}
              <h4>Stabilizers</h4>
            </Link>
            <p>
              Stabilizers, or "stabs", sit underneath larger keys to prevent
              them from wobbling. They essentially <i>stabilize</i> the keycap.
            </p>
          </WrapperRowCol>
        </WrapperRow>
        <WrapperRow>
          <RowText>
            Would you like to learn more? Click here to go to the{" "}
            <Link to="/keyboard-encyclopedia" className="">
              Keyboard Encyclopedia
            </Link>{" "}
            for specially curated and comprehensive resources regarding
            mechanical keyboards.
          </RowText>
        </WrapperRow>
      </Wrapper>
      <Wrapper>
        <Header>
          <h1>Getting into the hobby</h1>
          <p>
            You like what you see, but you don't know what keyboard to get. Look
            no further.
          </p>
        </Header>
        <WrapperRow>
          <WrapperRowCol>
            <Link to="/recommended-keyboards" className="">
              {/* <img src="" /> */}
              <h4>Recommended Keyboards</h4>
            </Link>
            <p></p>
          </WrapperRowCol>
          <WrapperRowCol>
            <Link to="/community" className="">
              {/* <img src="" /> */}
              <h4>The Mechanical Keyboard Community</h4>
            </Link>
            <p></p>
          </WrapperRowCol>
          <WrapperRowCol>
            <Link to="/keyboard-encyclopedia/group-buys" className="">
              {/* <img src="" /> */}
              <h4>Group Buys</h4>
            </Link>
            <p></p>
          </WrapperRowCol>
        </WrapperRow>
      </Wrapper>
    </>
  );
};

export default Home;

const Jumbotron = styled.section`
  background: #1781eb;
  color: white;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: -16px;
  margin-bottom: 2.5vmax;
  padding-top: 3vmax;
  padding-bottom: 3vmax;
`;

const JumbotronHeader = styled.h1`
  margin-bottom: 15px;
`;

const Header = styled.div`
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  margin-bottom: 2.5vmax;
`;

const WrapperRow = styled(Row)`
  justify-content: center;
`;

const WrapperRowCol = styled(Col)`
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
`;

const RowText = styled.p`
  margin-top: 50px;
`;
