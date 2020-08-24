//Juego de piedra papel tijera con switch
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

var valor = 0;

switch ( valor ) {
  case 1:
    console.log("El valor seleccionado fue " + piedra);
    break;
  case 2:
    console.log("El valor seleccionado fue " + papel);
    break;
  case 3:
    console.log("El valor seleccionado fue " + tijera);
    break;
  default:
    console.log("El valor seleccionado no esta en la lista.");
    break;
}