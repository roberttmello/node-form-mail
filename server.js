const express = require("express");
const sendEmailRoute = require('./public/routes/sendEmail')
const app = express();

const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use('/',sendEmailRoute) 


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/contactForm.html");
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
