// En este ejercicio, que guardaremos en un archivo listaDeInvitados.js, queremos que tomes una lista de nombres almacenados en un arreglo y los coloques en una lista de invitados. Pero no es tan fácil: no queremos dejar entrar a José y Sofía porque son codiciosos y groseros, ¡y siempre se comen toda la comida! Tenemos dos listas, una para admitir invitados y otra para rechazar invitados. La lista de personas es la siguiente: José, María, Juan, Andrés, Lionel, Sofía, Leandro y Emilia. Específicamente, queremos que:
// ● Escribas un bucle que itere desde 0 hasta la longitud del arreglo personas.
// Deberá comenzar con un inicializador de let i = 0; pero ¿qué condición de salida necesita?
// ● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es igual a "José" o "Sofía" usando una declaración condicional:
// - Si es así, concatene el elemento al arreglo de rechazados.
// - Si no es así, concatene el elemento al arreglo de admitidos.
// ● Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de invitados admitidos y otra para imprimir la lista de invitados rechazados:
// a. Para la lista de invitados admitidos deberás imprimir por consola un mensaje inicial que dirá: “La lista de invitados admitidos es:”, seguido por tantos párrafos como tenga el arreglo admitidos conteniendo los respectivos nombres de los invitados.

// b. Para la lista de invitados rechazados deberás imprimir por consola un mensaje inicial que dirá: “La lista de invitados rechazados es:”, seguido por tantos párrafos como tenga el arreglo rechazados conteniendo los respectivos nombres de los invitados.

let invitados = ["José", "María", "Juan", "Andrés", "Lionel", "Sofía", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];

for (let i = 0; i < invitados.length; i++) {

    if (invitados[i] === "José" || invitados[i] === "Sofía") {
        rechazados.push(invitados[i]);

    } else {
        admitidos.push(invitados[i]);
    }
}
console.log("La lista de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {
    console.log(admitidos[i]);
}
console.log("La lista de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
    console.log(rechazados[i]);
}

