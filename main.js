const dropMenu = document.querySelector(".drop-menu");
const menuBurger = document.querySelector(".menu-burger");
const row = document.querySelectorAll(".row");
menuBurger.addEventListener("click", (e) => {
    dropMenu.classList.toggle("hide");
    row.forEach((el) => {
        el.classList.toggle("hide");
    });
    if (!dropMenu.closest(".hide")) {
        menuBurger.style = "position: fixed; right:20px";
    } else {
        menuBurger.style = "position: relative; right:none";
    }
});
