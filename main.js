"use strict";
var parent = document.querySelector(".btn");
parent.addEventListener("mouseover", function() {
    document.selectElelementByClass("icon-img").style.filter =
        "invert(100%) sepia(0%) saturate(2%) hue-rotate(212deg) brightness(104%) contrast(101%);";
});
parent.addEventListener("mouseout", function() {
    parent.children[0].style.filter =
        "invert(20%) sepia(29%) saturate(7498%) hue-rotate(340deg) brightness(88%) contrast(97%)";
});