//Coerción 
var a = 4 + "7";
typeof a;
/*
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
*/
//Coerción implícita
var b = 4 * "7";
typeof b;

//Coerción explicita
var a = 20;
var b = a + "";
console.log(b);
//Realizando coerción explicita a tipo string.
var c = String(a);
console.log(c);
//Realizando coerción a tipo number.
var d = Number(c);