/**
 * 
 * CONDICIONALES SIMPLES 
 * EL IF
 * IF-ELSE
 * 
 */

const prompt = require('prompt-sync')();  // ← IMPORTANTE
//eso se pone si quiero que me funcione el prompt
/*
let nombre;
let nota;

nombre = prompt('Escriba nombre:', '');
nota = Number(prompt('Escriba su nota:', ''));

if (nota >= 5) {
  console.log(`${nombre} está aprobado con un ${nota}`);
} else {
  console.log(`${nombre} está suspendido con un ${nota}`);
}

console.log();
console.log();
*/

/* introduces los numeros y luego te dice cual es mayor 
let num1,num2;
num1=prompt('Introduce el primer número:','');
num2=prompt('Introduce el segundo número:','');
num1=parseInt(num1);//lo pasa a numero el parseInt
num2=parseInt(num2);
if (num1 > num2)
console.log('el mayor es '+num1);
else
console.log('el mayor es '+num2);

console.log();
console.log();
*/

/*manera mala de hacerlo 
let nota1, nota2, nota3;
nota1=prompt('Introduce 1ra. nota:','');
nota2=prompt('Introduce 2da. nota:','');
nota3=prompt('Introduce 3ra. nota:','');
//Se convierten los 3 string en enteros
nota1=parseInt(nota1);
nota2=parseInt(nota2);
nota3=parseInt(nota3);
let pro;
pro = (nota1 + nota2 + nota3) / 3;
/*
if (pro >= 9){
console.log('Sobresaliente');
}
else{
if (pro>=7)
console.log('Notable');
else{
if (pro>=5)
console.log('Aprobado');
else
console.log('Suspenso');
}
}
*/

/*MANERA BUENA DE EXPRESAR EL ELSE IF */
/*
if (pro >= 9)
console.log('Sobresaliente');
else if (pro>=7)
console.log('Notable');
else if (pro>=5)
console.log('Aprobado');
else
console.log('Suspenso');
*/
/* SWITCH */



/*
let valor;
valor = prompt('Ingrese un valor comprendido entre 1 y 5:','');
//Se convierte a entero
valor = parseInt(valor);
switch (valor){
case 1:
console.log('uno');
break;
case 2:
console.log('dos');
break;
case 3:
console.log('tres');
break;
case 4:
console.log('cuatro');
break;
case 5:
console.log('cinco');
break;
default:
console.log('debe ingresar un valor comprendido entre 1 y 5.');
}
*/
/*VALORES TRULY Y FALSY EN ESTE CASO SALDRIA 
VERDADERO PORQUE V LO IDENTIFICA COMO UNA CADENA CON LO CUAL HACE QUE EL IF
LO ASUMA COMO BOOLEAN PARA PODER EJECUTARSE EL IF SI NO TUVIESE NADA DENTRO SALDRIA FALSO*/ 

/*
let v = "";
if (v)
console.log("verdadero");
else
console.log("falso");
*/


/*BUCLE WHILE */ 
/* ESTO SE VA A IMPRIMIR 100 VECES
let x;
x = 1;
while (x <= 100) {
console.log(x);
x++;
}
*/

/* 
DO WHILE
*/
/*
let valor;
do {
valor = prompt('Ingrese un valor entre 0 y 999:','');
valor = parseInt(valor);
if (valor<0 || valor >999 || isNaN(valor))
{
console.log('El número ', valor,' no está en el rango elegido (0,999). El programa terminará.');
}
else if(valor<10)
console.log('El valor ',valor,' introducido tiene 1 digito');
else if (valor<100)
console.log('El valor ',valor, ' introducido tiene 2 digitos');
else
console.log('El valor ',valor,' introducido tiene 3 digitos');
console.log('<br />');
}
while(valor>0 && valor<=999);
*/



/* BUCCLE FOR*/
/*
let i = 0;
let res = "";
for (; i< 10; i++){
res += i
}
*/
/*
FOR IN Y FOR OF
*/

/* EL FOR OF RECORRE VALORES 
let frutas = ["manzana", "pera", "uva"];

for (let fruta of frutas) {
    console.log(fruta);
}
*/

/*EL FOR IN RECORRE INIDICES O CLAVES*/
/*INIDICES
let frutas = ["manzana", "pera", "uva"];

for (let indice in frutas) {
    console.log(indice);
}
*/
/*CLAVES
let persona = { nombre: "Ana", edad: 20 };

for (let clave in persona) {
    console.log(clave); 
}
*/

/* TRY CATCH*/
/* El try seria algo que puede fallar y el catch solo se ejecuta si hay error en la seccion de try
try {
    let numero = Number("Hola"); // No es número → será NaN
    if (isNaN(numero)) throw "No has introducido un número válido";
}
catch (error) {
    console.log("Error: " + error);
}
    */