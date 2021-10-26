const contactForm = document.querySelector(".contact-form");

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = {
    fullName: fullName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xHttpRequest = new XMLHttpRequest();
  xHttpRequest.open("POST", "/");
  xHttpRequest.setRequestHeader("content-type", "application/json");

  // xHttpRequest.onload = function() {
  //   if (xHttpRequest.responseText == "success") {
  //     alert("Email sent successfully!");
  //     fullName.value = "";
  //     email.value = "";
  //     subject.value = "";
  //     message.value = "";
  //   } else {
  //     alert("Ops, something went wrong!");
  //   }
  // };

  xHttpRequest.send(JSON.stringify(formData));
});
