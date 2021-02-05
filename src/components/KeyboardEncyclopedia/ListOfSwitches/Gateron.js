import React, { useMemo } from "react";
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
import SwitchTable from "../SwitchTable";

const Gateron = () => {
  const data = useMemo(() => [
    {
      name: "Gateron Yellow",
      brandManufacturer: "Gateron",
      type: "Linear",
      mount: "PCB 5 pin",
      materials: "Nylon",
      spring: "62g (slow)",
    },
  ]);

  return (
    <PageContainer>
      <PageTitle>Gateron</PageTitle>
      <SwitchTable data={data} />
    </PageContainer>
  );
};

export default Gateron;
