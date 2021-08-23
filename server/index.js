const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3002;

app.use(cors());
app.use(express.json());

const db = require("./models");

const { users, preferences } = require("./models");

const userRoute = require("./routes/user");
const preferencesRoute = require("./routes/preferences");
const matchesRoute = require("./routes/matches");

app.use("/user", userRoute);
app.use("/preferences", preferencesRoute);
app.use("/matches", matchesRoute);

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log("Server running with no problems!");
  });
});
