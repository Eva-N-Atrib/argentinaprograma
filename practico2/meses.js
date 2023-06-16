// 2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es marzo, etc. Deberá guardar esta información en alguna de las estructuras ya vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y consistirá de imprimir por consola la cantidad de días que tiene el mes ingresado bajo el siguiente formato: "La cantidad de dias del mes de [mes] es [cantidadDeDias] "Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad de dias del mes de enero es 31”.
//NOTAS:
// ● Nota que el valor de [mes] no es el numero ingresado si no su correspondiente almacenado en la estructura de datos elegida.
// ● Para el alcance de este ejercicio, podemos pensar que febrero siempre tiene 28 días.

const readlineSync = require('readline-sync');
const num = readlineSync.question('Ingresa un numero del 1 al 12: ');

let mes = [ " ", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
     if (num == "1" || num == "3" || num == "5" || num == "7" || num == "8" || num == "10" || num == "12") {
        {cantidadDeDias = "31"}
        console.log("La cantidad de días del mes de",  mes[num], "es", cantidadDeDias);
    }
    else if (num == "2") {
        {cantidadDeDias = "28"}
        console.log("La cantidad de días del mes de",  mes[num], "es", cantidadDeDias);
    }
    else if (num == "4" || num == "6" || num == "9" || num == "11") {
        {cantidadDeDias = "30"}
        console.log("La cantidad de días del mes de",  mes[num], "es", cantidadDeDias);
    }
    else {
    console.log('El número ingresado no es válido, intente de nuevo.');
    }
