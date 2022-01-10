import React, { useState } from "react";
import styled from "styled-components";
import { ButtonSuccess, ButtonDanger } from "../../assets/styles/Modules";
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
    <Container>
      <ContainerText>Are you sure you want to delete this keyboard?</ContainerText>
      <ButtonContainer>
        <ButtonSuccess onClick={() => handleDelete()}>Yes</ButtonSuccess>
        <ButtonDanger onClick={() => handleDiscard()}>No</ButtonDanger>
      </ButtonContainer>
    </Container>
  );
};

export default DeleteKeyboardConfirmation;

const Container = styled.div`
  margin-bottom: 1rem;
`;

const ContainerText = styled.div`
  margin-bottom: 0.25rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0.5rem;
`;