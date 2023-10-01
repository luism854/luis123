let numRestar = document.getElementById("numRestar");
let numSumar = document.getElementById("numSumar");
let numView = document.getElementById("numView");
let numView2 = document.getElementById("cantProductos")
let subT = 0

numRestar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux) -1;
    if(auxInt>=0){
        console.log(auxInt)
        document.getElementById("numView").innerText = auxInt.toString()
        document.getElementById("cantProductos").innerText = auxInt.toString()
        if (auxInt == 1) {
            document.getElementById("Product").textContent = " Producto";
        }else{
            document.getElementById("Product").textContent = " Productos";
        }
        subT -= 112.350;
        document.getElementById("subTotal").textContent = subT.toFixed(3);
        if(auxInt == 0){
            document.getElementById("subTotal").textContent ="0"
        }
    }
});
numSumar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux) +1;
    if(auxInt<=10){
        document.getElementById("numView").innerText = auxInt.toString()
        document.getElementById("cantProductos").innerHTML = auxInt.toString()
        if (auxInt == 1) {
            document.getElementById("Product").textContent = " Producto";
        }else{
            document.getElementById("Product").textContent = " Productos";
        }
        subT +=112.350;
        document.getElementById("subTotal").textContent = subT.toFixed(3);
        if(auxInt == 0){
            document.getElementById("subTotal").textContent ="0"
        }
    }
});