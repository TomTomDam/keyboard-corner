import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Header } from "../assets/styles/Layout";
import { Button } from "../assets/styles/Modules";
import BackgroundImage from "../assets/images/moderndolchkeyboard.png";
import BauerKeyboard from "../assets/images/8008_bauer_keyboard.jpg";
import HolyPandas from "../assets/images/holypandaswitches.jpg";

const Home = () => {
  return (
    <>
      <Jumbotron>
        <JumbotronText top="50%" left="30%">
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
          <Heading>What is a mechanical keyboard?</Heading>
        </Header>
        <Wrapper1Container>
          <Wrapper1Image src={BauerKeyboard} />
          <Wrapper1Text>
            <p>
              Compared to a typical consumer keyboard, a mechanical keyboard
              uses <b>mechanical switches</b> to register key presses.
            </p>
          </Wrapper1Text>
          <Wrapper1Image src={HolyPandas} />
        </Wrapper1Container>
      </Wrapper1>
      <Wrapper2>
        <WrapperRow>
          <Header>
            <Heading>Why should I use a mechanical keyboard?</Heading>
            <p>
              We are currently living in a technologically driven world.
              Keyboards have become one of our primary tools that we use to
              carry out our daily tasks.
            </p>
            <p>It is often a tool that we take for granted.</p>
          </Header>
        </WrapperRow>
      </Wrapper2>
      <Wrapper3>
        <Header>
          <Heading>How do I learn more about mechanical keyboards?</Heading>
          <p>
            Browse the Keyboard Encyclopedia or choose one of the categories
            below.
          </p>
        </Header>
        <Wrapper3CategoryButtonContainer>
          <CategoryButton>All</CategoryButton>
          <CategoryButton>Getting Started</CategoryButton>
          <CategoryButton>List of Switches</CategoryButton>
          <CategoryButton>List of Switches</CategoryButton>
          <CategoryButton>Keyboard Modifications</CategoryButton>
          <CategoryButton>Accessories</CategoryButton>
        </Wrapper3CategoryButtonContainer>
        <WrapperGrid>
          <Card>
            <CardTitle>
              <Link to="/keyboard-encyclopedia/introduction" className="">
                {/* <img src="" /> */}
                <WrapperRowColLink>
                  Introduction to Mechanical Keyboards
                </WrapperRowColLink>
              </Link>
            </CardTitle>
            <CardBody>
              <p>What's the big deal about mechanical keyboards?</p>
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              {" "}
              <Link to="/keyboard-encyclopedia/layouts-and-sizes" className="">
                {/* <img src="" /> */}
                <WrapperRowColLink>Layouts and Sizes</WrapperRowColLink>
              </Link>
            </CardTitle>
            <CardBody>
              <p>Keyboards come in all shapes and sizes.</p>
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              <Link to="/keyboard-encyclopedia/switches" className="">
                {/* <img src="" /> */}
                <WrapperRowColLink>Switches</WrapperRowColLink>
              </Link>
            </CardTitle>
            <CardBody>
              <p>
                The very nature of mechanical keyboards is powered by mechanical
                switches. See what switches are right for you.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              <Link to="/keyboard-encyclopedia/keycaps" className="">
                {/* <img src="" /> */}
                <WrapperRowColLink>Keycaps</WrapperRowColLink>
              </Link>
            </CardTitle>
            <CardBody>
              <p>
                Keycaps can make or break the look of a keyboard, as well as the
                sound and typing feel. Learn the varieties of keycaps there are.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              <Link to="/keyboard-encyclopedia/plates-and-pcbs" className="">
                {/* <img src="" /> */}
                <WrapperRowColLink>Plates and PCBs</WrapperRowColLink>
              </Link>
            </CardTitle>
            <CardBody>
              <p>
                The plate provides structural rigidity and the PCB is what
                allows your keyboard to electronically work.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              <Link to="/keyboard-encyclopedia/stabilizers" className="">
                {/* <img src="" /> */}
                <WrapperRowColLink>Stabilizers</WrapperRowColLink>
              </Link>
            </CardTitle>
            <CardBody>
              <p>
                Stabilizers, or "stabs", sit underneath larger keys to prevent
                them from wobbling. They essentially <i>stabilize</i> the
                keycap.
              </p>
            </CardBody>
          </Card>
        </WrapperGrid>
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
      </Wrapper3>
    </>
  );
};

export default Home;
//Jumbotron
const Jumbotron = styled.section`
  position: relative;
  background: ${(props) => props.theme.colours.lightgray};
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 500px -100px;
  color: ${(props) => props.theme.colours.darkgray};
  margin-left: calc(50% - 50vw);
  height: calc(100vh + 1.5rem);

  /* @media (max-width: 768px) {
    background
  }

  @media (max-width: 500px) {
    background
  } */
`;

const JumbotronHeader = styled.h1`
  color: ${(props) => props.theme.colours.white};
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 1rem;
`;

const JumbotronText = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.media.phone}) {
    top: ${(props) => props.top};
    left: calc(${(props) => props.left} + 20%);
  }

  @media screen and (min-width: ${(props) => props.theme.media.phone}) {
    top: ${(props) => props.top};
    left: calc(${(props) => props.left} + 20%);
  }

  @media screen and (min-width: ${(props) =>
      props.theme.media.tablet}) and (min-width: ${(props) =>
      props.theme.media.laptop}) and (min-width: ${(props) =>
      props.theme.media.desktop}) {
    top: ${(props) => props.top};
    left: calc(${(props) => props.left} + 20%);
  }

  @media screen and (min-width: 1900px) {
    top: ${(props) => props.top};
    left: ${(props) => props.left};
  }
`;

const JumbotronHeaderText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const JumbotronButton = styled(Button)`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: 2rem;
`;

const Wrapper = styled.section`
  padding-top: 5vh;
  padding-bottom: 5vh;
  height: calc(100vh);
`;

//Wrapper 1
const Wrapper1 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
`;

const Wrapper1Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 80%;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
`;

const Wrapper1Image = styled.img`
  flex: 1;
  object-fit: contain;
  width: 800px;
  height: 500px;
`;

const Wrapper1Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  flex: 1;
  text-align: center;
`;

//Wrapper 2
const Wrapper2 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.white};
  color: ${(props) => props.theme.colours.darkgray};
`;

//Wrapper 3
const Wrapper3 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
`;

const Wrapper3CategoryButtonContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  overflow-x: auto;
  margin: 40px 0px;
`;

const CategoryButton = styled.button`
  background: ${(props) => props.theme.colours.lightgray};
  color: ${(props) => props.theme.colours.blue};
  font-weight: bold;
  border: none;
  transition: all 0.3s;
  padding: 0px 20px;
  margin-right: 20px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colours.white};
  }
`;

const WrapperGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 60%;
  margin: 0 auto;
`;

const Card = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  min-width: 0;
  margin: 15px 15px;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.colours.lightgray};
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const CardTitle = styled.div`
  padding-top: 2.25rem;
  padding-bottom: 0.75rem;
`;

const CardBody = styled.div`
  padding: 1.25rem;
`;

const WrapperRow = styled(Row)`
  justify-content: center;
`;

const WrapperRowColLink = styled.h4`
  transition: all 0.3s ease 0s;
`;

const RowText = styled.p`
  margin-top: 2rem;
`;
