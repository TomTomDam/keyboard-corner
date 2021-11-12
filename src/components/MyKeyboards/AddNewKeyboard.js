import React, { useState } from "react";
import styled from "styled-components";

const AddNewKeyboard = (props) => {
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    image: "",
    switches: "",
    plate: "",
    keycaps: "",
    case: "",
    mods: "",
    layout: "",
    stabilizers: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleCreate = (e) => {
    newKeyboardForm.setState(false);
  };

  const handleDiscard = (e) => {
    this.props.setShowNewKeyboardForm(false);
  };

  return (
    <form>
      <LabelGroup>
        <LabelTitle>Title</LabelTitle>
        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Image</LabelTitle>
        <input
          type="text"
          name="image"
          value={inputs.image}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Switches</LabelTitle>
        <input
          type="text"
          name="switches"
          value={inputs.switches}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Plate</LabelTitle>
        <input
          type="text"
          name="plate"
          value={inputs.plate}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Keycaps</LabelTitle>
        <input
          type="text"
          name="keycaps"
          value={inputs.keycaps}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Case</LabelTitle>
        <input
          type="text"
          name="case"
          value={inputs.case}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Mods</LabelTitle>
        <input
          type="text"
          name="mods"
          value={inputs.mods}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Layout</LabelTitle>
        <input
          type="text"
          name="layout"
          value={inputs.layout}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Stabilizers</LabelTitle>
        <input
          type="text"
          name="stabilizers"
          value={inputs.stabilizers}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Description</LabelTitle>
        <input
          type="text"
          name="description"
          value={inputs.description}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <ButtonRow>
        <CreateButton onClick={handleCreate}>Create</CreateButton>
        <DiscardButton onClick={handleDiscard}>Discard</DiscardButton>
      </ButtonRow>
    </form>
  );
};

export default AddNewKeyboard;

const LabelGroup = styled.div``;

const LabelTitle = styled.div`
  display: block;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
`;

const CreateButton = styled.button``;

const DiscardButton = styled.button``;
