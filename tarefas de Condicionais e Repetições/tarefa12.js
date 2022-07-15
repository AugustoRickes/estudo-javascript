// Calcular o fatorial de um numero;
//fatorial de 7
//7! = 7· 6 · 5 · 4 · 3 · 2 · 1 = 5040
var fatorial = 7;
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);