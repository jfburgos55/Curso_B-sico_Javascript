/*Funcionaes */

//Declarativas
function miFuncion() {
  return 3;
}

miFuncion();

//Expresión - Conocidad también como anonimas.
var miFuncion = function (a, b) {
  return a + b;
};

miFuncion();

//Ejemplo
function saludarEstudiantes(estudiante) {
  console.log(estudiante);
}

saludarEstudiantes("Carlos");

//Ejemplo2
function saludarEstudiante(estudiante) {
  console.log(`Hola ${estudiante}`);
}
//Mostrar el resultado.
saludarEstudiante("Alberto");

function suma(a, b){
    var resultado a + b;
    return resultado;
}

suma(1, 4);