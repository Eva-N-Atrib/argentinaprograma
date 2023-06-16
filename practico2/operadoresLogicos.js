// 3. Escribe un programa que solicite al usuario ingresar un número entero. Guardar el programa en un archivo operadoresLogicos.js. A continuación, evalúa las siguientes condiciones:
// - Si el número es positivo y par, muestra por consola el mensaje: "El número es positivo y par".
// - Si el número es positivo e impar, muestra por consola el mensaje: "El número es positivo e impar".
// - Si el número es negativo, muestra por consola el mensaje: "El número es negativo".
// - Si el número es cero, muestra por consola el mensaje: "El número es cero".
// NOTA: utilizar los operadores lógicos.

const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingresa un numero entero: ');
    if (num > 0 && num % 2 === 0) {
    console.log("El número es positivo y par");
}
    else if (num > 0 && num % 2 !== 0) {
    console.log("El número es positivo e impar");
}
    else if (num < 0) {
    console.log("El número es negativo");
}
    else if (num == 0) {
    console.log("El número es cero");
}
    else {
    console.log("El número ingresado no es válido");
}
