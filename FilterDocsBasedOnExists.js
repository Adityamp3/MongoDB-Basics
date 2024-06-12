var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get("/", (req, res) => {
  res.send("index");
});

//! How can I filter documents based on the existence of a field in Mongoose?

router.get("/find", async (req, res) => {
  let userData = await userModel.find({ categories: { $exists: true } });
  res.send(userData);
});

module.exports = router;
