import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col3, Header } from "../assets/styles/Layout";
import { Button } from "../assets/styles/Modules";
import BackgroundImage from "../assets/images/moderndolchkeyboard.png";

const Home = () => {
  return (
    <Wrapper>
      <Jumbotron>
        <JumbotronText>
          <JumbotronHeader>Keyboard Corner</JumbotronHeader>
          <JumbotronHeaderText>
            A centralised resource for all things related to mechanical
            keyboards.
          </JumbotronHeaderText>
          <JumbotronButton>Get started</JumbotronButton>
        </JumbotronText>
      </Jumbotron>
      <Wrapper1>
        <Header>
          <Heading>What's the big deal about mechanical keyboards?</Heading>
          <p>Gang</p>
        </Header>
      </Wrapper1>
      <Wrapper2>
        <Header>
          <Heading>The Keyboard Encyclopedia</Heading>
        </Header>
        <WrapperRow>
          <Col3>
            <Link to="/keyboard-encyclopedia/introduction" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>
                Introduction to Mechanical Keyboards
              </WrapperRowColLink>
            </Link>
            <p>What's the big deal about mechanical keyboards?</p>
          </Col3>
          <Col3>
            <Link to="/keyboard-encyclopedia/layouts-and-sizes" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>Layouts and Sizes</WrapperRowColLink>
            </Link>
            <p>Keyboards come in all shapes and sizes.</p>
          </Col3>
          <Col3>
            <Link to="/keyboard-encyclopedia/switches" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>Switches</WrapperRowColLink>
            </Link>
            <p>
              The very nature of mechanical keyboards is powered by mechanical
              switches. See what switches are right for you.
            </p>
          </Col3>
        </WrapperRow>
        <WrapperRow>
          <Col3>
            <Link to="/keyboard-encyclopedia/keycaps" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>Keycaps</WrapperRowColLink>
            </Link>
            <p>
              Keycaps can make or break the look of a keyboard, as well as the
              sound and typing feel. Learn the varieties of keycaps there are.
            </p>
          </Col3>
          <Col3>
            <Link to="/keyboard-encyclopedia/plates-and-pcbs" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>Plates and PCBs</WrapperRowColLink>
            </Link>
            <p>
              The plate provides structural rigidity and the PCB is what allows
              your keyboard to electronically work.
            </p>
          </Col3>
          <Col3>
            <Link to="/keyboard-encyclopedia/stabilizers" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>Stabilizers</WrapperRowColLink>
            </Link>
            <p>
              Stabilizers, or "stabs", sit underneath larger keys to prevent
              them from wobbling. They essentially <i>stabilize</i> the keycap.
            </p>
          </Col3>
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
      </Wrapper2>
      <Wrapper3>
        <Header>
          <Heading>Getting into the hobby</Heading>
          <p>
            You like what you see, but you don't know where to start. Look no
            further.
          </p>
        </Header>
        <WrapperRow>
          <Col3>
            <Link to="/recommended-keyboards" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>Recommended Keyboards</WrapperRowColLink>
            </Link>
            <p></p>
          </Col3>
          <Col3>
            <Link to="/community" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>
                The Mechanical Keyboard Community
              </WrapperRowColLink>
            </Link>
            <p></p>
          </Col3>
          <Col3>
            <Link to="/keyboard-encyclopedia/group-buys" className="">
              {/* <img src="" /> */}
              <WrapperRowColLink>Group Buys</WrapperRowColLink>
            </Link>
            <p></p>
          </Col3>
        </WrapperRow>
      </Wrapper3>
    </Wrapper>
  );
};

export default Home;

const Jumbotron = styled.section`
  position: relative;
  background: ${(props) => props.theme.colours.white};
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 500px -100px;
  color: ${(props) => props.theme.colours.darkgray};
  /* width: 100vw; */
  margin-left: calc(50% - 50vw);
  margin-top: -16px;
  height: 100%;
`;

const JumbotronHeader = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 0.5rem;
`;

const JumbotronText = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

const JumbotronHeaderText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const JumbotronButton = styled(Button)`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: 60px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Heading = styled.h2`
  margin-bottom: 0.5rem;
`;

const Wrapper = styled.div`
  padding-bottom: 2.5vmax;
`;

const Wrapper1 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
`;

const Wrapper2 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.white};
  color: ${(props) => props.theme.colours.darkgray};
  /* padding-bottom: 5%; */
`;

const Wrapper3 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
`;

const WrapperRow = styled(Row)`
  justify-content: center;
`;

const WrapperRowColLink = styled.h4`
  transition: all 0.3s ease 0s;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const RowText = styled.p`
  margin-top: 2.5rem;
`;
