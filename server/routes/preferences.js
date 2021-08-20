const express = require("express");
const router = express.Router();

const { users, preferences } = require("../models");

const { validateToken } = require("../auth/jwt");

router.get("/", validateToken, async (req, res) => {
  const user = await users.findOne({ where: { username: req.user.username } });
  const userPreferences = await preferences.findOne({
    where: { userId: user.id },
  });

  res.json(userPreferences);
});

router.put("/update", validateToken, async (req, res) => {
  const updatedPrefences = req.body;
  const id = req.user.id;
  const userPreferences = await preferences.findOne({ where: { userId: id } });

  userPreferences.minAge = updatedPrefences.minAge;
  userPreferences.maxAge = updatedPrefences.maxAge;
  userPreferences.gender = updatedPrefences.gender;

  console.log(userPreferences);

  userPreferences.save();
  res.send("Preferences Updated");
});

module.exports = router;
