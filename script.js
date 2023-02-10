const backgroundEl = document.querySelector(".bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

const updateImage = function () {
  backgroundEl.style.opacity = 1 - window.pageYOffset / 900;
  backgroundEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
};
