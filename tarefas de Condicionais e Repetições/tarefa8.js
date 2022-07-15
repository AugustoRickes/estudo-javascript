//Calcular a média de todos os números de um array
var media = [9, 7, 8];
var soma = 0;
var media = mediaNotas(media);

function mediaNotas(media) {
    var x = media.length;
    for (var i = 0; i < x; i++) {
        soma += media[i];
    }
    return soma / x;
}
console.log( "sua media: " + media);

