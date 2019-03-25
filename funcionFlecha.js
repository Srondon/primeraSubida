
// --- Funcion flecha ---
let promedioFlecha = (n1, n2, n3) =>console.log('El promedio flechaCorto es: ' +(n1 + n2 + n3)/3);    


//--- OTRA FORMA DE ESCRIBIR METODOS FLECHA ---
let promedioFlechaLarga =(n1,n2,n3)=> {
let result = (n1 + n2 + n3)/3;
console.log('El promedio FlechaLarga es:' + result);
console.log("Aqui hace otro proceso");
}

promedioFlecha(5,1,1);
promedioFlechaLarga(3,4,1);

