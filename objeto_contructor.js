//Objeto para diligenciar de manera masiva.

//Función Constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Instancia objeto con la función auto.
var autoNuevo = new auto("Tesla","Model-3","2020");

//Validar datos asignados.
autoNuevo;