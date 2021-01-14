import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

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

export const Btn = styled.button`
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
  &:hover {
    background: #666;
  }
`;

export const BtnPrimary = styled(Btn)`
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
