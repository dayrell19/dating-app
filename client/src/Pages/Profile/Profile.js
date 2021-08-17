import React, { useEffect, useState } from "react";
import "./Profile.css";
import Axios from "axios";

//Import components
import Navbar from "../../Components/Navbar/Navbar";
import DeleteUser from "../../Components/DeleteUser/DeleteUser";

const USER_DATA_DEFAULT = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  age: 0,
  gender: "",
};

const Profile = () => {
  const [userData, setUserData] = useState(USER_DATA_DEFAULT);
  const [editData, setEditData] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3002/user/profile", {
      headers: { accessToken: localStorage.getItem("access-token") },
    }).then((response) => {
      setUserData(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <div className="profileDataContainer">
          <h1 className="profileHeader">Your Profile</h1>
          <div className="infoContainer">
            <h3 className="profileLabel">Name:</h3>
            <h3 className="profileData">{userData.firstName}</h3>
            <h3 className="profileData">{userData.lastName}</h3>
          </div>

          <div className="infoContainer">
            <h3 className="profileLabel">Age:</h3>
            <h3 className="profileData">{userData.age}</h3>
          </div>

          <div className="infoContainer">
            <h3 className="profileLabel">Gender:</h3>
            <h3 className="profileData">{userData.gender}</h3>
          </div>

          <div className="infoContainer">
            <h3 className="profileLabel">Email:</h3>
            <h3 className="profileData">{userData.email}</h3>
          </div>

          <div className="infoContainer">
            <h3 className="profileLabel">Username:</h3>
            <h3 className="profileData">{userData.username}</h3>
          </div>

          <div className="passwordContainer">
            <div className="passwordLeft">
              <h3 className="profileLabel">Password:</h3>
              <h3 className="profileData">Secured</h3>
            </div>
            <div className="passwordRight">
              <button className="changePasswordButton">Change Password</button>
            </div>
          </div>

          <div className="profileButtonsBottom">
            <button
              className="editDataButton"
              onClick={() => {
                setEditData(true);
              }}
            >
              Edit your info
            </button>
            <button
              className="deleteProfileButton"
              onClick={() => {
                setDeleteUser(true);
              }}
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
      {deleteUser && <DeleteUser setDeleteUser={setDeleteUser} />}
    </>
  );
};

export default Profile;
