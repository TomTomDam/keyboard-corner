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
  PageOl,
  PageRow,
} from "../../../assets/styles/Layout";
import {
  Figure,
  FigureCaption,
  Image,
  ImageTextContainer,
} from "../../../assets/styles/Modules";
import TableOfContents from "../TableOfContents";

import ForceCurveGraph from "../../../assets/images/SwitchModifications/spring_types_force_curve_graph.png";
import SwitchFilms from "../../../assets/images/SwitchModifications/switch_films.jpg";
import SwitchFilmOnSwitch from "../../../assets/images/SwitchModifications/switch_film_on_switch.jpg";

const SwitchModifications = () => {
  const anchorLink = "switch-modifications";
  const chaptersList = [
    {
      id: 1,
      name: "Lubing switches",
      subchapters: [
        {
          id: 1,
          name: "Types of lube",
        },
      ],
    },
    {
      id: 2,
      name: "Spring swapping",
      subchapters: [
        {
          id: 1,
          name: "Types of springs",
        },
      ],
    },
    {
      id: 3,
      name: "Switch films",
      subchapters: [],
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Switch Modifications</PageTitle>
      <TableOfContents chaptersList={chaptersList} anchorLink={anchorLink} />
      <PageSection>
        <PageSectionHeading id={anchorLink + "-" + chaptersList[0].id}>
          {chaptersList[0].name}
        </PageSectionHeading>
        <PageParagraph>
          Mechanical keyboard enthusiasts strive to eliminate "scratchiness"
          from their switches when typing on them. Scratchiness can be felt and
          heard, and is considered an undesirable trait of the switches.
          Therefore, to counteract scratchiness, lubricant is applied onto the
          insides of the switch. This helps to remove friction between the
          moving parts, making the feel of the switch buttery smooth.
        </PageParagraph>
        <PageSectionSubheading
          id={
            anchorLink +
            "-" +
            chaptersList[0].id +
            "." +
            chaptersList[0].subchapters[0].id
          }
        >
          {chaptersList[0].subchapters[0].name}
        </PageSectionSubheading>
        <PageParagraph>
          Switch lubricants, or lube, can be put into two categories: greases
          and oils. They can be further broken down into different grades which
          determines the viscosity of the lube. The higher the viscosity, the
          less fluid it will be/the thicker it will be. E.g. Krytox 205<b>g0</b>{" "}
          or Krytox 205<b>g2</b>. The higher the grade, the more viscuous it is.
          Based on this information, 205g2 is more viscuous than 205g0.
        </PageParagraph>
        <PageParagraph>
          Greases are used for the inner parts of the switch, especially on the
          contact points where friction occurs. Oils are only used for springs
          as it is very thin, and when used to traditionally lube the insides of
          the switch, it pools to the bottom of the switch. Therefore, it is
          recommended to use oils for the spring only, and greases for the rest
          of the switch.
        </PageParagraph>
        <PageParagraph>Types of lube include:</PageParagraph>
        <PageUl>
          <li>
            <b>Krytox 205g0</b> - A thick grease. Commonly used for linear
            switches.
          </li>
          <li>
            <b>Krytox 204g0/Tribosys 3204</b> - A medium thickness grease,
            slightly thinner than 205g0. Considered a jack of all trades, it is
            commonly used for either linear or tactile switches.
          </li>
          <li>
            <b>Krytox 203g0/Tribosys 3203</b> - A thin grease, Commonly used for
            tactile switches.
          </li>
          <li>
            <b>Krytox 105</b> - An oil, only used for lubing springs.
          </li>
        </PageUl>
        <PageParagraph>
          A general rule for picking a lube for your switch is to use a thicker
          grease for linears and a thinner grease for tactile switches. The
          thinner the lube/the less viscuous the lube, the more it helps to
          preserve tactility. But in actuality, you can choose any lube you want
          for any switch - it is simply a matter of{" "}
          <a href="">
            <i>preference</i>
          </a>
          . For example, some people like to use 205g0 on tactile switches, even
          on the legs, as they personally prefer smoothness over tactility.
          Another example is the Zealios V2 switch - because it has such a sharp
          tactile bump, it can still retain its tactility even after lubing it
          with a thicker grease such as 205g0.
        </PageParagraph>
      </PageSection>
      <PageSection>
        <PageSectionHeading id={anchorLink + "-" + chaptersList[1].id}>
          {chaptersList[1].name}
        </PageSectionHeading>
        <PageSectionSubheading
          id={
            anchorLink +
            "-" +
            chaptersList[1].id +
            "." +
            chaptersList[1].subchapters[0].id
          }
        >
          {chaptersList[1].subchapters[0].name}
        </PageSectionSubheading>
        <PageParagraph>
          There are different types of springs available:
        </PageParagraph>
        <PageUl>
          <li>
            <b>Standard</b> - if no spring type is specified, you can assume
            that it is a standard spring.
          </li>
          <li>
            <b>Slow curve</b> - compared to standard springs, the force curve
            ramps up in force more slowly. This means when comparing a standard
            spring and a slow curve spring, both with the same bottom out force,
            the actuation force of the slow spring will be higher. One example
            of a switch that features a slow spring is Gateron Yellow.
          </li>
          <li>
            <b>Progressive</b> - considered the opposite to slow springs, the
            force curve ramps up quickly. The actuation force of a switch with a
            progressive spring will be lower compared to a standard spring.
          </li>
          <li>
            <b>Complex </b> - the force curve of a complex spring acts like a
            progressive spring in that it ramps up slightly faster, except the
            ramp up is not as large.
          </li>
        </PageUl>
        <Figure>
          <Image src={ForceCurveGraph} />
          <FigureCaption>
            Actuation force begins from the left, all the way to the bottom out
            force on the right
          </FigureCaption>
        </Figure>
      </PageSection>
      <PageSection>
        <PageSectionHeading id={anchorLink + "-" + chaptersList[2].id}>
          {chaptersList[2].name}
        </PageSectionHeading>
        <PageParagraph>
          Sometimes, stock switches have wobble between the switch top and
          bottom housings. Switch housings can also become looser after
          disassembling a switch in the first place, such as when you open the
          switch for lubing. Switch films were originally created to tighten the
          housings for older vintage Cherry MX Blacks as they typically
          possessed wobbly housings, but they have recently seen use as a
          recommended switch modification. Switch films help eliminate the
          clearance between the top and bottom housings, ensuring a tight fit in
          order to reduce switch wobble. It also changes the sound profile,
          often making the sound deeper while also removing rattly sounds.
        </PageParagraph>
        <PageParagraph>
          Commonly recommended switches that require filming are Vintage
          (pre-tooled) Cherry MX Blacks, any Zeal switches, and any
          JWK/Everglide/Durock switches. Switches that do not require filming
          include Holy Pandas and their variations and Novelkey Creams as they
          have very little to no switch wobble fresh out of the factory.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={SwitchFilms} />
            <FigureCaption>TX Switch films by TX Keyboards</FigureCaption>
          </Figure>
          <Figure>
            <Image src={SwitchFilmOnSwitch} />
            <FigureCaption>Switch film placed on a switch</FigureCaption>
          </Figure>
        </PageRow>
      </PageSection>
    </PageContainer>
  );
};

export default SwitchModifications;
