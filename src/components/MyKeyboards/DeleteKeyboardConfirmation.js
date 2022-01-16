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