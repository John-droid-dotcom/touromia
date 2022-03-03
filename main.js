"use strict";
const myNav = document.querySelector(".nav-bar");
const logoFirst = document.querySelector(".logo > svg .cls-1");

window.onscroll = function () {
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
    // logoFirst.style.fill = "white";
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    // logoFirst.style.fill = "black";
  }
};
