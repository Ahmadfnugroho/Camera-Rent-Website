// Toggle class active
const navbarMenu = document.querySelector(".navbar-menu");

document.querySelector("#menu").addEventListener("click", () => {
  navbarMenu.style.right = navbarMenu.classList.toggle("active")
    ? "0"
    : "-100%";
});
// klik diluar sidebar untuk menutup navbar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!navbarMenu.contains(e.target) && !menu.contains(e.target)) {
    navbarMenu.style.right = "-100%";
  }
});
