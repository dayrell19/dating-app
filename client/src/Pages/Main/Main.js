import React, { useEffect } from "react";
import "./Main.css";
import Axios from "axios";

//Import Components
import Navbar from "../../Components/Navbar/Navbar";

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
