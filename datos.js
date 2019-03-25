const estudiante01 = require ('./calculos');
/*Para saber que es un archivo que nosotrs hemos creado nosotros
le ponemos " ./ ""
*/

console.log(estudiante01.estudiante);
console.log("El promedio del estudiantes es: " + estudiante01.obtenerPromedio(estudiante01.estudiante.notas.matematicas,
    estudiante01.estudiante.notas.ingles, estudiante01.estudiante.notas.programacion));