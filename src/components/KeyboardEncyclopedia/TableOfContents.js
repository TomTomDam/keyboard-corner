import React from "react";
import styled from "styled-components";
import {
  TableOfContents as Container,
  TableOfContentsTitle as Title,
  TableOfContentsChapter as Chapter,
  TableOfContentsSubChapters as SubChapters,
} from "../../assets/styles/Modules";

const TableOfContents = (props) => {
  const chaptersList = props.chaptersList;
  const anchorLink = "#" + props.anchorLink;

  const chapters = chaptersList.map((chapter) => {
    const chapterLink = anchorLink + "-" + chapter.id;

    return (
      <Chapter key={chapter.id}>
        <li>
          <a href={chapterLink}>{chapter.name}</a>
        </li>
        <SubChapters>
          <li>
            {chapter.subchapters.map((subchapter) => (
              <a href={chapterLink + "." + subchapter.id} key={subchapter.id}>
                {chapter.id + "." + subchapter.id + ". " + subchapter.name}
              </a>
            ))}
          </li>
        </SubChapters>
      </Chapter>
    );
  });

  return (
    <Container>
      <Title>Table of Contents</Title>
      <ul>{chapters}</ul>
    </Container>
  );
};

export default TableOfContents;
