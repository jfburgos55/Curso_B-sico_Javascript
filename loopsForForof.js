//Loops: For y For...of

var estudiantes = ["Maria", "Sergio", "Carlos", "Laura", "Ximena"];

function saludarEstudiantes (estudiante) {
  console.log(`Hola, ${estudiante}`);
}

//Ciclo for
for(var i = 0; i < estudiantes.length; i++){
  //console.log(estudiantes[i]);
  saludarEstudiantes(estudiantes[i]);
}

//Ciclo for of
for (estudiante of estudiantes){
  saludarEstudiantes(estudiante);
}