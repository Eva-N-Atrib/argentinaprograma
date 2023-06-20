// Después de completar con éxito las tareas anteriores, te quedarán dos listas de nombres, los admitidos y los rechazados pero estarán desordenados. El desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los nombres de manera ordenada alfabéticamente. Deberás agregar la palabra “ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos deberás imprimir: “La lista ordenada de invitados admitidos es:”.

let invitados = [
  "José",
  "María",
  "Juan",
  "Andrés",
  "Lionel",
  "Sofía",
  "Leandro",
  "Emilia",
];
let admitidos = [];
let rechazados = [];

for (let i = 0; i < invitados.length; i++) {
  if (invitados[i] === "José" || invitados[i] === "Sofía") {
    rechazados.push(invitados[i]);
  } else {
    admitidos.push(invitados[i]);
  }
}

admitidos.sort();
rechazados.sort();

console.log("La lista ordenada de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {
  console.log(admitidos[i]);
}
console.log("La lista ordenada de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}