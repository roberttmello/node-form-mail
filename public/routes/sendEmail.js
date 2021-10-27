const router = require('express').Router()
const nodemailer = require("nodemailer");
require("dotenv").config();
 

router.post("/send", async(request, response) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.EMAIL_PASSWORD
    },
  });

  const mailOptions =  {
    from: request.body.email,
    to:"roberttmello@protonmail.com",
    subject: `Message from ${request.body.email}: ${request.body.subject}`,
    text: request.body.message,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      response.send("Error!");
    } else {
      console.log("Email sent: " + info.response);
      response.send("Success!");
    }
  });
});



module.exports = router;