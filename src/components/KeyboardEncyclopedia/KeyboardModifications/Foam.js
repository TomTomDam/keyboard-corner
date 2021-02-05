import React from 'react';
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
  ];

    return (
        <PageContainer>
            <PageTitle>Foam</PageTitle>
            <TableOfContents chapterList={chapterList} anchorLink={anchorLink}/>
            <PageSection>
                <PageSectionHeading>Types of foam</PageSectionHeading>
                <PageSectionSubheading>Case foam</PageSectionSubheading>
                <PageSectionSubheading>Plate foam</PageSectionSubheading>
            </PageSection>
        </PageContainer>
    )
}

export default Foam;
