let btngraficar = document.getElementById("btngraficar")

btngraficar.addEventListener("click", function(){

    let calificacion1 = parseInt(document.getElementById("calificacion1").value) || 0;
    let calificacion2 = parseInt(document.getElementById("calificacion2").value) || 0;
    let calificacion3 = parseInt(document.getElementById("calificacion3").value) || 0;
    let calificacion4 = parseInt(document.getElementById("calificacion4").value) || 0;
    let calificacion5 = parseInt(document.getElementById("calificacion5").value) || 0;

    let total = calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5;

    let promedio1Estrella = (calificacion1 / total) * 100;
    let promedio2Estrella = (calificacion2 / total) * 100;
    let promedio3Estrella = (calificacion3 / total) * 100;
    let promedio4Estrella = (calificacion4 / total) * 100;
    let promedio5Estrella = (calificacion5 / total) * 100;

    mostrarPorcentaje("porcentaje1", "barra1", promedio1Estrella);
    mostrarPorcentaje("porcentaje2", "barra2", promedio2Estrella);
    mostrarPorcentaje("porcentaje3", "barra3", promedio3Estrella);
    mostrarPorcentaje("porcentaje4", "barra4", promedio4Estrella);
    mostrarPorcentaje("porcentaje5", "barra5", promedio5Estrella);

});

function mostrarPorcentaje(idPorcentaje, idBarra, porcentaje) {
    let elementoPorcentaje = document.getElementById(idPorcentaje);
    elementoPorcentaje.innerHTML = porcentaje.toFixed(1) + "%";

    let barra = document.getElementById(idBarra);

    barra.style.width = porcentaje + "%";
}