const express = require("express");
const router = express.Router();

const { users, preferences } = require("../models");

const { validateToken } = require("../auth/jwt");

router.get("/", validateToken, async (req, res) => {
  const id = req.user.id;
  const prefs = await preferences.findOne({ where: { userId: id } });
  const genderPrefs = [];
  if (prefs.gender === "male" || prefs.gender === "both") {
    genderPrefs.push({ gender: "male" });
  }

  if (prefs.gender === "female" || prefs.gender === "both") {
    genderPrefs.push({ gender: "female" });
  }

  const matches = await users.findAll({
    where: {
      [Op.and]: [
        { [Op.or]: genderPrefs },
        { age: { [Op.between]: [prefs.minAge, prefs.maxAge] } },
      ],
    },
  });

  res.json(matches);
});

module.exports = router;
