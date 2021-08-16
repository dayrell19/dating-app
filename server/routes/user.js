const express = require("express");
const router = express.Router();

const { users } = require("../models");

router.post("/", (req, res) => {
  const user = req.body;
  console.log(user);
  users
    .create(user)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      if (error) {
        console.log(error);
        res.send(error);
      }
    });
});

module.exports = router;
