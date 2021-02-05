import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  PageSection,
  PageSectionHeading,
  PageSectionSubheading,
  PageParagraph,
  PageUl,
  PageOl,
} from "../../../assets/styles/Layout";
import {
  Figure,
  FigureCaption,
  Image,
  ImageTextContainer,
} from "../../../assets/styles/Modules";
import TableOfContents from "../TableOfContents";

export default function Introduction(props) {
  const path = props.path;
  const anchorLink = "introduction";
  const chapterList = [
    {
      id: 1,
      name: "What is a mechanical keyboard?",
      subchapters: [
        {
          id: 1,
          name: "Anatomy of a mechanical keyboard",
        },
      ],
    },
    {
      id: 2,
      name: "Why should I use a mechanical keyboard?",
      subchapters: [],
    },
    {
      id: 3,
      name: "Where do I start?",
      subchapters: [],
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Introduction to Mechanical Keyboards</PageTitle>
      <PageParagraph>
        Given that we are currently living in a world driven by technology,
        keyboards are a result of our technological innovations. If you use
        computers, keyboards are one of the devices that we use every day to
        perform our daily tasks.
      </PageParagraph>
      <PageParagraph></PageParagraph>
      <TableOfContents chapterList={chapterList} anchorLink={anchorLink} />
      <PageSection>
        <PageSectionHeading id="introduction-1">
          What is a mechanical keyboard?
        </PageSectionHeading>
        <PageParagraph>
          Compared to a typical consumer keyboard, a mechanical keyboard uses{" "}
          <b>mechanical switches</b> to register key presses.
        </PageParagraph>
        <PageSectionSubheading id="introduction-1.1">
          Anatomy of a mechanical keyboard
        </PageSectionSubheading>
        <Figure>
          <Image src=""></Image>
          <FigureCaption>A diagram of a mechanical keyboard</FigureCaption>
        </Figure>
        <PageUl>
          <li><Link to={`${path}/case`}>Case</Link> - what houses your internal keyboard components.</li>
          <li>
            <Link to={`${path}/keycaps`}>Keycaps</Link> - the plastic caps that sit on
            top of each switch.
          </li>
          <li>
            <Link to={`${path}/switches`}>Switches</Link> - the component that sits
            underneath each keycap. When you press a key, metal components
            inside the switch make physical contact with each other to complete
            a "circuit", which registers that a key has been pressed.
          </li>
          <li>
            <Link to={`${path}/plates-and-pcbs`}>Plate</Link> - a layer that switches can
            be mounted onto, providing your keyboard with a more sturdy
            construction. It is usually made out of a metal, but there are other
            materials. Each material provides different properties, including
            different acoustics and feel when typing.
          </li>
          <li>
            <Link to={`${path}/plates-and-pcbs`}>PCB</Link> - sits directly underneath
            your plate and switches. It is what supports and connects your
            electrical components in your keyboard. It uses conductive pads made
            out of layers of copper that are laminated onto another
            non-conductive layer. These components are soldered onto the PCB to
            both electronically connect and physically fasten them to it.
          </li>
        </PageUl>
      </PageSection>
      <PageSection>
        <PageSectionHeading>
          Why should I use a mechanical keyboard?
        </PageSectionHeading>
        <PageParagraph>
          As a tool we use every day, it makes sense to invest in something we use to fulfil important tasks.
        </PageParagraph>
        <PageParagraph>
          Not only that, mechanical keyboards are
          becoming more popular as part of a booming hobby and community.
        </PageParagraph>
      </PageSection>
      <PageSection>
        <PageSectionHeading>Where do I start?</PageSectionHeading>
        <PageParagraph></PageParagraph>
      </PageSection>
    </PageContainer>
  );
}
