import React from "react";
import styled from "styled-components";
import {
  TableOfContents as Container,
  TableOfContentsTitle as Title,
  TableOfContentsChapter as Chapter,
  TableOfContentsSubChapters as SubChapters,
} from "../../assets/styles/Modules";

const TableOfContents = (props) => {
  const chapterList = props.chapterList;
  const anchorLink = "#" + props.anchorLink;

  const chapters = chapterList.map((chapter) => {
    const chapterLink = anchorLink + "-" + chapter.id;
    let subchapters = <></>;
    if (chapter.subchapter !== null) {
      subchapters = (
        <SubChapters>
          {chapter.subchapters.map((subchapter) => (
            <li>
              <a href={chapterLink + "." + subchapter.id} key={subchapter.id}>
                {chapter.id + "." + subchapter.id + ". " + subchapter.name}
              </a>
            </li>
          ))}
        </SubChapters>
      );
    } else {
      subchapters = <></>
    }

    return (
      <Chapter key={chapter.id}>
        <li>
          <a href={chapterLink}>{chapter.id + ". " + chapter.name}</a>
        </li>
        {subchapters}
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
