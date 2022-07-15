var numeros = [8,6,-3,10,8,-12,2,4,-6];

function isNegativo(numero) {
    return numero < 0;
}


function isPar(numero) {
    return (numero % 2 ==0);
}
function isImpar(numero) {
    return !(numero % 2 ==0);
}

var resultado = numeros.filter(isNegativo).every(isNegativo);
//console.log(resultado);

resultado = numeros.every(isPar);
//console.log(resultado);

resultado = numeros.some(isImpar);
console.log(resultado);