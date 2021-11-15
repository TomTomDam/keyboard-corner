import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
      `${keyboardApi}`, {
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
        <LabelTitle>Switch Modifications</LabelTitle>
        <input
          type="text"
          name="switchModifications"
          value={inputs.switchModifications}
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
        <LabelTitle>Designer</LabelTitle>
        <input
          type="text"
          name="designer"
          value={inputs.designer}
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
        <LabelTitle>Modifications</LabelTitle>
        <input
          type="text"
          name="modifications"
          value={inputs.modifications}
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
