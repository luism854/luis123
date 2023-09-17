//scroll para el cel. para que no se esconda la barra
var barra = document.querySelector('.barra-cel');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    
    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        if (scrollTop >= 100) {
            barra.style.transform = 'translateY(-100%)';
        }
    } else {
        // Scroll hacia arriba
        barra.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

//sirve para agregar un box-shadow en la pagina en pc, al bajar aparece
window.addEventListener('scroll', function() {
    const fixedBox = document.getElementById('fixedBox');
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        fixedBox.style.boxShadow = '0px -10px 15px rgba(0, 0, 0, 0.5)';
    } else {
        fixedBox.style.boxShadow = 'none';
    }
});

//redireccionador a la pagina de la imagen
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del div con la imagen por su id
    var imagenDiv = document.getElementById("imagenDiv");
    // Agrega un evento de clic al div para redirigir la página
    imagenDiv.addEventListener("click", function () {
        // Redirige a la URL deseada
        window.location.href = "pinterest img/pinterest1.html";
    });
});
