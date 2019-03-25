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

// --- Metodo promedio --- 
function promedio03 (n1, n2, n3){
    let result = (n1 + n2 + n3)/3;
    console.log('El promedio 03 es: ' + result);
}

//--------------------------------- Funciones Flecha ---------------------------------------

// --- Funcion flecha ---
let promedioFlecha = (n1, n2, n3) =>console.log('El promedio flecha es: ' +(n1 + n2 + n3)/3);    


//--- OTRA FORMA DE ESCRIBIR METODOS FLECHA ---
let promedioFlechaLarga =(n1,n2,n3)=> {
let result = (n1 + n2 + n3)/3;
console.log('El promedio FlechaLarga es:' + result);
}


promedio01(5,5,5);
promedio02(1,1,1);  
promedio03(4,3,5);
promedioFlecha(3,4,5);
promedioFlechaLarga(5,3,1);

