/* 1 – Um funcionário de uma empresa recebe aumento salarial
anualmente. Sabe-se que:

• Esse funcionário foi contratado em 2021, com salário inicial de R$1200,00;

• Em 2022 recebeu aumento de 1,5% sobre seu salário inicial;

• A partir de 2023 (inclusive), os aumentos salariais sempre corresponderam ao
dobro do percentual do ano anterior
Faça um programa que determine o salário atual desse
funcionário.*/

var salario = 1200;
var taxa = 1.5;
var arrAno = [];
for (ano = 2021; ano <= 2023; ano++) {
    arrAno.push(ano);
}

function Aumento() {
    for (i = 0; i <= (2023 - 2021); i++) {
        console.log("em " + arrAno[i] + " o salario foi de R$ " + salario);
        var salarioComAumento = salario * (1 + (taxa / 100));
        salario = salarioComAumento.toFixed(2);
        taxa = taxa * 2;
    }
}
console.log(Aumento());