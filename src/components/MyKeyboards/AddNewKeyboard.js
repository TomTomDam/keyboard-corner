import React, { useState } from "react";
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
  const keyboardApi = "http://localhost:3000/api/keyboard";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

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
        },
        options
      )
      .then((res) => {
        console.log(res);
        toast.success("Successfully created a Keyboard!", { theme: "colored" });
        props.setShowNewKeyboardForm(false);
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
        <form>
          <LabelGroup>
            <LabelTitle>Title</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="title"
              value={inputs.title}
              onChange={handleChange}
            ></AddNewKeyboardInput>
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
            <LabelTitle>Keycaps</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="keycaps"
              value={inputs.keycaps}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Designer</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="designer"
              value={inputs.designer}
              onChange={handleChange}
            ></AddNewKeyboardInput>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Case</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="case"
              value={inputs.case}
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
            <LabelTitle>Layout</LabelTitle>
            <AddNewKeyboardInput
              type="text"
              name="layout"
              value={inputs.layout}
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
            <LabelTitle>Description</LabelTitle>
            <TextArea
              type="text"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            ></TextArea>
          </LabelGroup>
          <ButtonContainer>
            <ButtonSuccess onClick={handleCreate}>Create</ButtonSuccess>
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
