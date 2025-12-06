const concatCadenas = (a,b,c) => a + b + c;

let concatAbc = concatCadenas("a", "b", "c");
console.log("concatAbc :" + concatAbc);
let concatAb = concatCadenas("a", "b");
console.log("concatAb :" + concatAb);// si ejecutas pone abundefined eso es porque a la hora de ejecutar la funcion tu le pasas 2 pqrametros 
//pero tiene 3 parametros con lo cual por eso pone undefined


console.log();
/*con esto lo que haces es asignarle valores por defecto  */
function test(a, b) {
a = a || 0; //valor por defecto: 0
b = b || true; //valor por defecto: true
}
