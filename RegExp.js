// How to perform a case-insensitive search in MongoDB

var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get("/", async function (req, res) {
  const userData = await userModel.create({
    username: "Ayushiro",
    nickname: "bitch",
    discription: "I am a doggy",
    categories: ["run", "eat", "play"],
  });
  res.send(userData);
});

router.get("/find", async function (req, res) {
  // var regex = new RegExp("Ayush", "i");
  var regex = new RegExp("^Ayush$", "i");
  let userData = await userModel.find({ username: regex });
  // let userData = await userModel.find({ username: "Ayush" });
  res.send(userData);
});

module.exports = router;
