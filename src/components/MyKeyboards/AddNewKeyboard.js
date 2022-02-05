import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LabelGroup,
  LabelTitle,
  Input,
  TextArea,
  ButtonContainer,
  ButtonSuccess,
  ButtonDanger,
  Modal,
  ModalBody,
} from "../../assets/styles/Modules";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewKeyboard = (props) => {
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    image: "",
    switches: "",
    switchModifications: "",
    plate: "",
    keycaps: "",
    designer: "",
    case: "",
    modifications: "",
    layout: "",
    stabilizers: "",
    description: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    designer: "",
    case: "",
    layout: ""
  });
  const keyboardApi = "http://localhost:3000/api/keyboard";

  // useEffect(() => {
  //   setInputs(inputs);
  // }, [inputs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ 
      ...inputs, 
      [name]: value 
    }));

    inputValidation(name, value);
  };

  const inputValidation = (name, value) => {
    if (name.trim() === 'title' && value.trim() === '') {
      setValidationErrors((errors) => ({
        ...errors,
        title: "Title is required."
      }));
    } else if (name.trim() === 'title' && value.trim() !== '') {
      setValidationErrors((errors) => ({
        ...errors,
        title: ""
      }));
    }
    
    if (name.trim() === 'designer' && value.trim() === '') {
      setValidationErrors((errors) => ({
        ...errors,
        designer: "Designer is required."
      }));
    } else if (name.trim() === 'designer' && value.trim() !== '') {
      setValidationErrors((errors) => ({
        ...errors,
        designer: ""
      }));
    }

    if (name.trim() === 'case' && value.trim() === '') {
      setValidationErrors((errors) => ({
        ...errors,
        case: "Case is required."
      }));
    } else if (name.trim() === 'case' && value.trim() !== '') {
      setValidationErrors((errors) => ({
        ...errors,
        case: ""
      }));
    }
    
    if (name.trim() === 'layout' && value.trim() === '') {
      setValidationErrors((errors) => ({
        ...errors,
        layout: "Layout is required."
      }));
    } else if (name.trim() === 'layout' && value.trim() !== '') {
      setValidationErrors((errors) => ({
        ...errors,
        layout: ""
      }));
    }

    return validationErrors;
  };

  const handleCreate = (e) => {
    e.preventDefault();
 
    if (validationErrors !== null || validationErrors !== undefined) {
      // TODO: Retrigger inputValidation and display error messages.
      // let {inputState} = this.state.inputs;
      // Object.keys(inputState).map((key, index) => {
      //   if (inputState[index].hasAttribute("required")){
      //       if (inputState[index].value == ""){
      //         return inputValidation(inputState[index].key, inputState[index].value);
      //       }
      //   }
      // });

      return toast.error(
        "Could not create a keyboard. Please check that these inputs are not empty: Title, Designer, Case, Layout.",
        { theme: "colored" });
    }

    axios
      .post(
        `${keyboardApi}`,
        {
          title: inputs.title,
          image: inputs.image,
          switches: inputs.switches,
          switchModifications: inputs.switchModifications,
          plate: inputs.plate,
          keycaps: inputs.keycaps,
          designer: inputs.designer,
          case: inputs.case,
          modifications: inputs.modifications,
          layout: inputs.layout,
          stabilizers: inputs.stabilizers,
          description: inputs.description,
        }
      )
      .then((res) => {
        console.log(res);
        props.setShowNewKeyboardForm(false);
        toast.success("Successfully created a Keyboard!", { theme: "colored" });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Could not create a Keyboard.", { theme: "colored" });
      });
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    props.setShowNewKeyboardForm(false);
  };

  return (
    <Modal>
      <AddNewKeyboardModalBody>
        <form id="addNewKeyboardForm">
          <LabelGroup>
            <LabelTitle>Title</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              required
            ></AddNewKeyboardInput>
            {validationErrors.title && <ValidationMessage>{validationErrors.title}</ValidationMessage>}
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Image</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="image"
              value={inputs.image}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Layout</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="layout"
              value={inputs.layout}
              onChange={handleChange}
              required
            ></AddNewKeyboardInput>
            {validationErrors.layout && <ValidationMessage>{validationErrors.layout}</ValidationMessage>}
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Designer</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="designer"
              value={inputs.designer}
              onChange={handleChange}
              required
            ></AddNewKeyboardInput>
            {validationErrors.designer && <ValidationMessage>{validationErrors.designer}</ValidationMessage>}
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Case</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="case"
              value={inputs.case}
              onChange={handleChange}
              required
            ></AddNewKeyboardInput>
            {validationErrors.case && <ValidationMessage>{validationErrors.case}</ValidationMessage>}
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Keycaps</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="keycaps"
              value={inputs.keycaps}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Switches</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="switches"
              value={inputs.switches}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Switch Modifications</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="switchModifications"
              value={inputs.switchModifications}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Plate</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="plate"
              value={inputs.plate}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Stabilizers</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="stabilizers"
              value={inputs.stabilizers}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Modifications</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="modifications"
              value={inputs.modifications}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Description</LabelTitle>
            <TextArea
              type="text"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            ></TextArea>
          </LabelGroup>
          <ButtonContainer>
            <ButtonSuccess onClick={(e) => handleCreate(e)}>Create</ButtonSuccess>
            <ButtonDanger onClick={handleDiscard}>Discard</ButtonDanger>
          </ButtonContainer>
        </form>
      </AddNewKeyboardModalBody>
    </Modal>
  );
};

export default AddNewKeyboard;

const AddNewKeyboardModalBody = styled(ModalBody)`
  width: 20%;
`;

const AddNewKeyboardInput = styled(Input)`
  width: 12vw;
`;

const ValidationMessage = styled.p`
  color: red;
`;