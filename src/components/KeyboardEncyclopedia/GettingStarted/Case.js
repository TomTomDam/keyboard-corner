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
      <PageParagraph>
        The case houses the internal components of a keyboard. It can be made
        out of a variety of materials: often it is made out of aluminium, but
        other materials include polycarbonate and acrylic. Some keyboards are
        even built without a case.
      </PageParagraph>
      <TableOfContents chapterList={chapterList} anchorLink={anchorLink} />
      <PageSection>
        <PageSectionHeading>Case materials</PageSectionHeading>
        <PageSectionSubheading>Aluminium</PageSectionSubheading>
        <PageParagraph>
          The most common material for custom keyboard kits is aluminium: a
          strong, hefty metal.
        </PageParagraph>
        <PageSectionSubheading>Polycarbonate</PageSectionSubheading>
        <PageParagraph>
          Polycarbonate is a sturdy plastic that has seen recent use in custom
          mechanical keyboards. It is favoured heavily for the deeper sound
          profile it provides compared to aluminium. Some downsides of this
          material are that it is more difficult to machine during the
          manufacturing process which makes it a slightly more expensive option
          than aluminium. Also, it is prone to scratches - a solution to this is
          to manually sand down the case to make it frosted.
        </PageParagraph>
        <PageSectionSubheading>Acrylic</PageSectionSubheading>
        <PageParagraph>
          Acrylic is another option that has been recently popularized for its
          lower cost and relative ease to machine. Keyboards with an acrylic case are built
          with multiple "stacked" layers rather than one singular case.
        </PageParagraph>
      </PageSection>
    </PageContainer>
  );
};

export default Case;
