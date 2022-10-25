const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var app = express();
const port = 3000;

app.use(cors());

app.use(morgan("dev"));
app.get("/api", (req, res) => {
  res.send("Hello World / !");
});
app.use(bodyParser.json({ limit: "50mb" }));
app.get("/api/add", (req, res) => {
  res.send("Hello World add!");
});

app.get("/api/add2", (req, res) => {
  res.send("Hello World add2!");
});
app.get("/api/getData", (req, res) => {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
