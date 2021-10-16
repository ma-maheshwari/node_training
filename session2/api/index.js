const express = require("express");
const Router = express.Router;
const router = new Router();
const authentication = require("./authentication");
const blogs = require("./blogs");


router.use("/authentication", authentication);
router.use("/blogs",blogs);


module.exports = router;
