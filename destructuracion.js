
const {estudiante, obtenerPromedio} = require ('./calculos');

console.log("El nombre del estudiante: " + estudiante.nombre);
console.log("El promedio del estudiantes es: " + obtenerPromedio(estudiante.notas.matematicas ,estudiante.notas.ingles, estudiante.notas.programacion));

let {nombre, edad: anos, notas: {matematicas, ingles, programacion}} = estudiante;
console.log('El nombre del estudiante es: ' + nombre)
console.log("El promedio del socito es: " + obtenerPromedio(matematicas, ingles, programacion));
console.log("La edad del socito: " + anos);


