import React, { useState, useEffect } from "react";
import "./DeleteUser.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";

const DeleteUser = ({ setDeleteUser }) => {
  let history = useHistory();

  const deleteUser = () => {
    Axios.delete("http://localhost:3002/user/delete", {
      headers: { accessToken: localStorage.getItem("access-token") },
    }).then((response) => {
      localStorage.removeItem("access-token");
      history.push("/login");
    });
  };
  return (
    <div className="duContainer">
      <div className="deleteUserContainer">
        <div className="duTop">
          <CloseIcon
            className="duCloseIcon"
            onClick={() => {
              setDeleteUser(false);
              history.push("/profile");
            }}
          />
        </div>
        <div className="duBottom">
          <h3 className="duSummary">
            Are you sure you want to delete your profile? Once deleted we won't
            be able to recover it.
          </h3>
          <button className="duButton" onClick={deleteUser}>
            Delete
          </button>
        </div>
      </div>
      <div className="duBlur"></div>
    </div>
  );
};

export default DeleteUser;
