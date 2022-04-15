import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FormGroup,
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
    status: ""
  });
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    designer: "",
    case: "",
    layout: "",
  });
  const [keyboardStatusList, setKeyboardStatusList] = useState([]);
  const apiUrl = "http://localhost:3000/api";

  useEffect(async () => {
    const statuses = await axios
      .get(`${apiUrl}/keyboardStatus`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    if (statuses === null || statuses === undefined) {
      setKeyboardStatusList([]);
    } else {
      setKeyboardStatusList(statuses);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));

    inputValidation(name, value);
  };

  const inputValidation = (name, value) => {
    if (name.trim() === "title" && value.trim() === "") {
      setValidationErrors((errors) => ({
        ...errors,
        title: "Title is required.",
      }));
    } else if (name.trim() === "title" && value.trim() !== "") {
      setValidationErrors((errors) => ({
        ...errors,
        title: "",
      }));
    }

    if (name.trim() === "designer" && value.trim() === "") {
      setValidationErrors((errors) => ({
        ...errors,
        designer: "Designer is required.",
      }));
    } else if (name.trim() === "designer" && value.trim() !== "") {
      setValidationErrors((errors) => ({
        ...errors,
        designer: "",
      }));
    }

    if (name.trim() === "case" && value.trim() === "") {
      setValidationErrors((errors) => ({
        ...errors,
        case: "Case is required.",
      }));
    } else if (name.trim() === "case" && value.trim() !== "") {
      setValidationErrors((errors) => ({
        ...errors,
        case: "",
      }));
    }

    if (name.trim() === "layout" && value.trim() === "") {
      setValidationErrors((errors) => ({
        ...errors,
        layout: "Layout is required.",
      }));
    } else if (name.trim() === "layout" && value.trim() !== "") {
      setValidationErrors((errors) => ({
        ...errors,
        layout: "",
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

      console.log("validationErrors: " + JSON.stringify(validationErrors));

      return toast.error(
        "Could not create a keyboard. Please check that these inputs are not empty: Title, Designer, Case, Layout.",
        { theme: "colored" }
      );
    }

    axios
      .post(`${apiUrl}`, {
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
        //status: inputs.status,
      })
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

  //TODO make global
  const getKeyboardStatus = (status) => {
    switch (status) {
      case 1:
        return "Currently on hand";
      case 2:
        return "Ordered";
      case 3:
        return "Sold";
      case 4:
        return "Gave away";
    }
  };

  return (
    <Modal>
      <AddNewKeyboardModalBody>
        <form id="addNewKeyboardForm">
          <FormGroup>
            <LabelTitle>Title</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              required
            ></AddNewKeyboardInput>
            {validationErrors.title && (
              <ValidationMessage>{validationErrors.title}</ValidationMessage>
            )}
          </FormGroup>
          <FormGroup>
            <LabelTitle>Image</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="image"
              value={inputs.image}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </FormGroup>
          <FormGroup>
            <LabelTitle>Layout</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="layout"
              value={inputs.layout}
              onChange={handleChange}
              required
            ></AddNewKeyboardInput>
            {validationErrors.layout && (
              <ValidationMessage>{validationErrors.layout}</ValidationMessage>
            )}
          </FormGroup>
          <FormGroup>
            <LabelTitle>Designer</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="designer"
              value={inputs.designer}
              onChange={handleChange}
              required
            ></AddNewKeyboardInput>
            {validationErrors.designer && (
              <ValidationMessage>{validationErrors.designer}</ValidationMessage>
            )}
          </FormGroup>
          <FormGroup>
            <LabelTitle>Case</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="case"
              value={inputs.case}
              onChange={handleChange}
              required
            ></AddNewKeyboardInput>
            {validationErrors.case && (
              <ValidationMessage>{validationErrors.case}</ValidationMessage>
            )}
          </FormGroup>
          <FormGroup>
            <LabelTitle>Keycaps</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="keycaps"
              value={inputs.keycaps}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </FormGroup>
          <FormGroup>
            <LabelTitle>Switches</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="switches"
              value={inputs.switches}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </FormGroup>
          <FormGroup>
            <LabelTitle>Switch Modifications</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="switchModifications"
              value={inputs.switchModifications}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </FormGroup>
          <FormGroup>
            <LabelTitle>Plate</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="plate"
              value={inputs.plate}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </FormGroup>
          <FormGroup>
            <LabelTitle>Stabilizers</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="stabilizers"
              value={inputs.stabilizers}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </FormGroup>
          <FormGroup>
            <LabelTitle>Modifications</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="modifications"
              value={inputs.modifications}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </FormGroup>
          <FormGroup>
            <LabelTitle>Description</LabelTitle>
            <TextArea
              type="text"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            ></TextArea>
          </FormGroup>
          {/* <FormGroup>
            <LabelTitle>Status</LabelTitle>
            <select name="status" onChange={handleChange}>
              {keyboardStatusList.map((status) => (
                <option value={status.Id}>{getKeyboardStatus(status.Id)}</option>
              ))}
            </select>
          </FormGroup> */}
          <ButtonContainer>
            <ButtonSuccess onClick={(e) => handleCreate(e)}>
              Create
            </ButtonSuccess>
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
