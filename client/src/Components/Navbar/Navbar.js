import React from "react";
import "./Navbar.css";
import { useHistory, Link } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const logOut = () => {
    localStorage.removeItem("access-token");
    history.push("/login");
  };

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <h1
          className="navbarHeader"
          onClick={() => {
            history.push("/mainpage");
          }}
        >
          DatingApp.com
        </h1>
      </div>
      <div className="navbarRight">
        <div className="navbarGrid">
          <div className="navbarItem">
            <Link to="/preferences" className="navbarLinks">
              PREFERENCES
            </Link>
          </div>
          <div className="navbarItem">
            <Link to="/profile" className="navbarLinks">
              PROFILE
            </Link>
          </div>
          <div className="navbarItem">
            <Link to="/login" className="navbarLinks" onClick={logOut}>
              LOG OUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
