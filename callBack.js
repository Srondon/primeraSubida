
    /*
    Node.js es un lenguaje programado a eventos
    Cuando se hace una llamada a un procedimiento es cuando se ejecuta algo en Node.js
    */

let Promedio = (n1, n2, n3, callback)=>{
setTimeout(function() {
let resultado = (n1+n2+n3)/3; 
callback (resultado);  
//Esto aqui es para decir que me traiga el resultado SOLO cuando este listo  
}, 2000);
}

Promedio(4,2,5, function(resultado){
console.log(resultado);
})

/*Esta ultima linea se ejecuta CUANDO exista un resultado, es decir que 
cuando ese callback tenga como argumento el resultado significa que 
ya puedo imprimir por consola.

*/