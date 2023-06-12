//8. Imprimir todos las personas (nombre y apellido) cuyo nombre termine en "a" y cuyo apellido empiece con "G"

const nombres = ['Carla', 'Pedro', 'Daiana', 'Ivan', 'Ivette', 'Mario', 'Vanesa'];
const apellidos = ['Gomez', 'Gonzales', 'Hernandez', 'Suarez', 'Gimenez', 'Gomez', 'Mendez'];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].endsWith('a') && apellidos[i].startsWith('G')) {
        console.log(`${nombres[i]} ${apellidos[i]}`);
    }
}
