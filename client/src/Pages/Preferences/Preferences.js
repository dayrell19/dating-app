import React, { useEffect, useState } from "react";
import "./Preferences.css";
import Axios from "axios";

import Navbar from "../../Components/Navbar/Navbar";
import AgeSlider from "../../Components/AgeSlider/AgeSlider";

const USER_PREFERENCES_DEFAULT = {
  id: 0,
  minAge: 0,
  maxAge: 0,
  gender: "",
  userId: 0,
};

const Preferences = () => {
  const [preferences, setPreferences] = useState(USER_PREFERENCES_DEFAULT);

  useEffect(() => {
    Axios.get("http://localhost:3002/preferences/", {
      headers: { accessToken: localStorage.getItem("access-token") },
    }).then((response) => {
      setPreferences(response.data);
      console.log(response.data);
      console.log(preferences);
    });
  }, []);

  const updatePreferences = () => {
    console.log(preferences);
  };

  return (
    <>
      <Navbar />
      {preferences === USER_PREFERENCES_DEFAULT ? (
        <h1> Loading...</h1>
      ) : (
        <div className="preferencesContainer">
          <div className="infoPreferencesContainer">
            <div className="preferencesTop">
              <h1 className="preferencesHeader">Your Preferences</h1>
              <h3 className="preferencesDescription">
                Here you can set the filters for your feed
              </h3>
            </div>

            <div className="preferencesBottom">
              <div className="editGenderPreference">
                <h3 className="preferenceLabel">Gender:</h3>
                <label for="femaleOP" className="editGenderLabel">
                  <input
                    type="radio"
                    id="femaleOP"
                    name="selector"
                    tabIndex="1"
                    onClick={() => {
                      setPreferences((currentData) => ({
                        ...currentData,
                        gender: "female",
                      }));
                    }}
                  />
                  <span>Female</span>
                </label>

                <label for="maleOP" className="editGenderLabel">
                  <input
                    type="radio"
                    id="maleOP"
                    name="selector"
                    tabIndex="2"
                    onClick={() => {
                      setPreferences((currentData) => ({
                        ...currentData,
                        gender: "male",
                      }));
                    }}
                  />
                  <span>Male</span>
                </label>

                <label for="bothOP" className="editGenderLabel">
                  <input
                    type="radio"
                    id="otherOP"
                    name="selector"
                    tabIndex="3"
                    onClick={() => {
                      setPreferences((currentData) => ({
                        ...currentData,
                        gender: "both",
                      }));
                    }}
                  />
                  <span>Both</span>
                </label>
              </div>

              <div className="ageContainer">
                <label className="preferenceSliderLabel">Age range:</label>
                <div className="sliderContainer">
                  <AgeSlider
                    min={preferences.minAge}
                    max={preferences.maxAge}
                  />
                </div>
              </div>
              <div className="buttonPreferencesContainer">
                <button
                  className="updatePreferencesButton"
                  onClick={updatePreferences}
                >
                  Update Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preferences;
