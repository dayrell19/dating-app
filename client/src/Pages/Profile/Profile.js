import React, { useEffect, useState } from "react";
import "./Profile.css";
import Axios from "axios";
import { Image } from "cloudinary-react";
import { useHistory } from "react-router-dom";

//Import components
import Navbar from "../../Components/Navbar/Navbar";
import DeleteUser from "../../Components/DeleteUser/DeleteUser";
import UpdatePassword from "../../Components/UpdatePassword/UpdatePassword";
import PublishIcon from "@material-ui/icons/Publish";

const USER_DATA_DEFAULT = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  age: 0,
  gender: "",
  image: "",
};

const USER_DATA_UPDATE = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  age: 0,
  gender: "",
  image: "",
};

const Profile = () => {
  const [userData, setUserData] = useState(USER_DATA_DEFAULT);
  const [userEdited, setUserEdited] = useState(USER_DATA_UPDATE);
  const [editData, setEditData] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [image, setImage] = useState("");

  let history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:3002/user/profile", {
      headers: { accessToken: localStorage.getItem("access-token") },
    }).then((response) => {
      setUserData(response.data);
      console.log(response.data);
    });
  }, []);

  const updateUser = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "kp5hnahq");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dayrell19/image/upload",
      formData
    ).then((response) => {
      Axios.put(
        "http://localhost:3002/user/update",
        {
          firstName: userEdited.firstName,
          lastName: userEdited.lastName,
          email: userEdited.email,
          username: userEdited.username,
          age: userEdited.age,
          gender: userEdited.gender,
          image: response.data.url,
        },
        {
          headers: { accessToken: localStorage.getItem("access-token") },
        }
      ).then((response) => {
        console.log(response.data);
        localStorage.setItem("access-token", response.data.token);
        setEditData(false);
        history.push("/profile");
        window.location.reload();
      });
    });
  };

  return (
    <>
      <Navbar />
      <div className="profileContainer">
        {editData ? (
          <div className="profileDataContainer">
            <h1 className="profileEditHeader">Your Profile</h1>
            <div className="editProfilePicture">
              <h3 className="profileLabel">Profile Picture:</h3>
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
              <label className="profilePagePictureLabel" for="file">
                <PublishIcon />
                Choose a photo
              </label>
            </div>
            <div className="infoEditContainer">
              <h3 className="profileLabel">Name:</h3>
              <input
                className="profileDataInput"
                placeholder={userData.firstName}
                type="text"
                onChange={(event) => {
                  setUserEdited((currentData) => ({
                    ...currentData,
                    firstName: event.target.value,
                  }));
                }}
              />
              <input
                className="profileDataInput"
                placeholder={userData.lastName}
                type="text"
                onChange={(event) => {
                  setUserEdited((currentData) => ({
                    ...currentData,
                    lastName: event.target.value,
                  }));
                }}
              />
            </div>

            <div className="infoEditContainer">
              <h3 className="profileLabel">Age:</h3>
              <input
                className="profileDataInput"
                placeholder={userData.age}
                type="number"
                onChange={(event) => {
                  setUserEdited((currentData) => ({
                    ...currentData,
                    age: event.target.value,
                  }));
                }}
              />
            </div>

            <div className="editGenderRegisterInput">
              <h3 className="profileLabel">Gender:</h3>
              <label htmlFor="femaleOP" className="editGenderLabel">
                <input
                  type="radio"
                  id="femaleOP"
                  name="selector"
                  tabIndex="1"
                  onClick={() => {
                    setUserEdited((currentData) => ({
                      ...currentData,
                      gender: "female",
                    }));
                  }}
                />
                <span>Female</span>
              </label>

              <label htmlFor="maleOP" className="editGenderLabel">
                <input
                  type="radio"
                  id="maleOP"
                  name="selector"
                  tabIndex="2"
                  onClick={() => {
                    setUserEdited((currentData) => ({
                      ...currentData,
                      gender: "male",
                    }));
                  }}
                />
                <span>Male</span>
              </label>

              <label htmlFor="otherOP" className="editGenderLabel">
                <input
                  type="radio"
                  id="otherOP"
                  name="selector"
                  tabIndex="3"
                  onClick={() => {
                    setUserEdited((currentData) => ({
                      ...currentData,
                      gender: "other",
                    }));
                  }}
                />
                <span>Other</span>
              </label>
            </div>

            <div className="infoEditContainer">
              <h3 className="profileLabel">Email:</h3>
              <input
                className="profileDataInput"
                placeholder={userData.email}
                type="text"
                onChange={(event) => {
                  setUserEdited((currentData) => ({
                    ...currentData,
                    email: event.target.value,
                  }));
                }}
              />
            </div>

            <div className="infoEditContainer">
              <h3 className="profileLabel">Username:</h3>
              <input
                className="profileDataInput"
                placeholder={userData.username}
                type="text"
                onChange={(event) => {
                  setUserEdited((currentData) => ({
                    ...currentData,
                    username: event.target.value,
                  }));
                }}
              />
            </div>

            <h3 className="editProfileBottomLabel">
              The password cannot be eddited in this page
            </h3>

            <div className="profileButtonsBottom">
              <button className="updateDataButton" onClick={updateUser}>
                Update
              </button>
            </div>
          </div>
        ) : (
          <div className="profileDataContainer">
            <h1 className="profileHeader">Your Profile</h1>
            <div className="profilePictureContainer">
              <Image
                className="profilePicture"
                cloudName="dayrell19"
                publicId={userData.image}
              />
            </div>
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
                <button
                  className="changePasswordButton"
                  onClick={() => {
                    setUpdatePassword(true);
                  }}
                >
                  Change Password
                </button>
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
        )}
      </div>
      {deleteUser && <DeleteUser setDeleteUser={setDeleteUser} />}
      {updatePassword && (
        <UpdatePassword setUpdatePassword={setUpdatePassword} />
      )}
    </>
  );
};

export default Profile;
