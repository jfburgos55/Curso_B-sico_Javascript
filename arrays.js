//Arrreglos en JS => Arrays

//Arreglo de frutas.
var frutas = ["Manzana", "Pera", "Mandarina", "Banano", "Fresa"];

//Consultar poscición de un elemento en el arreglo.
var poscicion = frutas.indexOf("Mandarina");
poscicion;

//Agregar frutas al arreglo al final 
var masFrutas = frutas.push("Uvas");

//Eliminar frutas del arreglo del final
var eliminar = frutas.pop("Uvas");

//Agregar frutas al inicio
var agregarInicio = frutas.unshift("Mango");

//Eliminar fruta del arreglo al final.
var eliminarInicio = frutas.shift("Mango");

//Ver por consola los datos del array
console.log(frutas);

//Validar cuantos elementos tiene el array.
console.log(frutas.length);

//Imprimir solo un elemento del array.
console.log(frutas[3]); //=> Banano