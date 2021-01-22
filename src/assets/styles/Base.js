import styled, { createGlobalStyle } from "styled-components";
import RobotoRegular from "../Roboto-Regular.ttf";

export const Font = "RobotoRegular";

export const GlobalBase = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: ${(props) => props.theme.colours.blue};
  text-decoration: none;
}

a:hover {
  color: darkgray;
  text-decoration: none;
}

html {
  font-size: 14px;
}
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

html {
  position: relative;
  min-height: 100%;
}

@font-face {
  font-family: ${Font};
  src: url(${RobotoRegular}) format("opentype");
}

body {
  /* Padding top by fixed navbar height */
  padding-top: 70px;
  /* Margin bottom by footer height */
  margin-bottom: 60px;
  font-family: ${(props) => props.theme.fonts};
  line-height: 1.4;
  background: white;
  color: ${(props) => props.theme.colours.darkgray};
}

p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
`;

export default GlobalBase;
