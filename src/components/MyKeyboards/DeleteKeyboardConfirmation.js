import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const DeleteKeyboardConfirmation = (props) => {
  const keyboardApi = "http://localhost:3000/api/keyboard";
  let { id } = useParams();

  const handleDelete = async () => {
    const successToast = () => {
      toast.success("Successfully deleted the keyboard!", { theme: "colored" });
    };

    const errorToast = () => {
      toast.error("Could not delete the keyboard.", { theme: "colored" });
    };

    await axios
      .delete(`${keyboardApi}/${id}`)
      .then((res) => {
        console.log(res);
        successToast();
        //Redirect back to 'my-keyboards' page
      })
      .catch((err) => {
        console.log(err);
        errorToast();
      });
  };

  const handleDiscard = () => {
    props.setDeleteKeyboard(false);
  };

  return (
    <div>
      <p>Are you sure you want to delete this keyboard?</p>
      <ButtonContainer>
        <Button onClick={() => handleDelete()}>Yes</Button>
        <Button onClick={() => handleDiscard()}>No</Button>
      </ButtonContainer>
    </div>
  );
};

export default DeleteKeyboardConfirmation;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0.5rem;
`;