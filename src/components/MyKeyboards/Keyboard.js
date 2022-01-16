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
  const keyboardApi = "http://localhost:3000/api/keyboard";

  useEffect(async () => {
    const data = await axios
      .get(`${keyboardApi}/${props.match.params.id}`)
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
    setKeyboard((part) => ({ ...keyboard, [name]: value }));
  };

  const handleSave = async () => {
    const successToast = () => {
      toast.success("Successfully saved changes!", { theme: "colored" });
    };

    const errorToast = () => {
      toast.error("Could not save changes.", { theme: "colored" });
    };

    await axios
      .post(`${keyboardApi}/${props.match.params.id}`, {
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
        successToast();
        setEditable(!editable);
      })
      .catch((err) => {
        console.log(err);
        errorToast();
      });
  };

  const handleDelete = async () => {
    setDeleteKeyboard(true);
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
              </>
            )}
          </Header>
          <PartsList>
            <li>
              <Part>Layout</Part>
              {!editable && keyboard.layout}
              {editable && (
                <EditableInput
                  type="text"
                  name="layout"
                  value={keyboard.layout}
                  onChange={handleChange}
                />
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
              <Part>Case</Part>
              {!editable && keyboard.case}
              {editable && (
                <EditableInput
                  type="text"
                  name="case"
                  value={keyboard.case}
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
          </PartsList>
        </TextContainer>
      </Container>
      {!editable && <></>}
      {editable && (
        <EditButtonContainer>
          <ButtonSuccess onClick={() => handleSave()}>
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