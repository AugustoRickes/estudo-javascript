var numeros = [8,6,-3,10,8,-12,2,4,-6];


function somar(total, elementos) {
    return total + elementos;

}
var soma = numeros.reduce(somar);
console.log(soma);