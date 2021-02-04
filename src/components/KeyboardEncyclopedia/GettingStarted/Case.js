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

const Case = () => {
  const anchorLink = "";
  const chapterList = [
    {
      id: 1,
      name: "Case materials",
      subchapters: [
        {
          id: 1,
          name: "Aluminium",
        },
        {
          id: 2,
          name: "Polycarbonate",
        },
        {
          id: 3,
          name: "Acrylic",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Case</PageTitle>
      <PageParagraph></PageParagraph>
      <TableOfContents chapterList={chapterList} anchorLink={anchorLink} />
      <PageSection>
        <PageSectionHeading>Case materials</PageSectionHeading>
        <PageSectionSubheading>Aluminium</PageSectionSubheading>
        <PageParagraph></PageParagraph>
        <PageSectionHeading>Polycarbonate</PageSectionHeading>
        <PageParagraph></PageParagraph>
      </PageSection>
    </PageContainer>
  );
};

export default Case;
