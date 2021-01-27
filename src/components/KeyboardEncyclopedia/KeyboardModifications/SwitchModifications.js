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
} from "../../../assets/styles/Layout";
import {
  Figure,
  FigureCaption,
  Image,
  ImageTextContainer,
} from "../../../assets/styles/Modules";
import TableOfContents from "../TableOfContents";

const SwitchModifications = () => {
  const anchorLink = "#switch-modifications";
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
      <PageParagraph></PageParagraph>
      <TableOfContents chaptersList={chaptersList} anchorLink={anchorLink} />
      <PageSection>
        <PageSectionHeading>
          {chaptersList.find((x) => x.id === 1).name}
        </PageSectionHeading>
        <PageParagraph>
          Mechanical keyboard enthusiasts strive to eliminate "scratchiness"
          from their switches when typing on them. Scratchiness can be felt and
          heard, and is considered an undesirable trait of the switches.
          Therefore, to counteract scratchiness, lubricant is applied onto the
          insides of the switch. This helps to remove friction between the
          moving parts, making the feel of the switch buttery smooth.
        </PageParagraph>
        <PageSectionSubheading>
          {}
        </PageSectionSubheading>
      </PageSection>
    </PageContainer>
  );
};

export default SwitchModifications;
