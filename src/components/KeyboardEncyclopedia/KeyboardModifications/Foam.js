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

const Foam = () => {
  const anchorLink = "foam";
  const chapterList = [
    {
      id: 1,
      name: "Types of foam",
      subchapters: [
        {
          id: 1,
          name: "Case foam",
        },
        {
          id: 2,
          name: "Plate foam",
        },
      ],
    },
    {
      id: 2,
      name: "Foam materials",
      subchapters: [
        {
          id: 1,
          name: "Neoprene",
        },
        {
          id: 2,
          name: "Sorbothane",
        },
        {
          id: 3,
          name: "EVA",
        },
      ],
    },
    {
      id: 3,
      name: "Obtaining foam",
      subchapters: [
        {
          id: 1,
          name: "DIY",
        },
        {
          id: 2,
          name: "Commission",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Foam</PageTitle>
      <PageParagraph>
        When typing on a keyboard, the last thing people want to hear is a
        hollow keyboard. Foam is a quick and easy way to eliminate this issue.
        There are two types of foam that can be placed inside of a keyboard: in
        the case below the PCB, or sandwiched between the plate and PCB.
        Although foam is a great way to eliminate hollowness, too much of it can
        actually make your keyboard sound muted. Also, higher-end keyboards that
        are designed well enough do not produce any noticeable hollowness, and
        so they do not require foam at all. Therefore, if you do decide to add
        foam to your chosen keyboard, it is important to experiment and see what
        types of foam you want to include and to see what produces the best
        sound profile to your ears.
      </PageParagraph>
      <PageParagraph>
        There are several materials of foam you can use as well: neoprene,
        sorbothane and EVA. They do not really differ much in terms of modifying
        the sound profile, but what matters more is the availability and cost of
        each material. All of this will be discussed in the following chapters
        below.
      </PageParagraph>
      <TableOfContents chapterList={chapterList} anchorLink={anchorLink} />
      <PageSection>
        <PageSectionHeading>Types of foam</PageSectionHeading>
        <PageParagraph>
          Before getting into this chapter, it is important to know that each
          keyboard is constructed differently. Each keyboard accepts different
          foam thicknesses. For example, for case foam, the TOFU keyboard is
          often used with 3mm thickness, whereas some keyboards like the Space65
          are so thin that it accepts up to 1.5mm thickness.
        </PageParagraph>
        <PageSectionSubheading>Case foam</PageSectionSubheading>
        <PageParagraph>
          Case foam sits in your case, underneath your PCB.
        </PageParagraph>
        <PageSectionSubheading>Plate foam</PageSectionSubheading>
        <PageParagraph>
          Plate foam is sandwiched between your plate and PCB.
        </PageParagraph>
      </PageSection>
      <PageSection>
        <PageSectionHeading>Foam materials</PageSectionHeading>
        <PageSectionSubheading>Neoprene</PageSectionSubheading>
        <PageParagraph>Neoprene is </PageParagraph>
        <PageSectionSubheading>Sorbothane</PageSectionSubheading>
        <PageParagraph>Sorbothane is </PageParagraph>
        <PageSectionSubheading>EVA</PageSectionSubheading>
        <PageParagraph>Ethylene-vinyl acetate (EVA)</PageParagraph>
      </PageSection>
      <PageSection>
        <PageSectionHeading>Obtaining foam</PageSectionHeading>
        <PageSectionSubheading>DIY</PageSectionSubheading>
        <PageParagraph>
          If you have ever done crafts in school, cutting your own case foam is
          as easy as that. You can measure the dimensions by simply eyeing it
          and using a pair of scissors to cut out a sheet that fits in your
          case. For a tray mount keyboard, you'll have to make holes in the foam
          where the mounting posts go to allow you to screw your PCB into place.
        </PageParagraph>
        <PageParagraph>
          Unless you have access to a laser-cutter, it is not possible to cut
          your own plate foam by hand like you would with case foam. Therefore,
          for the average person,{" "}
          <a href="#foam-3.2">
            you'll need to place an order for a commission.
          </a>
        </PageParagraph>
        <PageSectionSubheading id="foam-3.2">Commission</PageSectionSubheading>
        <PageParagraph>
          This is the option you go for if you need plate foam. Some companies
          provide services provide services for custom foam. You can find foam
          in-stock for the common keyboards on the market such as the KBDFans
          boards (e.g. TOFU, KBD67). If they do not have foam in-stock for your
          chosen board, you can create a request for custom foam to be cut.
          However, the company requires a plate file so that the laser-cutter
          can cut the foam to your board's specifications. The company may
          already possess the plate file, but if not, you can send it in
          yourself online.
        </PageParagraph>
      </PageSection>
    </PageContainer>
  );
};

export default Foam;
