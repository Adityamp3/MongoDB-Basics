var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get("/", (req, res) => {
  res.send("index");
});

router.get("/create", async function (req, res) {
  const userData = await userModel.create({
    username: "Ayushiro",
    nickname: "bitch",
    discription: "I am a doggy",
    categories: ["run", "eat", "play"],
  });
  res.send(userData);
});

router.get("/find", async function (req, res) {
  var date1 = new Date("2024-06-06");
  var date2 = new Date("2024-06-08");
  let userData = await userModel.find({
    datecreated: { $gte: date1, $lte: date2 },
  });
  res.send(userData);
});

module.exports = router;
