// How do I find documents where an array field contains all of a set of values?

var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get("/", async function (req, res) {
  const userData = await userModel.create({
    username: "Ayushi",
    nickname: "bitch",
    discription: "I am a doggy",
    categories: ["workout", "firness", "gym"],
  });
  res.send(userData);
});

router.get("/find", async function (req, res) {
   let userData = await userModel.find({
    categories: { $all: ["workout", "fitness"] },
  });
  res.send(userData);
});

module.exports = router;
