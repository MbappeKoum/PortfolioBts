document.addEventListener("DOMContentLoaded", () => {


  window.onscroll = function () {
    progressScroll();
    hideOnScroll();

  };

  let barProgress = document.querySelector("#myBar");

  let progressScroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    barProgress.style.width = scrolled + "%";
  };


  let barHide = document.querySelector("#barHide");
  let prevScrollpos = window.pageYOffset;

  let hideOnScroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      barHide.style.top = "0";
    } else {
      barHide.style.top = "-12rem";
    }
    prevScrollpos = currentScrollPos;
  }



});
