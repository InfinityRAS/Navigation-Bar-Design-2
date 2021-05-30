const navUl = document.querySelector(".nav-ul");
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("h-class-resp")
    navUl.classList.toggle("show-ul");
});


window.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
});
window.addEventListener("click", function () {
    document.getElementById("context-menu").classList.remove("active");
});