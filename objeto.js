//Objetos en JS

//Creando el objeto
//var objeto = {}; => Sintaxis

//Objeto con tres propiedades.
var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function(){
    console.log(`Auto: ${this.modelo} ${this.annio}`);
  }
};

//Imprimir los detalles seleccionado., hacer el llamado de la función de manera normal.
miAuto.detalleDelAuto();

//Imprime todo el objeto
miAuto;

//Acceder solo a ciertos elementos del objeto
miAuto.marca;
miAuto.annio;

