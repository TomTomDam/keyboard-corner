import styled, { createGlobalStyle } from "styled-components";

export const GlobalLayout = createGlobalStyle`
.border-top {
  border-top: 1px solid #e5e5e5;
}
.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}
.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}
`;

export const Main = styled.main`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export const StyledFooter = styled.footer`
  position: absolute;
  text-align: left;
  bottom: 0;
  width: 100%;
  white-space: nowrap;
  line-height: 60px;
  padding: 0 2rem;
  background: ${(props) => props.theme.colours.darkgray};
  color: ${(props) => props.theme.colours.white};
`;

export const Header = styled.header`
  margin-bottom: 1rem;
`;

export const HorizontalLine = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  border-top: 1px solid gray;
`;

export const Iframe = styled.iframe`
  border: none !important;
`;

//Keyboard Encyclopedia Page
export const PageContainer = styled.div`
  text-align: left;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
`;

export const PageSection = styled.section`
  margin-top: 3rem;
`;

export const PageSectionHeading = styled.h2`
  font-size: 1.95rem;
  margin-top: 1rem;
`;

export const PageSectionSubheading = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const PageParagraph = styled.p`
  max-width: 40%;
  font-size: 1.1rem;
  line-height: 1.8;
`;

export const PageUl = styled.ul`
  max-width: 40%;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  & > li {
    margin-top: 0.5rem;
  }
`;

export const PageOl = styled.ol`
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  & > li {
    margin-top: 0.5rem;
  }
`;