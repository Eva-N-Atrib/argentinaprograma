//Continuando con lo anterior, tenemos una tabla de las temperaturas medias por mes de los doce meses en grados Fahrenheit; cómo hacemos para calcular el promedio anual en Celsius?

let gradosF = [47, 50, 53, 57, 61, 65, 70, 70, 66, 59, 52, 47];
let gradosC = 0;
let promedio = 0;
let suma = 0;
for (let i = 0; i < gradosF.length; i++) {
    gradosC = (gradosF[i] - 32) * (5/9);
    suma += gradosC;
    promedio = suma / gradosF.length;
}
console.log (`El promedio anual en grados Celsius es: ${promedio}`);



