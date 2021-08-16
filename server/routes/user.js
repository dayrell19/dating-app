const express = require("express");
const userRoute = express.Router();

const { users } = require("../models");

userRoute.get("/", (req, res) => {
  users
    .findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

userRoute.get("/", (req, res) => {
  users
    .create({
      firstName: "Leo",
      lastName: "Reis",
      username: "dayrell19",
      password: "leozalo",
      gender: "male",
      age: 22,
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });

  res.send("Worked");
});

userRoute.delete("/", (req, res) => {
  users.destroy({ where: { id: 10 } });
  res.send("delete");
});

module.exports = userRoute;
