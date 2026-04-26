const menu = document.getElementById("menu");
const nav = document.querySelector(".container-nav");
const links = document.querySelectorAll(".header-nav a");

/* menu visible au chargement */
menu.classList.add("show-icon");

function openMenu() {
    nav.classList.add("active");
    menu.classList.remove("show-icon");
}

function closeMenu() {
    nav.classList.remove("active");
}

/* clic icône */
menu.addEventListener("click", openMenu);

/* fermer sur liens */
links.forEach(link => {
    link.addEventListener("click", closeMenu);
});

/* scroll = cacher icône + fermer menu */
window.addEventListener("scroll", function () {
    menu.classList.remove("show-icon");
    closeMenu();
});

/* tap écran = montrer icône */
document.addEventListener("touchstart", function () {
    if (!nav.classList.contains("active")) {
        menu.classList.add("show-icon");
    }
});

/* clic desktop aussi */
document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && e.target !== menu) {
        closeMenu();
        menu.classList.add("show-icon");
    }
});