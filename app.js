const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.get("/works", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/works.html"));
});

app.listen(3000, () => console.log("Server running"));
