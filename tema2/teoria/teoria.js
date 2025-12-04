var numero1;
var literal1, literal2;
var numero3 = 8;
var numero4 = 3, numero5 = 6;
numero1 = 24;
numero1;
numero1 += 3;

/**
 * 
 * undefined: variable a la que no se le ha asignado ningún valor o no declarada.
 * boolean (booleano): cierto o falso. Ejemplo: true.
 * number: números enteros y reales, incluyendo algunos valores especiales como
 * infinity. Ejemplo: 3.1416
 * string: cadenas de texto. Ejemplo: "abcd"
 * bigInt: permite operar con números enteros de tamaño arbitrario, no está limitado el
 * tamaño como ocurre en el tipo number. Hay que añadir n al final de un número para
 * convertirlo en bigInt
 * symbol
 * null
 * object
 */


/* el type of devuelve de que tipo es la variable como en los ejemplos de debajo */
console.log(typeof "abc"); // string (primitivo)
console.log(typeof String("abc")); // string
console.log(typeof new String("abc")); // object
console.log(typeof (new String("abc")).valueOf()); // string
console.log();
console.log();
/* con el ejemplo de abajo puedes cambiar de tener un number a un  string */

var longitud = 10;
console.log(typeof(longitud));
longitud = "10";
console.log(typeof(longitud));

console.log();
console.log();


/* let solo puede estar disponible dentro del bloque en el que se encuentra mientras que var en todos lados */ 
let extLet = 1;
var extVar = 1;
if (true) {
let intLet = 1;
var intVar = 1;
console.log("Dentro del bloque");
console.log("extLet:", extLet);
console.log("extVar:", extVar);
console.log("intLet:", intLet);
console.log("intVar:", intVar);
}
console.log("Fuera del bloque");
console.log("extLet:", extLet);
console.log("extVar:", extVar);
console.log("intVar:", intVar);
console.log("intLet:", intLet);

