const express = require("express");
const router = express.Router();

const { users } = require("../models");

const bcrypt = require("bcrypt");
const { createTokens, validateToken } = require("../auth/jwt");

router.post("/", (req, res) => {
  const user = req.body;
  bcrypt.hash(user.password, 10).then((hash) => {
    users
      .create({ ...user, password: hash })
      .then(() => {
        res.json(data);
      })
      .catch((error) => {
        if (error) {
          res.send(error);
        }
      });
  });
});

router.post("/login", async (req, res) => {
  const login = req.body;

  const user = await users.findOne({ where: { username: login.username } });

  if (!user) res.status(400).json({ error: "User doesn't exist" });

  const dbPassword = user.password;
  bcrypt.compare(login.password, dbPassword).then((match) => {
    if (!match) {
      res
        .status(400)
        .json({ error: "Wrong username and password combination!" });
    } else {
      const accessToken = createTokens(user);

      res.json({ token: accessToken });
    }
  });
});

router.get("/profile", validateToken, (req, res) => {
  res.json("EAE");
});

module.exports = router;
