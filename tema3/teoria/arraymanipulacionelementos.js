let ejemplo=[0,1,2,3];
console.log(ejemplo.join(" - - "));
// Construye una cadena con cada elemento separado por esos caracteres.

//join introduce el elemento que le pongas entre los elementos del array
/*
let ejemplo2=[0,1,2,3];
let otraMatriz = ejemplo;
otraMatriz[1]=4;
console.log(ejemplo2[1]);
*/
//concat permite concatenar otras matrices o más elementos.

/*
let ejemplo3=[0,1,2,3];
let otraMatriz2 = ejemplo3;
otraMatriz2[1]=4;
console.log(ejemplo3[1]);

*/
//splice corta una matriz y asigna sus elementos cortados a otra diferente

let ejemplo4=[0,1,2,3,4,5,6,7];
let res = ejemplo4.splice(3,2); // Elemento inicial de índice 3 y número de elementos a quitar. 
console.log(res);