const express = require("express");
const path = require("path");
var favicon = require("serve-favicon");
require("dotenv").config();

const app = express();
app.use(express.static(path.join(__dirname, "assets")));

app.use(favicon(path.join(__dirname + "/assets/img/favicon.ico")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server has started");
});
