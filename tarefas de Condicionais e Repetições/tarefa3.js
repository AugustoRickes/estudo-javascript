// Faça um programa onde o usuário possa escolher qual a tabuada que se deseja imprimir. 
//Exiba a tabuada desse número de 1 a 10.



function gerarTabuada(x) {
    for (var i = 1; i <= 10; i++) {
        var linha = x + " * " + i + " = " + (x * i);
        console.log(linha);
    }
}
console.log(gerarTabuada(8));

// porque esta dando undefined?