let inputBusqueda = document.getElementById('inputBusqueda');

class Automovil {
    constructor(marca, modelo, precio, imagen, año, km, ciudad){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.año = año;
        this.km = km;
        this.ciudad = ciudad;
    }
};

let img = "imagenes/Ford-titanium.webp";
let img1 = "imagenes/ford-scape.webp";
let img2 = "imagenes/peugeot.webp";
let img3 = "imagenes/peugeot2.webp";

let auto1 = new Automovil("Ford Fiesta", "1.6 Titanium Mecanico", 41900000, img, 2016, "81.000" , "Envigado - Atioquia " );
let auto2 = new Automovil("Ford Escape", "2.0 Titanium", 78000000, img1, 2016, "30.000" , "Engativa - Bogotá - D.C." );
let auto3 = new Automovil("Peugeot", "Partner Cargo", 38500000, img2, 2019, "65.600" , "Suba - Bogotá D.C." );
let auto4 = new Automovil("Peugeot", "206 1.4 Xr", 27500000, img3, 2019, "78.300" , "Fontibón - Bogotá D.C." );

let autos = [auto1, auto2, auto3, auto4];

// alert ( auto1.marca + " " + auto1.modelo);

inputBusqueda.addEventListener("input", function(event){
    let userInput = event.target.value.toLowerCase();
    boxProductos.innerHTML = '';

    for(let auto of autos) {
        if(userInput === '' || auto.marca.toLowerCase().includes(userInput)) {
            // if (event.key == "Enter"){ 
            //caja producto
            let boxProducto = document.createElement("div");
            boxProductos.appendChild(boxProducto);
            boxProducto.setAttribute("class", "box-producto");
            //caja imagen
            let boxImg = document.createElement("div");
            boxProducto.appendChild(boxImg);
            boxImg.setAttribute("class", "box-img");

            let imgAuto = document.createElement("img");
            boxImg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class","img-auto");

            //caja información
            let boxInfo = document.createElement("div");
            boxProducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");

            let marca = document.createElement("label");
            boxInfo.appendChild(marca);
            let txtNodeMarca = document.createTextNode(auto.marca + "  " + auto.modelo);
            marca.appendChild(txtNodeMarca);
            marca.setAttribute("class", "marca");

            ///precio
            let precio = document.createElement("label");
            boxInfo.appendChild(precio);
            //línea para convertir el número a formato de precio con . en los miles
            let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
            let txtNodePrecio = document.createTextNode("$ "+ precioStr);
            precio.appendChild(txtNodePrecio);
            precio.setAttribute("class", "precio");

            //año 
            let año = document.createElement("label");
            boxInfo.appendChild(año);

            let txtNodeAño = document.createTextNode(`${auto.año} • ${auto.km} km • ${auto.ciudad}`)
            año.appendChild(txtNodeAño)
            año.setAttribute("class", "año")

            //let icon
            let boxCorazon = document.createElement("div");
            boxImg.appendChild(boxCorazon);
            let icon = document.createElement("i");
            boxCorazon.appendChild(icon);
            boxCorazon.setAttribute("class", "box-corazon");
            icon.setAttribute("class", "icon-corazon fa-regular fa-heart");

            //let linea
            let lineaDiv = document.createElement("hr");

        }
    }
});

for(let auto of autos) {
        // if (event.key == "Enter"){ 
        //caja producto
        let boxProducto = document.createElement("div");
        boxProductos.appendChild(boxProducto);
        boxProducto.setAttribute("class", "box-producto");
        //caja imagen
        let boxImg = document.createElement("div");
        boxProducto.appendChild(boxImg);
        boxImg.setAttribute("class", "box-img");

        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        imgAuto.setAttribute("src", auto.imagen);
        imgAuto.setAttribute("class","img-auto");

        //caja información
        let boxInfo = document.createElement("div");
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute("class", "box-info");

        let marca = document.createElement("label");
        boxInfo.appendChild(marca);
        let txtNodeMarca = document.createTextNode(auto.marca + "  " + auto.modelo);
        marca.appendChild(txtNodeMarca);
        marca.setAttribute("class", "marca");

        ///precio
        let precio = document.createElement("label");
        boxInfo.appendChild(precio);
        //línea para convertir el número a formato de precio con . en los miles
        let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
        let txtNodePrecio = document.createTextNode("$ "+ precioStr);
        precio.appendChild(txtNodePrecio);
        precio.setAttribute("class", "precio");

        //año 
        let año = document.createElement("label");
        boxInfo.appendChild(año);

        let txtNodeAño = document.createTextNode(`${auto.año} • ${auto.km} km • ${auto.ciudad}`)
        año.appendChild(txtNodeAño)
        año.setAttribute("class", "año")

        //let icon
        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon);
        let icon = document.createElement("i");
        boxCorazon.appendChild(icon);
        boxCorazon.setAttribute("class", "box-corazon");
        icon.setAttribute("class", "icon-corazon fa-regular fa-heart");

        //let linea
        let lineaDiv = document.createElement("hr");

}