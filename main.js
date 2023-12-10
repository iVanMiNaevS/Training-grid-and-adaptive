const dropMenu = document.querySelector(".drop-menu");
const menuBurger = document.querySelector(".menu-burger");
menuBurger.addEventListener("click", (e) => {
    dropMenu.classList.toggle("hide");
});
