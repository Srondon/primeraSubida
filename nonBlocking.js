// --- Metodo promedio --- 
function promedio01 (n1, n2, n3){
    let result = (n1 + n2 + n3)/3;
    console.log('El promedio 01 es: ' + result);
}

// --- Metodo promedio --- 
let promedio02 = (n1, n2, n3) => {
    let result = (n1 + n2 + n3)/3;
    console.log('El promedio 02 es: ' + result);    
}

//--- OTRA FORMA DE ESCRIBIR METODOS FLECHA ---
let promedioFlechaLarga =(n1,n2,n3)=> {
setTimeout(function(){    
let result = (n1 + n2 + n3)/3;
console.log('El promedio FlechaLarga es:' + result);
console.log('Aparezco 2 segundos despues');
}, 2000); //Aqui le decimos que este proceso se demororia 2seg. (en codigo dice que 2mil mili segundos)
}

promedio01(4,1,5);
promedio02(4,5,4); 
promedioFlechaLarga(5,3,1);

/*
Los codigos se ejecutan de manera secuencial: Lo primero que va entrando, es lo primero que se va ejecutando
pero NO es necesario que se termine un proceso para pasar a otro por eso es que es ASINCRONICO.
Y gracias a esto, puede existir la concurrencia y puede trabajar con varios procesos de forma paralela pero
teniendo en cuenta que si los procesos si ingresan a ser analizados de forma secuencial el primero que  exista
es el primero que esta ingresando.
*/