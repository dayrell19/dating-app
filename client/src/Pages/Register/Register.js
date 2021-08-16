import React from "react";
import "./Register.css";

//import materials ui icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="formContainer">
        <h1 className="registerHeader">Register Here!</h1>
        <div className="individualRegisterInput">
          <input
            className="registerInput"
            type="text"
            placeholder="First Name"
            name="First Name"
            id="firstname"
            required
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
          />
          <label className="registerLabel">Age</label>
        </div>

        <div className="genderRegisterInput">
          <label for="femaleOP" className="genderLabel">
            <input type="radio" id="femaleOP" name="selector" tabIndex="1" />
            <span>Female</span>
          </label>

          <label for="maleOP" className="genderLabel">
            <input type="radio" id="maleOP" name="selector" tabIndex="1" />
            <span>Male</span>
          </label>
        </div>

        <button className="registerButton">Submit</button>
      </div>
    </div>
  );
};

export default Register;
