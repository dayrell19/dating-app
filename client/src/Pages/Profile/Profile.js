import React, { useEffect, useState } from "react";
import "./Profile.css";
import Axios from "axios";

//Import components
import Navbar from "../../Components/Navbar/Navbar";

const USER_DATA_DEFAULT = {
  FirstName: "",
  LastName: "",
  Email: "",
  Username: "",
  Password: "",
  Age: 0,
  Gender: "",
};

const Profile = () => {
  const [userData, setUserData] = useState(USER_DATA_DEFAULT);

  useEffect(() => {
    Axios.get("http://localhost:3002/user/profile", {
      headers: { accessToken: localStorage.getItem("access-token") },
    }).then((response) => {
      setUserData(response.data);
      console.log(userData);
    });
  }, []);

  return (
    <div className="profileContainer">
      <Navbar />
      <h1>PROFILE</h1>
    </div>
  );
};

export default Profile;
