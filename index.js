const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "assets")));


app.use(express.json());

app.use(favicon(path.join(__dirname + "/assets/img/favicon.ico")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/", (req, res) => {


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send(err);
    } else {
      res.send(info);
    }
  });
});

let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log(`Server has started on port ${port}`);
});
