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

export default function Introduction() {
  const anchorLink = "introduction";
  const chapterList = [
    {
      id: 1,
      name: "What is a mechanical keyboard?",
      subchapters: [
        {
          id: 1,
          name: "Anatomy of a mechanical keyboard"
        }
      ]
    },
    {
      id: 2,
      name: "Why should I use a mechanical keyboard?",
      subchapters: []
    },
    {
      id: 3,
      name: "Where do I start?",
      subchapters: []
    },
  ]

  return (
    <PageContainer>
      <PageTitle>Introduction to Mechanical Keyboards</PageTitle>
      <PageParagraph>
        Given that we are currently living in a world driven by technology,
        keyboards are a result of our technological innovations. If you use
        computers, keyboards are one of the devices that we use every day to
        perform our daily tasks.
      </PageParagraph>
      <PageParagraph>
        
      </PageParagraph>
      <TableOfContents chapterList={chapterList} anchorLink={anchorLink}/>
      <PageSection>
        <PageSectionHeading id="introduction-1">What is a mechanical keyboard?</PageSectionHeading>
        <PageSectionSubheading id="introduction-1.1">Anatomy of a mechanical keyboard</PageSectionSubheading>
        <PageParagraph>

        </PageParagraph>
      </PageSection>
    </PageContainer>
  );
}
