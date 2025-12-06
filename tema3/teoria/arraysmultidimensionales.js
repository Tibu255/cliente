/**
 * Un array multidimensional es simplemente un array que contiene otros arrays.
 * El caso más común es el de dos dimensiones: una matriz con filas y columnas.
 */

let dimension1 = ["00", "01", "02"];
let dimension2 = ["10", "11", "12"];

let matriz2d = [dimension1, dimension2];
console.log(matriz2d[0][2]); // 02 el primer indice seleciona la fila(array interno) y
//  el segundo inidice selecciona el elemento de la fila

/**
 * JavaScript permite matrices donde las filas tienen longitudes distintas:
 */
let dimension11 = ["00", "01", "02"];
let dimension22 = ["10", "11"];

let matriz2d2 = [dimension11, dimension22];

console.log(matriz2d2[1][1]); // 11

/**
 * matrices asociativas
 * no es realmente un array multidimensional, pero se comporta como una tabla de claves con arrays.
 */ 
let coches = [];
coches["Alemanes"] = ["Audi", "Volkswagen", "Porsche"];
coches["Franceses"] = ["Renault", "Citroen"];