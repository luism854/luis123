// cuando trabajamos con objetos, debo tener en cuenta que un objeto se construye teniendo en cuenta una clase
let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

inputBusqueda.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        let mainContent = document.getElementById("mainContent");
        let boxProducto = document.createElement("div");
        mainContent.appendChild(boxProducto);
        boxProducto.setAttribute("class", "box-producto");

        let boxImg = document.createElement("div");
        boxProducto.appendChild(boxImg);
        boxImg.setAttribute("class", "box-img");
        let ImgAuto = document.createElement("img");
        boxImg.appendChild(ImgAuto);
        ImgAuto.setAttribute('src','imagenes/paisaje-770x900.jpg');
        ImgAuto.setAttribute('class','img-auto')

        let boxInfo = document.createElement('div');
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute('class','box-info');
    }

});

