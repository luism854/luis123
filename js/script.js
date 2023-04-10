let menuHamburguer = document.getElementById("menuHamburguer");
let mainMenu = document.getElementById("mainMenu");

menuHamburguer.addEventListener("click", function() {
  if (mainMenu.classList.contains("menu-visible")) {
    mainMenu.classList.remove("menu-visible");
    mainMenu.classList.add("menu-hidden");
  } else {
    mainMenu.classList.add("menu-visible");
    mainMenu.classList.remove("menu-hidden");
  }
});