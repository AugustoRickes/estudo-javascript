// 7.  Escreva um programa que leia 10 números inteiros e os armazene em um vetor. E adicione 20% a cada elemento do vetor.

var salarios = [2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 12522];

function mais20(aumento) {
    return (aumento * 1.2).toFixed(2);
}
console.log(salarios);
salarios = salarios.map(mais20);
console.log(salarios);