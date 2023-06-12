//Crear un arreglo con 10 números cualquiera. Con un loop hacer que los números en posiciones pares pasen a ser 0 pero los de posiciones impares queden igual.


let arr = [1, 5, 8, 13, 17, 35, 42, 51, 59 ,63];
let i = 0;
while (i < arr.length) {
    if (i % 2 === 0) {
        arr[i] = 0;
    }
    i++;
}
console.log(arr);
