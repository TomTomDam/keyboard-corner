import styled, { createGlobalStyle } from "styled-components";

export const GlobalBase = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: #1e90ff;
  text-decoration: none;
}

a:hover {
  color: lightgray;
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

body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
`;

export default GlobalBase;