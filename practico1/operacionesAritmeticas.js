// PARTE 2: COMANDOS BÁSICOS
// 3. Operadores aritméticos:
// a. Crea cuatro variables que contengan valores numéricos.
// b. Suma las dos primeras variables y guarda el resultado en otra variable.
// c. Resta la cuarta variable de la tercera y almacena el resultado en otra
// variable.
// d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
// resultado en una variable llamada resultadoFinal. El producto debe ser
// 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
// e. Escribe un cálculo que verifique si resultadoFinal es un número par.
// Almacene el resultado en una variable llamada esPar.
// f. Imprima por consola un mensaje con el siguiente formato:
// “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
// // respuesta a verificar si el resultado final es par es: [esPar]”

let n1 = 1, n2 = 3, n3 = 4, n4 = 15;
let suma = n1 + n2;
let resta = n4 - n3;
let resultadoFinal = suma * resta;
let esPar;
if ((resultadoFinal % 2) === 0) {
   esPar = true;
}
console.log(`Mis variables iniciales fueron: ${n1}, ${n2}, ${n3}, ${n4}. La respuesta a verificar si el resultado final es par es: ${esPar}`);