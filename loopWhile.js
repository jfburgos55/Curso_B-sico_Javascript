//Loops: While
var estudiantes = ["Maria", "Sergio", "Carlos", "Laura", "Ximena"];

function saludarEstudiantes (estudiante) {
  console.log(`Hola, ${estudiante}`);
}

//Ciclo while mientras estudiantes sea > 0
while(estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
