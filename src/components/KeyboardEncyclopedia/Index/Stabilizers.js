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
  TableOfContents,
  TableOfContentsTitle,
  TableOfContentsChapter,
  TableOfContentsSubChapters,
  Figure,
  FigureCaption,
  Image,
  ImageTextContainer,
} from "../../../assets/styles/Modules";

export default function Stabilizers() {
  return (
    <PageContainer>
      <PageTitle>Stabilizers</PageTitle>
      <PageParagraph>
        Stabilizers are situated underneath larger keycaps. They are aptly named
        as they help to <i>stabilize</i> these keycaps to prevent them from
        wobbling on each side. They are used for any keycap that is 2u or
        larger. Larger keycaps include Spacebar, Backspace, Enter, Right Shift,
        ANSI Left Shift. They are also used for the 0 and Enter Numpad keys.
      </PageParagraph>
      <TableOfContents>
        <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
        <ul>
          <TableOfContentsChapter>
            <li>
              <a href="#stabilizers-1">
                1. Example of stabilizers required for a layout
              </a>
            </li>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <li>
              <a href="#stabilizers-2">2. Stabilizer mounts</a>
            </li>
          </TableOfContentsChapter>
          <TableOfContentsSubChapters>
            <li>
              <a href="#stabilizers-2.1">2.1. PCB-mount</a>
            </li>
            <li>
              <a href="#stabilizers-2.2">2.2. Plate-mount</a>
            </li>
          </TableOfContentsSubChapters>
          <TableOfContentsChapter>
            <li>
              <a href="#stabilizers-3">
                3. Stabilizers needed for different form factors
              </a>
            </li>
          </TableOfContentsChapter>
          <TableOfContentsChapter>
            <li>
              <a href="#stabilizers-4">4. Lubing stablizers</a>
            </li>
          </TableOfContentsChapter>
        </ul>
      </TableOfContents>
      <PageSection>
        <PageSectionHeading>
          Example of stabilizers required for a layout
        </PageSectionHeading>
        <PageParagraph>
          On a fullsize form factor, stabilizers are placed on the following
          keys:
        </PageParagraph>
        <PageParagraph>Modifiers:</PageParagraph>
        <PageUl>
          <li>ANSI Left shift (2.25u) - 2u stabilizer</li>
          <li>Backspace (2u) - 2u stabilizer</li>
          <li>
            ANSI Enter/Return (2.25u) - 2u stabilizer OR ISO Enter/Return (2u)
          </li>
          <li>Right shift (2.75u) - 2u stabilizer</li>
        </PageUl>
        <PageParagraph>Spacebar:</PageParagraph>
        <PageUl>
          <li>Spacebar (6.25u) - 6.25u stabilizer</li>
          <li>Tsangan/HHKB Spacebar (7u) - 7u stabilizer</li>
        </PageUl>
        <PageParagraph>Numpad:</PageParagraph>
        <PageUl>
          <li>0 key (2u) - 2u stabilizer</li>
          <li>Plus key (2u) - 2u stabilizer</li>
          <li>Enter/Return key (2u) - 2u stabilizer</li>
        </PageUl>
        <Figure>
          <Image src="" />
          <FigureCaption></FigureCaption>
        </Figure>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="stabilizers-2">
          Stabilizer mounts
        </PageSectionHeading>
        <PageParagraph>
          Two types of stabilizers exist: <b>PCB-mount</b> and{" "}
          <b>Plate-mount</b>.
        </PageParagraph>
        <PageSectionSubheading id="stabilizers-2.1">
          PCB-mount
        </PageSectionSubheading>
        <PageParagraph>
          <b>PCB-mount stabilizers</b> are mounted onto the PCB of the keyboard.
          There are more varieties of PCB-mount stabilizers, and are accepted by
          most keyboard plates. PCB-mount stabilizers come in two forms: clip-in
          or screw-in. Screw-in stabilizers mount more securely onto the PCB
          compared to clip-in. PCB-mount stabilizers are difficult and tedious
          to remove as it requires you to desolder/remove ALL switches before
          removing it.
        </PageParagraph>
        <PageSectionSubheading id="stabilizers-2.2">
          Plate-mount
        </PageSectionSubheading>
        <PageParagraph>
          <b>Plate-mount stabilizers</b> are mounted onto the keyboard plate.
          Compared to PCB-mount stabilizers, you only need to remove the one
          switch that is in between the stabilizers. After that, you can quickly
          pop out the stabilizer by pushing the clips on the stabilizer pins
          using toothpicks or tweezers.
        </PageParagraph>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="stabilizers-3">
          Stabilizers needed for different form factors
        </PageSectionHeading>
        <PageParagraph>
          Stabilizers are often sold in kits of 4x 2u and your choice of 6.25u
          or 7u.
        </PageParagraph>
        <PageUl>
          <li>
            <b>Full-size</b> - 7x 2u stabs + 1x 6.25/7u stab
          </li>
          <li>
            <b>Tenkeyless</b> - 4x 2u stabs + 1x 6.25/7u stab
          </li>
          <li>
            <b>65%</b> - 4x 2u stabs + 1x 6.25/7u stab
          </li>
          <li>
            <b>Standard 60%</b>- 4x 2u stabs + 1.625/7u stab
          </li>
        </PageUl>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="stabilizers-4">
          Lubing stabilizers
        </PageSectionHeading>
        <PageParagraph></PageParagraph>
      </PageSection>
    </PageContainer>
  );
}
