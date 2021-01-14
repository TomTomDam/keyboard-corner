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
  border-top: 1px solid #dee2e6;
  padding: 0 2rem;
`;

export const Heading = styled.header`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HorizontalLine = styled.hr`
  border-top: 1px solid gray;
`;

export const Iframe = styled.iframe`
  border: none !important;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 30px;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
`;
