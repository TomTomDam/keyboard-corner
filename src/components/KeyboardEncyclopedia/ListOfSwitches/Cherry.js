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

const Cherry = () => {
  const data = useMemo(() => [
    {
      name: "Cherry MX Red",
      brandManufacturer: "Cherry",
      type: "Linear",
      mount: "PCB 5 pin",
      materials: "Nylon",
      spring: "60g",
    },
  ]);

  return (
    <PageContainer>
      <PageTitle>Cherry</PageTitle>
      <SwitchTable data={data} />
    </PageContainer>
  );
};

export default Cherry;
