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