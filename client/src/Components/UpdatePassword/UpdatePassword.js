import React, { useState } from "react";
import "./UpdatePassword.css";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import CloseIcon from "@material-ui/icons/Close";

const UpdatePassword = ({ setUpdatePassword }) => {
  let history = useHistory();

  const [password, setPassword] = useState("");

  const updatePassword = () => {
    Axios.put(
      "http://localhost:3002/user/password",
      {
        password: password,
      },
      {
        headers: { accessToken: localStorage.getItem("access-token") },
      }
    ).then((response) => {
      console.log(response.data);
      setUpdatePassword(false);
    });
  };
  return (
    <div className="upContainer">
      <div className="updatePasswordContainer">
        <div className="upTop">
          <CloseIcon
            className="upCloseIcon"
            onClick={() => {
              setUpdatePassword(false);
              history.push("/profile");
            }}
          />
        </div>
        <div className="upBottom">
          <div className="upForm">
            <label className="upLabel">New Password:</label>
            <input
              className="upInput"
              type="password"
              placeholder="Write your new password here..."
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <button className="upButton" onClick={updatePassword}>
            Update
          </button>
        </div>
      </div>
      <div className="upBlur"></div>
    </div>
  );
};

export default UpdatePassword;
