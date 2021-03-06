import styled, { createGlobalStyle } from "styled-components";
import { Font } from "./Base";

export const GlobalTheme = createGlobalStyle`

`;

export const Theme = {
  colours: {
    darkgray: "#343333",
    lightgray: "#82878c",
    white: "#F5F9FF",
    blue: "#84d4cc",
    pink: "#F45680",
    black: "#fff",
  },
  fonts: Font,
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  media: {
    phone: "600px",
    tablet: "768px",
    laptop: "992px",
    desktop: "1200px",
  },
};
