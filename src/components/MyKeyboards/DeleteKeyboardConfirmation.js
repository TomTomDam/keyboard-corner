import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from 'react-toastify';

const DeleteKeyboardConfirmation = (props) => {
  const keyboardApi = "http://localhost:3000/api/keyboard";

  const handleDelete = async () => {
    const successToast = () => {
      toast.success("Successfully deleted the keyboard!", { theme: "colored" });
    };
  
    const errorToast = () => {
      toast.error("Could not delete the keyboard.", { theme: "colored" });
    };

    // await axios
    // .delete(`${keyboardApi}/${props.match.params.id}`)
    // .then((res) => {
    //   console.log(res);
    //   successToast();
    //   setEditable(!editable);
    // })
    // .catch((err) => {
    //   console.log(err);
    //   errorToast();
    // });
  };

  const handleDiscard = () => {

  };

  return (
    <div>
      <p>Are you sure you want to delete this keyboard?</p>
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default DeleteKeyboardConfirmation;
