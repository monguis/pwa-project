const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

// app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client"));

// // mongoose.connect("mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

app.get("/", (req, res) => {
  console.log("yass")
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});