//6. Imprimir solo los nombres que terminen con la letra "a"

const nombres = ['Carla', 'Pedro', 'Daiana', 'Ivan', 'Ivette', 'Mario', 'Vanesa'];
const nombresTerminanConA = nombres.filter(nombre => nombre.endsWith('a'));

nombresTerminanConA.forEach(element => console.log(element));
