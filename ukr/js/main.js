const inputFileElement = document.querySelector(".js-input-file");
const formBlockElement = document.querySelector(".js-form-block");
const inputFileBlock = document.createElement("div");
const inputFileName = document.createElement("p");
const inputFileCloseIcon = document.createElement("img");
inputFileName.classList.add("form__file_name");
inputFileBlock.classList.add("form__file_block");
inputFileCloseIcon.classList.add("form__file_icon");
inputFileCloseIcon.setAttribute("src", "img/icons/close.svg");

inputFileBlock.append(inputFileCloseIcon, inputFileName);

const addInputFileName = () => {
  inputFileElement.addEventListener("change", (event) => {
    inputFileName.innerText = event.target.value.split("\\").pop();
    formBlockElement.append(inputFileBlock);

    inputFileCloseIcon.addEventListener("click", () => {
      inputFileElement.value = null;
      inputFileName.innerText = inputFileElement.value;
      inputFileBlock.remove(inputFileCloseIcon);
    });
  });
};

addInputFileName();

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
    headerElement.style.backgroundColor = "rgba(250, 248, 248, 0.01)";
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
