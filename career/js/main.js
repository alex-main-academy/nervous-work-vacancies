// scroll top
const scrollButtonElement = document.querySelector(".js-scroll-top");
scrollButtonElement.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// header
const headerElement = document.querySelector(".header");

// show button
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 18) {
    headerElement.style.backgroundColor = "#1A1A1A";
    headerElement.style.paddingTop = "15.5px";
  } else {
    headerElement.style.backgroundColor = "transparent";
    headerElement.style.paddingTop = "33.5px";
  }

  if (scrollPosition >= 700) {
    scrollButtonElement.style.opacity = "1";
  } else {
    scrollButtonElement.style.opacity = "0";
  }
});
