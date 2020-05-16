const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morganMiddleware = require('./morganColor');

const PORT = process.env.PORT || 8080;
const app = express();
app.use(morganMiddleware);

app.get("/api", (req, res) => [
  res.json({
    username: "tarun",
    age: 5,
  }),
]);

app.get("/api/name", (req, res) => [
  res.json({
    username: "union",
    age: 5,
  }),
]);

app.listen(PORT, console.log(`Server started on port ${PORT}`));
