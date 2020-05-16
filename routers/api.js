const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogPosts");

router.get("/", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      console.log("DATA" + data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error" + error);
    });
});

router.get("/name", (req, res) => [
  res.json({
    username: "union",
    age: 5,
  }),
]);

router.post("/save", (req, res) => {
  console.log("BODY: ", req.body);
  const data = req.body;
  const newBlogPost = new BlogPost(data);
  newBlogPost.save((error) => {
    if (error) {
      res.status(500).json({
        error: "Internal server Error!",
      });
      return;
    }
    return res.json({
      msg: "Data saved successfully to DB",
    });
  });
});

module.exports = router;
