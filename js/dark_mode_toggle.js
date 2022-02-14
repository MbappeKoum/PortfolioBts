document.addEventListener("DOMContentLoaded", () => {
    const iconAdjust = document.querySelector(".fa-adjust");
    const html = document.querySelector("html");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    iconAdjust.addEventListener("click", () => {
        html.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        main.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");
    });
});
