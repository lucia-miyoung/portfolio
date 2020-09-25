"use strict";

const main = document.querySelector("#main");
const navbar = document.querySelector("#navbar");
const navItems = document.querySelector(".navbar__items");
const mainDescription = document.querySelector(".main__description");
const mainDetail = document.querySelector(".main__detail");
const navbarRect = navbar.getBoundingClientRect();
const worksDesc = document.querySelector(".works__description");
const projects = document.querySelector(".works__projects");
const projectModal = document.querySelector(".project__modal");
const closeBtn = document.querySelector(".close");
const navToggle = document.querySelector(".navbar__toggle");

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarRect.height) {
    navbar.classList.add("open");
    mainDescription.classList.add("visible");
    mainDetail.style.visibility = "hidden";
  } else {
    navbar.classList.remove("open");
    mainDescription.classList.remove("visible");
    mainDetail.style.visibility = "visible";
  }
});

projects.addEventListener("click", (e) => {
  projectModal.classList.add("open");
  const target = e.target.parentNode.querySelector("img");
  const workImg = target.getAttribute("src");
  projectModal.querySelector("img").setAttribute("src", workImg);
});

closeBtn.addEventListener("click", () => {
  projectModal.classList.remove("open");
});

navToggle.addEventListener("click", (e) => {
  navItems.classList.toggle("open");
});
