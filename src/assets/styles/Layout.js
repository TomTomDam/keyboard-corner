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
  margin-top: 2rem;
  margin-bottom: 2rem;
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

export const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
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
  max-width: 50%;
  margin: 0 auto;
  font-size: 3rem;
`;

export const PageSection = styled.section`
  margin-top: 3rem;
`;

export const PageSectionHeading = styled.h2`
  max-width: 50%;
  margin: 0 auto;
  font-size: 1.95rem;
  margin-top: 1rem;
`;

export const PageSectionSubheading = styled.h3`
  max-width: 50%;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const PageParagraph = styled.p`
  max-width: 50%;
  text-align: left;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

export const PageUl = styled.ul`
  max-width: 50%;
  text-align: left;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  & > li {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

export const PageOl = styled.ol`
  max-width: 50%;
  text-align: left;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  & > li {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

export const PageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
