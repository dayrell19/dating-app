const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3002;

const db = require("./models");

const { users } = require("./models");

const userRoute = require("./routes/user");

app.use("/user", userRoute);

app.use(cors());
app.use(express.json());

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log("Server running with no problems!");
  });
});
