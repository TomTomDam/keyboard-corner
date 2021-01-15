import styled, { createGlobalStyle } from "styled-components";

export const GlobalModules = createGlobalStyle`
img {
  width: 80%;
  height: auto;
}
img.row-image {
  height: 350px;
  width: 500px;
}
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
  padding: 7px 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colours.lightgray};
  }
`;

export const ButtonPrimary = styled(Button)`
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
`;

export const BtnAcceptPolicy = styled.button`
  font-size: 1rem;
  line-height: inherit;
`;

export const TableOfContents = styled.div`
  background: #f9f9f9 none repeat scroll 0 0;
  border: 1px solid #aaa;
  display: table;
  font-size: 95%;
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
