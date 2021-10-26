const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/contactForm.html");
});

app.post("/", (request, response) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "crobertdmelo@gmail.com",
      pass: "roberttmelloGM2030@",
    },
  });

  const mailOptions = {
    from: request.body.email,
    to: "roberttmello@protonmail.com",
    subject: `Message from ${request.body.email}: ${request.body.subject}`,
    text: request.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      response.send("Error!");
    } else {
      console.log("Email sent: " + info.response);
      response.send("Success!");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});