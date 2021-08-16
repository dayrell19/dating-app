import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
// import { useState } from "react";
// import Axios from "axios";

const Login = () => {
  let history = useHistory();
  return (
    <div className="loginContainer">
      <div className="loginContainerTop">
        <div className="loginContainerLeft">
          <h1 className="leftHeader">DatingApp.com</h1>
        </div>
        <div className="loginContainerRight">
          <div className="inputsContainer">
            <h1 className="loginHeader">Login Here!</h1>
            <h2 className="loginSubheader">The best dating website!</h2>

            <div className="individualLoginInput">
              <input
                className="loginInput"
                type="text"
                placeholder="Username"
                name="Username"
                id="username"
                required
              />
              <label className="loginLabel">Username</label>
            </div>

            <div className="individualLoginInput">
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                name="Password"
                id="password"
                required
              />
              <label className="loginLabel">Password</label>
            </div>

            <button className="loginButton">Login</button>
            <p
              className="registerLink"
              onClick={() => {
                history.push("/register");
              }}
            >
              Don't have an account? Register here!
            </p>
          </div>
        </div>
      </div>
      <div className="loginContainerBottom">
        <h1 className="bottomHeader">Live your life to the fullest!</h1>
      </div>
    </div>
  );
};

export default Login;
