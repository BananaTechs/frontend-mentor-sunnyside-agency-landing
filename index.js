let mobileMenu = document.getElementById("header-menu");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", event => {
    hamburger.classList.toggle("hamburger-on-click");
    mobileMenu.classList.toggle("show");
});