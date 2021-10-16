const express = require("express");
const Router = express.Router;
const router = new Router();
const API_URLS = require("./constants");
const { getBlogs, postBlog } = require("./controller");

router.get(API_URLS.getBlogs, getBlogs);

router.post(API_URLS.postBlog, postBlog);

module.exports = router;
