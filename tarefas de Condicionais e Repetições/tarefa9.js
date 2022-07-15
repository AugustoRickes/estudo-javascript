//Localizar o maior valor dentro de um array de números
var numeros = [1, 2, 31, 44, 5, 6, 70, 8, 9];
var maior = 0;
for (i = 0; i < numeros.length; i++) {
    if (maior < numeros[i]) {
        maior = numeros[i];
    }
}
console.log(maior);