//b. Solicite al usuario ingresar un número. Si el número es positivo, muestra por consola el mensaje: "El numero es positivo". Si el número es igual a cero, muestra por consola el mensaje: "El numero es cero". Si el número es negativo, muestra por consola el mensaje: "El numero es negativo".

const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingresa un numero: ');
console.log('El número elegido es: %s', numero);
    if (numero > 0) {
    console.log('El número es positivo');
}
    else if (numero == 0) {
    console.log('El número es cero');
}
    else {
    console.log('El número es negativo');
}


