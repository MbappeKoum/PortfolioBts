document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#portfolio ul.projects > li");
  const nbSlide = items.length;
  const iconNext = document.querySelector("#portfolio ul.carousel li i.fa-chevron-circle-right");
  const iconPrevious = document.querySelector("#portfolio ul.carousel li i.fa-chevron-circle-left");
  const dotsList = document.querySelector("#portfolio ul.carousel ul.dots");

  let count = 0;

  let dot = () => {
    dotsList.innerHTML = "";
    for (let i = 0; i < nbSlide; i++) {
      i == count
        ? (dotsList.innerHTML += `<li class="active"></li>`)
        : (dotsList.innerHTML += `<li></li>`);
    }
  };

  dot();

  let nextSlide = () => {
    items[count].classList.remove("active");
    count < nbSlide - 1 ? count++ : (count = 0);
    items[count].classList.add("active");
    dot();
  };

  let previousSlide = () => {
    items[count].classList.remove("active");
    count > 0 ? count-- : (count = nbSlide - 1);
    items[count].classList.add("active");
    dot();
  };

  iconNext.addEventListener("click", nextSlide);
  iconPrevious.addEventListener("click", previousSlide);
});
