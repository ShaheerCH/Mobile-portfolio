const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.patternMismatch) {
    email.setCustomValidity("Kindly Fill in lowercase");
    email.reportValidity();
  } else if (email.validity.valueMissing) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Kindly enter proper email");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
