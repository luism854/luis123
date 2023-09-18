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

//redireccionador a la pagina de la imagen 2
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del div con la imagen por su id
    var imagenDiv2 = document.getElementById("imagenDiv2");
    // Agrega un evento de clic al div para redirigir la página
    imagenDiv2.addEventListener("click", function () {
        // Redirige a la URL deseada
        window.location.href = "pinterest img/pinterest2.html";
    });
});

//redireccionador a la pagina de la imagen 2
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del div con la imagen por su id
    var imagenDiv3 = document.getElementById("imagenDiv3");
    // Agrega un evento de clic al div para redirigir la página
    imagenDiv3.addEventListener("click", function () {
        // Redirige a la URL deseada
        window.location.href = "pinterest img/pinterest3.html";
    });
});

//redireccionador a la pagina de la imagen 2
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del div con la imagen por su id
    var imagenDiv4 = document.getElementById("imagenDiv4");
    // Agrega un evento de clic al div para redirigir la página
    imagenDiv4.addEventListener("click", function () {
        // Redirige a la URL deseada
        window.location.href = "pinterest img/pinterest4.html";
    });
});

//redireccionador a la pagina de la imagen 2
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del div con la imagen por su id
    var imagenDiv1r = document.getElementById("imagenDiv1-1");
    // Agrega un evento de clic al div para redirigir la página
    imagenDiv1r.addEventListener("click", function () {
        // Redirige a la URL deseada
        window.location.href = "pinterest img/pinterest1.html";
    });
});

//redireccionador a la pagina de la imagen 2
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del div con la imagen por su id
    var imagenDiv2r = document.getElementById("imagenDiv2-1");
    // Agrega un evento de clic al div para redirigir la página
    imagenDiv2r.addEventListener("click", function () {
        // Redirige a la URL deseada
        window.location.href = "pinterest img/pinterest2.html";
    });
});

//redireccionador a la pagina de la imagen 2
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del div con la imagen por su id
    var imagenDiv3r = document.getElementById("imagenDiv3-1");
    // Agrega un evento de clic al div para redirigir la página
    imagenDiv3r.addEventListener("click", function () {
        // Redirige a la URL deseada
        window.location.href = "pinterest img/pinterest3.html";
    });
});

//redireccionador a la pagina de la imagen 2
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del div con la imagen por su id
    var imagenDiv4r = document.getElementById("imagenDiv4-1");
    // Agrega un evento de clic al div para redirigir la página
    imagenDiv4r.addEventListener("click", function () {
        // Redirige a la URL deseada
        window.location.href = "pinterest img/pinterest4.html";
    });
});