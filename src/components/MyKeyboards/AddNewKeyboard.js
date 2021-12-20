import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddNewKeyboard = (props) => {
  const [inputs, setInputs] = useState({
    Id: 0,
    Title: "",
    Image: "",
    Switches: "",
    SwitchModifications: "",
    Plate: "",
    Keycaps: "",
    Designer: "",
    Case: "",
    Modifications: "",
    Layout: "",
    Stabilizers: "",
    Description: "",
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
          title: inputs.Title,
          image: inputs.Image,
          switches: inputs.Switches,
          switchModifications: inputs.SwitchModifications,
          plate: inputs.Plate,
          keycaps: inputs.Keycaps,
          designer: inputs.Designer,
          case: inputs.Case,
          modifications: inputs.Modifications,
          layout: inputs.Layout,
          stabilizers: inputs.Stabilizers,
          description: inputs.Description,
        },
        options
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
              name="Title"
              value={inputs.Title}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Image</LabelTitle>
            <Input
              type="text"
              name="Image"
              value={inputs.Image}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Switches</LabelTitle>
            <Input
              type="text"
              name="Switches"
              value={inputs.Switches}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Switch Modifications</LabelTitle>
            <Input
              type="text"
              name="SwitchModifications"
              value={inputs.SwitchModifications}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Plate</LabelTitle>
            <Input
              type="text"
              name="Plate"
              value={inputs.Plate}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Keycaps</LabelTitle>
            <Input
              type="text"
              name="Keycaps"
              value={inputs.Keycaps}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Designer</LabelTitle>
            <Input
              type="text"
              name="Designer"
              value={inputs.Designer}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Case</LabelTitle>
            <Input
              type="text"
              name="Case"
              value={inputs.Case}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Modifications</LabelTitle>
            <Input
              type="text"
              name="Modifications"
              value={inputs.Modifications}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Layout</LabelTitle>
            <Input
              type="text"
              name="Layout"
              value={inputs.Layout}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Stabilizers</LabelTitle>
            <Input
              type="text"
              name="Stabilizers"
              value={inputs.Stabilizers}
              onChange={handleChange}
            ></Input>
          </LabelGroup>
          <LabelGroup>
            <LabelTitle>Description</LabelTitle>
            <Input
              type="text"
              name="Description"
              value={inputs.Description}
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
