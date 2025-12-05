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
//console.log("extLet:", extLet);
console.log("extVar:", extVar);
console.log("intLet:", intLet);
console.log("intVar:", intVar);
}
console.log("Fuera del bloque");
console.log("extLet:", extLet);
console.log("extVar:", extVar);
console.log("intVar:", intVar);
//console.log("intLet:", intLet);

/* CONVERSION DE TIPOS */ 

let animal = "Águila"; // String
let numPatas = 2; // Number
console.log (animal + numPatas);
// muestra Águila2

console.log();
console.log();

/**
 * ▪ Boolean(valor): convierte el valor booleano.
 * ▪ String(valor): convierte el valor en una cadena de texto. Otra opción es realizar una
 * concatenación del valor con una cadena vacía.
 * ▪ Number(valor): convierte el valor en un número. Si el valor no es válido, el resultado
 * será NaN (no es un número).
 * ▪ parseInt(valor): convierte el valor en un número entero, aunque se encuentre un
 * separador decimal.
 * ▪ parseFloat(valor): convierte el valor en un número real.
 * 
 */

let cadena = "3.1415";
let nombre = "42";
let nom = "Joan";
let aprobado = true;
// Conversiones a booleano
console.log(Boolean(cadena)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
// Conversiones a cadena
console.log(String(nombre)); // "42"
console.log(String(nombre) + nombre); // "4242"
console.log(String(aprobado)); // "true"
// Conversiones a números
console.log(Number(nom)); // NaN, no es un número
console.log(Number(cadena) * 2); // 6.283
console.log(Number(aprobado)); // 1
console.log(parseInt(cadena)); // 3
console.log(parseFloat(cadena)); // 3.1415


/* LITERALES*/

/**
 * Esto es el uso ``que con esas comillas podemos introducir código js dentro de la cadena
 * ejemplo abajo
 */

const libs = ["React", "Vue", "Angular"];
console.log(`Este curso trata de ${libs[0]}`);

console.log();
console.log();


const l = libs.length;
console.log(`
${l > 2 ? `Estas ${l} bibliotecas` : "Esta biblioteca"}:
${libs.join(", ")}
`);


/**
 * OPERADORES LOGICOS:
 * + SUMA
 * - RESTA
 * * MULTIPLICACION 
 * / DIVISION
 * % RESTO
 * ++ INCREMENTO DE 1
 * -- DECREMENTO DE 1
 * =  X = Y
 * += X = X+Y
 * -= X = X-Y
 * *= X = X*Y
 * /= X = X/Y
 * %= X = X%Y
 * == IGUAL QUE
 * === IGUAL A VALOR O TIPO
 * != DISTINTO QUE
 * !== DISTINTO VALOR O DISTINTO TIPO
 * > MAYOR QUE
 * < MENOR QUE
 * >= MAYOR O IGUAL QUE
 * <= MENOR O IGUAL QUE
 * ? OPERADOR TERNIARIO
 * ?? COALSENCIA NULA
 * || OR LOGICO 
 * && AND LOGICO
 * ||= ASIGNACION X =X || Y
 * &&= ASIGNACION X=X && Y
 * ??= ASIGANCION X=X ?? Y
 */

/*Para  comparar sin diferneciacion de mayusculas y minusculas*/
if ("JavaScript".toLowerCase() == "javascript".toLowerCase());
if ("JavaScript".toUpperCase() == "javascript".toUpperCase());

/**
 *  LOCALE COMPARE
 * Esto hace me diga cuantos caracteres son iguales y cuantos no
 * pertence a String
 */

console.log("cote".localeCompare("còte")); //Devuelve -1



