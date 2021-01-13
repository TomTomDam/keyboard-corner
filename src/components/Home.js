import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Jumbotron>
        <h1 className="display-4">Welcome to Keyboard Corner!</h1>
        <p>
          A centralised resource for all things related to mechanical keyboards.
        </p>
      </Jumbotron>
      <Wrapper>
        <Row className="row justify-content-center">
          <div className="col-2">
            <Link to="/keyboard-encyclopedia/introduction" className="">
              {/* <img src="" /> */}
              <h4>Introduction to Mechanical Keyboards</h4>
            </Link>
            <p>What's the big deal about mechanical keyboards?</p>
          </div>
          <div className="col-2">
            <Link to="/keyboard-encyclopedia/layouts-and-sizes" className="">
              {/* <img src="" /> */}
              <h4>Layouts and Sizes</h4>
            </Link>
            <p>Keyboards come in all shapes and sizes.</p>
          </div>
          <div className="col-2">
            <Link to="/keyboard-encyclopedia/switches" className="">
              {/* <img src="" /> */}
              <h4>Switches</h4>
            </Link>
            <p>
              The very nature of mechanical keyboards is powered by mechanical
              switches. See what switches are right for you.
            </p>
          </div>
        </Row>
        <Row className="row justify-content-center home-row">
          <div className="col-2">
            <Link to="/keyboard-encyclopedia/keycaps" className="">
              {/* <img src="" /> */}
              <h4>Keycaps</h4>
            </Link>
            <p>
              Keycaps can make or break the look of a keyboard, as well as the
              sound and typing feel. Learn the varieties of keycaps there are.
            </p>
          </div>
          <div className="col-2">
            <Link to="/keyboard-encyclopedia/plates-and-pcbs" className="">
              {/* <img src="" /> */}
              <h4>Plates and PCBs</h4>
            </Link>
            <p>
              The plate provides structural rigidity and the PCB is what allows
              your keyboard to electronically work.
            </p>
          </div>
          <div className="col-2">
            <Link to="/keyboard-encyclopedia/stabilizers" className="">
              {/* <img src="" /> */}
              <h4>Stabilizers</h4>
            </Link>
            <p>
              Stabilizers, or "stabs", sit underneath larger keys to prevent
              them from wobbling. They essentially <i>stabilize</i> the keycap.
            </p>
          </div>
        </Row>
        <Row className="row justify-content-center home-row">
          <LearnMore>
            <p>
              Would you like to learn more? Click here to go to the{" "}
              <Link to="/keyboard-encyclopedia" className="">
                Keyboard Encyclopedia
              </Link>{" "}
              for specially curated and comprehensive resources regarding
              mechanical keyboards.
            </p>
          </LearnMore>
        </Row>
      </Wrapper>
      <Wrapper>
        <Header>
          <h1>Getting into the hobby</h1>
          <p>
            You like what you see, but you don't know what keyboard to get. Look
            no further.
          </p>
        </Header>
        <Row className="row justify-content-center">
          <div className="col-2">
            <Link to="/recommended-keyboards" className="">
              {/* <img src="" /> */}
              <h4>Recommended Keyboards</h4>
            </Link>
            <p></p>
          </div>
          <div className="col-2">
            <Link to="/community" className="">
              {/* <img src="" /> */}
              <h4>The Mechanical Keyboard Community</h4>
            </Link>
            <p></p>
          </div>
          <div className="col-2">
            <Link to="/keyboard-encyclopedia/group-buys" className="">
              {/* <img src="" /> */}
              <h4>Group Buys</h4>
            </Link>
            <p></p>
          </div>
        </Row>
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

const Wrapper = styled.div`
  padding-bottom: 2.5vmax;
`;

const Header = styled.div`
  padding-bottom: 15px;
`;

const Row = styled.div`
  margin-left: 0;
  margin-right: 0;
`;

const LearnMore = styled.div`
  padding-top: 50px;
`;
