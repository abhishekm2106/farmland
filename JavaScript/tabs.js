// var tabHeader = document.querySelector(".all-info__nav")
// var tabBody = document.querySelector(".all-info__content")

// var tabPanes = document.querySelectorAll(".all-info__nav__item")

// console.log(tabPanes);

// for (var i = 0; i < tabPanes.length; i++) {
//     tabPanes[i].addEventListener("click", function () {
//         tabHeader.querySelector(".active").classList.remove("active");
//         tabPanes[i].classList.add("active");

//         tabBody.querySelector(".active").classList.remove("active");
//         tabBody.querySelectorAll("div")[i].classList.add("active");

//     });
// }




var tabHeader = document.querySelector(".all-info__nav");
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
var tabBody = document.querySelector(".all-info__content");

var tabsPane = document.querySelectorAll(".all-info__nav__item");


for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.querySelector(".active").classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 6) * ${i})`;
    });
}