const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");

const { users } = require("./models");

app.get("/select", (req, res) => {
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

app.get("/insert", (req, res) => {
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

app.delete("/delete", (req, res) => {
  users.destroy({ where: { id: 10 } });
  res.send("delete");
});

app.use(cors());
app.use(express.json());

db.sequelize.sync().then((req) => {
  app.listen(3002, () => {
    console.log("Server running on port 3002");
  });
});
