import React from "react";
import styled from "styled-components";
import {
  PageContainer,
  PageTitle,
  PageSection,
  PageSectionHeading,
  PageSectionSubheading,
  PageParagraph,
  PageRow,
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

import SolderWire from "../../../assets/images/PlatesAndPCBs/solderwire.jpg";
import HakkoStation from "../../../assets/images/PlatesAndPCBs/hakkofx888d.jpg";

const SolderingGuide = () => {
  const anchorLink = "soldering-guide";
  const chapterList = [
    {
      id: 1,
      name: "What is Solder?",
      subchapters: []
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Soldering Guide</PageTitle>
      <PageParagraph>
        Soldering is the process of joining two or more items together by
        melting and putting a filler metal (solder) to into the joint, forming a
        joint between the components.
      </PageParagraph>
      <TableOfContents chapterList={chapterList} anchorLink={anchorLink} />
      <PageSectionHeading>What is Solder?</PageSectionHeading>
      <PageParagraph>
        Solder is a low melting point metal alloy used to join two things
        together. Solder provides an electrical and mechanical connection
        between the two things - with regards to keyboard construction, this
        would be the metal switch pins and the PCB's switch pads.
      </PageParagraph>
      <PageParagraph>
        Solder is typically made out of a mix of tin and lead. Leaded solder
        helps the solder melt at a lower temperature and flow nicely;
        conversely, lead-free solder melts at a higher temperature and flows
        quickly which increases the risk of poor joints. Therefore, a mix of
        tin/lead is very much preferred - a good tin/lead ratio is <i>60/40</i>{" "}
        or <i>63/37</i>. In some parts of the world such as Europe, leaded
        solder is banned. However, some European sellers on eBay sell genuine
        leaded solder - if given the choice, it would be best to purchase leaded
        solder over lead-free solder.
      </PageParagraph>
      <PageParagraph>
        Solder often contains a core inside the solder wire containing flux.
        Flux helps to improve electrical contact and mechanical strength in
        solder joints. Two types of flux are mainly used - acid core and rosin
        core. Acid core is used for plumbing, whereas rosin core is used for
        electronics. Therefore, only rosin core solder should be used for our
        purposes.
      </PageParagraph>
      <PageParagraph>
        Solder also comes in a variety of diameters. For soldering switches,{" "}
        <i>0.8mm (0.0131 inches)</i> is recommended. For soldering smaller
        components such as SMD parts, a smaller diameter of{" "}
        <i>0.5mm (0.02 inches)</i> is recommended, though soldering SMD parts
        requires greater soldering skills.
      </PageParagraph>
      <PageRow>
        <Figure>
          <Image src={SolderWire} />
          <FigureCaption>A wild solder wire appeared!</FigureCaption>
        </Figure>
        <Figure>
          <Image src={HakkoStation} />
          <FigureCaption>
            A costly yet widely praised soldering station, the Hakko FX-888D
          </FigureCaption>
        </Figure>
      </PageRow>
      <PageParagraph>
        A solder iron is the equipment used to melt the solder and create joints
        between the component and the PCB. A recommended temperature for
        soldering is between 350°C (662°F) to 370°C (698°F), depending on the
        ambient temperature.
      </PageParagraph>
    </PageContainer>
  );
};

export default SolderingGuide;
