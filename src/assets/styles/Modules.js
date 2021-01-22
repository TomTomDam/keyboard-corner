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

export const TableOfContents = styled.div`
  background: #f9f9f9 none repeat scroll 0 0;
  border: 1px solid #aaa;
  display: table;
  margin-bottom: 1em;
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

