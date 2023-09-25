let numRestar = document.getElementById("numRestar");
let numSumar = document.getElementById("numSumar");
let numView = document.getElementById("numView");

numRestar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux) - 1;
    if(aux>0){
        console.log(auxInt)
        document.getElementById("numView").innerText = auxInt.toString()
    }
});
numSumar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if(auxInt<10){
        auxInt++;
        document.getElementById("numView").innerText = auxInt.toString()
    }
});