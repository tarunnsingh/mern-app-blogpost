const express = require("express");
const router = express.Router();
const BlogPost = require('../models/blogPosts')

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

module.exports = router;
