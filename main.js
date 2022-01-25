"use strict";
var parent = document.querySelector(".btn");
parent.addEventListener("mouseover", function() {
    parent.children[0].style.backgroundColor = "white";
});
parent.addEventListener("mouseout", function() {
    parent.children[0].style.filter =
        "invert(20%) sepia(29%) saturate(7498%) hue-rotate(340deg) brightness(88%) contrast(97%)";
});