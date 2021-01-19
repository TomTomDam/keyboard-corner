import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Header } from "../assets/styles/Layout";
import { Button } from "../assets/styles/Modules";

//Images
import BackgroundImage from "../assets/images/moderndolchkeyboard.png";
import BauerKeyboard from "../assets/images/8008_bauer_keyboard.jpg";
import HolyPandas from "../assets/images/holypandaswitches.jpg";
import CherryMXRed from "../assets/images/cherry_mx_red_animation_static.png";
import CherryMXBrown from "../assets/images/cherry_mx_brown_animation_static.png";
import CherryMXBlue from "../assets/images/cherry_mx_blue_animation_static.png";
import CherryMXRedAnimation from "../assets/images/cherry_mx_red_animation.gif";
import CherryMXBrownAnimation from "../assets/images/cherry_mx_brown_animation.gif";
import CherryMXBlueAnimation from "../assets/images/cherry_mx_blue_animation.gif";

const Home = () => {
  return (
    <>
      <Jumbotron>
        <JumbotronHeader top="50vh" left="30vw">
          <JumbotronHeading>Keyboard Corner</JumbotronHeading>
          <JumbotronHeaderText>
            A centralised resource for all things related to mechanical
            keyboards.
          </JumbotronHeaderText>
          <JumbotronButton>Get started</JumbotronButton>
        </JumbotronHeader>
      </Jumbotron>
      <Wrapper1>
        <Header>
          <Heading>What is a mechanical keyboard?</Heading>
        </Header>
        <Wrapper1Container>
          <Wrapper1Image src={BauerKeyboard} />
          <Wrapper1Text>
            Compared to a typical consumer keyboard, a mechanical keyboard uses{" "}
            <b>mechanical switches</b> to register key presses.
          </Wrapper1Text>
          <Wrapper1Image src={HolyPandas} />
        </Wrapper1Container>
      </Wrapper1>
      <Wrapper2>
        <Header>
          <Heading>Why should I use a mechanical keyboard?</Heading>
        </Header>
        <Wrapper3Container>
          <p>
            We are currently living in a technologically driven world. Keyboards
            have become one of our primary tools that we use to carry out our
            daily tasks. Unfortunately, it has become something we now take for
            granted.
          </p>
          <p>
            Mechanical keyboards can be customised in a variety of ways to suit
            your preferences.
          </p>
        </Wrapper3Container>
      </Wrapper2>
      <Wrapper4>
        <Header>
          <Heading>
            Types of Switches
          </Heading>
          <Wrapper4HeaderText>When people refer to mechanical switches, they are most likely
            referring to MX-style switches. People also tend to think of those
            loud, clicky switches that are often found in gaming keyboards; in
            actuality, MX-style mechanical switches come in three types in total:
            <b> Linear</b>, <b>Tactile</b> and <b>Clicky</b>.</Wrapper4HeaderText>
          <Wrapper4ImagesRow>
            <Wrapper4ImageContainer>
              <Wrapper4ImageTitle>Linear</Wrapper4ImageTitle>
              <LinearSwitchImage id="linearSwitch" src={CherryMXRed}/>
              <p>Smooth all the way down</p>
            </Wrapper4ImageContainer>
            <Wrapper4ImageContainer>
              <Wrapper4ImageTitle>Tactile</Wrapper4ImageTitle>
              <TactileSwitchImage id="tactileSwitch" src={CherryMXBrown}/>
              <p>Tactile bump</p>
            </Wrapper4ImageContainer>
            <Wrapper4ImageContainer>
              <Wrapper4ImageTitle>Clicky</Wrapper4ImageTitle>
              <ClickySwitchImage id="clickySwitch" src={CherryMXBlue}/>
              <p>Tactile bump with an audible "click" sound</p>
            </Wrapper4ImageContainer>
          </Wrapper4ImagesRow>
        </Header>
      </Wrapper4>
      <Wrapper3>
        <Header>
          <Heading>How do I learn more about mechanical keyboards?</Heading>
        </Header>
        <Wrapper3Container>
          <Wrapper3Text>
            The Keyboard Encyclopedia is your one stop shop for anything related
            to mechanical keyboards.
          </Wrapper3Text>
          <Wrapper3Button>Read more</Wrapper3Button>
        </Wrapper3Container>
        {/* <Wrapper3CategoryButtonContainer>
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
                <WrapperGridLink>
                  Introduction to Mechanical Keyboards
                </WrapperGridLink>
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
                <WrapperGridLink>Layouts and Sizes</WrapperGridLink>
              </Link>
            </CardTitle>
            <CardBody>
              <p>Keyboards come in all shapes and sizes.</p>
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              <Link to="/keyboard-encyclopedia/switches" className="">
                <WrapperGridLink>Switches</WrapperGridLink>
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
                <WrapperGridLink>Keycaps</WrapperGridLink>
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
                <WrapperGridLink>Plates and PCBs</WrapperGridLink>
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
                <WrapperGridLink>Stabilizers</WrapperGridLink>
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
        <RowText>
          Would you like to learn more? Click here to go to the{" "}
          <Link to="/keyboard-encyclopedia" className="">
            Keyboard Encyclopedia
          </Link>{" "}
          for specially curated and comprehensive resources regarding mechanical
          keyboards.
        </RowText> */}
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

const JumbotronHeader = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
  text-align: center;

  @media only screen and (max-width: ${(props) => props.theme.media.phone}) {
    top: ${(props) => props.top};
    left: calc(${(props) => props.left} + 20vw);
  }

  @media only screen and (min-width: ${(props) => props.theme.media.phone}) {
    top: ${(props) => props.top};
    left: calc(${(props) => props.left} + 20vw);
  }

  @media only screen 
      and (min-width: ${(props) => props.theme.media.tablet}) 
      and (min-width: ${(props) => props.theme.media.laptop}) 
      and (min-width: ${(props) => props.theme.media.desktop}) 
  {
    top: ${(props) => props.top};
    left: calc(${(props) => props.left} + 20vw);
  }

  @media only screen and (min-width: 1700px) {
    top: ${(props) => props.top};
    left: calc(${(props) => props.left} + 10vw);
  }

  @media only screen and (min-width: 2100px) {
    top: ${(props) => props.top};
    left: ${(props) => props.left};
  }
`;

const JumbotronHeading = styled.h1`
  color: ${(props) => props.theme.colours.white};
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 1rem;
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
  font-size: ${(props) => props.theme.fontSizes.large};
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
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
`;

const Wrapper1Image = styled.img`
  flex: 0 0 33%;
  object-fit: contain;
  width: 25%;
  height: 25%;
  padding: 1rem;

  @media only screen and (max-width: ${(props) => props.theme.media.phone}) {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.phone}) {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.tablet}) {
    width: 75%;
    height: 75%;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.desktop}) {
    width: 50%;
    height: 50%;
  }
