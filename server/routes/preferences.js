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

module.exports = router;
