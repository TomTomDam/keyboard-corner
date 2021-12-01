import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteKeyboard = (props) => {
  const keyboardApi = "http://localhost:3000/api/keyboard";

  const handleDelete = (e) => {
    e.preventDefault();

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .delete(
        `${keyboardApi}/${props.Id}`,
        {
          title: props.Title,
          image: props.Image,
          switches: props.Switches,
          switchModifications: props.SwitchModifications,
          plate: props.Plate,
          keycaps: props.Keycaps,
          designer: props.Designer,
          case: props.Case,
          modifications: props.Modifications,
          layout: props.Layout,
          stabilizers: props.Stabilizers,
          description: props.Description,
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
    props.setShowDeleteKeyboardForm(false);
  };

  return (
    <form>
      <LabelGroup>
        <LabelTitle>Title</LabelTitle>
        <div>{props.Title}</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Image</LabelTitle>
        <div>props.Image</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Switches</LabelTitle>
        <div>props.Switches</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Switch Modifications</LabelTitle>
        <div>props.SwitchModifications</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Plate</LabelTitle>
        <div>props.Plate</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Keycaps</LabelTitle>
        <div>props.Keycaps</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Designer</LabelTitle>
        <div>props.Designer</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Case</LabelTitle>
        <div>props.Case</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Modifications</LabelTitle>
        <div>props.Modifications</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Layout</LabelTitle>
        <div>props.Layout</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Stabilizers</LabelTitle>
        <div>props.Stabilizers</div>
      </LabelGroup>
      <LabelGroup>
        <LabelTitle>Description</LabelTitle>
        <div>props.Description</div>
      </LabelGroup>
      <ButtonRow>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        <DiscardButton onClick={handleDiscard}>Discard</DiscardButton>
      </ButtonRow>
    </form>
  );
};

export default DeleteKeyboard;

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

const DeleteButton = styled.button``;

const DiscardButton = styled.button``;
