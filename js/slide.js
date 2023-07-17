let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");
let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");

leftArrow.addEventListener("click",function(){
    imagen2.classList.add("img-hidden2");
    imagen2.classList.remove("img-visible2");
    imagen1.classList.add("img-visible");
    imagen1.classList.remove("img-hidden");
});

rightArrow.addEventListener("click",function(){
    imagen1.classList.remove("img-visible");
    imagen1.classList.add("img-hidden");
    imagen2.classList.remove("img-hidden2");
    imagen2.classList.add("img-visible2");
});