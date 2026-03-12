const menu = document.querySelector(".stickyBox");
const toggle = document.querySelector(".menuToggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
});