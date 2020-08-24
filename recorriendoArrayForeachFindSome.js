//Recorriendo Arrays con .find(), .forEach() y .some()

//Inicializa el método con los objetos. 
var articulos = [
  { nombre: "Bici", costo: 2000},
  { nombre: "Tv", costo: 3000},
  { nombre: "Libro", costo: 50},
  { nombre: "Celular", costo: 320},
  { nombre: "Laptop", costo: 3000},
  { nombre: "Teclado", costo: 500},
  { nombre: "Audifonos", costo: 1700}
];

//FIND
var encuentreArticulo = articulos.find(function(articulo) {
  return articulo.nombre === "Laptop"
});

//Muestra resultado solicitado
encuentreArticulo;

//FOREACH
articulos.forEach(function(articulo) {
  console.log(articulo.nombre);
});

//SOME
var articulosBaratos = articulos.some(function(articulo) {
  return articulo.costo <= 700;
});

//Muestra de lo solicitado. => Retornando verdadero o falso.
articulosBaratos;