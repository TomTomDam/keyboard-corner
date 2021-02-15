import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <FormTitle>Let's get in touch!</FormTitle>

          <InputWrapper>
            <FormInput type="text" placeholder="Name" />
            <InputFocus></InputFocus>
          </InputWrapper>

          <InputWrapper>
            <FormInput type="text" placeholder="Email" />
            <InputFocus></InputFocus>
          </InputWrapper>

          <InputWrapper>
            <FormInput type="text" placeholder="Message"></FormInput>
            <InputFocus></InputFocus>
          </InputWrapper>

          <FormButtonContainer>
            <FormButtonWrapper>
              <FormButtonBackground></FormButtonBackground>
              <FormButton>Send</FormButton>
            </FormButtonWrapper>
          </FormButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  min-height: 80vh;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 790px;
  background: #fff;
  overflow: hidden;
  padding: 72px 55px 90px 55px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.06);
  border-radius: 25px;
`;

const Form = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const FormTitle = styled.div`
  display: block;
  font-size: 39px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 90px;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  font-size: 15px;
  color: #555555;
  line-height: 1.2;
  outline: none;
  border: none;
  &:focus {
    border-color: transparent !important;
  }
`;

const InputFocus = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    background: rgba(219, 21, 99, 1);
    background: -webkit-linear-gradient(45deg, #d5007d, #e53935);
    background: -o-linear-gradient(45deg, #d5007d, #e53935);
    background: -moz-linear-gradient(45deg, #d5007d, #e53935);
    background: linear-gradient(45deg, #d5007d, #e53935);
  }
  &::after {
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    font-size: 13px;
    color: #999999;
    line-height: 1.2;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }
`;

const FormButtonContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 13px;
`;

const FormButtonWrapper = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 2px;
  width: auto;
  overflow: hidden;
  margin: 0 auto;
  &:hover {
    left: 0;
  }
`;

const FormButton = styled.button`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 244px;
  height: 50px;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  outline: none !important;
  border: none;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const FormButtonBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 300%;
  height: 100%;
  background: ${(props) => props.theme.colours.blue};
  top: 0;
  left: -100%;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  &:hover {
    left: 0;
  }
`;
