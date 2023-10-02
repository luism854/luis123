// cuando trabajamos con objetos, debo tener en cuenta que un objeto se construye teniendo en cuenta una clase
let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}
let auto1 = new Automovil("Toyota", "TXl");
alert(auto1.marca+" "+auto1.modelo);

inputBusqueda.addEventListener("keydown", function(){
    let mainContent = document.getElementById("mainContent");
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");
});
