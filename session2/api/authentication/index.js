const express = require("express");
const Router = express.Router;
const router = new Router();
const API_URLS = require("./constants");
const { loginCtrl, signUPCtrl } = require("./controller");

router.post(API_URLS.login, loginCtrl, (req, res) => {
  const token = "ojsnwixnwchb";
  res.send({ login: "success", token });
});

router.post(API_URLS.signUP, signUPCtrl, (req, res) => {
  const token = "ojsnwixnwchb";
  res.send({ signUp: "success", token });
});

module.exports = router;
