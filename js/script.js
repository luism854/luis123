let menuHamburguer = document.getElementById("menuHamburguer");
let mainMenu = document.getElementById("mainMenu");

menuHamburguer.addEventListener("click", function() {
    // alert("Hola, soy el boton hamburguesa");
    mainMenu.classList.add("menu-mvisible");
    mainMenu.classList.remove("menu-hidden");
});