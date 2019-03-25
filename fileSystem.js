const  {estudiante, obtenerPromedio} = require ('./calculos');
const fs = require('fs');
//Siempre se llama por comillas simples.


console.log("El nombre del estudiante: " + estudiante.nombre);
console.log("El promedio del estudiantes es: " + obtenerPromedio(estudiante.notas.matematicas ,estudiante.notas.ingles, estudiante.notas.programacion));

let {nombre, edad: anos, notas: {matematicas, ingles, programacion}} = estudiante;
console.log('El nombre del estudiante es: ' + nombre)
console.log("El promedio del socito es: " + obtenerPromedio(matematicas, ingles, programacion));
console.log("La edad del socito: " + anos);


let crearArchivo = (estudiante) => {
    texto = "el nombre del estudiante es: " + nombre + "\n " + 
    " ha obtenido un promedio de: " + obtenerPromedio(matematicas, ingles, programacion)

    fs.writeFile('promedio.txt', texto, (err) => {
    if(err) throw (err);
    console.log("Se ha creado el archivo correctamente.")
    });

}

crearArchivo(estudiante); 