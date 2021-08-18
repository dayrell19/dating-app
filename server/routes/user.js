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

router.get("/profile", validateToken, async (req, res) => {
  const user = await users.findOne({ where: { username: req.user.username } });

  res.json(user);
});

router.delete("/delete", validateToken, async (req, res) => {
  const id = req.user.id;
  await users.destroy({ where: { id } });

  res.send("User deleted successfuly!");
});

router.put("/update", validateToken, async (req, res) => {
  const updatedUser = req.body;
  console.log(updatedUser);
  const id = req.user.id;
  const user = await users.findOne({ where: { id } });

  user.firstName = updatedUser.firstName;
  user.lastName = updatedUser.lastName;
  user.age = updatedUser.age;
  user.gender = updatedUser.gender;
  user.email = updatedUser.email;
  user.username = updatedUser.username;

  user.save();
  const newToken = createTokens(user);
  res.json({ token: newToken });
});

module.exports = router;
