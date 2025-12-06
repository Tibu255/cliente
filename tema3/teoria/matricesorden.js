/**
 * sort() ordena la matriz de menor a mayor
 * reverse() hace que la matriz se ponga de forma inversa
 * 
 */
let frutas = ["Naranja", "Pera", "Melocotón", "Albaricoque", "Uva"]
function comparerCadenaLongitud(f1, f2){
if (f1.length > f2.length)
return 1;
else if (f1.length < f2.length)
return -1;
else
return 0;
}
frutas.sort(comparerCadenaLongitud);