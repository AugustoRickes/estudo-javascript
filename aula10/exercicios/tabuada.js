// gerar uma tabuada completa

function gerarTabuada(n){
    for( var i = 1; i<=10; i++){
        var linha = n + " * " + i + " = " + (n * i);
        console.log(linha);
    }

}
for (var n = 1; n <=10; n++){
    gerarTabuada(n)
    console.log("------------");
}
