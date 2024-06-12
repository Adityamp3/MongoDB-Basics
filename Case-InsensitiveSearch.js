var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get("/", (req, res) => {
  res.send("index");
});

//! How to perform a case-insensitive search in MongoDB?

router.get("/find", async function (req, res) {
   var regex = new RegExp("^Ayush$", "i");
   let userData = await userModel.find({ username: regex });
   res.send(userData);
});

module.exports = router;
