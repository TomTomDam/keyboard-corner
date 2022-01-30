import React, { useState } from "react";
import styled from "styled-components";
import { Modal, ModalBody, ButtonContainer, ButtonSuccess, ButtonDanger } from "../../assets/styles/Modules";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const DeleteKeyboardConfirmation = (props) => {
  const keyboardApi = "http://localhost:3000/api/keyboard";
  let { id } = useParams();

  const handleDelete = async () => {
    await axios
      .delete(`${keyboardApi}/${id}`)
      .then((res) => {
        console.log(res);
        props.setDeleteKeyboard(false);
        toast.success("Successfully deleted the keyboard!", { theme: "colored" });
        window.location.href = `${document.location.origin}/my-keyboards`;
      })
      .catch((err) => {
        console.log(err);
        toast.error("Could not delete the keyboard.", { theme: "colored" });
      });
  };

  const handleDiscard = () => {
    props.setDeleteKeyboard(false);
  };

  return (
    <Modal>
      <DeleteKeyboardModalBody>
        <p>
          Are you sure you want to delete this keyboard?
        </p>
        <ButtonContainer>
          <ButtonSuccess onClick={() => handleDelete()}>Yes</ButtonSuccess>
          <ButtonDanger onClick={() => handleDiscard()}>No</ButtonDanger>
        </ButtonContainer>
      </DeleteKeyboardModalBody>
    </Modal>
  );
};

export default DeleteKeyboardConfirmation;

const DeleteKeyboardModalBody = styled(ModalBody)`
  width: 20%;
  top: 30%;
`;