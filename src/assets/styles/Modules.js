import styled, { createGlobalStyle } from "styled-components";

export const GlobalModules = createGlobalStyle`
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  background-color: ${(props) => props.theme.colours.blue};
  color: ${(props) => props.theme.colours.white};
  padding: 0.5rem 0.8rem;
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius: 5px;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  transition: all 0.3s ease 0s;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;

export const BtnAcceptPolicy = styled.button`
  font-size: 1rem;
  line-height: inherit;
`;

export const ButtonPrimary = styled(Button)`
  color: #fff;
  background-color: ${(props) => props.theme.colours.lightgray};
  border-color: ${(props) => props.theme.colours.lightgray};
`;

export const ButtonInfo = styled(Button)`
  color: #fff;
  background-color: ${(props) => props.theme.colours.blue};
  border-color: ${(props) => props.theme.colours.blue};
`;

export const ButtonSuccess = styled(Button)`
  color: #fff;
  background-color: green;
  border-color: green;
`;

export const ButtonDanger = styled(Button)`
  color: #fff;
  background-color: red;
  border-color: red;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
`;

//Modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ModalBody = styled.div`
  position: fixed;
  background: white;
  width: 40%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
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
  text-align: center;
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

//Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormRow = styled.div`
  margin-top: 1rem;
`;

export const FormLabel = styled.label`
  text-align: left;
`;

export const FormGroup = styled.div`
  margin-top: 1rem;
`;

export const LabelTitle = styled.div`
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.125rem;
  margin-top: 1rem;
`;

export const Input = styled.input`
  line-height: 1.5em;
`;

export const TextArea = styled.textarea`
  width: 12vw;
  height: 10vh;
`;