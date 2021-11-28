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
      `${keyboardApi}`, {
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
    <form>
      <LabelGroup>
        <LabelTitle>Title</LabelTitle>
        <input
          type="text"
          name="Title"
          value={inputs.Title}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Image</LabelTitle>
        <input
          type="text"
          name="Image"
          value={inputs.Image}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Switches</LabelTitle>
        <input
          type="text"
          name="Switches"
          value={inputs.Switches}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Switch Modifications</LabelTitle>
        <input
          type="text"
          name="SwitchModifications"
          value={inputs.SwitchModifications}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Plate</LabelTitle>
        <input
          type="text"
          name="Plate"
          value={inputs.Plate}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Keycaps</LabelTitle>
        <input
          type="text"
          name="Keycaps"
          value={inputs.Keycaps}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Designer</LabelTitle>
        <input
          type="text"
          name="Designer"
          value={inputs.Designer}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Case</LabelTitle>
        <input
          type="text"
          name="Case"
          value={inputs.Case}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Modifications</LabelTitle>
        <input
          type="text"
          name="Modifications"
          value={inputs.Modifications}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Layout</LabelTitle>
        <input
          type="text"
          name="Layout"
          value={inputs.Layout}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Stabilizers</LabelTitle>
        <input
          type="text"
          name="Stabilizers"
          value={inputs.Stabilizers}
          onChange={handleChange}
        ></input>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Description</LabelTitle>
        <input
          type="text"
          name="Description"
          value={inputs.Description}
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
