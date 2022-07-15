// 3.  Ler um conjunto de 10 números, e filtre os números que forem menor do que 20. Mostre na tela o vetor filtrado.
var toneladas = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function lowerthen20ton(tons) {
    return (tons < 20);
}
toneladas = toneladas.filter(lowerthen20ton);
console.log(toneladas);