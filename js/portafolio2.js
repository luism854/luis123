const scrollLeftButton = document.querySelector(".scroll-left");
const scrollRightButton = document.querySelector(".scroll-right");
const projets = document.querySelector(".projets");

scrollLeftButton.addEventListener("click", () => {
  projets.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  projets.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});