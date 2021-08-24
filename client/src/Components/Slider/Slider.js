import React, { useState, useEffect } from "react";
import "./Slider.css";
import Axios from "axios";
import { Image } from "cloudinary-react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState(null);
  const [likeButton, setLikeButton] = useState(true);

  const getData = async () => {
    await Axios.get("http://localhost:3002/matches/", {
      headers: { accessToken: localStorage.getItem("access-token") },
    }).then((response) => {
      setMatches(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  if (matches) {
    return (
      <div className="mainSliderContainer">
        <div
          className="backButtonContainer"
          onClick={() => {
            if (index > 0) setIndex((curr) => curr - 1);
          }}
        >
          <ArrowBackIcon className="backButton" />
        </div>
        <div className="individualCard">
          <div className="cardLeft">
            <Image
              className="personIndivPicture"
              cloudName="dayrell19"
              publicId={matches[index].image}
            />
          </div>
          <div className="cardRight">
            <h1 className="personName">
              {matches[index].firstName} {matches[index].lastName}
            </h1>
            <div className="personAgeContainer">
              <label className="personCardLabel">Age:</label>
              <h2 className="personDetails">{matches[index].age}</h2>
            </div>
            <div className="personBioContainer">
              <label className="personBioLabel">Bio:</label>
              <p className="personBio">{matches[index].bio}</p>
            </div>
            <div className="matchButtonContainer">
              <div
                className={likeButton ? "heartButton" : "heartButtonAct"}
                onClick={() => {
                  setLikeButton(!likeButton);
                }}
              >
                <div className="buttonContent">
                  {likeButton ? (
                    <FavoriteBorderIcon className="heart" />
                  ) : (
                    <FavoriteIcon className="heartAct" />
                  )}
                  <span className={likeButton ? "like" : "likeAct"}>Like</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="forwardButtonContainer"
          onClick={() => {
            if (index < matches.length - 1) setIndex((curr) => curr + 1);
          }}
        >
          <ArrowForwardIcon className="forwardButton" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Slider;
