/**
 * ✔ indexOf(elemento[, desde])

Busca la primera posición donde aparece un elemento.

Devuelve -1 si no lo encuentra.

Puede buscar desde un índice concreto.
 */
/*
function encontrarTodos(elto, matriz){
    let encontrados = [];
    let pos = matriz.indexOf(elto);
    while (pos != -1) {
        encontrados.push(pos);
        pos = matriz.indexOf(elto, ++pos);
    }
    return encontrados;
}
    */
    /* ✔ lastIndexOf() Igual que indexOf, pero buscando desde el final.*/


/**
 * 2. Filtrado (filter)

Permite obtener un nuevo array con los elementos que cumplen una condición.

function esPar(n) { return n % 2 == 0; }
let numerosPares = matriz.filter(esPar);


➡ No modifica el array original.

Métodos relacionados:

✔ some()

Devuelve true si al menos uno cumple la condición.

✔ every()

Devuelve true si todos los elementos cumplen la condición.
 */

/**
 * 3. Mapeo (map)

Transforma cada elemento y devuelve un nuevo array modificado.

function dobla(n) { return n * 2; }
let res = matriz.map(dobla);
 */
/*
4. Reducción (reduce)

Reduce un array completo a un único valor: una suma, máximo, promedio, etc.

let suma = arrayNotas.reduce((total, nota) => total += nota, 0);

let maxNota = arrayNotas.reduce((max, nota) => nota > max ? nota : max);
*/
/*flat convierte una matriz en un array plano */
