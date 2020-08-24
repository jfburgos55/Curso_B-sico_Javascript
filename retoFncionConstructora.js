//Inicializa la función constructor 
function auto(MARCA, MODELO, ANNIO) {
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

//Inicializa arreglo autos
var autos = [];

//Recorrido del arreglo para llenar los datos.
for (var i = 0; i < 30; i++) {
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
}

//Imprimir los resultados de los 30 autos
for (var i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

for (impauto of autos) {
    autos(autos);
}