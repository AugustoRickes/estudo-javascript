//criar funcao para sortear os numeros
function sortear() {
    return Math.round(Math.random() * 10);
}
// criar funcao dpara sortear a quant de numeros 
function sortearQuantidade(quantidade) {
    // array para guardar a quantidade de numeros
    var bilhete = [];
    var contador = 1;
    while (contador <= quantidade) {
        var contadorAleatorio = sortear();
        var achou = false;
        if (contadorAleatorio !== 0) {
            for (var posicao = 0; posicao < bilhete.length; posicao++) {
                if (bilhete[posicao] == contadorAleatorio) {
                    achou = true;
                    break;
                }
            }
            //sorteia mais um numero e adiciona ao bilhete
            if (achou == false) {
                bilhete.push(contadorAleatorio);
                contador++;
            }
        }
    }
    return bilhete;
}
var meuBilhete = sortearQuantidade(9);
console.log(meuBilhete);