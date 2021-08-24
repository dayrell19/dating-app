import React, { useEffect, useState } from "react";
import "./Main.css";
import Axios from "axios";

//Import Components
import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";
import Chat from "../../Components/Chat/Chat";

const Main = () => {
  useEffect(() => {
    Axios.get("http://localhost:3002/user/all", {
      headers: { accessToken: localStorage.getItem("access-token") },
    }).then((response) => {
      // console.log(response.data);
    });
  }, []);

  const [match, setMatch] = useState(false);
  return (
    <div className="mainContainer">
      <Navbar />
      {match ? <Chat /> : <Carousel />}
    </div>
  );
};

export default Main;
