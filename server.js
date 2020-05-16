const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morganMiddleware = require("./morganColor");
const { MONGODB_URI } = require("./credentials");
const routes = require("./routers/api");

const PORT = process.env.PORT || 8080;
const app = express();
app.use(morganMiddleware);
app.use('/api', routes)

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose Connected!");
});


app.listen(PORT, console.log(`Server started on port ${PORT}`));
