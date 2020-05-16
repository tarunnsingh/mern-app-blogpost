const mongoose = require('mongoose')

//SCHEMA
const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
      type: String,
      default: Date.now(),
    },
  });
  

//MODEL
const BlogPost = mongoose.model("BlogPost", blogPostSchema);
  

module.exports = BlogPost