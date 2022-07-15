// Retornar a maior string de um array

var forbesTop5 = ["Elon Musk", "Jeff Bezos", "Bernard Arnault & family", "Bill Gates", "Warren Buffet"];

var qtdstring = '';
for (var i = 0; i < forbesTop5.length; i++) {
    if (forbesTop5[i].length > qtdstring.length) {
        qtdstring = forbesTop5[i];
    }
}
console.log(qtdstring);
