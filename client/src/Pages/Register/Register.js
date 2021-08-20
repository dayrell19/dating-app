import React from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

//import materials ui icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";

const GENDER = {
  Male: "male",
  Female: "female",
  Other: "other",
};

const REGISTER_DATA_DEFAULT = {
  FirstName: "",
  LastName: "",
  Email: "",
  Username: "",
  Password: "",
  Age: 0,
  Gender: GENDER.Other,
  Image: "",
};

const Register = () => {
  let history = useHistory();

  const [registerData, setRegisterData] = useState(REGISTER_DATA_DEFAULT);
  const [image, setImage] = useState("");

  const CreateUser = async () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "kp5hnahq");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dayrell19/image/upload",
      formData
    ).then((response) => {
      console.log(registerData);
      Axios.post("http://localhost:3002/user/", {
        firstName: registerData.FirstName,
        lastName: registerData.LastName,
        email: registerData.Email,
        username: registerData.Username,
        password: registerData.Password,
        age: registerData.Age,
        gender: registerData.Gender,
        image: response.data.url,
      }).then(() => {
        history.push("/login");
      });
    });
  };

  return (
    <div className="registerContainer">
      <div className="formContainer">
        <div className="registerBackButton">
          <ArrowBackIcon
            className="registerBackIcon"
            onClick={() => {
              history.push("/login");
            }}
          />
        </div>
        <div className="formInputs">
          <h1 className="registerHeader">Register Here!</h1>
          <div className="individualRegisterInput">
            <input
              className="registerInput"
              type="text"
              placeholder="First Name"
              name="First Name"
              id="firstname"
              required
              onChange={(event) => {
                setRegisterData((currentData) => ({
                  ...currentData,
                  FirstName: event.target.value,
                }));
              }}
              onKeyDown={(event) => event.key === "Enter" && CreateUser()}
            />
            <label className="registerLabel">First Name</label>
          </div>

          <div className="individualRegisterInput">
            <input
              className="registerInput"
              type="text"
              placeholder="Last Name"
              name="Last Name"
              id="lastname"
              required
              onChange={(event) => {
                setRegisterData((currentData) => ({
                  ...currentData,
                  LastName: event.target.value,
                }));
              }}
              onKeyDown={(event) => event.key === "Enter" && CreateUser()}
            />
            <label className="registerLabel">Last Name</label>
          </div>

          <div className="individualRegisterInput">
            <input
              className="registerInput"
              type="email"
              placeholder="Email"
              name="Email"
              id="email"
              required
              onChange={(event) => {
                setRegisterData((currentData) => ({
                  ...currentData,
                  Email: event.target.value,
                }));
              }}
              onKeyDown={(event) => event.key === "Enter" && CreateUser()}
            />
            <label className="registerLabel">Email</label>
          </div>

          <div className="individualRegisterInput">
            <input
              className="registerInput"
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              required
              onChange={(event) => {
                setRegisterData((currentData) => ({
                  ...currentData,
                  Username: event.target.value,
                }));
              }}
              onKeyDown={(event) => event.key === "Enter" && CreateUser()}
            />
            <label className="registerLabel">Username</label>
          </div>

          <div className="individualRegisterInput">
            <input
              className="registerInput"
              type="password"
              placeholder="Password"
              name="Password"
              id="password"
              required
              onChange={(event) => {
                setRegisterData((currentData) => ({
                  ...currentData,
                  Password: event.target.value,
                }));
              }}
              onKeyDown={(event) => event.key === "Enter" && CreateUser()}
            />
            <label className="registerLabel">Password</label>
          </div>

          <div className="individualRegisterInput">
            <input
              className="registerInput"
              type="number"
              placeholder="Age"
              name="Age"
              id="age"
              required
              onChange={(event) => {
                setRegisterData((currentData) => ({
                  ...currentData,
                  Age: event.target.value,
                }));
              }}
              onKeyDown={(event) => event.key === "Enter" && CreateUser()}
            />
            <label className="registerLabel">Age</label>
          </div>

          <div className="genderRegisterInput">
            <label htmlFor="femaleOP" className="genderLabel">
              <input
                type="radio"
                id="femaleOP"
                name="selector"
                tabIndex="1"
                onClick={() => {
                  setRegisterData((currentData) => ({
                    ...currentData,
                    Gender: "female",
                  }));
                }}
              />
              <span>Female</span>
            </label>

            <label htmlFor="maleOP" className="genderLabel">
              <input
                type="radio"
                id="maleOP"
                name="selector"
                tabIndex="2"
                onClick={() => {
                  setRegisterData((currentData) => ({
                    ...currentData,
                    Gender: "male",
                  }));
                }}
              />
              <span>Male</span>
            </label>

            <label htmlFor="otherOP" className="genderLabel">
              <input
                type="radio"
                id="otherOP"
                name="selector"
                tabIndex="3"
                onClick={() => {
                  setRegisterData((currentData) => ({
                    ...currentData,
                    Gender: "other",
                  }));
                }}
              />
              <span>Other</span>
            </label>
          </div>

          <div className="registerProfilePicture">
            <h3 className="registerPictureLabel">Profile Picture:</h3>
            <input
              type="file"
              name="file"
              id="file"
              accept="image/*"
              class="inputfile"
              onChange={(event) => {
                setImage(event.target.files);
              }}
            />
            <label className="profilePictureLabel" for="file">
              <PublishIcon />
              Choose a photo
            </label>
          </div>

          <button className="registerButton" onClick={CreateUser}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
