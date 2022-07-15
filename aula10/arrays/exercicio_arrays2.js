// Faça um programa que receba 6 numeros inteiros e mostre:
//  Os numeros pares digitados;
//  A soma dos numeros pares digitados;
//  Os numeros ımpares digitados;
//  A quantidade de numeros ımpares digitados;

var numeros = [45, 12, 78, 58, 36, 65];

var numerosPares = [];
var SomaPares = 0;
var numerosImpares = [];
var qtnImpares = 0;

for (var numero of numeros) {
    if (numero % 2 == 0) {
        numerosPares.push(numero);
        SomaPares += numero;
    } else {
        numerosImpares.push(numero);
        qtnImpares++;
    }
    var message = `Numeros pares: ${numerosPares.join(", ")}
    Soma dos pares: ${SomaPares}
    numeros impares: ${numerosImpares.join(", ")}
    Quantidade impares: ${qtnImpares}`;
}
    console.log(message)