const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector("li.Toggle");
const section = document.querySelectorAll(".menu-link");

function show() {
  menu.style.top = "0";
}

function hide() {
  menu.style.top = "-100%";
}
