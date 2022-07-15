//Criar uma função que retorno um valor booleano
//informando se o número enviado como parâmetro é um número primo.

function numPrimo(x) {
    for (var i = 2; i * i <= x; i++)
        if (x % i === 0)
            return false;
    return x > 1;
}
console.log("esse numero eh primo? " + numPrimo(4));

// numeros primos 2, 3, 5, 7, 11, 13...
