import React, { useEffect } from "react";
import "./Main.css";

//Import Components
import Navbar from "../../Components/Navbar/Navbar";
import Axios from "axios";

const Main = () => {
  useEffect(() => {
    Axios.get("http://localhost:3002/user/profile", {
      headers: { accessToken: localStorage.getItem("access-token") },
    });
  }, []);
  return (
    <div className="mainContainer">
      <Navbar />
    </div>
  );
};

export default Main;
