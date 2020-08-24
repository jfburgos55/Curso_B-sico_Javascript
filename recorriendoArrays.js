//Recorriendo Arrays de objetos con métodos.

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

//Método filter.
var articulosFilter = articulos.filter(function(articulo) {
  return articulo.costo <= 500;
});
//Muestra del resultado.
articulosFiltrados;

//Método Map.
var articulosMap = articulos.map(function(articulo) {
  return articulo.nombre;
});
//Muestra del resultado.
articulosMap;
