import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../assets/styles/Layout";
import {
  Input,
  TextArea,
  ButtonContainer,
  ButtonSuccess,
  ButtonInfo,
  ButtonDanger,
} from "../../assets/styles/Modules";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteKeyboardConfirmation from "./DeleteKeyboardConfirmation";

const Keyboard = (props) => {
  const [keyboard, setKeyboard] = useState({
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
  const [editable, setEditable] = useState(false);
  const [deleteKeyboard, setDeleteKeyboard] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    designer: "",
    case: "",
    layout: "",
  });
  const apiUrl = "http://localhost:3000/api";

  useEffect(async () => {
    const data = await axios
      .get(`${apiUrl}/keyboard/${props.match.params.id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    if (data === null || data === undefined) {
      setKeyboard({});
    } else {
      setKeyboard(data);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeyboard((keyboard) => ({
      ...keyboard,
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

  const handleSave = (e) => {
    e.preventDefault();

    if (validationErrors !== null || validationErrors !== undefined) {
      return toast.error(
        "Could not create a keyboard. Please check that these inputs are not empty: Title, Designer, Case, Layout.",
        { theme: "colored" }
      );
    }

    axios
      .post(`${apiUrl}/keyboard/${props.match.params.id}`, {
        title: keyboard.title,
        image: keyboard.image,
        switches: keyboard.switches,
        switchModifications: keyboard.switchModifications,
        plate: keyboard.plate,
        keycaps: keyboard.keycaps,
        designer: keyboard.designer,
        case: keyboard.case,
        modifications: keyboard.modifications,
        layout: keyboard.layout,
        stabilizers: keyboard.stabilizers,
        description: keyboard.description,
      })
      .then((res) => {
        console.log(res);
        toast.success("Successfully saved changes!", { theme: "colored" });
        setEditable(!editable);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Could not save changes.", { theme: "colored" });
      });
  };

  const handleDelete = () => {
    setDeleteKeyboard(true);
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
    <>
      {deleteKeyboard === true ? (
        <DeleteKeyboardConfirmation setDeleteKeyboard={setDeleteKeyboard} />
      ) : (
        <></>
      )}
      {editable && <></>}
      {!editable && (
        <ButtonContainer>
          <ButtonInfo onClick={() => setEditable(!editable)}>Edit</ButtonInfo>
          <ButtonDanger onClick={() => handleDelete()}>Delete</ButtonDanger>
        </ButtonContainer>
      )}
      <Container>
        <CoverImage src={`/src/assets/images/MyKeyboards/${keyboard.image}`} />
        <TextContainer>
          <Header>
            {!editable && <Heading>{keyboard.title}</Heading>}
            {editable && (
              <>
                <Part>Title</Part>
                <EditableInput
                  type="text"
                  name="title"
                  value={keyboard.title}
                  onChange={handleChange}
                />
                {validationErrors.title && (
                  <ValidationMessage>
                    {validationErrors.title}
                  </ValidationMessage>
                )}
              </>
            )}
          </Header>
          <PartsList>
            <li>
              <Part>Layout</Part>
              {!editable && keyboard.layout}
              {editable && (
                <>
                  <EditableInput
                    type="text"
                    name="layout"
                    value={keyboard.layout}
                    onChange={handleChange}
                  />
                  {validationErrors.layout && (
                    <ValidationMessage>
                      {validationErrors.layout}
                    </ValidationMessage>
                  )}
                </>
              )}
            </li>
            <li>
              <Part>Designer</Part>
              {!editable && keyboard.designer}
              {editable && (
                <>
                  <EditableInput
                    type="text"
                    name="designer"
                    value={keyboard.designer}
                    onChange={handleChange}
                  />
                  {validationErrors.designer && (
                    <ValidationMessage>
                      {validationErrors.designer}
                    </ValidationMessage>
                  )}
                </>
              )}
            </li>
            <li>
              <Part>Case</Part>
              {!editable && keyboard.case}
              {editable && (
                <>
                  <EditableInput
                    type="text"
                    name="case"
                    value={keyboard.case}
                    onChange={handleChange}
                  />
                  {validationErrors.case && (
                    <ValidationMessage>
                      {validationErrors.case}
                    </ValidationMessage>
                  )}
                </>
              )}
            </li>
            <li>
              <Part>Keycaps</Part>
              {!editable && keyboard.keycaps}
              {editable && (
                <EditableInput
                  type="text"
                  name="keycaps"
                  value={keyboard.keycaps}
                  onChange={handleChange}
                />
              )}
            </li>
            <li>
              <Part>Switches</Part>
              {!editable && keyboard.switches}
              {editable && (
                <EditableInput
                  type="text"
                  name="switches"
                  value={keyboard.switches}
                  onChange={handleChange}
                />
              )}
            </li>
            <li>
              <Part>Switch modifications</Part>
              {!editable && keyboard.switchModifications}
              {editable && (
                <EditableInput
                  type="text"
                  name="switchModifications"
                  value={keyboard.switchModifications}
                  onChange={handleChange}
                />
              )}
            </li>
            <li>
              <Part>Plate</Part>
              {!editable && keyboard.plate}
              {editable && (
                <EditableInput
                  type="text"
                  name="plate"
                  value={keyboard.plate}
                  onChange={handleChange}
                />
              )}
            </li>
            <li>
              <Part>Stabilizers</Part>
              {!editable && keyboard.stabilizers}
              {editable && (
                <EditableInput
                  type="text"
                  name="stabilizers"
                  value={keyboard.stabilizers}
                  onChange={handleChange}
                />
              )}
            </li>
            <li>
              <Part>Other mods</Part>
              {!editable && keyboard.modifications}
              {editable && (
                <EditableInput
                  type="text"
                  name="modifications"
                  value={keyboard.modifications}
                  onChange={handleChange}
                />
              )}
            </li>
            <li>
              <Part>Description</Part>
              {!editable && keyboard.description}
              {editable && (
                <EditableTextArea
                  type="text"
                  name="description"
                  value={keyboard.description}
                  onChange={handleChange}
                />
              )}
            </li>
            <li>
              <Part>Status</Part>
              {getKeyboardStatus(keyboard.status)}
            </li>
          </PartsList>
        </TextContainer>
      </Container>
      {!editable && <></>}
      {editable && (
        <EditButtonContainer>
          <ButtonSuccess onClick={(e) => handleSave(e)}>
            Save changes
          </ButtonSuccess>
          <ButtonDanger onClick={() => setEditable(!editable)}>
            Discard
          </ButtonDanger>
        </EditButtonContainer>
      )}
    </>
  );
};

export default Keyboard;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  text-align: left;
  justify-content: center;
  padding: 1rem;
`;

const CoverImage = styled.img`
  width: 700px;
  height: 600px;
`;

const TextContainer = styled.div`
  margin-left: 2rem;
`;

const Heading = styled.h1`
  margin-top: 0rem;
  padding-bottom: 0.5rem;
`;

const PartsList = styled.ul`
  list-style-type: none;
`;

const Part = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.125rem;
  margin-top: 1rem;
`;

const EditableInput = styled(Input)`
  display: block;
  width: 12vw;
`;

const EditableTextArea = styled(TextArea)`
  display: block;
  height: 6vh;
`;

const EditButtonContainer = styled(ButtonContainer)`
  margin-top: 0;
`;

const ValidationMessage = styled.p`
  color: red;
`;
