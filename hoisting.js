//hoisting
console.log(miNombre);
var miNombre="Diego";
//Hoisting, declarado siempre al inicio del código.
var miNombre=undefinied
console.log(miNombre + " soy ese hoisting.");
miNombre="Diego";

//Hoisting con funciones.
saludo()

function saludo(){
    console.log("Hola " + miNombre);
}

//Las variables y las funciones se procesan antes de ejecutar el código, las funciones se declaran
//antes de las varibales.

/*
URL: https://developer.mozilla.org/es/docs/Glossary/Hoisting
*/

