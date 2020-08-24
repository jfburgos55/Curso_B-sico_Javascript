//Scope JS => Locales y Globales.
var miNombre = "Mr.";

function nombre() {
  var miApellido = "Robot.";
  console.log(miNombre + " " + miApellido);
}
//Llamado de la función nombre.
//Scope Global
nombre();

//Llamado de la varible global nombre
miNombre();

//Llamado de la variable local apellido => El mismo retorna error => Is not definied
//Scope Local
miApellido();
