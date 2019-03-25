/*Aqui vimos la parte de - Require - */

let estudiante = {
    nombre: 'juan',
    edad: 25,  

    notas: {
        matematicas: 3,
        ingles: 4,
        programacion: 5
    }
//Hemos creado un objeto que tiene todos estos datos
};

let obtenerPromedio = (nota_uno, nota_dos, notaTres) => (nota_uno + nota_dos + notaTres)/3;

console.log(estudiante.nombre + 'tiene un promedio de ' + obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

module.exports = {
    estudiante,
    obtenerPromedio
};
