//

var numeros = [800, 0, 650, -370, 10000, 8, -12560, 277, 400, -650];


function positivos(numero) {
    return (numero >= 0);
}
resultado = numeros.filter(positivos);

console.log(resultado);