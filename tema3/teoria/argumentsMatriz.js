/**
 * arguments contiene todos los valores pasados al llamarla.
 */
function suma() {
    console.log(arguments[0]); // primer argumento
    console.log(arguments.length); // número de argumentos
}
/**
 * arguments.length → cantidad de argumentos recibidos
 * arguments[i] → acceder a cada uno por índice
 * arguments.callee.length → número de parámetros definidos en la función
 */
// se puede pasar un arguments en un array real con. Importante: arguments NO funciona con Arrow Functions
let args = Array.from(arguments);

//Modificar arguments modifica los parámetros (excepto en modo estricto)
