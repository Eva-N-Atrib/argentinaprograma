// PIEDRA-PAPEL-TIJERAS
// El objetivo de este práctico es desarrollar un programa sencillo en JavaScript que permite jugar
// al famoso juego de "Piedra, Papel o Tijeras" contra la computadora.
// Descripción:
// El juego de "Piedra, Papel o Tijeras" es un juego de manos en el que dos jugadores eligen entre
// tres opciones: piedra, papel o tijeras. Las reglas son las siguientes:
// - La piedra vence a las tijeras.
// - Las tijeras vencen al papel.
// - El papel vence a la piedra.
// El programa que desarrollarás permitirá al usuario jugar contra la computadora. La computadora elegirá una opción de forma aleatoria, y el usuario podrá ingresar su elección a través de la consola. El programa determinará el ganador y mostrará el resultado por pantalla.
// Pasos a seguir:
// 1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
// 2. Crea una función llamada obtenerJugadaComputadora que generará un número aleatorio entre 0 y 2 para representar las opciones:
// - 0 para "piedra", piedra vence a tijeras,
// - 1 para "papel", papel vence a piedra y
// - 2 para "tijeras", tijeras vence a papel.
// Siempre utilizando los valores de strings y no los valores númericos.

// Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
// numércios y los strings “piedra”, “papel” y “tijeras.
// Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera un número
// random.
// 3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
// elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
// Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
// valor por consola.
// 4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
// de la computadora y del usuario. Implementa las reglas del juego para determinar el
// ganador y retorna el resultado.
// 5. Llama a las funciones en el orden adecuado para ejecutar el juego:
// a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
// variable.
// b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
// c) Invoca la función determinarGanador pasando como argumentos las jugadas de
// la computadora y del usuario. Almacena el resultado en una variable.

// 6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del resultado:
//La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
// El resultado fue: [Empate | Gana la computadora | Gana el usuario].
// NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
// tres párrafos.
// EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el código para su correcta utilización.
// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
// juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
// el usuario gane una jugada y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.



let numAleatorio = Math.floor(Math.random() * 3);
function obtenerJugadaComputadora(numAleatorio) {
  if (numAleatorio === 0) {
    jugadaAleatoria = "Piedra";
  } else if (numAleatorio === 1) {
    jugadaAleatoria = "Papel";
  } else if (numAleatorio === 2) {
    jugadaAleatoria = "Tijeras";
  }
  return jugadaAleatoria;
}

const readlineSync = require("readline-sync");
let eleccion;

do {
  eleccion = readlineSync.question(
    "A jugar! \n" +
      "Las opciones disponibles son: \n" +
      "Piedra \n" +
      "Papel  \n" +
      "Tijeras \n" +
      " "
  );
  console.clear();
  console.log("Error, intenta otra vez. ¿Piedra, Papel o Tijeras?");
} while (
  eleccion !== "Piedra" &&
  eleccion !== "Papel" &&
  eleccion !== "Tijeras"
);
{
  console.clear();
}
function obtenerJugadaUsuario(eleccion) {
  return eleccion;
}
obtenerJugadaUsuario(eleccion);

function determinarGanador(jComputadora, jUsuario) {
  if (jComputadora === jugadaUsuario) {
    return "Empate";
  } else if (
    (jComputadora === "Piedra" && jUsuario === "Tijeras") ||
    (jComputadora === "Tijeras" && jUsuario === "Papel") ||
    (jComputadora === "Papel" && jUsuario === "Piedra")
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

let jugadaComputadora = obtenerJugadaComputadora(numAleatorio);
let jugadaUsuario = obtenerJugadaUsuario(eleccion);
let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log("La computadora eligió: %s.", jugadaComputadora);
console.log("El usuario eligió: %s.", jugadaUsuario);
console.log("El resultado fue: %s.", resultado);





