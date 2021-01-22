import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../assets/styles/Layout";
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
        <Wrapper2Container>
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
        </Wrapper2Container>
      </Wrapper2>
      <Wrapper3>
        <Header>
          <Heading>
            Types of Switches
          </Heading>
          <Wrapper3HeaderText>When people refer to mechanical switches, they are most likely
            referring to MX-style switches. People also tend to think of those
            loud, clicky switches that are often found in gaming keyboards; in
            actuality, MX-style mechanical switches come in three types in total:
            <b> Linear</b>, <b>Tactile</b> and <b>Clicky</b>.</Wrapper3HeaderText>
          <Wrapper3ImagesRow>
            <Wrapper3ImageContainer>
              <Wrapper3ImageTitle>Linear</Wrapper3ImageTitle>
              <LinearSwitchImage id="linearSwitch" src={CherryMXRed}/>
              <p>Smooth all the way down</p>
            </Wrapper3ImageContainer>
            <Wrapper3ImageContainer>
              <Wrapper3ImageTitle>Tactile</Wrapper3ImageTitle>
              <TactileSwitchImage id="tactileSwitch" src={CherryMXBrown}/>
              <p>Tactile bump</p>
            </Wrapper3ImageContainer>
            <Wrapper3ImageContainer>
              <Wrapper3ImageTitle>Clicky</Wrapper3ImageTitle>
              <ClickySwitchImage id="clickySwitch" src={CherryMXBlue}/>
              <p>Tactile bump with an audible "click" sound</p>
            </Wrapper3ImageContainer>
          </Wrapper3ImagesRow>
        </Header>
      </Wrapper3>
      <Wrapper4>
        <Header>
          <Heading>How do I learn more about mechanical keyboards?</Heading>
        </Header>
        <Wrapper4Container>
          <Wrapper4Text>
            The Keyboard Encyclopedia is your one stop shop for anything related
            to mechanical keyboards.
          </Wrapper4Text>
          <Wrapper4Button>The Keyboard Encyclopedia</Wrapper4Button>
        </Wrapper4Container>
      </Wrapper4>
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
  margin-top: -16px;
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
  height: 100vh;
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

const Wrapper2Container = styled.div`

`;

//Wrapper 3
const Wrapper3 = styled(Wrapper)`
  color: ${(props) => props.theme.colours.darkgray};
  max-width: 50%;
  margin: 0 auto;
`;

const Wrapper3HeaderText = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const Wrapper3ImagesRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 15rem;

  @media only screen and (max-width: ${(props) => props.theme.media.phone}) {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.phone}) {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.tablet}) {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.desktop}) {
    margin-top: 15rem;
    flex-direction: row;
    align-items: baseline;
  }
`;

const Wrapper3ImageContainer = styled.div`
  flex: 0 0 33%;
  max-width: 33%;
  & > p {
    font-size: 1.25em;
  }
`;

const Wrapper3ImageTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Wrapper3Image = styled.img`
    max-width: 100%;
    height: auto;
    padding: 1rem;
`;

const LinearSwitchImage = styled(Wrapper3Image)`
`;

const TactileSwitchImage = styled(Wrapper3Image)`
`;

const ClickySwitchImage = styled(Wrapper3Image)`
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

//Wrapper 4
const Wrapper4 = styled(Wrapper)`
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
`;

const Wrapper4Container = styled.div`

`

const Wrapper4Text = styled.p`

`

const Wrapper4Button = styled(Button)`

`;