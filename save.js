function storeData() {
  const contactFormData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("msg").value,
  };

  localStorage.setItem("contactInfo", JSON.stringify(contactFormData));
}

document.getElementById("name").onchange = function saveLocalByName() {
  return storeData();
};

document.getElementById("email").onchange = function saveLocalByEmail() {
  return storeData();
};

document.getElementById("msg").onchange = function saveLocalByMessage() {
  return storeData();
};

const localObject = localStorage.getItem("contactInfo");
