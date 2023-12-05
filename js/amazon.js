let calificacion1 = document.getElementById("calificacion1")
let calificacion2 = document.getElementById("calificacion2")
let calificacion3 = document.getElementById("calificacion3")
let calificacion4 = document.getElementById("calificacion4")
let calificacion5 = document.getElementById("calificacion5")
let btngraficar = document.getElementById("btngraficar")

btngraficar.addEventListener("click", function(){
    let sumaCalificacion = (Number(calificacion1.value)+Number(calificacion2.value)+Number(calificacion3.value)+Number(calificacion4.value)+Number(calificacion5.value))

    let promedio1Estrella = (Number(calificacion1.value)*100)/sumaCalificacion;
    let promedio2Estrella = (Number(calificacion2.value)*100)/sumaCalificacion;
    let promedio3Estrella = (Number(calificacion3.value)*100)/sumaCalificacion;
    let promedio4Estrella = (Number(calificacion4.value)*100)/sumaCalificacion;
    let promedio5Estrella = (Number(calificacion5.value)*100)/sumaCalificacion;

    


    alert(promedio1Estrella);
})