const blogs = [];

const getBlogs = (req, res) => {
  console.log(blogs.length);
  if (blogs.length) {
    res.send(blogs);
  } else {
    res.send("No blogs");
  }
};

const postBlog = (req, res) => {
  blogs.push(req.body);
  res.send(blogs);
};

module.exports = { getBlogs, postBlog };
