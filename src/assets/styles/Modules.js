import styled, { createGlobalStyle } from "styled-components";

export const GlobalModules = createGlobalStyle`
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  background: ${(props) => props.theme.colours.blue};
  color: ${(props) => props.theme.colours.white};
  padding: 7px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background: ${(props) => props.theme.colours.darkgray};
  }
`;

export const ButtonPrimary = styled(Button)`
  color: #fff;
  background-color: ${(props) => props.theme.colours.lightgray};
  border-color: ${(props) => props.theme.colours.darkgray};
`;

export const BtnAcceptPolicy = styled.button`
  font-size: 1rem;
  line-height: inherit;
`;

//Keyboard Encyclopedia Page
export const TableOfContents = styled.div`
  background: #f9f9f9 none repeat scroll 0 0;
  border: 1px solid #aaa;
  display: table;
  margin: 0 auto;
  margin-bottom: 1em;
  margin-top: 2em;
  padding: 20px;
  width: auto;
  text-align: left;
  & > li,
  > ul,
  > ul li {
    list-style: outside none none !important;
  }
`;

export const TableOfContentsTitle = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const TableOfContentsChapter = styled.div`
  margin-top: 0.25rem;
`;

export const TableOfContentsSubChapters = styled.ul`
  margin-left: 2rem;
`;

export const Figure = styled.figure`
  padding: 1rem;
`;

export const FigureCaption = styled.figcaption`
  margin-top: 1rem;
`;

export const Image = styled.img`
  width: 800px;
  height: auto;
`;

export const ImageTextContainer = styled.div`
  flex: 0 1 40%;
  align-self: flex-start;
  padding: 1rem;
  font-size: 1.1rem;
  line-height: 1.8;
  & > ol {
    margin-left: 2rem;
  }
`;