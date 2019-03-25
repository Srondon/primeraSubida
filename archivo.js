/* La palabra argv, puede ser cualquier nombre, solo que se recomienda ese 
para un mayor entendimiento. */

const opciones = {
    matematicas : {
        default: 0,
        alias: 'm'
    },
    ingles : {
        default: 0,
        alias: 'i'
    },
    programacion : {        
        demmand : true,
        alias: 'p'
    }
}

const argv = require('yargs')
    .command ("promedio", "Calcular el promedio", opciones)
    .argv

console.log(argv.matematicas);  
//console.log("Nombre del estudiante: " + argv.nombre);
console.log(argv);
console.log("El promedio es" + (argv.m + argv.i + argv.p)/3);