import React, { useState } from "react";
import "./Slider.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import ImageBabs from "../../Assets/Images/babs.jpg";
// import ImageLeo from "../../Assets/Images/leo.jpg";
// import ImageBella from "../../Assets/Images/bella.jpg";
import ImagePedro from "../../Assets/Images/pedro.jpg";
// import ImageAngela from "../../Assets/Images/angela.jpg";
import ImageOlga from "../../Assets/Images/Olga.jpg";

const images = [
  { name: "Barbara Teixeira", src: ImageBabs },
  { name: "Olga", src: ImageOlga },
  { name: "Pedro", src: ImagePedro },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [likeButton, setLikeButton] = useState(true);

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
          <img src={images[index].src} />
        </div>
        <div className="cardRight">
          <h1 className="personName">{images[index].name}</h1>
          <div className="personAgeContainer">
            <label className="personCardLabel">Age:</label>
            <h2 className="personDetails">20</h2>
          </div>
          <div className="personBioContainer">
            <label className="personBioLabel">Bio:</label>
            <p className="personBio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia.
            </p>
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
          if (index < images.length - 1) setIndex((curr) => curr + 1);
        }}
      >
        <ArrowForwardIcon className="forwardButton" />
      </div>
    </div>
  );
};

export default Slider;
