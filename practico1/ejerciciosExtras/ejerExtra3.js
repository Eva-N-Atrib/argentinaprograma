//Crear un arreglo con 5 números cualquiera. Hacer con un loop que todos los elementos del arreglo pasen a ser 0.

let arr = [1, 2, 3, 4, 5];
let i = 0;
while (i < arr.length) {
    arr[i] = 0;
    i++;
}
console.log(arr);
