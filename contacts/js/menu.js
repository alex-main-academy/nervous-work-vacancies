const menuElement = document.querySelector(".js-menu");
const openMenuButton = document.querySelector(".js-open-menu");
const closeMenuButton = document.querySelector(".js-close-menu");

const handleOpenMenu = () => {
  document.body.style.cssText = `
        overflow: hidden;
    `;
  menuElement.style.cssText = `
        opacity: 1;
        transform: translate(0);
    `;
};

const handleCloseMenu = () => {
  document.body.style.cssText = `
        overflow: auto;
    `;
  menuElement.style.cssText = `
        opacity: 0;
        transform: translate(-100%);
    `;
};

openMenuButton.addEventListener("click", handleOpenMenu);
closeMenuButton.addEventListener("click", handleCloseMenu);