`;

const Wrapper1Text = styled.p`
  flex: 0 0 33%;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-align: center;
  padding: 1rem;
`;

//Wrapper 2
const Wrapper2 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.white};
  color: ${(props) => props.theme.colours.darkgray};
`;

//Wrapper 4
const Wrapper4 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.white};
  color: ${(props) => props.theme.colours.darkgray};
  max-width: 50%;
  margin: 0 auto;
`;

const Wrapper4HeaderText = styled.p`
  font-size: 1.5rem;
  margin-top: 4rem;
`;

const Wrapper4ImagesRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;

const Wrapper4ImageContainer = styled.div`
  flex: 1;
`;

const Wrapper4ImageTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Wrapper4Image = styled.img`
    max-width: 100%;
    height: auto;
    padding: 1rem;
`;

const LinearSwitchImage = styled(Wrapper4Image)`
`;

const TactileSwitchImage = styled(Wrapper4Image)`
`;

const ClickySwitchImage = styled(Wrapper4Image)`
`;

//Animate switches on hover
$(function() {
  $("#linearSwitch").hover(
    function() {
      $(this).attr("src", CherryMXRedAnimation);
    },
    function() {
      $(this).attr("src", CherryMXRed);
    }
  );

  $("#tactileSwitch").hover(
    function() {
      $(this).attr("src", CherryMXBrownAnimation);
    },
    function() {
      $(this).attr("src", CherryMXBrown);
    }
  );

  $("#clickySwitch").hover(
    function() {
      $(this).attr("src", CherryMXBlueAnimation);
    },
    function() {
      $(this).attr("src", CherryMXBlue);
    }
  );
});

//Wrapper 3
const Wrapper3 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
`;

const Wrapper3Container = styled.div`

`

const Wrapper3Text = styled.p`

`

const Wrapper3Button = styled.button`

`;

const Wrapper3CategoryButtonContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  overflow-x: auto;
  margin: 2rem 0px;
`;

const CategoryButton = styled.button`
  background: ${(props) => props.theme.colours.lightgray};
  color: ${(props) => props.theme.colours.blue};
  font-weight: bold;
  border: none;
  transition: all 0.3s;
  padding: 0 1.5rem;
  margin-right: 1.5rem;
  height: 3rem;
  border-radius: 0.25rem;
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
  max-width: 60%;
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

const WrapperGridLink = styled.h4`
  transition: all 0.3s ease 0s;
`;

const RowText = styled.div`
  margin-top: 2rem;
`;
