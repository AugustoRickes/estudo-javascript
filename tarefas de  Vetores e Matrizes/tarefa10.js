// 10.  Faça um programa para ler a nota da prova de 7 alunos e armazene num vetor, calcule e imprima a media geral.
var notasAlunos = new Array(10, 8, 5, 7, 2, 9, 8); //49
var soma = 0;
console.log(notasAlunos);

for (var i = 0; i < notasAlunos.length; i++) {
    soma += notasAlunos[i]
}
console.log(soma); //ok
resultado = soma / 7;
console.log("a media geral eh: " + resultado);