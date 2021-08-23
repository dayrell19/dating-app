import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const LOGIN_DATA_DEFAULT = {
  Username: "",
  Password: "",
};

const Login = () => {
  let history = useHistory();
  const [loginData, setLoginData] = useState(LOGIN_DATA_DEFAULT);
  const [wrongLogin, setWrongLogin] = useState(false);

  const authUser = () => {
    console.log(loginData);
    Axios.post("http://localhost:3002/user/login", {
      username: loginData.Username,
      password: loginData.Password,
    })
      .then((response) => {
        localStorage.setItem("access-token", response.data.token);
        history.push("/mainpage");
      })
      .catch((error) => {
        if (error) {
          setWrongLogin(true);
        }
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginContainerTop">
        <div className="loginContainerLeft">
          <h1 className="leftHeader">DatingApp.com</h1>
        </div>
        <div className="loginContainerRight">
          <div className="inputsContainer">
            <h1 className="loginHeader">Login Here!</h1>
            <h2 className="loginSubheader">The best dating website</h2>

            <div className="individualLoginInput">
              <input
                className="loginInput"
                type="text"
                placeholder="Username"
                name="Username"
                id="username"
                required
                onChange={(event) => {
                  setLoginData((currentData) => ({
                    ...currentData,
                    Username: event.target.value,
                  }));
                }}
                onKeyDown={(event) => event.key === "Enter" && authUser()}
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
                onChange={(event) => {
                  setLoginData((currentData) => ({
                    ...currentData,
                    Password: event.target.value,
                  }));
                }}
                onKeyDown={(event) => event.key === "Enter" && authUser()}
              />
              <label className="loginLabel">Password</label>
            </div>

            {wrongLogin && (
              <div className="errorMessage">
                Wrong username and password combination
              </div>
            )}

            <button className="loginButton" onClick={authUser}>
              Login
            </button>
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
