// Leia 15 valores reais e calcule seu somatório utilizando
//a instrução do...while.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
var i = 0;
var soma = 0;
do {
    soma += numeros[i];
    i++;
} while (i < numeros.length);

console.log(soma);