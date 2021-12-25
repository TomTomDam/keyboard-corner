import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from 'react-toastify';

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
          description: inputs.description
        },
        options
      )
      .then((res) => {
        console.log(res);
        toast.success("Successfully created a Keyboard!",  { theme: "colored" });
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
      <ModalBody>
        <form>
          <LabelGroup>
            <LabelTitle>Title</LabelTitle>
            <Input
              type="text"
              name="title"
              value={inputs.title}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Image</LabelTitle>
            <Input
              type="text"
              name="image"
              value={inputs.image}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Switches</LabelTitle>
            <Input
              type="text"
              name="switches"
              value={inputs.switches}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Switch Modifications</LabelTitle>
            <Input
              type="text"
              name="switchModifications"
              value={inputs.switchModifications}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Plate</LabelTitle>
            <Input
              type="text"
              name="plate"
              value={inputs.plate}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Keycaps</LabelTitle>
            <Input
              type="text"
              name="keycaps"
              value={inputs.keycaps}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Designer</LabelTitle>
            <Input
              type="text"
              name="designer"
              value={inputs.designer}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Case</LabelTitle>
            <Input
              type="text"
              name="case"
              value={inputs.case}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Modifications</LabelTitle>
            <Input
              type="text"
              name="modifications"
              value={inputs.modifications}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Layout</LabelTitle>
            <Input
              type="text"
              name="layout"
              value={inputs.layout}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Stabilizers</LabelTitle>
            <Input
              type="text"
              name="stabilizers"
              value={inputs.stabilizers}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Description</LabelTitle>
            <Input
              type="text"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <ButtonRow>
            <CreateButton onClick={handleCreate}>Create</CreateButton>
            <DiscardButton onClick={handleDiscard}>Discard</DiscardButton>
          </ButtonRow>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default AddNewKeyboard;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalBody = styled.div`
  position: fixed;
  background: white;
  width: 40%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
`;

const LabelGroup = styled.div`
  margin-top: 1rem;
`;

const LabelTitle = styled.div`
  display: block;
`;

const Input = styled.input`
  line-height: 1.25em;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
`;

const Button = styled.button`
  margin: 0.5rem;
`;

const CreateButton = styled(Button)`

`;

const DiscardButton = styled(Button)`

`;
