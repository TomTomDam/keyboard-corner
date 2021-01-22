import React from "react";
import styled from "styled-components";
import {
  PageContainer,
  PageTitle,
  PageSection,
  PageSectionHeading,
  PageSectionSubheading,
  PageParagraph,
  PageUl,
} from "../../../assets/styles/Layout";
import {
  TableOfContents,
  TableOfContentsTitle,
  TableOfContentsChapter,
  TableOfContentsSubChapters,
} from "../../../assets/styles/Modules";

import FullSizeKeyboard from "../../../assets/images/LayoutsAndSizes/fullsizekeyboard_keyboard.png";
import MembraneKeyboardDomes from "../../../assets/images//Switches/membrane_keyboard_domes.png";
import MechanicalKeyboard from "../../../assets/images/Switches/mechanical_keyboard.jpg";
import MechanicalKeyboardSwitch1 from "../../../assets/images/Switches/mechanical_keyboard_switches.jpg";
import MechanicalKeyboardSwitch2 from "../../../assets/images/Switches/mechanical_switches.png";
import DisassembledSwitch from "../../../assets/images/Switches/Cherry_MX_Brown_-_disassembled_top_views.jpg";

export default function Switches() {
  return (
    <PageContainer>
      <PageTitle>Switches</PageTitle>
      <PageParagraph>
        For every key, there is a switch. Switches are what sit underneath your
        keycaps. By pressing a key, a component inside the switch makes physical
        contact with another part of the switch to complete a "circuit", which
        registers that a key has been pressed. But how exactly does this
        mechanism work? In this article, we will be doing a deep dive into the
        components of a mechanical switch and go into how it works, then I will
        do the same for the various types of other switches out there.
      </PageParagraph>
      <PageSection>
        <PageSectionHeading>
          Difference between a membrane keyboard and a mechanical keyboard
        </PageSectionHeading>
        <PageParagraph>
          Your every day membrane keyboard looks something like this:
        </PageParagraph>
        <Figure>
          <Image src={FullSizeKeyboard} alt="A fullsize keyboard" />
          <FigureCaption></FigureCaption>
        </Figure>
        <PageParagraph>
          Below is a diagram showing the internals of a membrane switch.
        </PageParagraph>
        <Figure>
          <Image
            src={MembraneKeyboardDomes}
            alt="An exploded diagram of a membrane switch"
          />
          <FigureCaption></FigureCaption>
        </Figure>
        <PageParagraph>
          A membrane keyboard has a layer of rubber/silicone that have "domes"
          that sit underneath the keycaps. When a key is pressed all the way
          down, a metal contact is able to touch the circuit board - this
          completes the electrical circuit and triggers a key press. The rubber
          dome pops down and up, which gives you the tactile feedback when using
          a membrane keyboard.
        </PageParagraph>
        <PageParagraph>Now let's look at a mechanical keyboard.</PageParagraph>
        <Figure>
          <Image src={MechanicalKeyboard} />
          <FigureCaption></FigureCaption>
        </Figure>
        <PageParagraph>
          Okay... it looks like a plain ol' keyboard to me. What makes it
          different to a membrane keyboard? The answer is the switches.
          Specifically, this keyboard is using mechanical switches. Here is what
          they look like:
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image
              src={MechanicalKeyboardSwitch1}
              alt="Mechanical switches inside a keyboard"
            />
            <FigureCaption>Mechanical switches inside a keyboard</FigureCaption>
          </Figure>
          <Figure>
            <Image
              src={MechanicalKeyboardSwitch2}
              alt="An assortment of mechanical switches"
            />
            <FigureCaption>An assortment of mechanical switches</FigureCaption>
          </Figure>
        </PageRow>
        <PageParagraph>
          But how do these mechanical switches work exactly? And what's so good
          about them? Read on to find out!
        </PageParagraph>
      </PageSection>
      <TableOfContents>
        <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
        <ul>
          <TableOfContentsChapter>
            <li>
              <a href="#switches-1">1. Mechanical switches</a>
            </li>
            <TableOfContentsSubChapters>
              <li>
                <a href="#switches-1.1">1.1. Anatomy of a mechanical switch</a>
              </li>
              <li>
                <a href="#switches-1.2">1.2. Glossary</a>
              </li>
            </TableOfContentsSubChapters>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <li>
              <a href="#switches-2">2. Types of mechanical switches</a>
            </li>
            <TableOfContentsSubChapters>
              <li>
                <a href="#switches-2.1">2.1. Linear</a>
              </li>
              <li>
                <a href="#switches-2.2">2.2. Tactile</a>
              </li>
              <li>
                <a href="#switches-2.3">2.3. Clicky</a>
              </li>
            </TableOfContentsSubChapters>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <a href="#switches-3">3. Mechanical switch brands/manufacturers</a>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <a href="#switches-4">4. Topre (electro-capacitive) switches</a>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <a href="#switches-5">5. Alps switches</a>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <a href="#switches-6">6. Buckling spring switches</a>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <li>
              <a href="#switches-7">7. Other types of switches</a>
            </li>
            <TableOfContentsSubChapters>
              <li>
                <a href="#switches-7.1">7.1. Logitech Romer G</a>
              </li>
            </TableOfContentsSubChapters>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <a href="#switches-8">8. What switch should I get?</a>
          </TableOfContentsChapter>
        </ul>
      </TableOfContents>
      <PageSection>
        <PageSectionHeading>Mechanical switches</PageSectionHeading>
        <PageSectionSubheading>
          Anatomy of a mechanical switch
        </PageSectionSubheading>
        <PageParagraph>
          Let's dissect a mechanical switch and see what it looks like on the
          inside.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={DisassembledSwitch} alt="Disassembled switch" />
            <FigureCaption>A disassembled Cherry MX Brown switch</FigureCaption>
          </Figure>
          <ImageTextContainer>
            <p>
              This particular style of switch is an MX-style switch, named by
              one of the original manufacturers of mechanical switches, Cherry,
              after their patented line of Cherry MX switches.
            </p>
            <p>
              Now that their patent has expired, many MX-style clones have been
              created at a much lower price point and are unanimously said to
              offer a smoother keypress and more pleasant sound profiles.
            </p>
            <p>A mechanical switch is comprised of these parts:</p>
            <ol>
              <li>
                <b>Bottom housing</b> - The housing is a case that holds the
                switch together. This is the bottom half of the switch housing.
                The spring and metal leaves sit on the bottom housing.
              </li>
              <li>
                <b>Top housing</b> - The top half of the casing. The stem fits
                through the top housing.
              </li>
              <li>
                <b>Stem</b> - Determines the tactile properties of the
                mechanical switch. There are three types: Linear, Tactile,
                Clicky (I will define these later).
              </li>
              <li>
                <b>Spring</b> - Determines how much force is required to actuate
                the switch. The stem sits directly on one end of the spring.
              </li>
              <li>
                and 6. <b>Metal leaves</b> - Responsible for completing the
                electrical circuit and registering a keypress.
              </li>
            </ol>
            <p>
              When a key is pressed using a mechanical switch, the stem and
              spring move down. This pushes one metal leaf against the other,
              allowing the metal leaves to make contact and complete its circuit
              to actuate a key press.
            </p>
          </ImageTextContainer>
        </PageRow>
        <PageSectionSubheading>Glossary</PageSectionSubheading>
        <PageUl>
          <li>
            <b>Actuation weight/force</b> - the force required to trigger
            (actuate) a keypress where it is recognised by the keyboard.
          </li>
          <li>
            <b>Bottom out weight/force</b> - the force required to press a
            switch all the way down (hence the term bottom-out) until the stem
            and spring cannot move anymore.
          </li>
          <li id="key-bounce">
            <b>Key bounce</b> - AKA "chattering", an error that occur in
            defective mechanical switches, where one key press is detected as
            multiple actuations. Normally, when a switch is pressed down, the
            metal leaves bounce back and forth and eventually settle down after
            a very small interval (5ms). In a defective mechanical switch, the
            metal contacts may repeatedly make and break contact, leading to the
            keyboard erroneously registering multiple actuations.
          </li>
          <li>
            <b>Key rollover</b> - the maximum number of keys you can press at
            once and still have all of the keys be recognised by the keyboard.
            The maximum number of keys that can be recognised can be set given
            your keyboard has the setting e.g. 6 Key Rollover = 6 keys can be
            recognised in one go.
          </li>
          <li>
            <b>Linear, Tactile, Clicky</b> - <a href="#switches-2">the three different types of switches</a>.
          </li>
          <li>
            <b>Ping</b> - a distinct noise you can sometimes hear from the
            spring inside a switch. Not a desirable sound at all, and can be
            eliminated by <a href="#">lubing springs</a>.
          </li>
          <li>
            <p>
              <b>Plate-mounted switch</b> - switches that can be mounted on a{" "}
              <a href="#">plate</a>, where the plate sits on top of the{" "}
              <a href="#">PCB</a>. This allows for the switches to be secured
              into the keyboard, and plates lead to different sound profiles.
            </p>
            <p>
              Some keyboards, e.g. Massdrop CTRL and ALT, may require you to cut
              off your switch pins with pliers in order for the switch to fit in
              the keyboard. A disadvantage to removing the switch pins is that
              you are no longer able to{" "}
              <a href="#pcb-mounted-switch">PCB-mount</a> them. Despite this
              disadvantage, plate-mount switches are considered to be more
              robust, thus the tradeoff is negligible.
            </p>
          </li>
          <li id="pcb-mounted-switch">
            <b>PCB-mounted switch</b> - switches that have{" "}
            <a href="#switch-pins">a number of pins</a> that act as "guides"
            when placing the switches on the PCB.
          </li>
          <li>
            <b>Stem legs</b> - they move along a metal leaf when a key is
            pressed down (
            <a href="#switches-2">
              read how stem legs differ for each type of switch
            </a>
            ).
          </li>
          <li id="switch-pins">
            <b>Switch pins</b> - plastic prongs that are a part of the exterior
            switch housing. When switches are PCB-mounted, the pins slot into
            holes in the PCB and provides some stability which reduces wobble.
          </li>
          <li>
            <b>Travel distance</b> - the actual distance of a key required to
            actuate a keypress. Laptop chiclet keyboards, for example, have much
            shorter travel distances compared to computer keyboards.
          </li>
        </PageUl>
      </PageSection>
      <PageSection>
        <PageSectionHeading>Types of mechanical switches</PageSectionHeading>
        <PageParagraph>
          There are three types of switches - Linear, Tactile and Clicky - and
          they all differ in regards to their feel and even their sound. Do you
          recall that the stem is what determines the tactile properties of the
          switch? Let's look at how the stem varies among the three types.
        </PageParagraph>
      </PageSection>
    </PageContainer>
  );
}

const PageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Figure = styled.figure`
  padding: 1rem;
`;

const FigureCaption = styled.figcaption`
  text-align: center;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 800px;
  height: auto;
  padding: 1rem;
`;

const ImageTextContainer = styled.div`
  flex: 0 1 40%;
  align-self: flex-start;
  padding: 1rem;
  font-size: 1.1rem;
  line-height: 1.8;
  & > ol {
    margin-left: 2rem;
  }
`;
